import { lazy, Suspense } from "react";

// three.js is ~670KB; keep it out of the critical path so the headline paints first
const MoonScene = lazy(() => import("../components/MoonScene.jsx"));
import { useLang } from "../i18n/LangProvider.jsx";
import { useReveal } from "../lib/reveal.jsx";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const ref = useReveal({ threshold: 0 });

  return (
    <section className="hero" id="top" ref={ref}>
      <Suspense fallback={null}>
        <MoonScene />
      </Suspense>
      <div className="hero-dunes" />

      <div className="wrap hero-in">
        <div className="hero-copy">
          <div className="kicker plane" data-i="0">
            <span className="dot" />
            <span className="ar">{h.kicker}</span>
          </div>

          <h1>
            <span className="plane" data-i="1" style={{ display: "block" }}>
              {h.h1a}
            </span>
            <span className="plane glow" data-i="2" style={{ display: "block" }}>
              {h.h1b}
            </span>
          </h1>

          <p className="hero-slogan plane" data-i="3">
            {h.slogan}
          </p>
          <p className="hero-en plane" data-i="4">
            {h.sloganEn}
          </p>

          <div className="hero-actions plane" data-i="5">
            <a href="#contact" className="btn btn-primary">
              {h.cta1}
            </a>
            <a href="#work" className="btn btn-ghost">
              {h.cta2}
            </a>
          </div>

          <div className="hero-stats plane" data-i="6">
            {h.stats.map((s) => (
              <div key={s.k}>
                <div className="v">{s.v}</div>
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <i />
        <span>{h.scroll}</span>
      </div>
    </section>
  );
}
