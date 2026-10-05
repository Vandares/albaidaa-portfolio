import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

/** F2 · bento tiles. Irregular spans so the eight services are not a card grid. */
export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <Section id="services">
      <div className="wrap">
        <Head kicker={s.kicker} kickerEn={s.kickerEn} h1={s.h1} h2={s.h2} en={s.en} center />

        <div className="bento">
          {s.items.map((it, i) => (
            <article className="tile plane" key={it.en}>
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
