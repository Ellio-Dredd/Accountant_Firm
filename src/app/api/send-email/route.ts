// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // ensure Node runtime so the Resend Node SDK works

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Your site <onboarding@your-verified-domain.com>", // must be verified in Resend
      to: process.env.CONTACT_RECEIVER!,
      subject: `📬 New Contact: ${subject}`,
      replyTo: email,
      text: `
New contact form submission:

Name: ${firstName || ""} ${lastName || ""}
Email: ${email}
Phone: ${phone || ""}

Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend send error object:", error);
      return NextResponse.json({ success: false, error: "Email service error" }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id ?? null });
  } catch (err: any) {
    console.error("send-email handler error:", err);
    return NextResponse.json({ success: false, error: err?.message ?? "Unknown error" }, { status: 500 });
  }
}
