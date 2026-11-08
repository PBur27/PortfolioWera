import React from "react";
import styles from "./topIcon.module.css";

function TopIcon({ image }) {
  return (
    <div className={styles.topIconContainer}>
      <img
        src={`https://cdn.veejablonska.com/${image}.avif`}
        className={styles.topIcon}
        alt="Smile"
      />
    </div>
  );
}

export default TopIcon;
