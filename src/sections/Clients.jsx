import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { CLIENT_LOGOS } from "../data/site.js";
import { useSeamlessMarquee } from "../lib/marquee.js";

/**
 * P1 hairline logo wall. No card chips around each mark: an earlier build
 * boxed every logo, which read as a grid of buttons rather than a client list.
 * All eighteen are real clients from the portfolio, and the row repeats to
 * cover the viewport so the loop never runs dry on a wide screen.
 *
 * Each logo declares its own intrinsic width. They are nowhere near a common
 * shape (0.46 to 3.76 in aspect), so one shared width/height pair would both
 * reflow the row on load and hand the marquee a false measurement.
 */
export default function Clients() {
  const { t } = useLang();
  const c = t.clients;
  const { band, half, repeat, duration } = useSeamlessMarquee({ pxPerSecond: 34 });

  const copies = Array.from({ length: repeat }, (_, k) =>
    CLIENT_LOGOS.map(([file, name, w]) => (
      <img
        key={k + ":" + file}
        src={`/assets/clients/logos/${file}.png`}
        alt={k === 0 ? name : ""}
        aria-hidden={k === 0 ? undefined : "true"}
        decoding="async"
        width={w}
        height={38}
      />
    ))
  );

  return (
    <Section id="clients">
      <div className="wrap">
        <Head kicker={c.kicker} kickerEn={c.kickerEn} h1={c.h1} h2={c.h2} en={c.en} center />
      </div>
      <div className="wall" ref={band}>
        <div className="wall-track" style={{ animationDuration: `${duration}s` }}>
          <div className="wall-half" ref={half}>
            {copies}
          </div>
          <div className="wall-half" aria-hidden="true">
            {copies}
          </div>
        </div>
      </div>
    </Section>
  );
}
