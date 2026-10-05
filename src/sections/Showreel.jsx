import { useEffect, useRef, useState } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { REELS } from "../data/site.js";
import { Close, Play } from "../lib/icons.jsx";

function Reel({ v, label, onOpen }) {
  const ref = useRef(null);
  return (
    <button
      type="button"
      className="reel plane"
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
        <Play width={17} height={17} />
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

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <Section id="showreel">
      <div className="wrap">
        <Head kicker={s.kicker} kickerEn={s.kickerEn} h1={s.h1} h2={s.h2} en={s.en} />
        <p className="lead plane" style={{ marginBottom: "clamp(32px,4vw,48px)" }}>
          {s.lead}
        </p>

        <div className="reels">
          {REELS.map((v, i) => (
            <Reel key={v.src} v={v} label={{ ...s.items[i], play: s.play }} onOpen={setActive} />
          ))}
        </div>
      </div>

      {active && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <button className="lb-close" aria-label={s.close} onClick={() => setActive(null)}>
            <Close width={20} height={20} />
          </button>
          <video
            src={active.src}
            poster={active.poster}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
