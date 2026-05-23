import { createContext, useContext, useState, useEffect } from "react";
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

  // Cycles: normal → dark → calm → normal
  const toggleTheme = () =>
    setTheme((current) => {
      if (current === "normal") return "dark";
      if (current === "dark") return "calm";
      return "normal";
    });

  return (
    <AppContext.Provider value={{ lang, setLang, toggleLang, theme, setTheme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
