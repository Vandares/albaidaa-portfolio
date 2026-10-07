import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LangProvider.jsx";
import { heroIntro } from "../lib/motion.js";

/**
 * H1 · statement fold.
 *
 * One promise, one action, and no object competing with either. The WebGL
 * scene that used to sit here is gone: it put a dozen floating solids behind
 * the one sentence the page exists to deliver, and carried a full second
 * scene pass every frame to do it. The light now comes from a single source
 * rising under the headline, which is also what the brand's own motion note
 * asks for -- "like light appearing".
 *
 * The headline breaks across two faces. English sets the first part in Bebas,
 * condensed and all-caps, then drops the closing word into Almarai at a
 * lighter weight so the line changes voice mid-sentence. Arabic has no second
 * display face and no italic, so it makes the same break with weight and
 * colour instead -- bold to regular, moonlight to glow.
 */
export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  const ref = useRef(null);

  useEffect(() => heroIntro(ref.current), [t]);

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner">
        <p className="hero-badge" data-beat="1">
          <span className="dot" aria-hidden="true" />
          {h.kicker}
        </p>

        <h1>
          <span data-beat="2">{h.h1a}</span>
          <span data-beat="2" className="accent">
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
