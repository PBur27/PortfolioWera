import React from "react";
import placeholder from "../assets/placeholder.png";
import { useT } from "../LanguageContext";
import ContactForm from "../components/contact/ContactForm";

import styles from "./contact.module.css";

function Contact() {
  const t = useT();

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contactContainer}>
          <div className={styles.contactFormTitleContainer}>
            <h1 className={styles.contactFormTitle}>
              {t("contact.form_title")}
            </h1>
          </div>
          <div className={styles.contactContainerHorizontal}>
            <div className={styles.contactImageContainer}>
              <img
                src="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Przyszły.avif"
                className={styles.contactImage}
              />
            </div>
            <div className={styles.contactFormContainer}>
              <ContactForm />
            </div>
          </div>
          <div className={styles.contactFormSubmitContainer}>
            <button
              type="submit"
              form="contact-form"
              className={styles.contactFormSubmitButton}
            >
              {t("contact.form_submit")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
