import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
 * than guessed. Both elements are observed, not just the band: the half is
 * what changes when a web font swaps in or an image finally decodes, and
 * measuring once on mount meant sizing the loop against unloaded content.
 *
 * The band also has to carry `direction: ltr` in CSS. See the note above
 * `.ticker` in components.css for why an RTL band empties itself.
 */
export function useSeamlessMarquee({ pxPerSecond = 46, slack = 1.15 } = {}) {
  const band = useRef(null);
  const half = useRef(null);
  const [repeat, setRepeat] = useState(1);
  const [duration, setDuration] = useState(40);

  // measure() reads layout that its own setState can change, so it has to be
  // idempotent: everything is derived from the width of ONE copy.
  const measure = () => {
    const b = band.current;
    const h = half.current;
    if (!b || !h) return;

    const bandW = b.getBoundingClientRect().width * slack;
    const halfW = h.getBoundingClientRect().width;
    if (!halfW || !bandW) return;

    const unitW = halfW / repeat;
    const needed = Math.max(1, Math.ceil(bandW / unitW));
    if (needed !== repeat) setRepeat(needed);
    setDuration(Math.max(12, (unitW * needed) / pxPerSecond));
  };

  useLayoutEffect(measure);

  useEffect(() => {
    const on = () => measure();
    window.addEventListener("resize", on);

    const ro = new ResizeObserver(on);
    if (band.current) ro.observe(band.current);
    if (half.current) ro.observe(half.current);

    return () => {
      window.removeEventListener("resize", on);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { band, half, repeat, duration };
}

/** Repeat a list `n` times, with keys that stay unique across copies. */
export function repeated(items, n) {
  const out = [];
  for (let i = 0; i < n; i++) for (const it of items) out.push({ it, key: i + ":" + (it.key ?? it) });
  return out;
}
