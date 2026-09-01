import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { texts } from "./Languages";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "pl";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "pl" ? "en" : "pl"));
  }, []);

  const translate = useCallback(
    (translationPath) => {
      // function to search nested dictionary objects for a string path
      const getNestedTranslation = (dictionaryObject, pathString) => {
        // reduce steps down the keys until it finds the value or returns undefined if the key doesn't exist
        return pathString.split(".").reduce((currentLevel, currentKey) => {
          return currentLevel?.[currentKey];
        }, dictionaryObject);
      };

      const activeLanguageText = getNestedTranslation(
        texts[language],
        translationPath,
      );

      // if the active language translation is not found, fall back to Polish translation
      const polishFallbackText = getNestedTranslation(
        texts["pl"],
        translationPath,
      );

      // if neither translation is found, return the translation path as a fallback
      return activeLanguageText ?? polishFallbackText ?? translationPath;
    },
    // Only recreate this translate function when the selected language actually changes
    [language],
  );

  const contextValue = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      translate,
    }),
    [language, toggleLanguage, translate],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};

export const useLanguage = () => useContext(LanguageContext)?.language;
export const useTranslate = () => useContext(LanguageContext)?.translate;
export const useToggleLanguage = () =>
  useContext(LanguageContext)?.toggleLanguage;
