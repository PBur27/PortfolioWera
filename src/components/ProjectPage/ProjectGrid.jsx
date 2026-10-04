import React from "react";
import styles from "./projectGrid.module.css";

function ProjectGrid({ images, transitionName }) {
  const viewTransitionName = `hero-${transitionName}`;

  return (
    <div className={styles.projectGalleryGrid}>
      {images.map((image, index) => (
        <div className={styles.imageItem} key={image}>
          <img
            style={index === 0 ? { viewTransitionName } : undefined}
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${image}`}
            alt=""
            loading={index <= 3 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
