import { useEffect, useState } from "react";
import { Section, Head } from "../lib/reveal.jsx";
import { useLang } from "../i18n/LangProvider.jsx";
import { WORK_SHOTS, WORK_CATS } from "../data/site.js";
import { Close } from "../lib/icons.jsx";

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

        <div className="gallery plane">
          {shots.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`shot ${s.wide ? "wide" : ""}`}
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

        {/* the full index, including the four projects with no imagery yet */}
        <p className="index-label plane">{w.gallery}</p>
        <div className="sheet-rows">
          {w.items.map((it, i) => (
            <div className="row plane" key={it.name}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="name">{it.name}</span>
              <span className="kind">{it.kind}</span>
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
