import React from "react";

function ProjectTriangleCell({ content }) {
  const numberOfImagesToDisplay = Object.keys(content).length;
  console.log(numberOfImagesToDisplay, "images", content);
  if (numberOfImagesToDisplay === 2) {
    console.warn("bad image count");
    return;
  }

  return (
    <div className="cellGroup">
      <div className="cellMain"></div>
      <div className="cellRow"></div>
    </div>
  );
}

export default ProjectTriangleCell;
