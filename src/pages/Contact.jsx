import React from "react";
import { motion } from "motion/react";
import { useTranslate } from "../context/LanguageContext";
import ContactForm from "../components/contact/ContactForm";
import styles from "./contact.module.css";

const processSteps = ["conversation", "concept", "project", "final"];

function Contact() {
  const t = useTranslate();

  return (
    <div className={`page-container ${styles.pageContainer}`}>
      <div className={styles.contactContainer}>
        <section className={styles.introSection}>
          <div className={styles.introCopy}>
            <h1 className={styles.title}>{t("home.contact.title")}</h1>
            <p className={styles.description}>
              {t("home.contact.description")}
            </p>
          </div>
          <img
            className={styles.contactImage}
            src="https://cdn.veejablonska.com/Przyszły.avif"
            alt={t("home.contact.image_alt")}
          />
        </section>

        <section className={styles.processSection}>
          <motion.h2
            className={styles.processTitle}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {t("contact.process.title")}
          </motion.h2>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <motion.article
                className={styles.processCard}
                key={step}
                initial={{ y: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 2,
                }}
              >
                <h3 className={styles.processCardTitle}>
                  {t(`contact.process.steps.${step}.title`)}
                </h3>
                <p className={styles.processCardDescription}>
                  {t(`contact.process.steps.${step}.description`)}
                </p>
                <span className={styles.processCardNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formColumn}>
            <ContactForm />
            <div className={styles.submitContainer}>
              <motion.button
                type="submit"
                form="contact-form"
                className={styles.submitButton}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {t("contact.form_submit")}
              </motion.button>
            </div>
          </div>
          <div className={styles.formGuidance}>
            <h2 className={styles.guidanceTitle}>
              {t("contact.guidance.title")}
            </h2>
            <p className={styles.guidanceIntro}>
              {t("contact.guidance.intro")}
            </p>
            <ul className={styles.guidanceList}>
              {t("contact.guidance.items").map(({ title, description }) => (
                <li key={title}>
                  <strong>{title}</strong> {description}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
