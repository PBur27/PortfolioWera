
import React, { useState } from "react";
import "../../pages/pages.css";

function AboutMeImage({ size = "large", image1, image2 }) {
  const [imageOneIsFront, setImageOneIsFront] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const imageSwap = () => {
    if (isAnimating) return;

    setIsAnimating(true);


    setTimeout(() => {
      setImageOneIsFront((prev) => !prev);
    }, 300);


    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className={`image-container-${size}`} onClick={imageSwap}>
      <img
        className={`about-image 
          ${imageOneIsFront ? "is-front" : "is-back"} 
          ${isAnimating ? "shift-left" : ""}
        `}
        src={image1}
        alt=""
      />
      <img
        className={`about-image 
          ${imageOneIsFront ? "is-back" : "is-front"} 
          ${isAnimating ? "shift-right" : ""}
        `}
        src={image2}
        alt=""
      />
    </div>
  );
}

export default AboutMeImage;