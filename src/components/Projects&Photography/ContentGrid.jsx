import React from "react";
import ProjectCard from "./ProjectCard";
import PhotoCard from "./PhotoCard";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./contentGrid.module.css";

function ContentGrid({ type, content,setActiveProject }) {
  const isMobile = useMediaQuery("(max-width: 900px)");
  let occupiedColumns = 0;
  let columnIndex = 0;

  const contentWithEntryDelay = content.map((item) => {
    const itemColumns =
      item.size === "small" ? (isMobile ? 3 : 2) : isMobile ? 6 : 3;

    if (occupiedColumns + itemColumns > 6) {
      occupiedColumns = 0;
      columnIndex = 0;
    }

    const entryDelay = columnIndex * 0.15;
    occupiedColumns += itemColumns;
    columnIndex += 1;

    if (occupiedColumns === 6) {
      occupiedColumns = 0;
      columnIndex = 0;
    }

    return { item, entryDelay };
  });

  return (
    <div
      className={`${styles.gridContainer} ${
        type === "photos" ? styles.gridContainerPhotos : ""
      }`}
    >
      {type == "projects"
        ? contentWithEntryDelay.map(({ item, entryDelay }) => (
            <ProjectCard
              key={item.id}
              data={item}
              priorityLoad={item.id <= 4}
              entryDelay={entryDelay}
              setActiveProject={setActiveProject}
            />
          ))
        : contentWithEntryDelay.map(({ item, entryDelay }) => (
            <PhotoCard
              key={item.id}
              data={item}
              priorityLoad={item.id <= 4}
              entryDelay={entryDelay}
            />
          ))}
    </div>
  );
}

export default ContentGrid;
