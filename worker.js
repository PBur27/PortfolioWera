import { Resend } from "resend";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/mailing" && request.method === "POST") {
      try {
        const { sender, content } = await request.json();

        if (!sender || !content) {
          return Response.json({ error: "Brak danych" }, { status: 400 });
        }

        const resend = new Resend(env.RESEND_API_KEY);

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

    return env.ASSETS.fetch(request);
  },
};