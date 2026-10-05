import { useLang } from "../i18n/LangProvider.jsx";
import { Spark } from "../lib/icons.jsx";

/**
 * The angled service band.
 *
 * Borrowed in shape from the reference the client liked, but the separator is
 * the guideline's own four-pointed chrome spark rather than the reference's
 * plus sign, and the tilt sits on the logomark's 45-degree family.
 */
function Half({ items, hidden }) {
  return (
    <div className="ticker-half" aria-hidden={hidden || undefined}>
      {items.map((s, i) => (
        <span key={s + i} style={{ display: "contents" }}>
          <span className="ticker-item">{s}</span>
          <Spark className="ticker-star" width={13} height={13} />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  const { t } = useLang();
  const items = t.services.items.map((s) => s.t);

  return (
    <div className="ticker-clip">
      <div className="ticker" role="presentation">
        <div className="ticker-track">
          <Half items={items} />
          <Half items={items} hidden />
        </div>
      </div>
    </div>
  );
}
