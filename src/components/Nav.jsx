import { useEffect, useState } from "react";
import { useLang } from "../i18n/LangProvider.jsx";
import { Menu, Close } from "../lib/icons.jsx";

/** N3 · floating pill. Content-sized, not a rounded full-width bar. */
export default function Nav() {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="pill">
          <a href="#top" className="pill-logo" aria-label="LAVERT">
            <img src="/assets/brand26/logo-h.png" alt="LAVERT" width="130" height="26" />
          </a>

          <nav className="pill-links" aria-label={lang === "ar" ? "التنقل" : "Primary"}>
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="pill-end">
            <button
              className="lang"
              onClick={toggle}
              aria-label={t.switchAria}
              title={t.switchAria}
            >
              {t.switchTo}
            </button>
            <button
              className="burger"
              aria-label={t.nav.open}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu width={20} height={20} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="sheet" role="dialog" aria-modal="true">
          <button className="burger sheet-close" aria-label={t.nav.close} onClick={() => setOpen(false)}>
            <Close width={22} height={22} />
          </button>
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href} className="sheet-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ marginTop: "28px", alignSelf: "flex-start" }}
            onClick={() => setOpen(false)}
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </>
  );
}
