# adenexus.com 联系表单后端技术方案

> **项目**: adenexus.com 联系表单后端实现  
> **目标**: 安全、合规、可靠地接收全球客户咨询  
> **合规框架**: Singapore PDPA + EU GDPR + 数据主权要求  
> **版本**: v1.0  
> **日期**: 2026-02-26  
> **最后更新**: 2026-02-26  
> **适用团队**: Frontend Dev, Backend Dev, DevOps, Legal

---

## 1. 需求概述

### 1.1 功能需求

| 功能 | 详细要求 |
|------|----------|
| **表单字段** | `Name*`, `Company*`, `Email*`, `Region*` (Dropdown: NA/EU/ME/SE Asia/Others), `Message*`, `[✓] Privacy Policy 同意*` |
| **前端验证** | 必填字段实时校验，邮箱格式校验，Region 自动检测（基于时区，可手动覆盖） |
| **后端验证** | 二次校验 + 防注入 + 防 XSS + 防垃圾提交（honeypot + rate limit） |
| **数据流向** | 用户提交 → API Gateway → Lambda 验证 → 区域路由存储 + 邮件通知 → 脱敏响应 |
| **通知机制** | 提交成功后，自动发送通知邮件至 `contact@adenexus.com`，含摘要信息（脱敏） |
| **用户反馈** | 提交成功重定向至 `/thank-you` 页，失败返回友好错误提示（无技术细节泄露） |

### 1.2 合规与安全需求

| 需求 | 实现要求 |
|------|----------|
| **数据主权** | 用户选择的 Region 决定数据存储位置：NA→us-east-1, EU→eu-west-1, ME/SE Asia→ap-southeast-1 (Singapore) |
| **禁止中国存储** | 所有数据（含日志）**严禁**存储/传输/备份至中国大陆基础设施 |
| **加密传输** | 前端→后端强制 HTTPS (TLS 1.3)，后端→存储自动加密 (AES-256) |
| **GDPR/PDPA 支持** | 提供 `/api/data-request` 端点，支持访问/删除/导出请求，验证身份后执行 |
| **日志脱敏** | CloudWatch Logs 自动过滤 email/phone 等 PII 字段，保留审计所需最小信息 |
| **数据保留** | 非客户提交记录 TTL 自动删除（24 个月），客户记录按合同保留（可配置） |

### 1.3 非功能需求

| 需求 | 指标 |
|------|------|
| **可用性** | 99.9% 月度可用性（SLA） |
| **响应时间** | P95 < 500ms (Lambda 冷启动优化) |
| **防垃圾** | 拦截 ≥95% 自动化垃圾提交（honeypot + rate limit + 简单 ML 可选） |
| **可维护性** | 配置可改（接收邮箱、区域映射）无需代码部署，日志可查，告警可达 |
| **成本** | 初期 (<10K 提交/月) 月成本 < $5 USD |

---

## 2. 推荐技术方案

### 方案 A: AWS Serverless (推荐 ✅)

#### 2.1 架构图

```
用户浏览器
    │
    ▼
CloudFront (WAF 过滤 + 全球加速)
    │
    ▼
API Gateway (REST API, CORS enabled)
    │
    ▼
Lambda (Node.js 18.x)
    ├── 1. 基础验证 (字段/格式)
    ├── 2. 防垃圾 (honeypot + rate limit + IP 黑名单)
    ├── 3. 区域路由 (Region → DynamoDB Endpoint)
    ├── 4. 存储 (DynamoDB, 加密 + TTL)
    ├── 5. 通知 (SES, 脱敏模板)
    └── 6. 响应 (脱敏成功消息)
    │
    ▼
├─→ DynamoDB (按区域分表/分区键)
├─→ Amazon SES (通知邮件)
├─→ CloudWatch Logs (脱敏审计日志)
└─→ CloudWatch Metrics (监控指标)
```

#### 2.2 优势分析

| 优势 | 说明 |
|------|------|
| ✅ 完全合规可控 | 数据区域可精确配置，符合 PDPA/GDPR 数据主权要求 |
| ✅ 架构一致性 | 与 adenexus 主站 AWS Singapore 部署架构无缝集成 |
| ✅ 成本极低 | 按量付费，初期 <10K 请求/月 成本 ≈ $1-2/月 |
| ✅ 原生安全 | IAM 最小权限 + VPC 可选 + 加密默认开启 |
| ✅ 易于扩展 | 后续可增加 webhook、CRM 集成、AI 垃圾检测等模块 |

