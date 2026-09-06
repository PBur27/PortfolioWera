import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./aboutMeImage.module.css";

function AboutMeImage({ image1, image2 }) {
  const [isOneFront, setIsOneFront] = useState(true);

  const moveAndStayBack = {
    x: ["0", "-60%", "0%"],
    y: ["0", "-10%", "0%"],
    z: [20, 0, -20],
  };

  const moveAndStayFront = {
    x: ["0", "10%", "0%"],
    y: ["0", "10%", "0%"],
    z: [-20, 0, 20],
  };

  const transition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div
      className={styles.imageContainer}
      onClick={() => setIsOneFront((prev) => !prev)}
    >
      <motion.img
        className={styles.aboutImage}
        src={image1}
        alt=""
        initial={false}
        animate={isOneFront ? moveAndStayFront : moveAndStayBack}
        transition={transition}
      />
      <motion.img
        className={styles.aboutImage}
        src={image2}
        alt=""
        initial={false}
        animate={!isOneFront ? moveAndStayFront : moveAndStayBack}
        transition={transition}
      />
    </div>
  );
}

export default AboutMeImage;
