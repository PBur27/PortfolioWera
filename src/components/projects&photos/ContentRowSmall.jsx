import React from "react";
import { Row } from "react-bootstrap";

function ContentRowSmall({type, element1, element2, element3 }) {
  console.log("small row: " + element1, element2, element3);
  return (
    <div className="grid-row small">
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${element1.src}`} className="grid-image" alt={element1.alt || ""} />
        </div>
      </div>
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${element2.src}`} className="grid-image" alt={element2.alt || ""} />
        </div>
      </div>
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <img src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/projects/${element3.src}`} className="grid-image" alt={element3.alt || ""} />
        </div>
      </div>
    </div>
  );
}

export default ContentRowSmall;