#### 2.3 核心实现代码 (Lambda Node.js)

```javascript
// index.js - Lambda 入口函数
const AWS = require('aws-sdk');
const crypto = require('crypto');

// 配置 (建议从 SSM Parameter Store 读取)
const CONFIG = {
    notifyEmail: process.env.NOTIFY_EMAIL || 'contact@adenexus.com',
    regionEndpoints: JSON.parse(process.env.DB_REGIONS || '{}'),
    defaultRegion: 'ap-southeast-1',
    rateLimitWindow: 24 * 60 * 60 * 1000, // 24 小时
    rateLimitMax: 10 // 每 IP 每日最多 10 次
};

// 简单内存 rate limit (生产环境建议用 DynamoDB/Redis)
const rateLimitStore = new Map();

exports.handler = async (event) => {
    // CORS 预检
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: getCORSHeaders(), body: '' };
    }

    try {
        const submission = JSON.parse(event.body);
        const clientIP = event.requestContext.identity.sourceIp;

        // 1. 基础验证
        const validation = validateSubmission(submission);
        if (!validation.valid) {
            return respond(400, { error: validation.message });
        }

        // 2. 防垃圾检查
        if (submission.website_field) { // honeypot
            return respond(200, { message: 'Thank you.' }); // 静默成功，避免泄露
        }
        if (isRateLimited(clientIP)) {
            return respond(429, { error: 'Too many requests. Please try later.' });
        }

        // 3. 区域路由
        const storageRegion = CONFIG.regionEndpoints[submission.region] || CONFIG.defaultRegion;
        const dynamodb = new AWS.DynamoDB.DocumentClient({ region: storageRegion });

        // 4. 准备存储记录 (脱敏 + 元数据)
        const record = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            region: submission.region,
            nameHash: hashPII(submission.name), // 仅存哈希用于去重
            company: submission.company,
            emailHash: hashPII(submission.email),
            messagePreview: submission.message.substring(0, 100) + '...',
            ipAddress: anonymizeIP(clientIP), // 脱敏 IP
            consent: !!submission.privacy_consent,
            ttl: Math.floor(Date.now() / 1000) + 24 * 30 * 60 * 60 // 24 个月 TTL
        };

        // 5. 并行存储 + 通知
        const [storeResult, emailResult] = await Promise.all([
            dynamodb.put({
                TableName: process.env.FORM_SUBMISSIONS_TABLE,
                Item: record
            }).promise(),
            sendNotificationEmail(CONFIG.notifyEmail, submission)
        ]);

        // 6. 记录审计日志 (脱敏)
        console.log(JSON.stringify({
            event: 'form_submission',
            id: record.id,
            region: record.region,
            timestamp: record.timestamp
            // 注意: 不记录 PII
        }));

        // 7. 更新 rate limit
        updateRateLimit(clientIP);

        // 8. 脱敏响应
        return respond(200, { 
            message: 'Thank you. We will contact you within 2 business days.',
            referenceId: record.id.substring(0, 8) // 短 ID 供用户查询
        });

    } catch (error) {
        console.error('Form submission error:', error);
        return respond(500, { error: 'Submission failed. Please try again.' });
    }
};

// 辅助函数 (validateSubmission, isRateLimited, hashPII, anonymizeIP, sendNotificationEmail, respond, getCORSHeaders) 略
// 实际实现需补充完整错误处理与日志
```

#### 2.4 基础设施即代码 (Terraform 片段)

