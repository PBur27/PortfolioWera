import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./aboutMeImage.module.css";

function AboutMeImage({ image1, image2, layout }) {
  const [isOneFront, setIsOneFront] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  const animationVariants = {
    Vertical: {
      restFront: {
        x: "-6%",
        y: "2%",
        rotate: -2,
        z: 1,
      },

      restBack: {
        x: "6%",
        y: "-2%",
        rotate: 6,
        z: -1,
      },

      animateToBack: {
        x: ["-6%", "-96%", "6%"],
        y: ["2%", "-12%", "-2%"],
        rotate: [-2, -12, 6],
        z: [1, 0, -1],
      },

      animateToFront: {
        x: ["6%", "24%", "-6%"],
        y: ["-2%", "12%", "2%"],
        rotate: [6, 2, -2],
        z: [-1, 0, 1],
      },
    },
    Horizontal: {
      restFront: {
        x: "0%",
        y: "0%",
        rotate: 0,
        z: 1,
      },

      restBack: {
        x: "-5%",
        y: "0%",
        rotate: 0,
        z: -1,
      },

      animateToBack: {
        x: ["0%", "-60%", "-5%"],
        y: ["0%", "-10%", "0%"],
        rotate: [0, 0, 0],
        z: [1, 0, -1],
      },

      animateToFront: {
        x: ["-5%", "10%", "0%"],
        y: ["0%", "10%", "0%"],
        rotate: [0, 0, 0],
        z: [-1, 0, 1],
      },
    },
  };

  const transition = {
    duration: 1,
    ease: "easeInOut",
  };

  const handleClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsOneFront((prev) => !prev);
  };

  return (
    <div
      className={
        layout === "Horizontal"
          ? styles.imageContainerHorizontal
          : styles.imageContainerVertical
      }
      onClick={handleClick}
    >
      <motion.img
        className={
          layout === "Horizontal"
            ? styles.aboutImageHorizontal
            : styles.aboutImageVertical
        }
        src={image1}
        alt=""
        initial={false}
        animate={
          hasInteracted
            ? isOneFront
              ? animationVariants[layout].animateToFront
              : animationVariants[layout].animateToBack
            : animationVariants[layout].restFront
        }
        transition={transition}
      />
      <motion.img
        className={
          layout === "Horizontal"
            ? styles.aboutImageHorizontal
            : styles.aboutImageVertical
        }
        src={image2}
        alt=""
        initial={false}
        animate={
          hasInteracted
            ? !isOneFront
              ? animationVariants[layout].animateToFront
              : animationVariants[layout].animateToBack
            : animationVariants[layout].restBack
        }
        transition={transition}
      />
    </div>
  );
}

export default AboutMeImage;
