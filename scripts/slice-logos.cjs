/* Slice client logos by detecting content bands (projection profile), not a fixed grid */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "brands we worked with/brands logos.png");
const OUT = path.join(ROOT, "public/assets/clients/logos");

const names = [
  "formula1", "isdb", "sol", "bna", "shades", "adahi",
  "nightshift", "circles", "padel", "velvet", "nova", "shawarma",
  "mervat", "almawj", "sky", "hosn", "abc", "leos",
];

// Find runs of "content" in a boolean profile, merging gaps smaller than minGap
function bands(profile, minGap, minSize) {
  const runs = [];
  let start = -1;
  for (let i = 0; i <= profile.length; i++) {
    const on = i < profile.length && profile[i];
    if (on && start === -1) start = i;
    if (!on && start !== -1) {
      runs.push([start, i - 1]);
      start = -1;
    }
  }
  // merge runs separated by < minGap
  const merged = [];
  for (const r of runs) {
    const last = merged[merged.length - 1];
    if (last && r[0] - last[1] < minGap) last[1] = r[1];
    else merged.push([...r]);
  }
  return merged.filter(([a, b]) => b - a >= minSize);
}

(async () => {
  const { data, info } = await sharp(SRC)
    .flatten({ background: "#ffffff" })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const dark = (x, y) => data[y * W + x] < 190;

  // Row bands: rows containing any dark pixel
  const rowProfile = new Array(H).fill(false);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) if (dark(x, y)) { rowProfile[y] = true; break; }
  }
  const rows = bands(rowProfile, 40, 30);
  console.log("row bands:", JSON.stringify(rows));
  if (rows.length !== 3) throw new Error(`expected 3 row bands, got ${rows.length}`);

  fs.mkdirSync(OUT, { recursive: true });
  let idx = 0;
  for (const [y0, y1] of rows) {
    // Column bands within this row strip
    const colProfile = new Array(W).fill(false);
    for (let x = 0; x < W; x++) {
      for (let y = y0; y <= y1; y++) if (dark(x, y)) { colProfile[x] = true; break; }
    }
    const cols = bands(colProfile, 45, 40);
    console.log(`row ${y0}-${y1}: ${cols.length} col bands`, JSON.stringify(cols));
    if (cols.length !== 6) throw new Error(`expected 6 col bands, got ${cols.length}`);

    for (const [x0, x1] of cols) {
      const pad = 6;
      const left = Math.max(0, x0 - pad);
      const top = Math.max(0, y0 - pad);
      const w = Math.min(W, x1 + pad) - left;
      const h = Math.min(H, y1 + pad) - top;
      const cell = await sharp(SRC).extract({ left, top, width: w, height: h }).toBuffer();
      await sharp(cell)
        .trim({ threshold: 12 })
        .resize({ height: 96, fit: "inside" })
        .png({ compressionLevel: 9 })
        .toFile(path.join(OUT, `${names[idx]}.png`));
      idx++;
    }
  }
  console.log(`DONE: ${idx} logos`);
})().catch((e) => { console.error("FAILED:", e.message); process.exit(1); });
