import React from "react";
import { useLanguage, useToggleLanguage } from "../LanguageContext";

function LanguageSwitch() {
  const styles = {
    textContainer: {
      display: "flex",
      flex: 1,
      textDecoration: "none",
      fontSize: "1em",
      cursor: "pointer",

      alignItems: "center",
      justifyContent: "center",

      height: "4em",
    },
    text: {
      position: "relative",
      zIndex: 1,
      fontWeight: "normal",
    },
  };

  const language = useLanguage();
  console.log("Current language:", language);
  const toggleLanguage = useToggleLanguage();

  if (language === "pl") {
    return (
      <div
        style={styles.textContainer}
        onClick={() => {
          toggleLanguage();
        }}
      >
        <p style={styles.text}>
          <span style={{ fontWeight: 800, fontSize: "1.05em" }}>pl</span>/
          <span style={{ fontSize: "0.85em" }}>eng</span>
        </p>
      </div>
    );
  } else {
    return (
      <div
        style={styles.textContainer}
        onClick={() => {
          toggleLanguage();
        }}
      >
        <p style={styles.text}>
          <span style={{ fontSize: "0.85em" }}>pl</span>/
          <span style={{ fontWeight: 800, fontSize: "1.05em" }}>eng</span>
        </p>
      </div>
    );
  }
}

export default LanguageSwitch;
