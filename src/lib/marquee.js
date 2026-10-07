import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * A seamless marquee needs one repeating unit at least as wide as the band it
 * covers.
 *
 * The track holds two identical halves and slides by -50%, which lands exactly
 * on the start of the second half. That only looks continuous while a single
 * half is wider than the visible band: once the band outgrows it, the tail of
 * the second half scrolls into view and leaves a hole. The service ticker was
 * 1812px of content inside a band that grows with the viewport, so it held
 * together at 1440 and broke on anything wider.
 *
 * So the content is repeated until one half covers the band, measured rather
 * than guessed. Both elements are observed: the half is what changes when a
 * web font swaps in or an image finally decodes, and measuring only on mount
 * meant sizing the loop against content that had not arrived yet.
 *
 * Two things this has to get right, both learned the hard way:
 *
 * 1. measure() reads layout that its own setState can change. Writing state
 *    unconditionally turned that into an infinite render loop -- React threw
 *    "Maximum update depth exceeded" and tore the whole tree down, which is
 *    how switching language produced a blank page. Every write below is now
 *    conditional, and the duration only moves on a change worth seeing.
 * 2. The band needs `direction: ltr` in CSS. See the note above `.ticker` in
 *    components.css for why an RTL band empties itself.
 */
const MAX_REPEAT = 40; // a runaway measurement must not clone content forever

export function useSeamlessMarquee({ pxPerSecond = 46, slack = 1.15 } = {}) {
  const band = useRef(null);
  const half = useRef(null);
  const [repeat, setRepeat] = useState(1);
  const [duration, setDuration] = useState(40);

  const measure = useCallback(() => {
    const b = band.current;
    const h = half.current;
    if (!b || !h) return;

    const bandW = b.getBoundingClientRect().width * slack;
    const halfW = h.getBoundingClientRect().width;
    if (!bandW || !halfW) return;

    const unitW = halfW / repeat; // width of a single copy, invariant
    if (!unitW) return;

    const needed = Math.min(MAX_REPEAT, Math.max(1, Math.ceil(bandW / unitW)));
    const next = Math.max(12, (unitW * needed) / pxPerSecond);

    if (needed !== repeat) setRepeat(needed);
    // sub-second drift is not worth a re-render, and chasing it is what looped
    setDuration((d) => (Math.abs(d - next) > 0.5 ? next : d));
  }, [repeat, pxPerSecond, slack]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (band.current) ro.observe(band.current);
    if (half.current) ro.observe(half.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure]);

  return { band, half, repeat, duration };
}

/** Repeat a list `n` times, with keys that stay unique across copies. */
export function repeated(items, n) {
  const out = [];
  for (let i = 0; i < n; i++) for (const it of items) out.push({ it, key: i + ":" + (it.key ?? it) });
  return out;
}
