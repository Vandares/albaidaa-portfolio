import { Section, Lockup } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { CLIENT_LOGOS } from "../data/site.js";

function Half({ hidden }) {
  return (
    <div className="mq-half" aria-hidden={hidden || undefined}>
      {CLIENT_LOGOS.map(([file, name]) => (
        <div className="chip" key={file}>
          <img
            src={`/assets/clients/logos/${file}.png`}
            alt={hidden ? "" : name}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  const { t } = useLang();
  const c = t.clients;

  return (
    <Section id="clients">
      <div
        className="wrap"
        style={{ textAlign: "center", marginBottom: "clamp(32px,5vw,56px)" }}
      >
        <Lockup
          kicker={c.kicker}
          kickerEn={c.kickerEn}
          h1={c.h1}
          h2={c.h2}
          en={c.en}
          center
        />
      </div>

      <div className="marquee">
        <div className="marquee-track">
          <Half />
          <Half hidden />
        </div>
      </div>
    </Section>
  );
}
