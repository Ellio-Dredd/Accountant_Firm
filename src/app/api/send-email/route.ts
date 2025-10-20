import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    // 📨 Send email via Resend
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // or your verified domain
      to: process.env.CONTACT_RECEIVER!,
      subject: `📬 New Contact: ${subject}`,
      replyTo: email,
      text: `
New contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Subject: ${subject}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
