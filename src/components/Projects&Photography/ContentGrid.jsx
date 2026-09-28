import React from "react";
import ProjectCard from "./ProjectCard";
import PhotoCard from "./PhotoCard";

import styles from "./contentGrid.module.css";

function ContentGrid({ type, content }) {
  return (
    <div className={styles.gridContainer}>
      {type == "projects"
        ? content.map((item) => (
            <ProjectCard
              key={item.id}
              data={item}
              priorityLoad={item.id <= 4}
            />
          ))
        : content.map((item) => (
            <PhotoCard key={item.id} data={item} priorityLoad={item.id <= 4} />
          ))}
    </div>
  );
}

export default ContentGrid;
