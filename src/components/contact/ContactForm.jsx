import React from "react";
import { useT } from "../../LanguageContext";

function ContactForm() {
  const t = useT();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const sender = formData.get("email");
    const content = formData.get("content");

    try {
      const response = await fetch("/api/mailing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender, content }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("Email sent successfully!", result);
        alert("Thanks for your message!");
        event.target.reset();
      } else {
        console.error("Backend error:", result.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={t("contact.form_email_placeholder")}
      />
      <textarea
        id="content"
        name="content"
        placeholder={t("contact.form_text_placeholder")}
      />
    </form>
  );
}

export default ContactForm;
