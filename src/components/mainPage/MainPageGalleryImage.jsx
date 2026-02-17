import React from "react";

import "./mainPageGallery.css";

function MainPageGalleryImage({ imageNumber }) {
  const imageSrc = new URL(
    `../../assets/mainPageImage${imageNumber}.png`,
    import.meta.url
  ).href;

  const isWide = imageNumber === 3;

  return (
    <div className="gallery-item">
      <img
        src={imageSrc}
        alt={`Gallery image ${imageNumber}`}
        className={`
          rotating-image${imageNumber} 
          gallery-image-base 
          ${isWide ? "gallery-image-wide" : ""}
        `}
      />
    </div>
  );
}

export default MainPageGalleryImage;