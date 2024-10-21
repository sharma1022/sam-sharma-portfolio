import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, subject, message } = await request.json(); // Destructure the incoming data

  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  // Mail options
  const mailOptions = {
    from: email, 
    to: process.env.EMAIL_USER, 
    subject: subject, 
    text: message, 
    replyTo: email, 
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    const errorMessage = (error as Error).message || 'Unknown error occurred.';
    console.error('Error sending email:', errorMessage); 
    return NextResponse.json({ error: errorMessage }, { status: 500 }); 
  }
}
