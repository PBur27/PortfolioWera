import React from "react";
import { useLanguage, useToggleLanguage } from "../LanguageContext";
import "./componentStyles.css";

function LanguageSwitch() {
  const language = useLanguage();
  const toggleLanguage = useToggleLanguage();

  return (
    <div className="lang-switch-container" onClick={toggleLanguage}>
      <p className="lang-text">
        <span className={`lang-option ${language === "pl" ? "active" : "inactive"}`}>
          pl
        </span>
        /
        <span className={`lang-option ${language === "en" ? "active" : "inactive"}`}>
          eng
        </span>
      </p>
    </div>
  );
}

export default LanguageSwitch;