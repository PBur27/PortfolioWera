import React from "react";
import MainPageGalleryImage from "./MainPageGalleryImage";
import "./mainPageGallery.css";

function MainPageGallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-row">
        <div className="gallery-item is-text">
          <div className="gallery-text-wrapper">
            <h1 className="gallery-title">CZEŚĆ!</h1>
            <p className="gallery-subtitle">
              Masz pomysł? Sprawdź co tworzę
              <br /> i zróbmy razem coś niesamowitego!
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