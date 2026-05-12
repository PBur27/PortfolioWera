import React from "react";

function ProjectTriangleCell({  number, content }) {
  const numberOfImagesToDisplay = Object.keys(content).length;
  console.log(numberOfImagesToDisplay, "images inside the triplet number ", number,":", content);
  if (numberOfImagesToDisplay === 2) {
    console.warn("bad image count");
    return null;
  }

  const transitionName = "hero-"+content.transitionName;
  console.log("transitionName for cell ", number, ":", transitionName);

  return (
    <div className="cell-group">
      <div className="cell-main">
        <div className="cell-image-wrapper">
          <img
            style={number === 0 ? { viewTransitionName: transitionName } : {}}
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${content.image_0}`}
          />
        </div>
      </div>
      {numberOfImagesToDisplay === 3 ? (
        <div className="cell-row">
          <div className="cell-image-wrapper">
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${content.image_1}`}
            />
          </div>
          <div className="cell-image-wrapper">
            <img
              src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${content.image_2}`}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectTriangleCell;
