import React from "react";
import { motion } from "motion/react";
import { useTranslate } from "../../context/LanguageContext";
import styles from "./homeScreenContent.module.css";

const services = ["branding", "packaging", "posters", "photography"];

function HowCanIHelp() {
  const t = useTranslate();

  return (
    <section className={styles.servicesSection}>
      <motion.h2
        className={styles.servicesTitle}
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {t("home.services.title")}
      </motion.h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.article
            className={styles.serviceCard}
            key={service}
            initial={{ y: index % 2 === 0 ? 20 : -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 2 }}
          >
            <h3 className={styles.serviceTitle}>
              {t(`home.services.cards.${service}.title`)}
            </h3>
            <p className={styles.serviceDescription}>
              {t(`home.services.cards.${service}.description`)}
            </p>
            <span className={styles.serviceNumber}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default HowCanIHelp;
