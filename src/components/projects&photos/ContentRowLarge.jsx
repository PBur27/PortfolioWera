import React, { useRef } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

function ContentRowLarge({ type, element1, element2, lazy }) {
  console.log(lazy ? "lazy " : "", "row large: " + element1, element2);

  let navigate = useNavigate();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,

    offset: ["start end", "center center", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1.1, 1, 1.1]);

  const handleClick = (element) => {
    console.log(element);
    if (type != "projects") {
      return;
    }
    window.scrollTo(0, 0);
    navigate(`/projects/${element.name}`);
  };

  return (
    <div className="grid-row large" ref={containerRef}>
      <div
        className="grid-cell"
        onClick={() => {
          handleClick(element1);
        }}
      >
        <div className={`img-wrap large-${type}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`}
            className="grid-image"
            alt={element1.alt || ""}
            loading={lazy ? "lazy" : undefined}
            style={{ scale }}
          />
          <div className="img-title-overlay">
            <span className="img-title">{element1.name}</span>
          </div>
        </div>
      </div>
      <div
        className="grid-cell"
        onClick={() => {
          handleClick(element2);
        }}
      >
        <div className={`img-wrap large-${type}`}>
          <motion.img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`}
            className="grid-image"
            alt={element2.alt || ""}
            loading={lazy ? "lazy" : undefined}
            style={{ scale }}
          />
          <div className="img-title-overlay">
            <span className="img-title">{element2.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRowLarge;
