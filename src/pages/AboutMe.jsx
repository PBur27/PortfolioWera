import React from "react";
import { useLanguage } from "../LanguageContext";

function AboutMe() {
  const language = useLanguage();

  const strings = {
    aboutMe: language === "pl" ? "O mnie" : "About Me",
  };

  return (
    <>
      <div>{strings.aboutMe}</div>
    </>
  );
}

export default AboutMe;
