import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

/** F4 · numbered step sequence. A real ordered process, so the numbers carry information. */
export default function Process() {
  const { t } = useLang();
  const p = t.process;

  return (
    <Section id="process">
      <div className="wrap">
        <Head kicker={p.kicker} kickerEn={p.kickerEn} h1={p.h1} h2={p.h2} en={p.en} center />

        <div className="steps">
          {p.items.map((it, i) => (
            <div className="step plane" key={it.en}>
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
