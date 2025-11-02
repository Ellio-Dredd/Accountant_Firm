import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); //key

export async function handler(event) {
  const body = JSON.parse(event.body);
  const { firstName, lastName, email, subject, message } = body;

  try {
    await resend.emails.send({
      from: "Probity <contact@probityaccountants.com>",
      to: process.env.CONTACT_RECEIVER,
      subject: `New Contact: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
