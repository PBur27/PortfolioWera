import React from "react";
import smile from "../assets/aboutMeSmile.png";
import placeholder from "../assets/placeholder.png";
import { useT } from "../LanguageContext";
import ContactForm from "../components/contact/ContactForm";

import "./pages.css";

function Contact() {
  const t = useT();

  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" />
      </div>
      <div className="content">
        <div className="contact-container">
          <div className="contact-container-horizontal">
            <div className="contact-image-container"></div>
            <div className="contact-form-container">
              <h1 className="contact-form-title">{t("contact.form_title")}</h1>
            </div>
          </div>
          <div className="contact-container-horizontal">
            <div className="contact-image-container">
              <img src={placeholder} className="contact-image" />
            </div>
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
          <div className="contact-container-horizontal">
            <div className="contact-image-container"></div>
            <div className="contact-form-container">
              <div className="contact-form-submit-container">
                <button type="submit" form="contact-form" className="contact-form-submit-button">{t('contact.form_submit')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
