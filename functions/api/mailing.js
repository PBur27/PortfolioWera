import { Resend } from "resend";

export async function onRequestPost(context) {
  const resend = new Resend("");

  try {
    const { sender, content } = await context.request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "p.burda2003@gmail.com",
      reply_to: sender,
      subject: `Portfolio Mailing - Contact request from ${sender}`,
      html: `<p>${content}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


