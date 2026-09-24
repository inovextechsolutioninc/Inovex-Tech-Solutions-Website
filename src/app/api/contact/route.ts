import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // In a real Cloudflare / Next.js production environment, 
    // you would integrate with an email API here (like Resend, SendGrid, or AWS SES).
    // Example: await resend.emails.send({ ... })

    console.log("================================");
    console.log("🚀 NEW CONTACT SUBMISSION RECEIVED");
    console.log("Name: ", body.name);
    console.log("Email:", body.email);
    console.log("Service:", body.service);
    console.log("Message:", body.message);
    console.log("================================");

    // Return success to the client
    return NextResponse.json(
      { success: true, message: "Message received successfully. We will be in touch within 24 hours." },
      { status: 200 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: 'Server error processing your request.' },
      { status: 500 }
    );
  }
}