```hcl
# main.tf - 核心资源定义
provider "aws" {
  region = "ap-southeast-1" # 主部署区域: Singapore
}

# DynamoDB 表 (统一表名，通过 region 参数路由)
resource "aws_dynamodb_table" "form_submissions" {
  name         = "esgentics-form-submissions"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  
  attribute {
    name = "id"
    type = "S"
  }

  # TTL for auto-deletion
  ttl {
    attribute_name = "ttl"
    enabled        = true
  }

  # Server-side encryption
  server_side_encryption {
    enabled = true
  }

  tags = {
    Project   = "esgentics"
    Component = "form-backend"
    Compliance = "PDPA-GDPR"
  }
}

# Lambda 函数
resource "aws_lambda_function" "form_handler" {
  filename         = "lambda.zip"
  function_name    = "esgentics-form-handler"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "index.handler"
  runtime          = "nodejs18.x"
  timeout          = 30
  memory_size      = 256

  environment {
    variables = {
      NOTIFY_EMAIL   = var.notify_email
      DB_REGIONS     = jsonencode(var.region_endpoints)
    }
  }

  # 加密环境变量
  kms_key_arn = aws_kms_key.lambda_env.arn
}

# API Gateway
resource "aws_api_gateway_rest_api" "form_api" {
  name        = "esgentics-form-api"
  description = "Contact form submission endpoint"
}

# CloudWatch 告警 (示例: 错误率 >1%)
resource "aws_cloudwatch_metric_alarm" "lambda_errors" {
  alarm_name          = "esgentics-form-lambda-errors"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = "300"
  statistic           = "Sum"
  threshold           = "1"
  alarm_description   = "Lambda error rate exceeded"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    FunctionName = aws_lambda_function.form_handler.function_name
  }
}
```

---

### 方案 B: 第三方表单服务 (快速启动备选)

> 适用于开发资源紧张、需 48 小时内上线的场景。**注意**: 需额外审查第三方 DPA 合规性。

| 服务 | 优势 | 注意事项 | 配置要点 |
|------|------|----------|----------|
| **Formspree** | • 无需后端代码<br>• GDPR 合规认证<br>• 免费 tier: 50 提交/月 | • 需确认服务器区域 (选 EU/US)<br>• 禁用中国 CDN<br>• 付费计划才支持 webhook | • Form ID 从环境变量读取<br>• 启用 honeypot + reCAPTCHA v3<br>• `_subject` / `_next` / `privacy_consent` 字段配置 |
| **Getform.io** | • 支持 webhook + 存储<br>• 区域可选 (EU/US)<br>• 内置垃圾过滤 | • 付费计划 ($9/月起) 才支持数据区域选择<br>• 需在 Privacy Policy 披露 | • Endpoint URL 从配置读取<br>• 自定义成功跳转页<br>• 启用 GDPR 同意字段 |
| **Tally.so** | • 开源友好，可自托管<br>• 美观表单构建器<br>• 免费 tier 够用 | • 自托管需额外运维<br>• 区域控制需自行配置 | • 自托管于 AWS Singapore<br>• 配置 SMTP + DynamoDB 后端<br>• 启用 rate limit 插件 |

#### Formspree 配置示例 (前端)

```html
<form id="contact-form" action="https://formspree.io/f/${FORMSPREE_ID}" method="POST">
  <!-- 字段 -->
  <input type="text" name="name" placeholder="Your Name*" required>
  <input type="email" name="email" placeholder="Work Email*" required>
  <input type="text" name="company" placeholder="Company*" required>
  
  <!-- Region 自动检测 + 手动覆盖 -->
  <select name="region" id="region" required>
    <option value="">Select Region*</option>
    <option value="North America">North America</option>
    <option value="Europe">Europe</option>
    <option value="Middle East">Middle East</option>
    <option value="Southeast Asia">Southeast Asia</option>
    <option value="Others">Others</option>
  </select>
  <script>
    // 简单时区→区域映射 (前端辅助，后端为准)
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const regionMap = {
      'America/': 'North America',
      'Europe/': 'Europe',
      'Asia/Singapore': 'Southeast Asia',
      'Asia/Dubai': 'Middle East'
    };
    const autoRegion = Object.entries(regionMap).find(([k]) => tz.startsWith(k))?.[1];
    if (autoRegion) document.getElementById('region').value = autoRegion;
  </script>
  
  <textarea name="message" placeholder="Project Requirements*" required></textarea>
  
  <!-- Honeypot (防垃圾) -->
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">
  
  <!-- GDPR/PDPA 同意 -->
  <label>
    <input type="checkbox" name="privacy_consent" required>
    I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a> and consent to data processing.
  </label>
  
  <!-- 隐藏配置 -->
  <input type="hidden" name="_subject" value="New Inquiry from adenexus.com">
  <input type="hidden" name="_next" value="https://adenexus.com/thank-you">
  <input type="hidden" name="_cc" value="contact@adenexus.com">
  
  <button type="submit" class="btn-primary">Send Inquiry</button>
  
  <!-- 提交状态反馈 -->
  <div id="form-status" class="form-status"></div>
</form>

<script>
// 前端拦截 + 状态反馈 (增强体验)
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  
  status.textContent = 'Sending...';
  status.className = 'form-status sending';
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      status.textContent = 'Thank you! We will contact you soon.';
      status.className = 'form-status success';
      form.reset();
      setTimeout(() => window.location.href = form.querySelector('[name="_next"]').value, 3000);
    } else {
      const error = await response.json();
      status.textContent = error.error || 'Submission failed. Please try again.';
      status.className = 'form-status error';
    }
  } catch (err) {
    status.textContent = 'Network error. Please check your connection.';
    status.className = 'form-status error';
  }
});
</script>
```

