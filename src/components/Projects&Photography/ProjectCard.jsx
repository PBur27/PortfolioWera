import React, { useState } from "react";
import { motion } from "motion/react";
import styles from "./projectCard.module.css";
import { useNavigate } from "react-router";

function ProjectCard({ data, priorityLoad, entryDelay = 0, setActiveProject}) {

  const image = data?.image ?? data?.imageSrc ?? data?.src;
  const name = data?.name ?? data?.title;
  const type = data?.type ?? data?.category;
  const size = data?.size === "large" ? "large" : "small";

  let navigate = useNavigate();

  const animation = {
    initial: {
      y: 40,
      opacity: 0,
    },
    entry: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: entryDelay,
      },
    },
    viewport: {
      once: true,
      amount: 0.2,
    },
  };

  const navigateToProjectDetails = () => {
    navigate(`/projects/${data.name}`);
  };

  const expandProjectImage = () => {
    setActiveProject(data)
  };

  return (
    <motion.article
      className={`${styles.projectCard} ${styles[`projectCard${size === "large" ? "Large" : "Small"}`]}`}
      initial={animation.initial}
      whileInView={animation.entry}
      viewport={animation.viewport}
      onClick={size === "large" ? navigateToProjectDetails : expandProjectImage}
    >
      <img
        className={styles.projectCardImage}
        src={"https://cdn.veejablonska.com/" + image}
        alt={name ?? ""}
        loading={priorityLoad ? "eager" : "lazy"}
      />
      <div className={styles.projectCardContent}>
        <h3 className={styles.projectCardName}>{name}</h3>
        {type && <span className={styles.projectCardType}>{type}</span>}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
