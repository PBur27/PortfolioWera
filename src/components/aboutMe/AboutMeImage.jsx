import React from "react";
import "../../pages/aboutMe.css"

function AboutMeImage({ size = "", image1, image2 }) {
  return (
    <div className={`image-container-${size}`}>
      <img className="image" src={image1} alt="" />
      
    </div>
  );
}

export default AboutMeImage;
