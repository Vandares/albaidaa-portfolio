import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { CLIENT_LOGOS } from "../data/site.js";

/**
 * P1 · hairline logo wall. No card chips around each mark: the previous build
 * boxed every logo, which reads as a grid of buttons rather than a client list.
 * All eighteen are real clients from the portfolio.
 */
function Half({ hidden }) {
  return (
    <div className="wall-half" aria-hidden={hidden || undefined}>
      {CLIENT_LOGOS.map(([file, name]) => (
        <img
          key={file}
          src={`/assets/clients/logos/${file}.png`}
          alt={hidden ? "" : name}
          loading="lazy"
          decoding="async"
          width="140"
          height="38"
        />
      ))}
    </div>
  );
}

export default function Clients() {
  const { t } = useLang();
  const c = t.clients;

  return (
    <Section id="clients">
      <div className="wrap">
        <Head kicker={c.kicker} kickerEn={c.kickerEn} h1={c.h1} h2={c.h2} en={c.en} center />
      </div>
      <div className="wall">
        <div className="wall-track">
          <Half />
          <Half hidden />
        </div>
      </div>
    </Section>
  );
}
