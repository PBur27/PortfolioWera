import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import styles from "./galleryGridStyle.module.css";

function ContentRowSmall({ type, element1, element2, element3, lazy }) {
  console.log("small row: " + element1, element2, element3);





  const typeClass = type === "projects" ? styles.smallProjects : styles.smallPhotos;

  return (
    <div className={`${styles.gridRow} ${styles.small}`} >
      <div className={styles.gridCell}>
        <div className={`${styles.imgWrap} ${typeClass}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`}
            className={styles.gridImage}
            alt={element1.alt || ""}
            loading={lazy ? "lazy" : undefined}
            
          />
        </div>
      </div>
      <div className={styles.gridCell}>
        <div className={`${styles.imgWrap} ${typeClass}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`}
            className={styles.gridImage}
            alt={element2.alt || ""}
            loading={lazy ? "lazy" : undefined}
            
          />
        </div>
      </div>
      <div className={styles.gridCell}>
        <div className={`${styles.imgWrap} ${typeClass}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element3.src}`}
            className={styles.gridImage}
            alt={element3.alt || ""}
            loading={lazy ? "lazy" : undefined}
            
          />
        </div>
      </div>
    </div>
  );
}

export default ContentRowSmall;
