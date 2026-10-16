import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { Spark } from "../lib/icons.jsx";

/**
 * Packages — the monthly social subscription, then website design.
 *
 * Built from the two internal package documents, but only the half a client
 * is meant to read. Those files also carry objection scripts, upgrade
 * triggers, the production calendar and management rulings, and the first one
 * says on its opening line that it is not to be sent to a client.
 *
 * Nothing here names a figure and nothing stores one: site.js ships whole to
 * every visitor, so a price kept in it "but hidden" is a price published.
 * Billing terms are out for the same reason -- a payment schedule is a
 * negotiation, not a page.
 */
function Tier({ item, flagged, flagText, cta }) {
  return (
    <article className={"pk plane" + (flagged ? " pk-pick" : "")}>
      {flagged && (
        <span className="pk-flag">
          <Spark width={11} height={11} aria-hidden="true" />
          {flagText}
        </span>
      )}

      <h3>{item.t}</h3>
      <span className="en-label">{item.en}</span>
      <p className="pk-who">{item.who}</p>

      <ul className="pk-rows">
        {item.rows.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>

      <a href="#contact" className={"btn " + (flagged ? "btn-primary" : "btn-ghost")}>
        {cta}
      </a>
    </article>
  );
}

export default function Packages() {
  const { t } = useLang();
  const p = t.packages;
  const w = p.web;

  return (
    <Section id="packages">
      <div className="wrap">
        <Head kicker={p.kicker} kickerEn={p.kickerEn} h1={p.h1} h2={p.h2} en={p.en} center />
        <p className="pk-lead plane">{p.lead}</p>

        <div className="pk-grid">
          {p.items.map((it, i) => (
            <Tier key={it.en} item={it} flagged={i === 1} flagText={p.popular} cta={p.cta} />
          ))}
        </div>
        <p className="pk-note plane">{p.note}</p>

        {/* second group: the website packages are a different purchase, so they
            get their own rule and label rather than sharing one long row */}
        <div className="pk-split plane">
          <h3>{w.label}</h3>
          <span className="en-label">{w.labelEn}</span>
          <p>{w.lead}</p>
        </div>

        <div className="pk-grid pk-grid-2">
          {w.items.map((it, i) => (
            <Tier key={it.en} item={it} flagged={i === 1} flagText={p.popular} cta={p.cta} />
          ))}
        </div>
        <p className="pk-note plane">{w.shared}</p>
        <p className="pk-note plane">{w.timing}</p>

        <div className="pk-aside plane">
          <h4>{p.asideTitle}</h4>
          <p>{p.aside}</p>
        </div>
      </div>
    </Section>
  );
}
