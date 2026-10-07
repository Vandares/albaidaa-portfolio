import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { Spark } from "../lib/icons.jsx";

/**
 * Subscription tiers.
 *
 * Built from the internal packages guide, but only the half of it a client is
 * meant to read. The guide also carries objection scripts, upgrade triggers,
 * the production calendar and management rulings -- none of which belong on a
 * public page, and the document says so on its first line.
 *
 * No figure appears here and none is stored in the data either: site.js ships
 * whole to every visitor, so a price kept in it "but hidden" is a price
 * published. They stay in the internal guide.
 */
export default function Packages() {
  const { t } = useLang();
  const p = t.packages;

  return (
    <Section id="packages">
      <div className="wrap">
        <Head kicker={p.kicker} kickerEn={p.kickerEn} h1={p.h1} h2={p.h2} en={p.en} center />
        <p className="pk-lead plane">{p.lead}</p>

        <div className="pk-grid">
          {p.items.map((it, i) => (
            <article className={"pk plane" + (i === 1 ? " pk-pick" : "")} key={it.en}>
              {i === 1 && (
                <span className="pk-flag">
                  <Spark width={11} height={11} aria-hidden="true" />
                  {p.popular}
                </span>
              )}

              <h3>{it.t}</h3>
              <span className="en-label">{it.en}</span>
              <p className="pk-who">{it.who}</p>

              <ul className="pk-rows">
                {it.rows.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <a href="#contact" className={"btn " + (i === 1 ? "btn-primary" : "btn-ghost")}>
                {p.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="pk-note plane">{p.note}</p>

        <div className="pk-aside plane">
          <h4>{p.asideTitle}</h4>
          <p>{p.aside}</p>
        </div>
      </div>
    </Section>
  );
}
