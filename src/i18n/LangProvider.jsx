import { createContext, useCallback, useContext, useEffect, useState } from "react";
import T from "../data/site.js";

const KEY = "lavert-lang";
const Ctx = createContext(null);

function initial() {
  if (typeof window === "undefined") return "ar";
  const saved = window.localStorage.getItem(KEY);
  if (saved === "ar" || saved === "en") return saved;
  // Arabic leads — it is the brand's first language.
  const nav = (window.navigator.language || "").toLowerCase();
  return nav.startsWith("en") ? "en" : "ar";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", T[lang].dir);
    window.localStorage.setItem(KEY, lang);
  }, [lang]);

  const toggle = useCallback(() => setLang((l) => (l === "ar" ? "en" : "ar")), []);

  return (
    <Ctx.Provider value={{ lang, dir: T[lang].dir, t: T[lang], setLang, toggle }}>
      {children}
    </Ctx.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used within <LangProvider>");
  return c;
}
