import { useEffect, useRef } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";
import { stickyStack } from "../lib/motion.js";

/**
 * F3 · sticky scroll stack. The moon holds still while the five reasons move
 * past it, which is the one real scroll-storytelling beat on the page.
 * Pinning is desktop-only; on a phone it fights the native scroll.
 */
export default function Why() {
  const { t } = useLang();
  const w = t.why;
  const root = useRef(null);

  useEffect(() => stickyStack(root.current, ".stack-pin", ".reason"), [t]);

  return (
    <Section id="why">
      <div className="wrap">
        <Head kicker={w.kicker} kickerEn={w.kickerEn} h1={w.h1} h2={w.h2} en={w.en} />
        <p className="lead plane">{w.lead}</p>

        <div className="stack" ref={root} style={{ marginTop: "clamp(34px,4.5vw,56px)" }}>
          <div className="stack-pin">
            <img src={SCENES.moon} alt="" loading="lazy" decoding="async" width="1600" height="900" />
          </div>

          <div>
            {w.items.map((it, i) => (
              <div className="reason" key={it.en}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{it.t}</h3>
                <span className="en-label">{it.en}</span>
                <p>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
