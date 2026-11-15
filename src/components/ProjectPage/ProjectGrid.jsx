import React from "react";
import styles from "./projectGrid.module.css";
import { motion } from "motion/react";

function ProjectGrid({ images, transitionName }) {
  const viewTransitionName = `hero-${transitionName}`;

  return (
    <div className={styles.projectGalleryGrid}>
      {images.map((image, index) => (
        <motion.div
          className={styles.imageItem}
          key={image}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            style={index === 0 ? { viewTransitionName } : undefined}
            src={`https://cdn.veejablonska.com/${image}`}
            alt=""
            loading={index <= 3 ? "eager" : "lazy"}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectGrid;
