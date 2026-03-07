import React from "react";
import smile from "../assets/aboutMeSmile.png";
import ContentGrid from "../components/projects&photos/ContentGrid";

function Photography() {
  const contentToDisplay = [
    { id: 1, src: "DSC_0905.webp" },
    { id: 2, src: "DSC_017712.webp" },
    { id: 3, src: "23.07.25.t3_0470.webp" },
    { id: 4, src: "26.07.25.t3_0036.webp" },
    { id: 5, src: "DSC.29.07.25_0411.webp" },
    { id: 6, src: "DSC.29.07.25_0655.webp" },
    { id: 7, src: "DSC_0004.webp" },
    { id: 8, src: "DSC_0027.webp" },
    { id: 9, src: "DSC_0029.webp" },
    { id: 10, src: "DSC_0041.webp" },
    { id: 11, src: "DSC_0057.webp" },
    { id: 12, src: "DSC_0070.webp" },
    { id: 13, src: "DSC_0108.11.02.25.webp" },
    { id: 14, src: "DSC_0121.13.02.25.webp" },
    { id: 15, src: "DSC_0148.webp" },
    { id: 16, src: "DSC_0167.webp" },
    { id: 17, src: "DSC_0176.14.02.25.webp" },
    { id: 18, src: "DSC_0179.webp" },
    { id: 19, src: "DSC_0324.webp" },
    { id: 20, src: "DSC_0403.10.02.25.webp" },
    { id: 21, src: "DSC_0407.webp" },
    { id: 22, src: "DSC_0545.webp" },
    { id: 23, src: "DSC_0773.webp" },
    { id: 24, src: "DSC_0861.webp" },
  ];
  return (
    <>
      <div className="top-image-container">
        <img src={smile} className="top-image" />
      </div>
      <div className="content">
        <ContentGrid type="photos" content={contentToDisplay} largeRows={12} smallRows={0} />
      </div>
    </>
  );
}

export default Photography;
