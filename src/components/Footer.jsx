import Logo from "./Logo.jsx";
import { CONTACT } from "../data/content.jsx";
import { Instagram, WhatsApp, Mail } from "../lib/icons.jsx";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo variant="white" />
            <p className="footer-about">
              Lavert is a creative marketing agency based in Jeddah, Saudi
              Arabia, specializing in branding, design, photography, videography,
              marketing, social media, and printing.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer">{CONTACT.whatsappDisplay}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">{CONTACT.instagram}</a></li>
              <li>{CONTACT.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {YEAR} Lavert. Creative by Nature.</span>
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
