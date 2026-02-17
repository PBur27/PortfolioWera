import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { texts } from "./Languages";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

  // if language was saved before it will be leaded from localstorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "pl";
  });

  // language changes saved in localstorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pl" ? "en" : "pl"));
  };

  
  const t = (path) => {
    const keys = path.split('.');
    let result = texts[language];

    keys.forEach((key) => {
      result = result ? result[key] : null;
    });

    // if not text was found on the first pass, it will search the polish subDict for the same key
    if (!result) {
      let fallback = texts["pl"];
      keys.forEach((key) => { fallback = fallback ? fallback[key] : null; });
      result = fallback;
    }

    return result || path; 
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// The "All-in-One" hook for convenience
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
};

// Individual hooks if you prefer keeping them separate
export const useLanguage = () => useContext(LanguageContext).language;
export const useT = () => useContext(LanguageContext).t;
export const useToggleLanguage = () => useContext(LanguageContext).toggleLanguage;