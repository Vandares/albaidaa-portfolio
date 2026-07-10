import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOS } from "../data/content.jsx";
import { fadeUp, staggerFast, viewport } from "../lib/motion.js";
import { Close, Video } from "../lib/icons.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

function ReelCard({ v, label, onOpen }) {
  const ref = useRef(null);

  const enter = () => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => {});
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  return (
    <motion.button
      type="button"
      className="reel"
      variants={fadeUp}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => onOpen(v)}
      aria-label={`${label.play} ${label.title}`}
    >
      <video
        ref={ref}
        src={v.src}
        poster={v.poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <span className="reel-play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="reel-info">
        <span className="reel-tag">{label.tag}</span>
        <span className="reel-title">{label.title}</span>
      </span>
    </motion.button>
  );
}

export default function Showreel() {
  const { t } = useLang();
  const [active, setActive] = useState(null);

  return (
    <section className="section showreel" id="showreel">
      <div className="container">
        <motion.div
          className="section-head center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="eyebrow">{t.showreel.eyebrow}</span>
          <h2 className="section-title">{t.showreel.title}</h2>
          <p className="lead">{t.showreel.lead}</p>
        </motion.div>

        <motion.div
          className="reel-grid"
          variants={staggerFast}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {VIDEOS.map((v, i) => (
            <ReelCard
              key={v.src}
              v={v}
              label={{ ...t.showreel.items[i], play: t.showreel.play }}
              onOpen={setActive}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              className="lightbox-close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              <Close />
            </button>
            <motion.video
              className="reel-player"
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
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
