import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../i18n/LangProvider.jsx";
import { Menu, Close, Globe } from "../lib/icons.jsx";

export default function Nav() {
  const { t, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 32);
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

  const Lang = (
    <button className="lang-toggle" onClick={toggle} aria-label={t.switchAria} title={t.switchAria}>
      <Globe width={16} height={16} />
      <span>{t.switchTo}</span>
    </button>
  );

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="wrap nav-in">
          <a href="#top" className="nav-logo" aria-label="LAVERT">
            <img src="/assets/brand26/logo-h.png" alt="LAVERT" />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            {Lang}
            <a href="#contact" className="btn btn-primary">
              {t.nav.cta}
            </a>
            <button
              className="burger"
              aria-label={t.nav.open}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="sheet"
            initial={{ opacity: 0, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <button className="burger sheet-close" aria-label={t.nav.close} onClick={() => setOpen(false)}>
              <Close />
            </button>
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href} className="sheet-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="sheet-actions">
              <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
              {Lang}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
