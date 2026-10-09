import React from "react";
import GalleryImage from "./GalleryImage";
import styles from "./homeScreenGallery.module.css";

function HomeScreenGallery() {
  return (
    <div className={styles.galleryContainer}>
      <GalleryImage className={styles.galleryItem} imageNumber={1} />
      <GalleryImage className={styles.galleryItem} imageNumber={2} />
      <GalleryImage className={styles.galleryItem} imageNumber={3} />
      <GalleryImage className={styles.galleryItem} imageNumber={5} />
    </div>
  );
}

export default HomeScreenGallery;
