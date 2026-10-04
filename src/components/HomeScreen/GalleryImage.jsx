import React from "react";

import styles from "./galleryImage.module.css";

const images = {
  1: "https://cdn.veejablonska.com/Gallery1.avif",
  2: "https://cdn.veejablonska.com/Gallery2.avif",
  3: "https://cdn.veejablonska.com/Gallery3.avif",
  4: "https://cdn.veejablonska.com/Gallery4.avif",
  5: "https://cdn.veejablonska.com/Gallery5.avif",
  6: "https://cdn.veejablonska.com/Gallery6.avif",
};

function MainPageGalleryImage({ imageNumber }) {
  const isWide = imageNumber === 3;

  const handleTouch = () => {
    const imageElement = document.querySelector(
      `.rotating-image${imageNumber}`,
    );
    if (imageElement) {
      console.log("image " + imageNumber + " touch started");
      imageElement.classList.add("tapped");
      setTimeout(() => {
        imageElement.classList.remove("tapped");
      }, 1000);
    }
  };

  return (
    <div className={styles.galleryItem}>
      <img
        src={images[imageNumber]}
        alt={`Gallery image ${imageNumber}`}
        className={`${styles.galleryImage} ${isWide ? styles.wide : ""} rotating-image${imageNumber}`}
        onTouchStart={handleTouch}
      />
    </div>
  );
}

export default MainPageGalleryImage;
