import React from "react";
import styles from "./projectGridStyle.module.css";

function ProjectTriangleCell({ number, content }) {
  const { transitionName, ...imagesOnly } = content;
  
  const numberOfImagesToDisplay = Object.keys(imagesOnly).length;
  const viewTransitionName = `hero-${transitionName}`;

  console.log(`${numberOfImagesToDisplay} images in triplet ${number}. Transition: ${viewTransitionName}`);

  if (numberOfImagesToDisplay === 0) return null; 

  return (
    <div className={styles.cellGroup}>
      <div className={styles.cellMain}>
        <div className={styles.cellImageWrapper}>
          <img
            style={number === 0 ? { viewTransitionName: viewTransitionName } : {}}
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${imagesOnly.image_0}`}
            alt=""
          />
        </div>
      </div>

      {numberOfImagesToDisplay === 3 && (
        <div className={styles.cellRow}>
          <div className={styles.cellImageWrapper}>
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${imagesOnly.image_1}`}
              alt=""
            />
          </div>
          <div className="cell-image-wrapper">
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${imagesOnly.image_2}`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectTriangleCell;