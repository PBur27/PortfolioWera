import React from "react";

import ContentGrid from "../components/projects&photos/ContentGrid";
import TopIcon from "../components/TopIcon";

function Photography() {
  const contentToDisplay = [
    { id: 1, src: "DSC_0905.avif" },
    { id: 2, src: "DSC_017712.avif" },
    { id: 3, src: "23.07.25.t3_0470.avif" },
    { id: 4, src: "26.07.25.t3_0036.avif" },
    { id: 5, src: "DSC.29.07.25_0411.avif" },
    { id: 6, src: "DSC.29.07.25_0655.avif" },
    { id: 7, src: "DSC_0004.avif" },
    { id: 8, src: "DSC_0027.avif" },
    { id: 9, src: "DSC_0029.avif" },
    { id: 10, src: "DSC_0041.avif" },
    { id: 11, src: "DSC_0057.avif" },
    { id: 12, src: "DSC_0070.avif" },
    { id: 13, src: "DSC_0108.11.02.25.avif" },
    { id: 14, src: "DSC_0121.13.02.25.avif" },
    { id: 15, src: "DSC_0148.avif" },
    { id: 16, src: "DSC_0167.avif" },
    { id: 17, src: "DSC_0176.14.02.25.avif" },
    { id: 18, src: "DSC_0179.avif" },
    { id: 19, src: "DSC_0324.avif" },
    { id: 20, src: "DSC_0403.10.02.25.avif" },
    { id: 21, src: "DSC_0407.avif" },
    { id: 22, src: "DSC_0545.avif" },
    { id: 23, src: "DSC_0773.avif" },
    { id: 24, src: "DSC_0861.avif" },
  ];
  return (
    <>
      <TopIcon image={'photo'} />
      <div className="content">
        <ContentGrid type="photos" content={contentToDisplay} largeRows={12} smallRows={0} />
      </div>
    </>
  );
}

export default Photography;
