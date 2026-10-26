import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useTranslate } from "../../context/LanguageContext";
import HomeScreenGallery from "./HomeScreenGallery";
import HowCanIHelp from "./HowCanIHelp";
import styles from "./homeScreenContent.module.css";

const MotionLink = motion.create(Link);

function HomeScreenContent() {
  const t = useTranslate();

  return (
    <div className={styles.homeContent}>
      <section className={styles.introSection}>
        <motion.div
          className={styles.introCopy}
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.1,
          }}
        >
          <h2 className={styles.introTitle}>{t("home.intro.title")}</h2>
          <p className={styles.introDescription}>
            {t("home.intro.description")}
          </p>
          <MotionLink
            className={styles.button}
            to="/projects"
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t("home.intro.button")}
          </MotionLink>
        </motion.div>
        <motion.img
          className={styles.introImage}
          src="https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/HomeScreenPoster.avif"
          alt={t("home.intro.image_alt")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: "spring",
            mass: 1,
            stiffness: 40,
            damping: 13,
            delay: 0.1,
          }}
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
          <MotionLink
            className={styles.button}
            to="/contacts"
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t("home.contact.button")}
          </MotionLink>
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
