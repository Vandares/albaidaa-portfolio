import { lazy, Suspense, useEffect, useRef } from "react";
import { useLang } from "../i18n/LangProvider.jsx";
import { heroIntro } from "../lib/motion.js";

// three.js is ~570KB; keep it off the critical path so the promise paints first
const MoonScene = lazy(() => import("../components/MoonScene.jsx"));

/**
 * H1 · statement fold.
 *
 * The hero guidelines allow one promise, one visual, one action. The stats
 * that sat here in the previous build were a second hero group competing with
 * the promise, so they moved down to the About band where the portfolio
 * itself puts them (page 02).
 */
export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const ref = useRef(null);

  useEffect(() => heroIntro(ref.current), [t]);

  return (
    <section className="hero" id="top" ref={ref}>
      <Suspense fallback={null}>
        <MoonScene />
      </Suspense>

      <div className="hero-inner">
        <p className="hero-eyebrow" data-beat="1">
          <span className="dot" aria-hidden="true" />
          {h.kicker}
        </p>

        <h1>
          <span data-beat="2">{h.h1a}</span>
          <span data-beat="2" className="glow">
            {h.h1b}
          </span>
        </h1>

        <p className="hero-slogan" data-beat="3">
          {h.slogan}
        </p>
        <p className="hero-en" data-beat="3">
          {h.sloganEn}
        </p>

        <div className="hero-actions" data-beat="3">
          <a href="#contact" className="btn btn-primary">
            {h.cta1}
          </a>
          <a href="#work" className="btn btn-ghost">
            {h.cta2}
          </a>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <i />
        <span>{h.scroll}</span>
      </div>
    </section>
  );
}
