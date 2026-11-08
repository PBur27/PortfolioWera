import React, { useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useTranslate } from "../../context/LanguageContext";
import HomeScreenGallery from "./HomeScreenGallery";
import HowCanIHelp from "./HowCanIHelp";
import styles from "./homeScreenContent.module.css";

const MotionLink = motion.create(Link);

function HomeScreenContent() {
  const t = useTranslate();
  const videoRef = useRef(null);

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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              mass: 1,
            }}
          >
            {t("home.intro.button")}
          </MotionLink>
        </motion.div>
        <motion.video
          ref={videoRef}
          className={styles.introImage}
          src="https://cdn.veejablonska.com/HomeScreenPoster.mp4"
          poster="https://cdn.veejablonska.com/RYBY%20BILLBOARD%20PODWOJNY.avif"
          loop
          muted
          playsInline
          preload="auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          onViewportEnter={() => {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
          }}
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
        <motion.div
          className={styles.contactCopy}
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
          <h2 className={styles.contactTitle}>{t("home.contact.title")}</h2>
          <p className={styles.contactDescription}>
            {t("home.contact.description")}
          </p>
          <MotionLink
            className={styles.button}
            to="/contacts"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              mass: 1,
            }}
          >
            {t("home.contact.button")}
          </MotionLink>
        </motion.div>
        <motion.img
          className={styles.contactImage}
          src="https://cdn.veejablonska.com/Przyszły.avif"
          alt={t("home.contact.image_alt")}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
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
    </div>
  );
}

export default HomeScreenContent;