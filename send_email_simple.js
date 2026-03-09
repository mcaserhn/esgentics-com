const nodemailer = require('nodemailer');

// 直接使用 nodemailer 而不是 createTransporter
async function sendEmail() {
  try {
    // 创建传输器
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // 不使用 SSL
      auth: {
        user: 'stanley.hao@adenservices.com',
        pass: 'Aden@20260123@1040'
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // 邮件选项
    const mailOptions = {
      from: 'stanley.hao@adenservices.com',
      to: 'stanley.hao@adenservices.com',
      subject: 'ESGentics 网站开发任务完成通知',
      text: 'ESGentics 网站开发任务已完成。\n\n完成内容：\n1. 更新了开发计划，添加了客户成功案例页面\n2. 实现了客户成功案例页面，突出展示了 IKEA、DB Schenker、The Standard High Line Hotel、Saint-Gobain R&D Center 等案例\n3. 更新了导航栏，添加了客户成功案例导航项\n4. 更新了页脚，添加了客户成功案例链接\n5. 更新了国际化文件，添加了客户成功案例的翻译内容\n6. 确保了网站在不同设备上的响应式表现\n7. 成功构建了项目，确保所有功能正常\n8. 将代码提交到了 GitHub 仓库\n\nGitHub 仓库：https://github.com/mcaserhn/esgentics-com'
    };

    // 发送邮件
    const info = await transporter.sendMail(mailOptions);
    console.log('邮件发送成功:', info.messageId);
  } catch (error) {
    console.error('邮件发送失败:', error);
  }
}

sendEmail();