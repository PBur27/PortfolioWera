import React, { useState } from "react";
import styles from "./galleryGridStyle.module.css";

function ContentRowSmall({ type, element1, element2, element3, lazy }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const typeClass =
    type === "projects" ? styles.smallProjects : styles.smallPhotos;

  const handleImageClick = (element) => {
    setSelectedImage(element);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className={`${styles.gridRow} ${styles.small}`}>
        <div className={styles.gridCell}>
          <div className={`${styles.imgWrap} ${typeClass}`}>
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`}
              className={styles.gridImage}
              alt={element1.alt || ""}
              loading={lazy ? "lazy" : undefined}
              onClick={() => handleImageClick(element1)}
            />
          </div>
        </div>
        <div className={styles.gridCell}>
          <div className={`${styles.imgWrap} ${typeClass}`}>
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`}
              className={styles.gridImage}
              alt={element2.alt || ""}
              loading={lazy ? "lazy" : undefined}
              onClick={() => handleImageClick(element2)}
            />
          </div>
        </div>
        <div className={styles.gridCell}>
          <div className={`${styles.imgWrap} ${typeClass}`}>
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element3.src}`}
              className={styles.gridImage}
              alt={element3.alt || ""}
              loading={lazy ? "lazy" : undefined}
              onClick={() => handleImageClick(element3)}
            />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className={styles.imageModalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.imageModalContent}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${selectedImage.src}`}
              alt={selectedImage.alt || ""}
              className={styles.imageModalImage}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ContentRowSmall;
