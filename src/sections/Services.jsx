import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <Section id="services">
      <div className="wrap band" style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
        <div>
          <Lockup kicker={s.kicker} kickerEn={s.kickerEn} h1={s.h1} h2={s.h2} en={s.en} />
        </div>
        <div className="band-art plane" data-i="0">
          <img src={SCENES.objects} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="wrap">
        <div className="grid-4">
          {s.items.map((it, i) => (
            <article className="card plane" data-i={(i % 4) + 1} key={it.en}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{it.t}</h3>
              <span className="en-label">{it.en}</span>
              <p>{it.d}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
