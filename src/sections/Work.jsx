import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";

/**
 * F6 · spec sheet. Hairline rules, tabular numbering, editorial restraint —
 * which is what the portfolio's own work index already is (page 07).
 *
 * Four of these eleven have no imagery supplied yet, so the whole index is
 * presented as a named list rather than a thumbnail grid with gaps in it.
 */
export default function Work() {
  const { t } = useLang();
  const w = t.work;

  return (
    <Section id="work">
      <div className="wrap">
        <Head kicker={w.kicker} kickerEn={w.kickerEn} h1={w.h1} h2={w.h2} en={w.en} />

        <div className="sheet-rows">
          {w.items.map((it, i) => (
            <a className="row plane" key={it.name} href="#showreel">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="name">{it.name}</span>
              <span className="kind">{it.kind}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
