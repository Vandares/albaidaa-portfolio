import { useLang } from "../i18n/LangProvider.jsx";
import { Globe } from "../lib/icons.jsx";

export default function LangToggle({ className = "", onToggle }) {
  const { t, toggle } = useLang();

  const handle = () => {
    toggle();
    onToggle?.();
  };

  return (
    <button
      type="button"
      className={`lang-toggle ${className}`}
      onClick={handle}
      aria-label={t.switchAria}
      title={t.switchAria}
    >
      <Globe className="lang-globe" width={18} height={18} />
      <span className="lang-label">{t.switchTo}</span>
    </button>
  );
}