> ⚠️ **重要合规提醒**: 使用第三方服务时，必须:
> 1. 在 Privacy Policy 中披露该数据处理者 (Processor)
> 2. 确认其签署 DPA (Data Processing Agreement) 符合 PDPA/GDPR
> 3. 验证其服务器区域配置 (禁用中国大陆节点)
> 4. 定期审计其安全认证 (SOC 2, ISO 27001 等)

---

## 3. 安全与合规实现细节

### 3.1 数据传输加密

| 链路 | 加密方案 | 验证方式 |
|------|----------|----------|
| 用户浏览器 → CloudFront | HTTPS (TLS 1.3), HSTS enabled | SSL Labs Test ≥ A |
| CloudFront → API Gateway | HTTPS (内部 AWS 网络加密) | VPC Endpoint + PrivateLink (可选) |
| Lambda → DynamoDB | 自动加密 (AES-256) + IAM 权限控制 | CloudTrail 审计日志 |
| Lambda → SES | STARTTLS + DKIM/SPF 配置 | SES Dashboard 验证 |

### 3.2 防垃圾提交策略 (多层防御)

```javascript
// 前端 + 后端协同
const antiSpam = {
    // Layer 1: Honeypot (隐藏字段)
    honeypot: '<input type="text" name="website_field" style="display:none" autocomplete="off">',
    
    // Layer 2: Time Check (提交时间 < 3 秒则拒绝)
    minSubmitTime: 3000, // ms
    
    // Layer 3: Rate Limit (同一 IP 24 小时内最多 10 次)
    rateLimit: {
        window: 24 * 60 * 60 * 1000, // 24h
        max: 10,
        store: 'memory' // 生产环境建议用 DynamoDB/Redis
    }
};
```

### 3.3 数据主权路由逻辑

```javascript
// 区域 → 存储端点映射表 (配置驱动)
const REGION_ENDPOINTS = {
    'North America': 'dynamodb.us-east-1.amazonaws.com',
    'Europe': 'dynamodb.eu-west-1.amazonaws.com', 
    'Middle East': 'dynamodb.ap-southeast-1.amazonaws.com',
    'Southeast Asia': 'dynamodb.ap-southeast-1.amazonaws.com',
    'Others': 'dynamodb.ap-southeast-1.amazonaws.com'
};

function getDbEndpointByRegion(userRegion) {
    return REGION_ENDPOINTS[userRegion] || REGION_ENDPOINTS['Others'];
}

// 前端自动检测 Region (辅助，后端为准)
function detectRegionFromTimezone() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.startsWith('America/')) return 'North America';
    if (tz.startsWith('Europe/')) return 'Europe';
    if (tz === 'Asia/Singapore' || tz.startsWith('Asia/Bangkok')) return 'Southeast Asia';
    if (tz === 'Asia/Dubai' || tz.startsWith('Asia/Riyadh')) return 'Middle East';
    return 'Others';
}
```

### 3.4 GDPR/PDPA 权利支持接口

