import { useLang } from "../i18n/LangProvider.jsx";
import { Spark } from "../lib/icons.jsx";
import { useSeamlessMarquee } from "../lib/marquee.js";

/**
 * The angled service band.
 *
 * Borrowed in shape from the reference the client liked, but the separator is
 * the guideline's own four-pointed spark rather than the reference's plus
 * sign. The content repeats as many times as the band is wide, so the loop
 * stays continuous on a wide monitor instead of running out mid-scroll.
 */
export default function Ticker() {
  const { t } = useLang();
  const items = t.services.items.map((s) => s.t);
  const { band, half, repeat, duration } = useSeamlessMarquee({ pxPerSecond: 42 });

  const copies = Array.from({ length: repeat }, (_, c) =>
    items.map((s, i) => (
      <span className="ticker-cell" key={c + ":" + i}>
        <span className="ticker-item">{s}</span>
        <Spark className="ticker-star" width={13} height={13} />
      </span>
    ))
  );

  return (
    <div className="ticker-clip">
      <div className="ticker" ref={band} role="presentation">
        <div className="ticker-track" style={{ animationDuration: `${duration}s` }}>
          <div className="ticker-half" ref={half}>
            {copies}
          </div>
          <div className="ticker-half" aria-hidden="true">
            {copies}
          </div>
        </div>
      </div>
    </div>
  );
}
