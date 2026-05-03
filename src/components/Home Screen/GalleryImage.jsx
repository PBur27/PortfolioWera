import React from "react";

import "./galleryImage.css";

const images = {
  1: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery1.avif",
  2: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery2.avif",
  3: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery3.avif",
  4: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery4.avif",
  5: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery5.avif",
  6: "https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/Gallery6.avif",
};

function MainPageGalleryImage({ imageNumber }) {
  const isWide = imageNumber === 3;

  return (
    <div className="gallery-item">
      <img
        src={images[imageNumber]}
        alt={`Gallery image ${imageNumber}`}
        className={`gallery-image ${isWide ? "gallery-image wide" : ""} rotating-image${imageNumber} `}
      />
    </div>
  );
}

export default MainPageGalleryImage;
