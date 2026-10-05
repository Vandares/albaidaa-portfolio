import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * One motion engine for the whole site.
 *
 * The guideline gives the signature: the logomark is two planes rising at 45
 * degrees, and its motion note is "planes slide in at 45 degrees, 400ms, slow
 * and soft, like light appearing". Every reveal here is that one gesture at
 * the brand's own ease and duration.
 *
 * Two things this file is careful about:
 *
 * 1. Sections are the trigger, never the planes themselves. A hidden plane is
 *    a zero-area clip-path, which IntersectionObserver and ScrollTrigger both
 *    read as zero visible area, so driving one off its own position would
 *    leave it hidden forever.
 * 2. Nothing may depend on an animation finishing in order to be readable.
 *    GSAP advances on requestAnimationFrame, and some environments never run
 *    it (a background tab, low power mode, an embedded webview). There the
 *    page would sit frozen with everything at opacity 0, so the ticker is
 *    probed once and motion is skipped entirely when it is dead.
 */

export const EASE = "power3.out"; // closest match to cubic-bezier(.2,.8,.2,1)
export const D = { fast: 0.15, base: 0.25, slow: 0.4 };

const HIDDEN_LTR = "polygon(0% 0%, 0% 0%, -34% 100%, -34% 100%)";
const SHOWN_LTR = "polygon(0% 0%, 134% 0%, 100% 100%, -34% 100%)";
const HIDDEN_RTL = "polygon(100% 0%, 100% 0%, 134% 100%, 134% 100%)";
const SHOWN_RTL = "polygon(-34% 0%, 100% 0%, 134% 100%, 0% 100%)";

const VISIBLE = { clipPath: "none", opacity: 1, y: 0 };
const rtl = () => document.documentElement.dir === "rtl";

/* ---- requestAnimationFrame liveness probe ---- */
let alive = null;
const waiting = [];

if (typeof window !== "undefined") {
  let fired = false;
  requestAnimationFrame(() => {
    fired = true;
  });
  // setTimeout keeps running even where rAF does not, so this always resolves
  setTimeout(() => {
    alive = fired;
    waiting.splice(0).forEach((fn) => fn(fired));
  }, 350);
}

function whenReady(fn) {
  if (alive === null) waiting.push(fn);
  else fn(alive);
}

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Reveal every .plane inside `root` when the section scrolls in. */
export function revealSection(root) {
  if (!root) return () => {};
  const planes = root.querySelectorAll(".plane");
  if (!planes.length) return () => {};

  let ctx;
  let cancelled = false;

  whenReady((ticking) => {
    if (cancelled) return;

    // No usable ticker, or the visitor asked for less motion: just show it.
    if (!ticking || reduced()) {
      gsap.set(planes, VISIBLE);
      return;
    }

    ctx = gsap.context(() => {
      gsap.set(planes, {
        clipPath: rtl() ? HIDDEN_RTL : HIDDEN_LTR,
        opacity: 0,
        y: 14,
      });

      let clearFailsafe = () => {};
      gsap.to(planes, {
        clipPath: rtl() ? SHOWN_RTL : SHOWN_LTR,
        opacity: 1,
        y: 0,
        duration: D.slow,
        ease: EASE,
        stagger: 0.06,
        scrollTrigger: {
          trigger: root,
          start: "top 88%",
          once: true,
          onEnter: () => {
            // belt and braces: if the ticker dies mid-scroll, do not strand it
            const id = setTimeout(() => gsap.set(planes, VISIBLE), 1400);
            clearFailsafe = () => clearTimeout(id);
          },
        },
        onComplete: () => clearFailsafe(),
      });
    }, root);
  });

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

/**
 * Hero entrance. Four beats only, per the hero guidelines: context, headline,
 * slogan and actions, then the visual as one composition.
 */
export function heroIntro(root) {
  if (!root) return () => {};
  let ctx;
  let cancelled = false;

  whenReady((ticking) => {
    if (cancelled) return;
    const beats = root.querySelectorAll("[data-beat]");
    const canvas = root.querySelector(".hero-canvas");

    if (!ticking || reduced()) {
      gsap.set(beats, VISIBLE);
      if (canvas) gsap.set(canvas, { opacity: 1 });
      return;
    }

    ctx = gsap.context(() => {
      const id = setTimeout(() => {
        gsap.set(beats, VISIBLE);
        if (canvas) gsap.set(canvas, { opacity: 1 });
      }, 2000);

      const tl = gsap.timeline({
        defaults: { ease: EASE },
        onComplete: () => clearTimeout(id),
      });

      tl.fromTo('[data-beat="1"]', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: D.slow }, 0.1)
        .fromTo(
          '[data-beat="2"]',
          { opacity: 0, y: 26, clipPath: rtl() ? HIDDEN_RTL : HIDDEN_LTR },
          {
            opacity: 1,
            y: 0,
            clipPath: rtl() ? SHOWN_RTL : SHOWN_LTR,
            duration: 0.7,
            stagger: 0.08,
          },
          0.2
        )
        .fromTo('[data-beat="3"]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: D.slow, stagger: 0.07 }, 0.6)
        .fromTo(".hero-canvas", { opacity: 0 }, { opacity: 1, duration: 1.1 }, 0.15);
    }, root);
  });

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

/**
 * The reasons column scrolls while its 3D scene stays pinned beside it.
 * Desktop only: pinning a pane on a phone fights the native scroll.
 */
export function stickyStack(root, pinSelector, itemSelector) {
  if (!root) return () => {};
  let ctx;
  let cancelled = false;

  whenReady((ticking) => {
    if (cancelled || !ticking || reduced()) return;

    ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: root,
          start: "top 18%",
          end: "bottom 85%",
          pin: pinSelector,
          pinSpacing: false,
        });
        gsap.utils.toArray(itemSelector).forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0.3 },
            {
              opacity: 1,
              duration: D.base,
              ease: EASE,
              scrollTrigger: {
                trigger: item,
                start: "top 72%",
                end: "bottom 45%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    }, root);
  });

  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

/** Ambient drift on a 3D scene image, slow enough to read as texture. */
export function floatArt(el) {
  if (!el) return () => {};
  let ctx;
  let cancelled = false;
  whenReady((ticking) => {
    if (cancelled || !ticking || reduced()) return;
    ctx = gsap.context(() => {
      gsap.to(el, { y: -14, duration: 6, ease: "sine.inOut", yoyo: true, repeat: -1 });
    });
  });
  return () => {
    cancelled = true;
    ctx?.revert();
  };
}

export { gsap, ScrollTrigger };
