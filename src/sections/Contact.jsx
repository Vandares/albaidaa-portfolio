import { useState } from "react";
import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { CONTACT } from "../data/site.js";
import { WhatsApp, Mail, Instagram, XLogo, Globe } from "../lib/icons.jsx";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", brand: "", service: "", message: "" });
  const up = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const w = c.wa;
    const text =
      `${w.greeting}\n\n` +
      `${w.name}: ${form.name || w.empty}\n` +
      `${w.brand}: ${form.brand || w.empty}\n` +
      `${w.service}: ${form.service || w.empty}\n` +
      `${w.details}: ${form.message || w.empty}`;
    window.open(
      `https://wa.me/${CONTACT.wa1.number}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const channels = [
    { k: c.ch.wa, v: CONTACT.wa1.display, href: `https://wa.me/${CONTACT.wa1.number}`, I: WhatsApp },
    { k: c.ch.wa, v: CONTACT.wa2.display, href: `https://wa.me/${CONTACT.wa2.number}`, I: WhatsApp },
    { k: c.ch.email, v: CONTACT.email, href: `mailto:${CONTACT.email}`, I: Mail },
    { k: c.ch.instagram, v: CONTACT.instagram, href: CONTACT.instagramUrl, I: Instagram },
    { k: c.ch.x, v: CONTACT.x, href: CONTACT.xUrl, I: XLogo },
    { k: c.ch.site, v: CONTACT.site, href: "https://lavert-sa.com", I: Globe },
  ];

  return (
    <Section id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <Lockup kicker={c.kicker} kickerEn={c.kickerEn} h1={c.h1} h2={c.h2} en={c.en} />
            <p className="lead plane" data-i="3">
              {c.lead}
            </p>

            <div style={{ marginTop: "clamp(28px,4vw,44px)" }}>
              {channels.map((ch, i) => (
                <a
                  className="ch plane"
                  data-i={(i % 6) + 1}
                  key={ch.k + ch.v}
                  href={ch.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="ch-ic">
                    <ch.I width={18} height={18} />
                  </span>
                  <span>
                    <span className="ch-k">{ch.k}</span>
                    <span className="ch-v">{ch.v}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="plane" data-i="2" onSubmit={submit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">{c.form.name}</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={up}
                  placeholder={c.form.namePh}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="brand">{c.form.brand}</label>
                <input
                  id="brand"
                  name="brand"
                  autoComplete="organization"
                  value={form.brand}
                  onChange={up}
                  placeholder={c.form.brandPh}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="service">{c.form.service}</label>
              <input
                id="service"
                name="service"
                value={form.service}
                onChange={up}
                placeholder={c.form.servicePh}
              />
            </div>

            <div className="field">
              <label htmlFor="message">{c.form.msg}</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={up}
                placeholder={c.form.msgPh}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              {c.form.submit}
            </button>
            <p className="form-note">{c.form.note}</p>
          </form>
        </div>
      </div>
    </Section>
  );
}
