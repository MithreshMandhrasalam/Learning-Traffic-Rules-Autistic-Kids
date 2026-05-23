import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "./translations";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "normal");

  const t = translations[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleLang = () => setLang((l) => (l === "en" ? "ta" : "en"));
  const toggleTheme = () =>
    setTheme((t) => (t === "normal" ? "calm" : "normal"));

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
