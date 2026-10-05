import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const n = t.name;

  return (
    <>
      <Section id="about">
        <div className="ghost" aria-hidden="true">{a.ghost}</div>
        <div className="wrap band">
          <div>
            <Lockup kicker={a.kicker} kickerEn={a.kickerEn} h1={a.h1} h2={a.h2} en={a.en} />
            <p className="lead plane" data-i="3">{a.body}</p>
            <div className="hero-stats plane" data-i="4" style={{ marginTop: "var(--s6)" }}>
              {t.hero.stats.map((s) => (
                <div key={s.k}>
                  <div className="v">{s.v}</div>
                  <div className="k">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="band-art plane" data-i="0">
            <img src={SCENES.ring} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>

      <Section id="name">
        <div className="wrap band">
          <div>
            <Lockup kicker={n.kicker} kickerEn={n.kickerEn} h1={n.h1} h2={n.h2} en={n.en} />
            <p className="lead plane" data-i="3">{n.body}</p>
            <p
              className="plane"
              data-i="4"
              style={{
                marginTop: "var(--s5)",
                fontFamily: "var(--f-display)",
                fontSize: "clamp(1.05rem,2.4vw,1.45rem)",
                color: "var(--glow)",
                lineHeight: 1.6,
              }}
            >
              {n.quote}
            </p>
          </div>
          <div className="band-art plane" data-i="1">
            <img src={SCENES.lavender} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </Section>
    </>
  );
}
