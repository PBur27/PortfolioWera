import React from "react";
import styles from "./projectCard.module.css";

function ProjectCard({ data, priorityLoad }) {
  const image = data?.image ?? data?.imageSrc ?? data?.src;
  const name = data?.name ?? data?.title;
  const type = data?.type ?? data?.category;
  const size = data?.size === "large" ? "large" : "small";

  return (
    <article
      className={`${styles.projectCard} ${styles[`projectCard${size === "large" ? "Large" : "Small"}`]}`}
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
    </article>
  );
}

export default ProjectCard;
