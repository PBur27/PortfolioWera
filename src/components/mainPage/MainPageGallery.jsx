import React from "react";
import MainPageGalleryImage from "./MainPageGalleryImage";
import "./mainPageGallery.css";
import { useLanguage, useT } from "../../LanguageContext";

function MainPageGallery() {
  const language = useLanguage();
  const t = useT();


  return (
    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-item is-text">
          <div className="gallery-text-wrapper">
            <h1 className="gallery-title">{t('home.title')}</h1>
            <p className="gallery-subtitle">
              {t('home.subtitle_first_line')}
              <br />
              {t('home.subtitle_second_line')}
            </p>
          </div>
        </div>
        <MainPageGalleryImage imageNumber={1} />
        <MainPageGalleryImage imageNumber={2} />
      </div>

      <div className="gallery-row">
        <MainPageGalleryImage imageNumber={4} />
        <MainPageGalleryImage imageNumber={3} />
        <MainPageGalleryImage imageNumber={5} />
      </div>
    </div>
  );
}

export default MainPageGallery;
