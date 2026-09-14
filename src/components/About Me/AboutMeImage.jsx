import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./aboutMeImage.module.css";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

function AboutMeImage({ image1, image2, layout }) {
  const [isOneFront, setIsOneFront] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const desktopVariants = {
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
        rotate: -4,
        z: 1,
      },
      restBack: {
        x: "-5%",
        y: "-5%",
        rotate: 4,
        z: -1,
      },
      animateToBack: {
        x: ["0%", "-20%", "-5%"],
        y: ["0%", "64%", "-5%"],
        rotate: [-4, 16, 4],
        z: [1, 0, -1],
      },
      animateToFront: {
        x: ["-5%", "10%", "0%"],
        y: ["-5%", "-42%", "0%"],
        rotate: [4, 12, -4],
        z: [-1, 0, 1],
      },
    },
  };

  const mobileVariants = {
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
        x: ["-6%", "-56%", "6%"],
        y: ["2%", "-12%", "-2%"],
        rotate: [-2, 12, 6],
        z: [1, 0, -1],
      },
      animateToFront: {
        x: ["6%", "54%", "-6%"],
        y: ["-2%", "12%", "2%"],
        rotate: [6, 8, -2],
        z: [-1, 0, 1],
      },
    },
    Horizontal: {
      restFront: {
        x: "0%",
        y: "0%",
        rotate: -4,
        z: 1,
      },
      restBack: {
        x: "-5%",
        y: "-5%",
        rotate: 4,
        z: -1,
      },
      animateToBack: {
        x: ["0%", "-20%", "-5%"],
        y: ["0%", "64%", "-5%"],
        rotate: [-4, 16, 4],
        z: [1, 0, -1],
      },
      animateToFront: {
        x: ["-5%", "10%", "0%"],
        y: ["-5%", "-42%", "0%"],
        rotate: [4, 12, -4],
        z: [-1, 0, 1],
      },
    },
  };

  const currentVariants = isMobile ? mobileVariants : desktopVariants;

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
              ? currentVariants[layout].animateToFront
              : currentVariants[layout].animateToBack
            : currentVariants[layout].restFront
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
              ? currentVariants[layout].animateToFront
              : currentVariants[layout].animateToBack
            : currentVariants[layout].restBack
        }
        transition={transition}
      />
    </div>
  );
}

export default AboutMeImage;
