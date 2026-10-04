import React from "react";
import { motion } from "motion/react";
import styles from "./photoCard.module.css";

function PhotoCard({ data, priorityLoad, entryDelay = 0 }) {
  const image = data?.image ?? data?.imageSrc ?? data?.src;

  return (
    <motion.article
      className={`${styles.photoCard} ${styles.photoCardLarge}`}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: entryDelay,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        className={styles.photoCardImage}
        src={"https://cdn.veejablonska.com/" + image}
        alt={data?.alt ?? ""}
        loading={priorityLoad ? "eager" : "lazy"}
      />
    </motion.article>
  );
}

export default PhotoCard;
