import React from "react";
import MainPageGalleryImage from "./MainPageGalleryImage";
import "./mainPageGallery.css";
import { useLanguage } from "../../LanguageContext";

function MainPageGallery() {
  const language = useLanguage();

  const strings = {
    title: language === "pl" ? "Cześć!" : "Hello!",
    descriptionFirstLine:
      language === "pl"
        ? "Masz pomysł? Sprawdź co tworzę"
        : "Have any ideas? Check out my work.",
    descriptionSecondLine:
      language === "pl"
        ? "i zróbmy razem coś niesamowitego!"
        : "Let us create something amazing together!",
  };

  return (
    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-item is-text">
          <div className="gallery-text-wrapper">
            <h1 className="gallery-title">{strings.title}</h1>
            <p className="gallery-subtitle">
              {strings.descriptionFirstLine}
              <br />
              {strings.descriptionSecondLine}
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
