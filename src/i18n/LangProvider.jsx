import { createContext, useContext, useCallback, useEffect, useState } from "react";
import T from "./translations.js";

const STORAGE_KEY = "lavert-lang";

const LangContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ar") return saved;
  // Respect the browser preference on first visit
  const nav = window.navigator.language || "";
  return nav.toLowerCase().startsWith("ar") ? "ar" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  // Keep <html lang> + dir in sync so the whole document flows correctly.
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", T[lang].dir);
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const value = {
    lang,
    dir: T[lang].dir,
    t: T[lang],
    setLang,
    toggle,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