```javascript
// /api/data-request 端点 (简化示例)
exports.dataRequestHandler = async (event) => {
    const { action, email, verificationToken } = JSON.parse(event.body);
    
    // 1. 验证身份
    if (!await verifyIdentity(email, verificationToken)) {
        return respond(401, { error: 'Identity verification failed' });
    }
    
    // 2. 执行请求
    if (action === 'delete') {
        await deleteSubmissionsByEmailHash(hashPII(email));
        return respond(200, { message: 'Data deleted successfully' });
    } 
    else if (action === 'export') {
        const report = await generateExportReport(hashPII(email));
        return respond(200, { data: report });
    }
    
    return respond(400, { error: 'Unsupported action' });
};
```

### 3.5 日志脱敏策略

```javascript
// CloudWatch Logs 脱敏中间件
function sanitizeLog(logEntry) {
    const sensitiveFields = ['email', 'name', 'phone', 'ipAddress'];
    const sanitized = { ...logEntry };
    
    sensitiveFields.forEach(field => {
        if (sanitized[field]) {
            sanitized[`${field}Hash`] = crypto
                .createHash('sha256')
                .update(sanitized[field])
                .digest('hex')
                .substring(0, 16);
            delete sanitized[field]; // 删除原始 PII
        }
    });
    
    return sanitized;
}
```

---

## 4. 监控与告警配置

### 4.1 关键指标 Dashboard

```
Form Submission Health (Last 24h)
├─ 📊 Total Submissions: 127
├─ ✅ Success Rate: 99.2% (Target: ≥95%)
├─ ⚡ Avg. Response Time: 240ms (P95: 410ms)
├─ 🛡️ Spam Blocked: 3 (Honeypot: 2, Rate Limit: 1)
├─ 🌍 Regional Distribution:
│  ├─ SE Asia: 45%
│  ├─ Europe: 30%
│  ├─ North America: 20%
│  └─ Middle East: 5%
└─ 🔐 Compliance:
   ├─ Data Residency: 100% compliant
   ├─ PII in Logs: 0 occurrences
   └─ GDPR Requests: 0 pending
```

### 4.2 CloudWatch 告警规则

| 指标 | 阈值 | 告警动作 | 负责人 |
|------|------|----------|--------|
| Lambda Errors | > 1% (5 分钟窗口) | Email + Slack #alerts | Backend Dev |
| 4xx/5xx Rate | > 5% | Email + PagerDuty (P2) | DevOps |
| SES Bounce Rate | > 0.1% | Email to marketing@ | Marketing |
| DynamoDB Throttling | > 0 | Auto-scale + Slack | DevOps |
| Unusual Region Spike | SE Asia 提交量 24h 内 +200% | Email to security@ | Security |

### 4.3 日志查询示例 (CloudWatch Insights)

```sql
-- 查询最近 1 小时提交失败原因
fields @timestamp, @message
| filter @message like /form_submission/
| filter @message like /error/
| sort @timestamp desc
| limit 20

-- 统计各区域提交量
fields region
| filter event = "form_submission"
| stats count(*) as submissions by region
| sort submissions desc

-- 检测潜在垃圾提交 (同一 IP 高频)
fields ipAddress, count
| filter event = "rate_limit_hit"
| stats count(*) as hits by ipAddress
| filter hits > 5
```

---

## 5. 开发实施步骤

```mermaid
graph TD
    A[前端表单开发] --> B[API Gateway 配置 + CORS]
    B --> C[Lambda 函数编写 + 本地测试]
    C --> D[DynamoDB 表创建 + TTL + 加密配置]
    D --> E[SES 邮件模板 + DKIM 配置]
    E --> F[CloudWatch 告警 + Dashboard]
    F --> G[压力测试 + 安全扫描 (OWASP ZAP)]
    G --> H[灰度发布: 10% 流量 → 100%]
    H --> I[监控观察 24h + 验收]
```

### 关键代码片段补充

