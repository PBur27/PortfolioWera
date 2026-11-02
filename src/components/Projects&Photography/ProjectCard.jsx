import React from "react";
import { motion } from "motion/react";
import styles from "./projectCard.module.css";
import { useNavigate } from "react-router";
import { useTranslate } from "../../context/LanguageContext";

function ProjectCard({ data, priorityLoad, entryDelay = 0, setActiveProject}) {

  const image = data?.image ?? data?.imageSrc ?? data?.src;
  const name = data?.name ?? data?.title;
  const displayName = data?.displayName ?? name;
  const t = useTranslate();
  const translatedName = t(`projects.${name}.title`);
  const cardName =
    translatedName === `projects.${name}.title` ? displayName : translatedName;
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
      <motion.img
        className={styles.projectCardImage}
        src={"https://cdn.veejablonska.com/" + image}
        alt={cardName ?? ""}
        layoutId={`project-image-${data.id ?? name ?? image}`}
        transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
        style={
          data?.transitionName
            ? { viewTransitionName: `hero-${data.transitionName}` }
            : undefined
        }
        loading={priorityLoad ? "eager" : "lazy"}
      />
      {size == 'large' ? <div className={styles.projectCardContent}>
        <h3 className={styles.projectCardName}>{cardName}</h3>
        {type && <span className={styles.projectCardType}>{type}</span>}
      </div> : null}
      
    </motion.article>
  );
}

export default ProjectCard;
