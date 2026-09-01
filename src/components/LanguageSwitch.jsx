import React from "react";
import { useLanguage, useToggleLanguage } from "../context/LanguageContext";
import styles from "./languageSwitch.module.css";

function LanguageSwitch() {
  const language = useLanguage();
  const toggleLanguage = useToggleLanguage();

  return (
    <div className={styles.langSwitchContainer} onClick={toggleLanguage}>
      <p className={styles.langText}>
        <span
          className={`${styles.langOption} ${language === "pl" ? styles.active : styles.inactive}`}
        >
          pl
        </span>
        <span
          className={`${styles.langOption} ${styles.slash} ${styles.inactive}`}
        >
          /
        </span>
        <span
          className={`${styles.langOption} ${language === "en" ? styles.active : styles.inactive}`}
        >
          eng
        </span>
      </p>
    </div>
  );
}

export default LanguageSwitch;
