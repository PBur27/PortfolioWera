import React from "react";
import MainPageGalleryImage from "./GalleryImage";
import styles from "./homeScreenGallery.module.css";
import { useLanguage, useTranslate } from "../../context/LanguageContext";

function HomeScreenGallery() {
  const language = useLanguage();
  const t = useTranslate();

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.galleryRow}>
        <div className={`${styles.galleryItem} ${styles.isText}`}>
          <div className={styles.galleryTextWrapper}>
            <h1 className={styles.galleryTitle}>{t("home.title")}</h1>
            <p className={styles.gallerySubtitle}>
              {t("home.subtitle_first_line")}
              <br />
              {t("home.subtitle_second_line")}
            </p>
          </div>
        </div>
        <MainPageGalleryImage imageNumber={1} />
        <MainPageGalleryImage imageNumber={2} />
      </div>

      <div className={styles.galleryRow}>
        <MainPageGalleryImage imageNumber={4} />
        <MainPageGalleryImage imageNumber={3} />
        <MainPageGalleryImage imageNumber={5} />
      </div>
    </div>
  );
}

export default HomeScreenGallery;
