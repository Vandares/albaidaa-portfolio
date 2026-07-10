import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo.jsx";
import LangToggle from "./LangToggle.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { Menu, Close, Arrow } from "../lib/icons.jsx";

export default function Navbar() {
  const { t } = useLang();
  const LINKS = t.nav.links;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container nav-inner">
          <Logo onClick={() => setOpen(false)} />

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <LangToggle className="nav-lang" />
            <a href="#contact" className="btn btn-primary">
              {t.nav.cta} <Arrow className="btn-arrow" width={18} height={18} />
            </a>
            <button
              className="nav-burger"
              aria-label={t.nav.openMenu}
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
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              className="nav-burger mobile-close"
              aria-label={t.nav.closeMenu}
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="mobile-actions">
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta} <Arrow className="btn-arrow" width={18} height={18} />
              </a>
              <LangToggle className="mobile-lang" onToggle={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