```javascript
// 前端: 表单提交拦截 + 区域自动检测
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const status = document.getElementById('form-status');
    
    // 自动填充 Region (基于时区，可手动覆盖)
    if (!form.region.value) {
        form.region.value = detectRegionFromTimezone();
    }
    
    status.textContent = 'Sending...';
    status.className = 'form-status sending';
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        
        const result = await response.json();
        
        if (response.ok) {
            status.textContent = result.message;
            status.className = 'form-status success';
            form.reset();
            if (result.referenceId) {
                console.log('Reference ID:', result.referenceId);
            }
        } else {
            status.textContent = result.error || 'Submission failed. Please try again.';
            status.className = 'form-status error';
        }
    } catch (err) {
        console.error('Submission error:', err);
        status.textContent = 'Network error. Please check your connection.';
        status.className = 'form-status error';
    }
});
```

---

## 6. 验收测试用例

| 测试场景 | 测试步骤 | 预期结果 | 自动化 |
|----------|----------|----------|----------|
| **正常提交** | 填写完整表单 + 同意隐私政策 + 提交 | • 收到通知邮件<br>• DynamoDB 有记录 (区域正确)<br>• 重定向到 /thank-you<br>• 响应含参考 ID | ✅ Playwright |
| **区域路由** | Region 选 "Europe" + 提交 | • 数据存储在 eu-west-1 端点<br>• 邮件通知正常<br>• 日志中 region=Europe | ✅ 后端集成测试 |
| **必填验证** | 留空 Name 字段 + 提交 | • 前端实时报错 "Name is required"<br>• 后端拒绝请求 (400)<br>• 无存储/通知 | ✅ 前端单元测试 |
| **防垃圾: Honeypot** | 填写隐藏字段 website_field + 提交 | • 静默返回 200 + 成功消息<br>• 无存储/通知<br>• 日志标记 "honeypot_triggered" | ✅ 后端单元测试 |
| **防垃圾: Rate Limit** | 同一 IP 24h 内提交 11 次 | • 第 1-10 次: 正常<br>• 第 11 次: 返回 429 + 友好提示 | ✅ 集成测试 |
| **隐私同意校验** | 不勾选 Privacy Policy + 提交 | • 前端 + 后端双重拒绝<br>• 提示 "You must agree to the Privacy Policy" | ✅ 端到端测试 |
| **XSS 尝试** | Message 输入 `<script>alert(1)</script>` | • 后端转义存储<br>• 邮件中显示为纯文本<br>• 无 JS 执行 | ✅ 安全扫描 |
| **GDPR 删除请求** | 调用 `/api/data-request` + 有效 token + action=delete | • 对应记录从 DynamoDB 物理删除<br>• 返回确认消息<br>• 审计日志记录删除事件 | ✅ 合规测试 |
| **数据主权验证** | 模拟 EU 用户提交 + 检查存储位置 | • DynamoDB 记录位于 eu-west-1<br>• CloudTrail 日志无 ap-northeast-1 访问 | ✅ 合规审计 |

---

## 7. 成本估算 (AWS 方案, 月度)

> 基于 <10,000 提交/月 的初期流量估算

| 资源 | 用量估算 | 单价 (USD) | 小计 |
|------|----------|------------|------|
| **Lambda** | 10,000 请求 × 200ms × 256MB | $0.20 / 1M requests + $0.0000166667 / GB-s | ~$0.082 |
| **API Gateway** | 10,000 请求 | $3.50 / 1M requests | ~$0.035 |
| **DynamoDB** | 1GB 存储 + 10K WCU/RCU | $0.25/GB-month + $0.00013/write unit | ~$0.50 |
| **Amazon SES** | 1,000 通知邮件 | $0.10 / 1,000 emails | ~$0.10 |
| **CloudWatch Logs** | 1GB 日志 | $0.50/GB-month | ~$0.50 |
| **CloudWatch Metrics/Alarms** | 10 个指标 + 5 个告警 | $0.30/metric + $0.10/alarm | ~$3.50 |
| **Data Transfer** | <1GB 出向流量 | $0.09/GB (Singapore) | ~$0.09 |
| **KMS (加密密钥)** | 1 CMK + 10K 请求 | $1/month + $0.03/1000 requests | ~$1.03 |
| **缓冲 (20%)** | - | - | ~$1.17 |
| **✅ 月度总计** | - | - | **≈ $7.00** |

> 💡 实际成本可能更低：Lambda/GB-s 计费粒度细，初期流量下月成本常 < $3。预留 $10/月 预算足够覆盖峰值。

---

