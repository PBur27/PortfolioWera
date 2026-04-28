import { Resend } from "resend";

export async function onRequestPost(context) {
  const resend = new Resend(context.env.RESEND_API_KEY);

  try {
    const { sender, content } = await context.request.json();

    const data = await resend.emails.send({
      from: "Vee Jablonska <mailing@veejablonska.com>",
      to: "weronika2002jablonska@gmail.com",
      reply_to: sender,
      subject: `Portfolio Mailing - Contact request from ${sender}`,
      html: `<p>${content}</p>`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}


