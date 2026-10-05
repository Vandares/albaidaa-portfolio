import { useEffect, useRef } from "react";
import { revealSection } from "./motion.js";

/** Attach to a section; its .plane children reveal with the 45-degree gesture. */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => revealSection(ref.current), []);
  return ref;
}

export function Section({ id, className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <section id={id} ref={ref} className={`sec ${className}`} {...rest}>
      {children}
    </section>
  );
}

/**
 * Section head, `S4` stacked eyebrow: label directly above the heading, one
 * column. The catalog bans the eyebrow-left / heading-right two-column head,
 * so this never splits across columns.
 */
export function Head({ kicker, kickerEn, h1, h2, en, center = false }) {
  return (
    <div className={`head ${center ? "center" : ""}`}>
      {kicker ? (
        <p className="kicker plane">
          <span className="dot" aria-hidden="true" />
          <span className="ar">{kicker}</span>
          {kickerEn ? <span className="en-label">{kickerEn}</span> : null}
        </p>
      ) : null}
      <h2 className="h-sec plane">
        {h1} <span className="glow">{h2}</span>
      </h2>
      {en ? <p className="en-sub plane">{en}</p> : null}
    </div>
  );
}
