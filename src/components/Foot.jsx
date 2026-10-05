import { useLang } from "../i18n/LangProvider.jsx";
import { CONTACT } from "../data/site.js";
import { Instagram, WhatsApp, Mail, XLogo } from "../lib/icons.jsx";

const YEAR = new Date().getFullYear();

export default function Foot() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <img src="/assets/brand26/logo-h.png" alt="LAVERT" />
            </div>
            <p className="footer-about">{f.about}</p>
            <p
              style={{
                marginTop: "var(--s4)",
                fontFamily: "var(--f-display)",
                color: "var(--glow)",
                fontSize: "1.05rem",
              }}
            >
              {f.tagline}
            </p>
          </div>

          <div>
            <h4>{f.explore}</h4>
            <ul>
              {f.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{f.reach}</h4>
            <ul>
              <li>
                <a href={`https://wa.me/${CONTACT.wa1.number}`} target="_blank" rel="noreferrer" dir="ltr">
                  {CONTACT.wa1.display}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${CONTACT.wa2.number}`} target="_blank" rel="noreferrer" dir="ltr">
                  {CONTACT.wa2.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} dir="ltr">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" dir="ltr">
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {YEAR} {f.rights}
          </span>
          <div className="socials">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram width={18} height={18} />
            </a>
            <a href={CONTACT.xUrl} target="_blank" rel="noreferrer" aria-label="X">
              <XLogo width={16} height={16} />
            </a>
            <a href={`https://wa.me/${CONTACT.wa1.number}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsApp width={18} height={18} />
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email">
              <Mail width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
