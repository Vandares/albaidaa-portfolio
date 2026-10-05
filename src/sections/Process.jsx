import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";

export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <Section id="process">
      <div className="wrap band" style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
        <div>
          <Lockup kicker={p.kicker} kickerEn={p.kickerEn} h1={p.h1} h2={p.h2} en={p.en} />
        </div>
        <div className="band-art plane" data-i="1">
          <img src={SCENES.ribbon} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="wrap">
        <div className="steps">
          {p.items.map((it, i) => (
            <div className="step plane" data-i={i + 1} key={it.en}>
              <span className="n">{i + 1}</span>
              <h3>{it.t}</h3>
              <span className="en-label">{it.en}</span>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
