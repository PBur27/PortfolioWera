import React from "react";
import { motion } from "motion/react";
import styles from "./photoCard.module.css";

function PhotoCard({
  data,
  priorityLoad,
  entryDelay = 0,
  setActiveContent,
}) {
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
      onClick={() => setActiveContent(data)}
    >
      <motion.img
        className={styles.photoCardImage}
        src={"https://cdn.veejablonska.com/" + image}
        alt={data?.alt ?? ""}
        layoutId={`photo-image-${data?.id ?? image}`}
        transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
        loading={priorityLoad ? "eager" : "lazy"}
      />
    </motion.article>
  );
}

export default PhotoCard;
