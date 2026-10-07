import { useEffect, useRef } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";
import { countUp, floatArt } from "../lib/motion.js";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const n = t.name;
  const art = useRef(null);
  const stats = useRef(null);

  useEffect(() => floatArt(art.current), []);
  // re-runs on language change: the figures are the same but the nodes are not
  useEffect(() => countUp(stats.current), [t]);

  return (
    <>
      <Section id="about">
        <div className="wrap">
          <Head kicker={a.kicker} kickerEn={a.kickerEn} h1={a.h1} h2={a.h2} en={a.en} />
          <p className="lead plane">{a.body}</p>

          {/* P4 · stat strip — real figures from Portfolio 2026 p02 */}
          <div className="stats plane" ref={stats} style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            {a.stats.map((s) => (
              <div className="stat" key={s.k}>
                <div className="v" data-count={s.v}>
                  {s.v}
                </div>
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="name">
        <div className="wrap stack">
          <div className="stack-pin" ref={art}>
            <img src={SCENES.lavender} alt="" loading="lazy" decoding="async" width="1600" height="900" />
          </div>
          <div>
            <Head kicker={n.kicker} kickerEn={n.kickerEn} h1={n.h1} h2={n.h2} en={n.en} />
            <p className="lead plane">{n.body}</p>
            <p
              className="plane"
              style={{
                marginTop: "clamp(26px,3.4vw,40px)",
                fontFamily: "var(--f-display)",
                fontSize: "clamp(1.05rem,2.2vw,1.4rem)",
                color: "var(--glow)",
                lineHeight: 1.6,
              }}
            >
              {n.quote}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
