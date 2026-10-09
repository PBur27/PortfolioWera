import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useTranslate } from "../../context/LanguageContext";
import placeholderProjectVertical from "../../assets/placeholderProjectVertical.png";
import HomeScreenGallery from "./HomeScreenGallery";
import HowCanIHelp from "./HowCanIHelp";
import styles from "./homeScreenContent.module.css";

function HomeScreenContent() {
  const t = useTranslate();

  return (
    <div className={styles.homeContent}>
      <section className={styles.introSection}>
        <div className={styles.introCopy}>
          <motion.div
            initial={{}}
            whileInView={{}}
            viewport={{ once: true }}
          >
            <h2 className={styles.introTitle}>{t("home.intro.title")}</h2>
            <p className={styles.introDescription}>
              {t("home.intro.description")}
            </p>
          </motion.div>
          <Link className={styles.button} to="/projects">
            {t("home.intro.button")}
          </Link>
        </div>
        <img
          className={styles.introImage}
          src="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/HomeScreenPoster.avif"
          alt={t("home.intro.image_alt")}
        />
      </section>

      <HomeScreenGallery />
      <HowCanIHelp />

      <section className={styles.contactSection}>
        <div className={styles.contactCopy}>
          <h2 className={styles.contactTitle}>{t("home.contact.title")}</h2>
          <p className={styles.contactDescription}>
            {t("home.contact.description")}
          </p>
          <Link className={styles.button} to="/contacts">
            {t("home.contact.button")}
          </Link>
        </div>
        <img
          className={styles.contactImage}
          src="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Przyszły.avif"
          alt={t("home.contact.image_alt")}
        />
      </section>
    </div>
  );
}

export default HomeScreenContent;
