import React from "react";
import ProjectCard from "./ProjectCard";
import PhotoCard from "./PhotoCard";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./contentGrid.module.css";

function ContentGrid({ type, content, setActiveContent }) {
  const isMobile = useMediaQuery("(max-width: 900px)");

  if (type === "projects") {
    const largeProjects = content.filter((item) => item.size === "large");
    const smallProjects = content.filter((item) => item.size !== "large");
    const smallColumns = isMobile ? 2 : 3;

    return (
      <div className={styles.projectsGridContainer}>
        {largeProjects.length > 0 && (
          <div className={styles.largeProjectsGrid}>
            {largeProjects.map((item) => (
              <ProjectCard
                key={item.id}
                data={item}
                priorityLoad={item.id <= 4}
                setActiveContent={setActiveContent}
              />
            ))}
          </div>
        )}
        {smallProjects.length > 0 && (
          <div className={styles.gridContainer}>
            {smallProjects.map((item, index) => (
              <ProjectCard
                key={item.id}
                data={item}
                priorityLoad={item.id <= 4}
                entryDelay={(index % smallColumns) * 0.15}
                setActiveContent={setActiveContent}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${styles.gridContainer} ${
        type === "photos" ? styles.gridContainerPhotos : ""
      }`}
    >
      {content.map((item) => (
        <PhotoCard
          key={item.id}
          data={item}
          priorityLoad={item.id <= 4}
          setActiveContent={setActiveContent}
        />
      ))}
    </div>
  );
}

export default ContentGrid;
