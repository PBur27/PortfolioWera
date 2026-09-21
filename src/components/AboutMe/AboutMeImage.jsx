import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
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

const scrollEntryVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function AboutMeImage({ image1, image2, layout }) {
  const [isOneFront, setIsOneFront] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const desktopVariants = {
    Vertical: {
      initialFront: {
        x: "-6%",
        y: "2%",
        rotate: -5,
        z: 1,
        zIndex: 2,
      },
      initialBack: {
        x: "6%",
        y: "-2%",
        rotate: 2.5,
        z: -1,
        zIndex: 1,
      },
      entryFront: {
        x: "-6%",
        y: "2%",
        rotate: [-5, -8, -2],
        z: 1,
        zIndex: 2,
      },
      entryBack: {
        x: "6%",
        y: "-2%",
        rotate: [2.5, 9, 6],
        z: -1,
        zIndex: 1,
      },
      animateToBack: {
        x: ["-6%", "-96%", "6%"],
        y: ["2%", "-12%", "-2%"],
        rotate: [-2, -12, 6],
        z: [1, 0, -1],
        zIndex: [2, 2, 1],
      },
      animateToFront: {
        x: ["6%", "24%", "-6%"],
        y: ["-2%", "12%", "2%"],
        rotate: [6, 2, -2],
        z: [-1, 0, 1],
        zIndex: [1, 1, 2],
      },
    },
    Horizontal: {
      initialFront: {
        x: "0%",
        y: "0%",
        rotate: -5,
        z: 1,
        zIndex: 2,
      },
      initialBack: {
        x: "-5%",
        y: "-5%",
        rotate: 2.5,
        z: -1,
        zIndex: 1,
      },
      entryFront: {
        x: "0%",
        y: "0%",
        rotate: [-5, -8, -4],
        z: 1,
        zIndex: 2,
      },
      entryBack: {
        x: "-5%",
        y: "-5%",
        rotate: [2.5, 9, 4],
        z: -1,
        zIndex: 1,
      },
      animateToBack: {
        x: ["0%", "-20%", "-5%"],
        y: ["0%", "64%", "-5%"],
        rotate: [-4, 16, 4],
        z: [1, 0, -1],
        zIndex: [2, 2, 1],
      },
      animateToFront: {
        x: ["-5%", "10%", "0%"],
        y: ["-5%", "-42%", "0%"],
        rotate: [4, 12, -4],
        z: [-1, 0, 1],
        zIndex: [1, 1, 2],
      },
    },
  };

  const mobileVariants = {
    Vertical: {
      initialFront: {
        x: "-6%",
        y: "2%",
        rotate: -5,
        z: 1,
        zIndex: 2,
      },
      initialBack: {
        x: "6%",
        y: "-2%",
        rotate: 2.5,
        z: -1,
        zIndex: 1,
      },
      entryFront: {
        x: "-6%",
        y: "2%",
        rotate: [-5, -8, -2],
        z: 1,
        zIndex: 2,
      },
      entryBack: {
        x: "6%",
        y: "-2%",
        rotate: [2.5, 9, 6],
        z: -1,
        zIndex: 1,
      },
      animateToBack: {
        x: ["-6%", "-56%", "6%"],
        y: ["2%", "-12%", "-2%"],
        rotate: [-2, 12, 6],
        z: [1, 0, -1],
        zIndex: [2, 2, 1],
      },
      animateToFront: {
        x: ["6%", "54%", "-6%"],
        y: ["-2%", "12%", "2%"],
        rotate: [6, 8, -2],
        z: [-1, 0, 1],
        zIndex: [1, 1, 2],
      },
    },
    Horizontal: {
      initialFront: {
        x: "0%",
        y: "0%",
        rotate: -5,
        z: 1,
        zIndex: 2,
      },
      initialBack: {
        x: "-5%",
        y: "-5%",
        rotate: 2.5,
        z: -1,
        zIndex: 1,
      },
      entryFront: {
        x: "0%",
        y: "0%",
        rotate: [-5, -8, -4],
        z: 1,
        zIndex: 2,
      },
      entryBack: {
        x: "-5%",
        y: "-5%",
        rotate: [2.5, 9, 4],
        z: -1,
        zIndex: 1,
      },
      animateToBack: {
        x: ["0%", "-20%", "-5%"],
        y: ["0%", "64%", "-5%"],
        rotate: [-4, 16, 4],
        z: [1, 0, -1],
        zIndex: [2, 2, 1],
      },
      animateToFront: {
        x: ["-5%", "10%", "0%"],
        y: ["-5%", "-42%", "0%"],
        rotate: [4, 12, -4],
        z: [-1, 0, 1],
        zIndex: [1, 1, 2],
      },
    },
  };

  const currentVariants = isMobile ? mobileVariants : desktopVariants;

  const transition = {
    duration: 0.6,
    ease: "easeInOut",
  };

  const handleClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsOneFront((prev) => !prev);
  };

  return (
    <motion.div
      className={
        layout === "Horizontal"
          ? styles.imageContainerHorizontal
          : styles.imageContainerVertical
      }
      data-front={isOneFront ? "one" : "two"}
      onClick={handleClick}
      variants={scrollEntryVariants}
      initial="hidden"
      whileInView="visible"
      onAnimationComplete={() => setHasEntered(true)}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.img
        className={
          layout === "Horizontal"
            ? styles.aboutImageHorizontal
            : styles.aboutImageVertical
        }
        src={image1}
        alt=""
        initial={currentVariants[layout].initialFront}
        animate={
          hasInteracted
            ? isOneFront
              ? currentVariants[layout].animateToFront
              : currentVariants[layout].animateToBack
            : hasEntered
              ? currentVariants[layout].entryFront
              : currentVariants[layout].initialFront
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
        initial={currentVariants[layout].initialBack}
        animate={
          hasInteracted
            ? !isOneFront
              ? currentVariants[layout].animateToFront
              : currentVariants[layout].animateToBack
            : hasEntered
              ? currentVariants[layout].entryBack
              : currentVariants[layout].initialBack
        }
        transition={transition}
      />
    </motion.div>
  );
}

export default AboutMeImage;
