import React from "react";
import { motion } from "motion/react";
import styles from "./activeContentModal.module.css";

function ActiveContentModal({ content, contentType, setActiveContent }) {
  const image = content?.image ?? content?.imageSrc ?? content?.src;
  const name = content?.displayName ?? content?.name;
  const layoutIdPrefix = contentType === "photo" ? "photo-image" : "project-image";
  const layoutId = `${layoutIdPrefix}-${content?.id ?? name ?? image}`;

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onClick={() => setActiveContent(null)}
    >
      <div
        className={`${styles.imageCard} ${
          contentType === "photo" ? styles.imageCardPhoto : styles.imageCardProject
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <motion.img
          className={styles.image}
          src={`https://cdn.veejablonska.com/${image}`}
          alt={content?.alt ?? name ?? ""}
          layoutId={layoutId}
          transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
        />
        {contentType === "project" && name && (
          <h2 className={styles.imageSubtext}>{name}</h2>
        )}
      </div>
    </motion.div>
  );
}

export default ActiveContentModal;
