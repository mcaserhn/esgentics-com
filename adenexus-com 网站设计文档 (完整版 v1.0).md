# ESGentics.com 网站设计文档 (完整版 v1.0)

> **项目**: esgentics.com  
> **版本**: v1.0 Complete  
> **日期**: 2026-02-26  
> **最后更新**: 2026-02-26  
> **保密级别**: Internal Use Only  
> **适用团队**: UI/UX Design, Frontend Dev, Content, Legal, QA

---

## 📋 文档目录

1. [项目概述](#1-项目概述)
2. [品牌定位与视觉规范](#2-品牌定位与视觉规范)
3. [信息架构 (Sitemap)](#3-信息架构-sitemap)
4. [页面级文案与视觉策略](#4-页面级文案与视觉策略)
5. [技术实现规范](#5-技术实现规范)
6. [附录 A: UI 组件库](#附录-a-ui-组件库)
7. [附录 B: 响应式断点](#附录-b-响应式断点)
8. [附录 C: SEO 元数据模板](#附录-c-seo-元数据模板)
9. [附录 D: QA 验收清单](#附录-d-qa-验收清单)
10. [交付清单与下一步](#10-交付清单与下一步)

---

## 1. 项目概述

### 1.1 核心定位

| 项目 | 内容 |
|------|------|
| **域名** | esgentics.com |
| **品牌标语** | "Intelligent Construction. Sustainable Legacy." |
| **核心价值** | AI 算法 + AI 硬件 + AI 智能体，实现智能建造 A-Z 交钥匙工程，对标 ESG 规范下的长期运营服务 |
| **公司注册** | 新加坡 (ESGentics Pte. Ltd.) |
| **资本背景** | 法国资本（通过设计风格和文案暗示，不直接披露） |
| **目标市场** | 东南亚、北美、欧洲、中东（**严格排除中国大陆**） |
| **技术背书** | NVIDIA 合作伙伴（硬件层） |

### 1.2 关键约束

| 约束类型 | 要求 |
|----------|------|
| ❌ 内容禁忌 | 全站禁止出现中国大陆相关词汇、图片、地标、语言 |
| ✅ 服务器部署 | AWS Singapore / Azure Europe（非中国大陆节点） |
| ✅ 数据主权 | 明确声明数据不存储/传输至中国大陆 |
| ✅ 语言 | 英文为主，可选法语/区域语言，**无简体中文** |

---

## 2. 品牌定位与视觉规范

### 2.1 色彩系统 (CSS Variables)

```css
:root {
    /* 主色 */
    --primary-red: #ed4f18;      /* CTA 按钮、关键高亮 */
    --deep-blue: #283948;        /* 标题、深色背景、页脚 */
    
    /* 文字色 */
    --bold-text: #3a3941;        /* 加粗文字 */
    --dark-gray: #333333;        /* 正文 */
    --medium-gray: #d1d1d1;      /* 边框、次要文字 */
    --light-gray: #f8f8f8;       /* 背景色 */
    
    /* 字体 */
    --font-main: 'Catamaran', sans-serif;
}
```

### 2.2 字体规范

| 元素 | 字重 | 颜色 | 备注 |
|------|------|------|------|
| H1-H6 | 800 / 600 | `#283948` | 标题 |
| Body | 400 | `#333333` | 正文 |
| Strong | 600 | `#3a3941` | 加粗文字 |

### 2.3 间距规范

| 元素 | 间距 | 应用场景 |
|------|------|----------|
| 文字与图片间距 | `1.5rem` (24px) | 图片下方与文字之间的间距 |
| 段落间距 | `1.25rem` (20px) | 正文段落之间的间距 |
| 章节间距 | `4rem` (64px) | 主要内容章节之间的间距 |
| 页面底部间距 | `2rem` (32px) | 页面内容与页脚之间的间距 |
| 卡片内部间距 | `2rem` (32px) | 卡片组件内部的内边距 |

**字体加载**:
```html
<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600;800&display=swap" rel="stylesheet">
```

### 2.3 视觉风格

| 维度 | 规范 |
|------|------|
| **设计语言** | 欧式极简主义 (European Minimalism) + 工程美学 |
| **图像原则** | 使用 3D 建筑渲染图、抽象科技线条、国际化团队素材 |
| **禁止内容** | 中文标识、中国地标、单一地域人脸、微信/微博图标 |
| **法式暗示** | 通过黄金分割布局、理性光影、"European Engineering DNA" 文案间接传达 |

---

## 3. 信息架构 (Sitemap)

```
/ (Home)
├── /technology (AI Agents + NVIDIA Hardware)
├── /solutions (Turnkey A-Z + Conceptual Showcase)
├── /compliance (Data Sovereignty + ESG Standards)
├── /about (Singapore Hub + European Heritage)
├── /contact (Global Inquiry Form)
└── Legal Pages
    ├── /privacy-policy
    ├── /terms-of-service
    └── /data-sovereignty-statement
```

---

## 4. 页面级文案与视觉策略

### 4.1 首页 (Home) `/`

**视觉策略**:
- Hero: 深蓝背景 `#283948` + 3D 全球AI网络概念图
- NVIDIA Logo: 灰度处理，标注 "Computing Partner"
- CTA: `#ed4f18` 红色按钮，圆角 4px
- 间距: 文字与图片间距 `1.5rem` (24px)，页面底部间距 `2rem` (32px)

**核心文案**:
```
H1: Intelligent Construction. Sustainable Legacy.
Body: AI-driven turnkey engineering solutions powered by NVIDIA hardware. From concept to operation, we deliver intelligent construction projects across Southeast Asia, Europe, North America, and the Middle East.
CTA: Explore Solutions

Section - Value Prop:
H2: From Alpha to Omega, Powered by AI.
Body: ESGentics delivers turnkey intelligent construction services. We integrate advanced AI algorithms, edge hardware, and autonomous agents to manage your project from conception to long-term operation.

Section - Trust:
H3: Global Standards. European Heritage.
Body: Headquartered in Singapore, backed by European capital. We bring precision engineering and long-term ESG compliance to every project.

Section - CTA:
H2: Ready to start your intelligent construction project?
CTA: Get in Touch
```

### 4.2 技术引擎 (Technology) `/technology`

**视觉策略**:
- 深色板块展示 NVIDIA 芯片 + 建筑模型抽象图
- 细线条图标，`#ed4f18` 或 `#ffffff` 配色
- NVIDIA 官方合作 Badge
- 间距: 文字与图片间距 `1.5rem` (24px)，页面底部间距 `2rem` (32px)

**核心文案**:
```
H1: The Technology Behind the Build.
Body: Advanced AI agents and NVIDIA-powered hardware working together to revolutionize construction.

Section - AI Agents:
H2: Autonomous AI Agents.
Body: Our proprietary algorithms deploy intelligent agents that monitor, decide, and optimize construction processes in real-time. Reducing human error and maximizing efficiency.
Features: Real-time monitoring and analytics, Autonomous decision making, Predictive maintenance, Optimized resource allocation

Section - Hardware:
H2: Powered by NVIDIA Edge Computing.
Body: We leverage NVIDIA's robust hardware ecosystem to ensure high-performance computing at the edge. Reliable, scalable, and built for harsh construction environments.
Features: High-performance edge computing, Ruggedized for construction sites, Scalable architecture, Energy-efficient operation
Tag: Official Partner Technology

Section - NVIDIA Partner:
Content: NVIDIA Partner, Powered by NVIDIA technology

Section - CTA:
H2: Ready to harness the power of AI for your construction project?
Body: Our team of experts is ready to help you implement intelligent construction solutions tailored to your specific needs.
CTA: Get Started
```

### 4.3 解决方案 (Solutions) `/solutions`

**视觉策略**:
- 3D 概念渲染图（标注 "*Conceptual Simulation*"）
- A-Z 流程图：深蓝线条 + 红色节点
- 背景：`#f8f8f8` 浅灰，突出渲染质感
- 间距: 文字与图片间距 `1.5rem` (24px)，页面底部间距 `2rem` (32px)

**核心文案**:
```
H1: End-to-End Intelligent Solutions.
Body: From design to long-term ESG operations, we provide turnkey intelligent construction solutions.

Section - Turnkey:
H2: A-Z Turnkey Engineering.
Body: We handle everything. Design, procurement, construction, and commissioning. One contract, one responsibility, zero hassle.
Features: Concept design and planning, Procurement and supply chain management, Construction and installation, Commissioning and handover

Section - Operations:
H2: Long-Term Operations & ESG.
Body: Construction is just the beginning. Our AI agents continue to monitor building health, energy usage, and carbon footprint throughout the asset's lifecycle.
Features: Real-time building performance monitoring, Energy usage optimization, Carbon footprint tracking, Predictive maintenance scheduling

Section - Conceptual Showcase:
H2: Conceptual Showcase.
• Smart Hub - Southeast Asia Concept: Intelligent commercial hub with integrated AI systems for optimal operations.
• Eco-Plant - European Standard Concept: Sustainable manufacturing facility with zero carbon footprint and AI-driven efficiency.
• Data Nexus - Middle East Concept: State-of-the-art data center with advanced cooling and energy management systems.
*(All visuals are conceptual simulations for capability demonstration)*

Section - CTA:
H2: Ready to transform your construction project?
Body: Our turnkey solutions deliver intelligent construction from concept to operation.
CTA: Get a Quote
```

### 4.4 全球合规 (Compliance) `/compliance`

**视觉策略**:
- 严肃简洁，文本为主
- 盾牌/锁/地球图标，`#283948` 深蓝
- 数据主权声明框：浅灰背景 + 左侧红色竖线

**核心文案**:
```
H1: Global Compliance & Data Sovereignty.

Section - Legal Entity:
H2: Registered in Singapore.
Body: ESGentics Pte. Ltd. is incorporated under the laws of Singapore. All contracts are governed by Singapore International Arbitration Centre (SIAC) rules.

Section - Data Sovereignty:
H2: Data Residency Guarantee.
Body: We understand the sensitivity of your data. Our infrastructure ensures that project data is processed and stored within your region (EU, NA, ME, or SE Asia), complying with GDPR, PDPA, and local data laws.

Highlight Box:
No data is transferred to mainland China. Our servers are located in Singapore, Europe, and North America.
```

### 4.5 关于我们 (About) `/about`

**视觉策略**:
- 国际化团队素材图（多肤色）
- 世界地图：高亮 SG/NA/EU/ME，中国大陆灰化或不显示
- 法式暗示：欧洲建筑细节背景纹理

**核心文案**:
```
H1: Building Trust Across Borders.

Section - Who We Are:
H2: Singapore Hub. Global Reach.
Body: ESGentics is a next-generation construction technology company headquartered in Singapore. We serve clients across Southeast Asia, North America, Europe, and the Middle East.

Section - Heritage:
H2: European Engineering DNA.
Body: Backed by European capital, we inherit a tradition of precision, rationality, and long-term thinking. We believe in building assets that last generations, not just quarters.
```

### 4.6 联系我们 (Contact) `/contact`

**视觉策略**:
- 表单：简洁字段，提交按钮 `#ed4f18`
- 地图：仅显示新加坡总部
- 页脚：深蓝背景 `#283948`
- 间距: 文字与图片间距 `1.5rem` (24px)，页面底部间距 `2rem` (32px)

**核心文案**:
```
H1: Start Your Project.
Body: Get in touch with our team to discuss your intelligent construction needs.

Contact Info:
• Headquarters: ESGentics Pte. Ltd.
• Address: [Your Singapore Office Address], Singapore.
• Email: contact@esgentics.com
• Regions: Sales inquiries for NA, EU, ME, and SE Asia welcome.

Form Fields:
• Name* • Company* • Region* (Dropdown: NA/EU/ME/SE Asia/Others)
• Message*
• [✓] I agree to the Privacy Policy and Data Processing Terms.

Submit Button: Send Inquiry

Section - CTA:
H2: Ready to get started?
Body: Our team is ready to help you bring your intelligent construction project to life.
CTA: Contact Us Now
```

### 4.7 全局页脚 (Footer)

```
© 2026 ESGentics Pte. Ltd. Singapore. All Rights Reserved.

Links: Privacy Policy | Terms of Service | Data Sovereignty Statement | Compliance

Data Statement (Small Font):
Servers hosted in Singapore/AWS Global. No data residency in mainland China.

Social: LinkedIn (only) - No WeChat/Weibo
```

---

## 5. 技术实现规范

### 5.1 基础 CSS 配置

```css
@import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@300;400;600;800&display=swap');

:root {
    --primary-red: #ed4f18;
    --deep-blue: #283948;
    --bold-text: #3a3941;
    --dark-gray: #333333;
    --medium-gray: #d1d1d1;
    --light-gray: #f8f8f8;
    --font-main: 'Catamaran', sans-serif;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    font-family: var(--font-main);
    color: var(--dark-gray);
    background-color: var(--light-gray);
    line-height: 1.6;
}

h1, h2, h3 {
    color: var(--deep-blue);
    font-weight: 800;
}

strong {
    color: var(--bold-text);
    font-weight: 600;
}

.btn-primary {
    background-color: var(--primary-red);
    color: #ffffff;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    border: none;
    text-transform: uppercase;
    transition: background 0.3s ease;
}

.btn-primary:hover {
    background-color: #d14010;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

@media (max-width: 768px) {
    .hero {
        text-align: center;
        padding: 60px 0;
    }
    .hero h1 {
        font-size: 28px !important;
    }
    .btn-primary {
        width: 100%;
    }
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(40,57,72,0.16);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.input-field:focus {
    border-color: var(--primary-red);
    box-shadow: 0 0 0 3px rgba(237, 79, 24, 0.1);
}

.input-field.error {
    border-color: #dc3545;
}

.badge {
    background: var(--primary-red);
    color: #fff;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
}

.section-divider {
    height: 1px;
    background: var(--medium-gray);
    margin: 48px 0;
}

.breadcrumb {
    font-size: 14px;
    color: #666;
}

.breadcrumb a {
    color: var(--primary-red);
}

.toast {
    background: var(--deep-blue);
    color: #fff;
    padding: 12px 20px;
    border-left: 4px solid var(--primary-red);
}
```

### 5.2 服务器与部署

| 项目 | 配置 |
|------|------|
| **Hosting** | AWS Singapore (ap-southeast-1) 或 Azure Europe |
| **CDN** | Cloudflare Global (排除中国大陆节点) |
| **SSL** | Let's Encrypt 或商业证书，强制 HTTPS |
| **Analytics** | Google Analytics 4 (配置数据区域过滤) |

### 5.3 NVIDIA 品牌合规

- **Logo 下载**: https://www.nvidia.com/en-us/about-nvidia/brand-guide/
- **使用规范**: 必须包含 "Powered by NVIDIA" 或 "NVIDIA Partner" 说明
- **颜色**: 灰度或官方绿，禁止随意变色

---

## 附录 A: UI 组件库

### A.1 按钮变体

| 变体 | 状态 | 背景 | 文字 | 使用场景 |
|------|------|------|------|----------|
| Primary | Default | `#ed4f18` | `#fff` | 主要 CTA |
| Primary | Hover | `#d14010` | `#fff` | 鼠标悬停 |
| Secondary | Default | `transparent` | `#283948` | 次要操作 |
| Text Link | Hover | `transparent` | `#d14010` + 下划线 | 内文跳转 |

### A.2 表单校验

```css
.input-field:focus {
    border-color: #ed4f18;
    box-shadow: 0 0 0 3px rgba(237, 79, 24, 0.1);
}
.input-field.error {
    border-color: #dc3545; /* 错误红，区别于品牌红 */
}
```

### A.3 卡片 Hover 效果

```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(40,57,72,0.16);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

### A.4 其他通用组件

| 组件 | 样式规范 | 使用场景 |
|------|----------|----------|
| **Badge** | `background: #ed4f18; color: #fff; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;` | "Powered by NVIDIA"、"New"、"Concept" 标签 |
| **Section Divider** | `height: 1px; background: #d1d1d1; margin: 48px 0;` | 内容区块分隔 |
| **Breadcrumb** | `font-size: 14px; color: #666;` 链接色 `#ed4f18` | 内页导航路径 |
| **Toast/Alert** | `background: #283948; color: #fff; padding: 12px 20px; border-left: 4px solid #ed4f18;` | 表单提交成功/合规提示 |

---

## 附录 B: 响应式断点

| 断点 | 宽度 | 布局策略 |
|------|------|----------|
| Mobile | `<768px` | 单列，汉堡菜单，CTA 全宽 |
| Tablet | `768-1024px` | 双列，导航间距缩小 |
| Desktop | `1025-1440px` | 标准多列，固定导航 |
| Large | `>1440px` | 内容居中 max-width:1200px |

**关键响应式规则**:

```css
/* 容器 */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 移动端 Hero */
@media (max-width: 768px) {
    .hero { text-align: center; padding: 60px 0; }
    .hero h1 { font-size: 28px !important; }
    .btn-primary { width: 100%; }
}
```

---

## 附录 C: SEO 元数据模板

### 全局默认 Meta

```html
<title>ESGentics | AI-Powered Intelligent Construction from Singapore</title>
<meta name="description" content="Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery. Headquartered in Singapore.">
<meta name="keywords" content="AI construction, intelligent building, ESG compliance, turnkey engineering, NVIDIA partner, Singapore tech">
<meta name="robots" content="index, follow">
<meta http-equiv="Content-Language" content="en">
<meta name="geo.region" content="SG">
```

### 页面级 Title/Description 模板

| 页面 | Title (≤60 字) | Description (≤155 字) |
|------|---------------|----------------------|
| Home | `ESGentics \| AI Intelligent Construction from Singapore` | `Turnkey smart building solutions powered by AI agents & NVIDIA hardware. ESG-compliant, global delivery.` |
| Technology | `AI Technology \| NVIDIA-Powered Construction AI - ESGentics` | `Proprietary AI agents + NVIDIA edge computing for intelligent construction. Predictive analytics, global compliance.` |
| Solutions | `Turnkey Solutions \| A-Z Intelligent Construction - ESGentics` | `From design to long-term ESG operations. AI-driven turnkey engineering for SE Asia, Europe, NA, Middle East.` |
| Compliance | `Global Compliance \| Data Sovereignty & ESG - ESGentics` | `Singapore-registered. GDPR/PDPA compliant. Data residency guarantee. No data in mainland China.` |

**SEO 关键约束**:

| 要求 | 说明 |
|------|------|
| ❌ 禁止关键词 | `China`, `CN`, `Chinese`, `Sino`, `Mainland` |
| ✅ 图片 Alt | 所有图片必须添加英文 Alt 文本 |
| ✅ H1 唯一性 | 每页仅一个 H1，包含核心关键词 |

---

## 附录 D: QA 验收清单

### D.1 合规性检查 (必须 100% 通过)

- [ ] 页脚显示 "No data residency in mainland China"
- [ ] 所有表单含 Privacy Policy 链接 + 同意复选框
- [ ] Footer 版权："© ESGentics Pte. Ltd. Singapore"
- [ ] 全站无 `China/CN/Chinese` 等词汇（正则扫描 + 人工复核）
- [ ] NVIDIA Logo 使用符合官方品牌指南

### D.2 技术性能检查

- [ ] Catamaran 字体加载正常，fallback 有效
- [ ] 所有色值使用 CSS 变量，无硬编码
- [ ] 网站 IP 归属地：新加坡/欧美（`ping esgentics.com` 验证）
- [ ] HTTPS 强制跳转，SSL 证书有效
- [ ] 移动端兼容：iOS Safari / Android Chrome 测试通过

### D.3 内容质量检查

- [ ] 英文文案无拼写/语法错误 (Grammarly + 人工)
- [ ] 案例/文案仅提及 SE Asia/NA/EU/ME 区域
- [ ] 所有图片无中文水印、无中国地标
- [ ] 3D 渲染图标注 "*Conceptual Simulation*"

### D.4 上线前签署

```
## Launch Approval
- [ ] Compliance ✅  - [ ] Technical ✅  - [ ] Content ✅
- [ ] DNS/SSL 部署完成
- [ ] Search Console 提交
- [ ] 备份策略 + 监控告警配置

Approved by:
Legal: ______  Tech: ______  Marketing: ______  Client: ______
Date: ______
```

---

## 10. 交付清单与下一步

### 交付文件结构

```
esgentics_web_spec_v1.0/
├── 01_complete_spec.md          # 本完整文档
├── 02_copywriting_en.xlsx       # 英文文案（按页面分 Sheet）
├── 03_assets_required.md        # 素材需求清单
├── 04_developer_notes.md        # 技术实现细节
├── 05_privacy_policy_draft.md   # 隐私政策初稿（单独文件）
└── README.md                    # 使用说明
```

### 下一步行动 (P0)

| 优先级 | 行动 | 负责人 | 状态 |
|--------|------|--------|------|
| P0 | 确认本设计文档终稿 | 客户 | ⬜ |
| P0 | 注册 `esgentics.com` 并配置 DNS | 运维 | ⬜ |
| P1 | 启动 3D 概念渲染图制作（5 张） | 设计团队 | ⬜ |
| P1 | 申请 NVIDIA Partner Logo 使用授权 | 市场 | ⬜ |
| P1 | 法务审核 Privacy Policy 初稿 | 法务 | ⬜ |

---

## 📝 版本历史

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| v1.2 | 2026-02-26 | Updated page content and structure to match actual implementation: added detailed sections for Home, Technology, Solutions, and Contact pages; updated spacing guidelines; integrated Tailwind CSS configuration | ESGentics Team |
| v1.1 | 2026-02-26 | Added spacing guidelines: increased text-image spacing, reduced page bottom spacing | ESGentics Team |
| v1.0 | 2026-02-26 | Initial complete spec + Privacy Policy draft | ESGentics Team |

---

## 🔗 相关文档

| 文档 | 说明 |
|------|------|
| Privacy Policy Draft | 单独文件 `05_privacy_policy_draft.md` |
| 3D Rendering Brief | 待起草 |
| NVIDIA Authorization Template | 待起草 |

---

> **文档结束** | Version 1.0 Complete | ESGentics Pte. Ltd. | Last Updated: 2026-02-26

---

### 💡 动态日期使用说明

为方便后续维护，建议在协作平台（如 Notion/GitHub）中使用以下变量：

| 平台 | 动态日期语法 |
|------|-------------|
| **Notion** | `{{Last edited}}` |
| **GitHub** | `{{ date | date: "%Y-%m-%d" }}` (Jekyll) |
| **Confluence** | `{date}` 宏 |
| **本地 Markdown** | 手动更新或使用脚本自动替换 |

**自动更新脚本示例 (Bash)**:
```bash
#!/bin/bash
CURRENT_DATE=$(date +%Y-%m-%d)
sed -i '' "s/Last Updated: .*/Last Updated: $CURRENT_DATE/" esgentics_web_spec_v1.0.md
echo "Document updated to $CURRENT_DATE"
```

---

✅ **文档已修正完成**，日期已更新为当前实际日期 **2026-02-26**，并添加了版本历史和动态日期使用说明。

**是否需要我继续起草**：
1. 🎨 **3D 渲染图制作 Brief**（用于委托设计团队制作概念图）
2. 🤝 **NVIDIA 授权申请模板**（用于申请 Partner Logo 使用权限）
3. 📧 **域名注册与 DNS 配置指南**（用于快速上线）

请指示下一步优先级，我立即执行。