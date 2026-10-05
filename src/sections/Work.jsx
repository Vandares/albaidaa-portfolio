import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { SCENES } from "../data/site.js";

export default function Work() {
  const { t } = useLang();
  const w = t.work;
  const half = Math.ceil(w.items.length / 2);
  const cols = [w.items.slice(0, half), w.items.slice(half)];

  return (
    <Section id="work">
      <div className="ghost" aria-hidden="true">{w.ghost}</div>

      <div className="wrap band" style={{ marginBottom: "clamp(40px,6vw,72px)" }}>
        <div>
          <Lockup kicker={w.kicker} kickerEn={w.kickerEn} h1={w.h1} h2={w.h2} en={w.en} />
        </div>
        <div className="band-art plane" data-i="0">
          <img src={SCENES.portal} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="wrap">
        <div className="work-cols">
          {cols.map((col, ci) => (
            <div key={ci}>
              {col.map((it, i) => {
                const n = ci * half + i + 1;
                return (
                  <a className="work-row plane" data-i={(i % 6) + 1} key={it.name} href="#showreel">
                    <span className="t">
                      <span className="name">{it.name}</span>
                      <span className="kind">{it.kind}</span>
                    </span>
                    <span className="n">{String(n).padStart(2, "0")}</span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
