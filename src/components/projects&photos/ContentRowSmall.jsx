import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

function ContentRowSmall({ type, element1, element2, element3, lazy }) {
  console.log("small row: " + element1, element2, element3);

  const containerRef = useRef(null);
  const rootScrollContainer = document.getElementById("root");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: { current: rootScrollContainer },
    offset: ["start end", "center center", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1.1, 1]);

  return (
    <div className="grid-row small" ref={containerRef}>
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`}
            className="grid-image"
            alt={element1.alt || ""}
            loading={lazy ? "lazy" : undefined}
            style={{ scale }}
          />
        </div>
      </div>
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`}
            className="grid-image"
            alt={element2.alt || ""}
            loading={lazy ? "lazy" : undefined}
            style={{ scale }}
          />
        </div>
      </div>
      <div className="grid-cell">
        <div className={`img-wrap small-${type}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element3.src}`}
            className="grid-image"
            alt={element3.alt || ""}
            loading={lazy ? "lazy" : undefined}
            style={{ scale }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContentRowSmall;
