import React from "react";
import { useNavigate } from "react-router";
import { useT } from "../../LanguageContext";

function ContentRowLarge({ type, element1, element2, lazy }) {
  let navigate = useNavigate();
  const t = useT();

  const handleClick = (element) => {
    if (type !== "projects") {
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects/${element.name}`, { viewTransition: true });
  };

  const getTransitionStyle = (element) => {
    if (type === "projects" && element.name) {
      return { viewTransitionName: `hero-${element.name}` };
    }
    return {};
  };

  return (
    <div className="grid-row large">
      <div className="grid-cell" onClick={() => handleClick(element1)}>
        <div className={`img-wrap left large-${type}`}>
          <img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element1.src}`}
            className="grid-image"
            style={getTransitionStyle(element1)}
            alt={element1.alt || ""}
            loading={lazy ? "lazy" : undefined}
          />
          <div className="img-title-overlay">
            <span className="img-title">
              {t("projects." + element1.name + ".title")}
            </span>
          </div>
        </div>
      </div>

      <div className="grid-cell" onClick={() => handleClick(element2)}>
        <div className={`img-wrap right large-${type}`}>
          <img
            src={`https://pub-63836c2046ac47059956b7e6bb175b09.r2.dev/${element2.src}`}
            className="grid-image"
            style={getTransitionStyle(element2)}
            alt={element2.alt || ""}
            loading={lazy ? "lazy" : undefined}
          />
          <div className="img-title-overlay">
            <span className="img-title">
              {t("projects." + element2.name + ".title")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentRowLarge;
