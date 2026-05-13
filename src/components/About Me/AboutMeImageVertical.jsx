
import React, { useState } from "react";
import styles from "./aboutMeImage.module.css";

function AboutMeImageVertical({ size = "large", image1, image2 }) {
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

  const containerClass = size === "large" ? styles.imageContainerLarge : styles.imageContainerSmall;

  return (
    <div className={containerClass} onClick={imageSwap}>
      <img
        className={`${styles.aboutImage} ${imageOneIsFront ? styles.isFront : styles.isBack} ${isAnimating ? styles.shiftUp : ""}`}
        src={image1}
        alt=""
      />
      <img
        className={`${styles.aboutImage} ${imageOneIsFront ? styles.isBack : styles.isFront} ${isAnimating ? styles.shiftDown : ""}`}
        src={image2}
        alt=""
      />
    </div>
  );
}

export default AboutMeImageVertical;