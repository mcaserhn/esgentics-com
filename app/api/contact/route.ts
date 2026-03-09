import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company: string;
  region: string;
  message: string;
  privacy: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // 验证数据
    if (!formData.name || !formData.company || !formData.region || !formData.message || !formData.privacy) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.SMTP_USER || 'default-email@gmail.com',
        pass: process.env.SMTP_PASS || 'default-password'
      }
    });

    // 邮件内容
    const mailOptions = {
      from: 'contact@adenexus.com',
      to: 'contact@adenexus.com',
      subject: `New Contact Inquiry from ${formData.name}`,
      html: `
        <h1>New Contact Inquiry</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Region:</strong> ${formData.region}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <p><strong>Privacy Consent:</strong> ${formData.privacy ? 'Yes' : 'No'}</p>
      `
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);
    console.log('Contact form submitted:', formData);

    // 这里可以添加数据存储逻辑
    // 例如存储到数据库

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
