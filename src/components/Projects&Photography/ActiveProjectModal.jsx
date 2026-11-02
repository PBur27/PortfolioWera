import React from "react";
import { motion } from "motion/react";
import styles from "./activeProjectModal.module.css";

function ActiveProjectModal({ project, setActiveProject }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      onClick={() => setActiveProject(null)}
    >
      <div className={styles.imageCard} onClick={(event) => event.stopPropagation()}>
        <motion.img
          className={styles.image}
          src={`https://cdn.veejablonska.com/${project.src}`}
          alt={project.displayName ?? project.name ?? ""}
          layoutId={`project-image-${project.id ?? project.name ?? project.src}`}
          transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
        />
        <h2 className={styles.imageSubtext}>{project.displayName ?? project.name}</h2>
      </div>
    </motion.div>
  );
}

export default ActiveProjectModal;
