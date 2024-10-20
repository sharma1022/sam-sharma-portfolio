import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email, subject, message } = await request.json(); // Destructure the incoming data

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail app password
    },
  });

  // Mail options
  let mailOptions = {
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
    console.error('Error sending email:', errorMessage); // Log the specific error message
    return NextResponse.json({ error: errorMessage }, { status: 500 }); // Return the error message
  }
}
