import React from "react";
import styles from "./activeProjectModal.module.css";

function ActiveProjectModal({ project, setActiveProject }) {
  return (
    <div className={styles.overlay} onClick={() => setActiveProject(null)}>
      <div className={styles.imageCard} onClick={(event) => event.stopPropagation()}>
        <img className={styles.image} src={`https://cdn.veejablonska.com/${project.src}`}/>
        <h2 className={styles.imageSubtext}>{project.name}</h2>
      </div>
    </div>
  );
}

export default ActiveProjectModal;
