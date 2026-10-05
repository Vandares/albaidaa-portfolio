import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

export default function Why() {
  const { t } = useLang();
  const w = t.why;

  return (
    <Section id="why">
      <div className="ghost" aria-hidden="true">{w.ghost}</div>
      <div className="wrap">
        <Lockup kicker={w.kicker} kickerEn={w.kickerEn} h1={w.h1} h2={w.h2} en={w.en} />
        <p className="lead plane" data-i="3">{w.lead}</p>

        <div style={{ marginTop: "clamp(40px,6vw,64px)" }}>
          {w.items.map((it, i) => (
            <div className="why-row plane" data-i={(i % 6) + 1} key={it.en}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{it.t}</h3>
                <span className="en-label">{it.en}</span>
                <p>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
