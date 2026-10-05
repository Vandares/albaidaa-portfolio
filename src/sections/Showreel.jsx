import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { REELS, SCENES } from "../data/site.js";
import { Close, Play } from "../lib/icons.jsx";

function Reel({ v, label, i, onOpen }) {
  const ref = useRef(null);
  return (
    <button
      type="button"
      className="reel plane"
      data-i={(i % 6) + 1}
      onMouseEnter={() => ref.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.pause();
        el.currentTime = 0;
      }}
      onClick={() => onOpen(v)}
      aria-label={`${label.play} ${label.name}`}
    >
      <video ref={ref} src={v.src} poster={v.poster} muted loop playsInline preload="none" />
      <span className="reel-play" aria-hidden="true">
        <Play width={18} height={18} />
      </span>
      <span className="reel-tag">{label.tag}</span>
      <span className="reel-name">{label.name}</span>
    </button>
  );
}

export default function Showreel() {
  const { t } = useLang();
  const s = t.showreel;
  const [active, setActive] = useState(null);

  return (
    <Section id="showreel">
      <div className="wrap band" style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
        <div>
          <Lockup kicker={s.kicker} kickerEn={s.kickerEn} h1={s.h1} h2={s.h2} en={s.en} />
          <p className="lead plane" data-i="3">
            {s.lead}
          </p>
        </div>
        <div className="band-art plane" data-i="1">
          <img src={SCENES.play} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="wrap">
        <div className="reels">
          {REELS.map((v, i) => (
            <Reel
              key={v.src}
              v={v}
              i={i}
              label={{ ...s.items[i], play: s.play }}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="lb-close" aria-label="Close" onClick={() => setActive(null)}>
              <Close />
            </button>
            <motion.video
              src={active.src}
              poster={active.poster}
              controls
              autoPlay
              playsInline
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
