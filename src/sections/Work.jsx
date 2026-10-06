import { useEffect, useState } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { WORK_SHOTS, WORK_CATS } from "../data/site.js";
import { useJustified } from "../lib/justify.js";
import { Close } from "../lib/icons.jsx";

const SRC = (id, small) => `/assets/work/web/${id}${small ? "-sm" : ""}.webp`;
const GAP = 12;

/**
 * The work section leads with the actual work.
 *
 * Shots keep their own proportions and the row height is solved to span the
 * container, so every row ends flush at both edges and nothing is cropped.
 * The earlier uniform 4:5 tile filled rows neatly but cut wide pieces in
 * half, which made a sheet of band copy unreadable.
 */
export default function Work() {
  const { t } = useLang();
  const w = t.work;
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);

  const shots = cat === "all" ? WORK_SHOTS : WORK_SHOTS.filter((s) => s.cat === cat);
  const [ref, rows] = useJustified(shots, GAP);

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

        <div className="gallery plane" ref={ref} style={{ gap: GAP }}>
          {rows.map((row, i) => (
            <div className="g-row" key={i} style={{ height: row.height, gap: GAP }}>
              {row.items.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className="shot"
                  style={{ flex: `${s.ratio} 1 0` }}
                  onClick={() => setOpen(s)}
                  aria-label={w.shots[s.id]}
                >
                  <img src={SRC(s.id, true)} alt={w.shots[s.id]} loading="lazy" decoding="async" />
                  <span className="shot-meta">
                    <span className="shot-cat">{w.cats[s.cat]}</span>
                    <span className="shot-name">{w.shots[s.id]}</span>
                  </span>
                </button>
              ))}
            </div>
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
