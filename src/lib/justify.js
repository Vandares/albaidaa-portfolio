import { useEffect, useRef, useState } from "react";

/**
 * Justified rows: fill the width without cropping anything.
 *
 * The first attempt forced every shot into one 4:5 tile. That fills rows
 * neatly and ruins the work: a 1.78 wide identity board or a 1.48 wide sheet
 * of band messages loses more than half its width, and a cropped sheet of
 * copy is unreadable, which is the opposite of showing the work.
 *
 * So each shot keeps its own aspect ratio and the row height is solved
 * instead. For a row of n shots the available width is W minus the gaps, and
 * the height that makes them span it exactly is that width divided by the sum
 * of their ratios. Every row still ends flush with both edges, at any item
 * count and any filter, and nothing is cut.
 */

const TARGET = [
  [1200, 320],
  [900, 290],
  [600, 250],
  [0, 210],
];

const targetFor = (w) => (TARGET.find(([min]) => w >= min) || [0, 210])[1];

/**
 * @param items  [{ id, ratio }]
 * @param width  container width in px
 * @param gap    px between items
 * @returns [{ items, height }]
 */
export function justify(items, width, gap) {
  if (!width || !items.length) return [];
  const target = targetFor(width);
  const rows = [];
  let row = [];
  let sum = 0;

  const heightOf = (r) =>
    (width - gap * (r.length - 1)) / r.reduce((a, it) => a + it.ratio, 0);

  for (const it of items) {
    row.push(it);
    sum += it.ratio;
    if (sum * target + gap * (row.length - 1) >= width) {
      rows.push(row);
      row = [];
      sum = 0;
    }
  }
  if (row.length) rows.push(row);

  // A short trailing row stretches tall to span the width, so borrow from the
  // row above until the last row is close in height to the one before it.
  // Comparing heights rather than counts matters: two portrait shots left over
  // balloon just as badly as one does.
  while (rows.length > 1) {
    const last = rows[rows.length - 1];
    const prev = rows[rows.length - 2];
    if (prev.length <= 1) break;
    if (heightOf(last) <= heightOf(prev) * 1.35) break;
    last.unshift(prev.pop());
  }

  return rows.map((r) => ({ items: r, height: heightOf(r) }));
}

/** Measures the container and recomputes rows on resize. */
export function useJustified(items, gap = 12) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  return [ref, justify(items, width, gap)];
}
