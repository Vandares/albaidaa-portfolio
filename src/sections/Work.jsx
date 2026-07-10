import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK, CATEGORIES } from "../data/content.jsx";
import { fadeUp, viewport } from "../lib/motion.js";
import { Close } from "../lib/icons.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Work() {
  const { t } = useLang();
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const items =
    filter === "All" ? WORK : WORK.filter((w) => w.cat === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{t.work.eyebrow}</span>
          <h2 className="section-title">{t.work.title}</h2>
          <p className="lead">{t.work.lead}</p>
        </motion.div>

        <motion.div
          className="work-filters"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {t.work.cat[c]}
            </button>
          ))}
        </motion.div>

        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout">
            {items.map((w) => (
              <motion.button
                type="button"
                className="work-item"
                key={w.img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(w)}
                aria-label={`${t.work.view} ${t.work.title_of[w.title]}`}
              >
                <img
                  src={w.img}
                  alt={t.work.title_of[w.title]}
                  loading="lazy"
                  decoding="async"
                />
                <span className="work-overlay">
                  <span className="cat">{t.work.cat[w.cat]}</span>
                  <span className="ttl">{t.work.title_of[w.title]}</span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="lightbox-close"
              aria-label="Close"
              onClick={() => setLightbox(null)}
            >
              <Close />
            </button>
            <motion.img
              className="lightbox-img"
              src={lightbox.img}
              alt={t.work.title_of[lightbox.title]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