## 8. 交付物清单

```
esgentics_form_backend_v1.0/
├── 01_architecture/
│   ├── form-backend-architecture.png      # 方案 A 架构图 (PNG + SVG)
│   └── data-flow-sequence.mmd             # Mermaid 序列图源码
├── 02_lambda_source/
│   ├── index.js                           # Lambda 入口函数
│   ├── utils/
│   │   ├── validation.js                  # 表单验证逻辑
│   │   ├── antiSpam.js                    # 防垃圾策略
│   │   ├── crypto.js                      # PII 哈希/脱敏
│   │   └── ses.js                         # 邮件通知封装
│   ├── package.json
│   └── README.md                          # 本地测试指南
├── 03_infrastructure/
│   ├── terraform/
│   │   ├── main.tf                        # 核心资源定义
│   │   ├── variables.tf                   # 可配置参数
│   │   ├── outputs.tf                     # 输出 API 端点等
│   │   └── backend.tf                     # 远程 state 配置 (S3)
│   └── serverless.yml                     # Serverless Framework 备选
├── 04_testing/
│   ├── test-cases.md                      # 验收测试用例
│   ├── playwright/                        # 端到端测试脚本
│   │   ├── contact-form.spec.js
│   │   └── helpers/
│   └── security-scan-report.pdf           # OWASP ZAP 扫描报告 (示例)
├── 05_compliance/
│   ├── privacy-integration.md             # 与 Privacy Policy 的对接说明
│   ├── data-retention-policy.md           # TTL 配置 + 删除流程
│   └── gdpr-request-flow.png              # GDPR 权利请求时序图
├── 06_monitoring/
│   ├── cloudwatch-dashboard.json          # 可导入的 Dashboard 配置
│   ├── alarm-definitions.tf               # Terraform 告警资源
│   └── log-queries.md                     # CloudWatch Insights 示例
└── README_FormBackend.md                  # 部署指南 + 运维手册 + 故障排查
```

---

## 9. 运维与故障排查

### 9.1 常见问题速查

| 现象 | 可能原因 | 排查步骤 | 解决方案 |
|------|----------|----------|----------|
| 提交后无响应 | Lambda 超时 / API Gateway 504 | 1. 检查 CloudWatch Logs<br>2. 查看 X-Ray trace | 增加 Lambda timeout / 优化 DB 查询 |
| 邮件未收到 | SES 沙箱模式 / DKIM 未验证 | 1. SES Dashboard 检查状态<br>2. 验证发件域名 DNS | 申请 SES 生产访问 / 完成 DKIM 配置 |
| 区域存储错误 | REGION_ENDPOINTS 配置错误 | 1. 检查 Lambda 环境变量<br>2. 验证 DynamoDB 表区域 | 修正配置 + 重新部署 |
| 垃圾提交激增 | Rate limit 未生效 | 1. 检查 honeypot 字段名<br>2. 验证 IP 提取逻辑 | 修复代码 + 部署热更新 |
| GDPR 请求失败 | 身份验证 token 过期 | 1. 检查 token 生成逻辑<br>2. 验证 email 匹配 | 延长 token 有效期 / 改进验证流程 |

### 9.2 紧急回滚方案

```bash
# 1. 切换 API Gateway Stage 到上一版本
aws apigateway update-stage \
  --rest-api-id $API_ID \
  --stage-name prod \
  --patch-operations op=replace,path=/deploymentId,value=$PREV_DEPLOYMENT_ID

# 2. Lambda 版本回滚 (如使用别名)
aws lambda update-alias \
  --function-name esgentics-form-handler \
  --name prod \
  --function-version $PREV_VERSION

# 3. 通知团队
aws sns publish \
  --topic-arn $ALERTS_TOPIC \
  --subject "🚨 Form Backend Rolled Back" \
  --message "Prod rolled back to $PREV_VERSION at $(date). Reason: $REASON"
```

---

> **备注**: 本方案为技术建议，最终实现需经 adenexus 技术负责人 + 法务联合审核。所有数据处理活动需记录于 RoPA (Record of Processing Activities)，并定期审计。

**文档结束** | Version 1.0 | adenexus Pte. Ltd. | Last Updated: 2026-02-26
```