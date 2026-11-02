import React, { useState } from "react";
import { useTranslate } from "../../context/LanguageContext";
import styles from "./contactForm.module.css";

function ContactForm() {
  const t = useTranslate();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const sender = formData.get("email");
    const content = formData.get("content");

    try {
      const response = await fetch("api/mailing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sender, content }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Backend error:", result.error);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const statusMessage = {
    sending: t("contact.form_status.sending"),
    success: t("contact.form_status.success"),
    error: t("contact.form_status.error"),
  }[status];

  return (
    <form
      className={styles.contactForm}
      id="contact-form"
      onSubmit={handleSubmit}
    >
      <label className={styles.visuallyHidden} htmlFor="email">
        {t("contact.form_email_placeholder")}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder={t("contact.form_email_placeholder")}
        autoComplete="email"
        required
      />
      <label className={styles.visuallyHidden} htmlFor="content">
        {t("contact.form_text_placeholder")}
      </label>
      <textarea
        id="content"
        name="content"
        placeholder={t("contact.form_text_placeholder")}
        required
      />
      <p className={styles.formStatus} role="status" aria-live="polite">
        {statusMessage}
      </p>
    </form>
  );
}

export default ContactForm;
