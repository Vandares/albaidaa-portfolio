import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data/content.jsx";
import { fadeUp, viewport } from "../lib/motion.js";
import { Mail, Pin, Instagram, WhatsApp, Phone, Arrow } from "../lib/icons.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", brand: "", service: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const w = c.wa;
    const text =
      `${w.greeting}\n\n` +
      `${w.name}: ${form.name || w.empty}\n` +
      `${w.brand}: ${form.brand || w.empty}\n` +
      `${w.service}: ${form.service || w.empty}\n` +
      `${w.details}: ${form.message || w.empty}`;
    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <motion.div
          className="contact-info"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="section-title">{c.title}</h2>
          <p className="lead">{c.lead}</p>

          <div className="contact-list">
            <a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer">
              <span className="ci-ic">
                <WhatsApp width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">{c.channels.whatsapp}</span>
                <span className="ci-v" dir="ltr">{CONTACT.whatsappDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <span className="ci-ic">
                <Mail width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">{c.channels.email}</span>
                <span className="ci-v" dir="ltr">{CONTACT.email}</span>
              </span>
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
              <span className="ci-ic">
                <Instagram width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">{c.channels.instagram}</span>
                <span className="ci-v" dir="ltr">{CONTACT.instagram}</span>
              </span>
            </a>
            <div className="ci">
              <span className="ci-ic">
                <Pin width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">{c.channels.location}</span>
                <span className="ci-v">{c.locationValue}</span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={submit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">{c.form.name}</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update}
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
                onChange={update}
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
              onChange={update}
              placeholder={c.form.servicePh}
            />
          </div>

          <div className="field">
            <label htmlFor="message">{c.form.message}</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={update}
              placeholder={c.form.messagePh}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {c.form.submit} <Arrow className="btn-arrow" width={18} height={18} />
          </button>
          <p className="form-note">{c.form.note}</p>
        </motion.form>
      </div>
    </section>
  );
}
