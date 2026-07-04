import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT } from "../data/content.jsx";
import { fadeUp, viewport } from "../lib/motion.js";
import { Mail, Pin, Instagram, WhatsApp, Phone, Arrow } from "../lib/icons.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", brand: "", service: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Hello Lavert! I'd like to start a project.\n\n` +
      `Name: ${form.name || "-"}\n` +
      `Brand / Business: ${form.brand || "-"}\n` +
      `Service needed: ${form.service || "-"}\n` +
      `Details: ${form.message || "-"}`;
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
          <span className="eyebrow">Let&apos;s Talk</span>
          <h2 className="section-title">Start a project with Lavert</h2>
          <p className="lead">
            Tell us about your brand and what you need. Send the form straight to
            our WhatsApp and we&apos;ll get back to you.
          </p>

          <div className="contact-list">
            <a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noreferrer">
              <span className="ci-ic">
                <WhatsApp width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">WhatsApp</span>
                <span className="ci-v">{CONTACT.whatsappDisplay}</span>
              </span>
            </a>
            <a href={`mailto:${CONTACT.email}`}>
              <span className="ci-ic">
                <Mail width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">Email</span>
                <span className="ci-v">{CONTACT.email}</span>
              </span>
            </a>
            <a href={CONTACT.instagramUrl} target="_blank" rel="noreferrer">
              <span className="ci-ic">
                <Instagram width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">Instagram</span>
                <span className="ci-v">{CONTACT.instagram}</span>
              </span>
            </a>
            <div className="ci">
              <span className="ci-ic">
                <Pin width={22} height={22} />
              </span>
              <span>
                <span className="ci-t">Location</span>
                <span className="ci-v">{CONTACT.location}</span>
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
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update}
                placeholder="e.g. Sara"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="brand">Brand / Business</label>
              <input
                id="brand"
                name="brand"
                autoComplete="organization"
                value={form.brand}
                onChange={update}
                placeholder="e.g. Sol Beach"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">Service Needed</label>
            <input
              id="service"
              name="service"
              value={form.service}
              onChange={update}
              placeholder="Photography, branding, social media…"
            />
          </div>

          <div className="field">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={update}
              placeholder="Tell us a little about your project…"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send via WhatsApp <Arrow className="btn-arrow" width={18} height={18} />
          </button>
          <p className="form-note">
            Opens WhatsApp with your message ready to send.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
