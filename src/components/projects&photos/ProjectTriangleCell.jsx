import React from "react";

function ProjectTriangleCell({ content }) {
  const numberOfImagesToDisplay = Object.keys(content).length;
  console.log(numberOfImagesToDisplay, "images", content);
  if (numberOfImagesToDisplay === 2) {
    console.warn("bad image count");
    return null;
  }

  return (
    <div className="cell-group">
      <div className="cell-main">
        <div className="cell-image-wrapper"><img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${content.image_0}`} /></div>
      </div>
      {numberOfImagesToDisplay === 3 ? <div className="cell-row">
        <div className="cell-image-wrapper"><img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${content.image_1}`} /></div>
        <div className="cell-image-wrapper"><img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${content.image_2}`} /></div>
      </div> : null}
      
    </div>
  );
}

export default ProjectTriangleCell;
