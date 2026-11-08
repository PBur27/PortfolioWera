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
            src={`https://cdn.veejablonska.com/${image}`}
            alt=""
            loading={index <= 3 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

export default ProjectGrid;
