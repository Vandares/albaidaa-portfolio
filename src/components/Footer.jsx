import Logo from "./Logo.jsx";
import { CONTACT } from "../data/content.jsx";
import { Instagram, WhatsApp, Mail } from "../lib/icons.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo variant="white" />
            <p className="footer-about">{f.about}</p>
          </div>

          <div className="footer-col">
            <h4>{f.exploreHeading}</h4>
            <ul>
              {f.exploreLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>{f.touchHeading}</h4>
            <ul>
              <li><a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" dir="ltr">{CONTACT.whatsappDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`} dir="ltr">{CONTACT.email}</a></li>
              <li><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" dir="ltr">{CONTACT.instagram}</a></li>
              <li>{t.contact.locationValue}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} {f.rights}</span>
          <div className="footer-socials">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram width={20} height={20} />
            </a>
            <a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsApp width={20} height={20} />
            </a>
            <a href={`mailto:${CONTACT.email}`} aria-label="Email">
              <Mail width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
