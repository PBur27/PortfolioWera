import React from "react";
import styles from "./aboutMeSection.module.css";

const AboutMeSection = ({ title, subtext, children, imageComponent, textContainerClass = "textContainerLarge" }) => {
  return (
    <div className={styles.contentRow}>
      <div className={styles[textContainerClass]}>
        <h1 className={styles.title}>{title}</h1>
        {subtext && <div className="title-subtext">{subtext}</div>}
        {children}
      </div>
      {imageComponent}
    </div>
  );
};

export default AboutMeSection;