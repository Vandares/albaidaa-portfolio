import { useLang } from "../i18n/LangProvider.jsx";
import { CONTACT } from "../data/site.js";
import { Instagram, WhatsApp, Mail, XLogo } from "../lib/icons.jsx";

const YEAR = new Date().getFullYear();

/**
 * Ft4 · statement close. One large closing line carries the footer; links sit
 * beneath in muted type. The previous build used the four-column
 * Explore/Contact/social layout, which the catalog flags as an AI fingerprint.
 */
export default function Foot() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-statement">
          {f.closeA} <span className="glow">{f.closeB}</span>
        </p>
        <p className="footer-en">{f.tagline}</p>

        <div className="footer-foot">
          <nav className="footer-nav" aria-label={f.explore}>
            {f.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="socials">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram width={17} height={17} />
            </a>
            <a href={CONTACT.xUrl} target="_blank" rel="noreferrer" aria-label="X">
              <XLogo width={15} height={15} />
            </a>
            <a
              href={`https://wa.me/${CONTACT.wa1.number}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsApp width={17} height={17} />
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label={t.contact.ch.email}>
              <Mail width={17} height={17} />
            </a>
          </div>

          <p className="footer-legal">
            © {YEAR} {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
