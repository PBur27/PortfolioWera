import React from "react";
import { useTranslate } from "../../context/LanguageContext";
import styles from "./homeScreenContent.module.css";

const services = ["branding", "packaging", "posters", "photography"];

function HowCanIHelp() {
  const t = useTranslate();

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.servicesTitle}>{t("home.services.title")}</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <article className={styles.serviceCard} key={service}>
            <h3 className={styles.serviceTitle}>
              {t(`home.services.cards.${service}.title`)}
            </h3>
            <p className={styles.serviceDescription}>
              {t(`home.services.cards.${service}.description`)}
            </p>
            <span className={styles.serviceNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HowCanIHelp;
