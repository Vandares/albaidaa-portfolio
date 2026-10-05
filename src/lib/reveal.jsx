import { useEffect, useRef } from "react";

/**
 * The signature gesture.
 *
 * The logomark is an L of two planes rising at 45°, and the guideline turns
 * that into the brand's motion: "planes slide in at 45°, 400 ms". Everything
 * here reveals with that one gesture; the CSS lives in `.plane` / `.is-in`.
 *
 * We observe the SECTION, never the planes themselves. A hidden plane is a
 * zero-area clip-path, and IntersectionObserver treats that as zero visible
 * area — observing one directly means it can never report itself visible, so
 * it would stay hidden forever.
 */

const watched = new WeakSet();
let io = null;

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function revealAll(root) {
  for (const el of root.querySelectorAll(".plane, .rule")) el.classList.add("is-in");
  if (root.classList && root.classList.contains("plane")) root.classList.add("is-in");
}

function observer() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        revealAll(e.target);
        io.unobserve(e.target);
      }
    },
    { threshold: 0, rootMargin: "0px 0px -12% 0px" }
  );
  return io;
}

export function registerReveal(root) {
  if (!root || watched.has(root)) return;
  watched.add(root);
  if (reducedMotion()) {
    revealAll(root);
    return;
  }
  observer().observe(root);
}

/** Attach to a section; its planes reveal together when it scrolls in. */
export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    registerReveal(ref.current);
  });
  return ref;
}

/** A section that reveals its own `.plane` children. */
export function Section({ id, className = "", children, ...rest }) {
  const ref = useReveal();
  return (
    <section id={id} ref={ref} className={`sec ${className}`} {...rest}>
      {children}
    </section>
  );
}

/** Kicker → Arabic headline → English line: the portfolio's lockup. */
export function Lockup({ kicker, kickerEn, h1, h2, en, center = false, i = 0 }) {
  return (
    <>
      <div className="kicker plane" data-i={i}>
        <span className="dot" />
        <span className="ar">{kicker}</span>
        <span className="en-label">{kickerEn}</span>
      </div>
      <div className={`lockup ${center ? "center" : ""}`}>
        <h2 className="h-ar plane" data-i={i + 1}>
          {h1} <span className="glow">{h2}</span>
        </h2>
        {en ? (
          <p className="en-sub plane" data-i={i + 2}>
            {en}
          </p>
        ) : null}
      </div>
    </>
  );
}
