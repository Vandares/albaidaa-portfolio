import { useEffect, useState } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { WORK_SHOTS, WORK_CATS } from "../data/site.js";
import { Close } from "../lib/icons.jsx";
import { useColumns, spans } from "../lib/gridfill.js";

const SRC = (id, small) => `/assets/work/web/${id}${small ? "-sm" : ""}.webp`;

/**
 * The work section leads with the actual work.
 *
 * An earlier pass replaced this gallery with a text-only index taken from the
 * portfolio's contents page, which left a creative agency's site showing none
 * of its creative work. The real shots are the argument; the numbered index
 * below them is the caption, and it also carries the four projects that have
 * no imagery supplied yet.
 */
export default function Work() {
  const { t } = useLang();
  const w = t.work;
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);

  const shots = cat === "all" ? WORK_SHOTS : WORK_SHOTS.filter((s) => s.cat === cat);
  const cols = useColumns();
  const span = spans(shots.length, cols);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section id="work">
      <div className="wrap">
        <Head kicker={w.kicker} kickerEn={w.kickerEn} h1={w.h1} h2={w.h2} en={w.en} />

        <div className="filters plane" role="tablist" aria-label={w.gallery}>
          {WORK_CATS.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              className={`filter ${cat === c ? "on" : ""}`}
              onClick={() => setCat(c)}
            >
              {w.cats[c]}
            </button>
          ))}
        </div>

        <div className="gallery plane" style={{ "--cols": cols }}>
          {shots.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className="shot"
              style={{ gridColumn: `span ${span[i]}`, aspectRatio: `${4 * span[i]} / 5` }}
              onClick={() => setOpen(s)}
              aria-label={w.shots[s.id]}
            >
              <img
                src={SRC(s.id, true)}
                alt={w.shots[s.id]}
                loading="lazy"
                decoding="async"
                width={s.wide ? 700 : 560}
                height={s.wide ? 394 : 700}
              />
              <span className="shot-meta">
                <span className="shot-cat">{w.cats[s.cat]}</span>
                <span className="shot-name">{w.shots[s.id]}</span>
              </span>
            </button>
          ))}
        </div>

      </div>

      {open && (
        <div className="lb" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button className="lb-close" aria-label={t.showreel.close} onClick={() => setOpen(null)}>
            <Close width={20} height={20} />
          </button>
          <img
            className="lb-img"
            src={SRC(open.id)}
            alt={w.shots[open.id]}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
}
