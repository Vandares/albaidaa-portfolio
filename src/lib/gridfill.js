import { useEffect, useState } from "react";

/**
 * Never leave a short row.
 *
 * A gallery with filters changes its item count on every click, so any fixed
 * column count will eventually leave a ragged last row: 15 shots over 4
 * columns is three full rows and a row of three, and masonry only trades that
 * for a ragged bottom edge instead.
 *
 * So the last row's items are widened to absorb whatever is left over. Five
 * shots over four columns becomes four plus one full-width; three over four
 * becomes 2 + 1 + 1. Every row closes, at every filter and every breakpoint.
 */

const COLS = [
  [1200, 4],
  [760, 3],
  [460, 2],
  [0, 1],
];

function colsFor(w) {
  return (COLS.find(([min]) => w >= min) || [0, 1])[1];
}

export function useColumns() {
  const [cols, setCols] = useState(() =>
    typeof window === "undefined" ? 4 : colsFor(window.innerWidth)
  );

  useEffect(() => {
    const on = () => setCols(colsFor(window.innerWidth));
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  return cols;
}

/**
 * Column span for each item so every row fills exactly `cols` tracks.
 * Returns one span per item, in order.
 */
export function spans(count, cols) {
  const out = new Array(count).fill(1);
  if (count === 0 || cols <= 1) return out;

  const remainder = count % cols;
  const leftovers = remainder === 0 ? 0 : remainder;
  if (!leftovers) return out;

  // the final `leftovers` items share all `cols` tracks between them
  const base = Math.floor(cols / leftovers);
  const extra = cols % leftovers;
  for (let i = 0; i < leftovers; i++) {
    out[count - leftovers + i] = base + (i < extra ? 1 : 0);
  }
  return out;
}
