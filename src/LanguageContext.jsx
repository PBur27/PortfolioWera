
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();


export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "pl";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    
    setLanguage((prevLanguage) => (prevLanguage === "pl" ? "en" : "pl"));
  }


  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}


export function useLanguage() {
  return useContext(LanguageContext).language;
  
}

export function useSetLanguage() {
  return useContext(LanguageContext).setLanguage;
}

export function useToggleLanguage() {
  return useContext(LanguageContext).toggleLanguage;

}