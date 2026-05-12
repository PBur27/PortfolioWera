import React from "react";
import "./aboutMeSection.css";

const AboutMeSection = ({ title, subtext, children, imageComponent, textContainerClass = "text-container-large" }) => {
  return (
    <div className="content-row">
      <div className={textContainerClass}>
        <h1 className="title">{title}</h1>
        {subtext && <div className="title-subtext">{subtext}</div>}
        {children}
      </div>
      {imageComponent}
    </div>
  );
};

export default AboutMeSection;