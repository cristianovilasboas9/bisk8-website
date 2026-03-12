import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const languages = ["en", "pt", "fr", "de", "es", "it", "ar", "zh", "ru"];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("bisk8_lang") || "fr"; } catch { return "fr"; }
  });

  const setLanguage = (l) => {
    setLang(l);
    try { localStorage.setItem("bisk8_lang", l); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
