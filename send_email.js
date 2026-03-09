import nodemailer from 'nodemailer';

async function sendEmail() {
  try {
    // 创建邮件传输器
    const transporter = nodemailer.createTransporter({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // 使用 STARTTLS
      auth: {
        user: 'stanley.hao@adenservices.com',
        pass: 'Aden@20260123@1040'
      }
    });

    // 邮件内容
    const mailOptions = {
      from: 'stanley.hao@adenservices.com',
      to: 'stanley.hao@adenservices.com',
      subject: 'ESGentics 网站开发任务完成通知',
      html: `
        <h1>ESGentics 网站开发任务完成</h1>
        <p>尊敬的 Stanley，</p>
        <p>我已完成了 ESGentics 网站的开发任务，具体完成内容如下：</p>
        <ul>
          <li>更新了开发计划，添加了客户成功案例页面</li>
          <li>实现了客户成功案例页面，突出展示了 IKEA、DB Schenker、The Standard High Line Hotel、Saint-Gobain R&D Center 等案例</li>
          <li>更新了导航栏，添加了客户成功案例导航项</li>
          <li>更新了页脚，添加了客户成功案例链接</li>
          <li>更新了国际化文件，添加了客户成功案例的翻译内容</li>
          <li>确保了网站在不同设备上的响应式表现</li>
          <li>成功构建了项目，确保所有功能正常</li>
          <li>将代码提交到了 GitHub 仓库</li>
        </ul>
        <p>网站现已完成，您可以通过以下方式访问：</p>
        <p>GitHub 仓库：<a href="https://github.com/mcaserhn/esgentics-com">https://github.com/mcaserhn/esgentics-com</a></p>
        <p>如有任何问题，请随时联系我。</p>
        <p>此致</p>
        <p>开发团队</p>
      `
    };

    // 发送邮件
    const info = await transporter.sendMail(mailOptions);
    console.log('邮件发送成功:', info.messageId);
  } catch (error) {
    console.error('邮件发送失败:', error);
  }
}

// 运行邮件发送函数
sendEmail();