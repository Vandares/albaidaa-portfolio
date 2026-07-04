/* One-off asset generation: brand pattern, client logo tiles, OG image */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BRAND = path.join(ROOT, "public/assets/brand");
const CLIENTS = path.join(ROOT, "public/assets/clients");

async function makePattern() {
  // Rasterize the full-frame pattern SVG (white shapes on transparent)
  const raster = await sharp(path.join(BRAND, "pattern-src.svg"), { density: 96 })
    .resize(1600, 900)
    .png()
    .toBuffer();

  const alpha = await sharp(raster).extractChannel("alpha").toBuffer();

  async function tinted(hexRGB, out) {
    const solid = await sharp({
      create: { width: 1600, height: 900, channels: 3, background: hexRGB },
    })
      .png()
      .toBuffer();
    await sharp(solid)
      .joinChannel(alpha)
      .png({ compressionLevel: 9, palette: true })
      .toFile(path.join(BRAND, out));
    const kb = Math.round(fs.statSync(path.join(BRAND, out)).size / 1024);
    console.log(`${out}: ${kb} KB`);
  }

  await tinted({ r: 0x90, g: 0x83, b: 0xa8 }, "pattern-purple.png");
  await tinted({ r: 0xfd, g: 0xfb, b: 0xf9 }, "pattern-white.png");
}

async function makeLogoTiles() {
  // brands logos.png is a uniform 6x3 grid on white, 1920x1080
  const names = [
    "formula1", "isdb", "sol", "bna", "shades", "adahi",
    "nightshift", "circles", "padel", "velvet", "nova", "shawarma",
    "mervat", "almawj", "sky", "hosn", "abc", "leos",
  ];
  const src = path.join(ROOT, "brands we worked with/brands logos.png");
  const outDir = path.join(CLIENTS, "logos");
  fs.mkdirSync(outDir, { recursive: true });

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 6; c++) {
      const i = r * 6 + c;
      const out = path.join(outDir, `${names[i]}.png`);
      const cell = await sharp(src)
        .extract({ left: c * 320, top: r * 360, width: 320, height: 360 })
        .toBuffer();
      await sharp(cell)
        .trim({ threshold: 12 })
        .resize({ height: 96, fit: "inside", withoutEnlargement: false })
        .png({ compressionLevel: 9 })
        .toFile(out);
    }
  }
  console.log("logo tiles: 18 written");
}

async function makeOg() {
  // Social share image from the official brand logo artwork (1920x1920)
  await sharp(path.join(ROOT, "Lavert Visual identity/6.png"))
    .resize(1200, 1200)
    .extract({ left: 0, top: 201, width: 1200, height: 630 })
    .jpeg({ quality: 82 })
    .toFile(path.join(BRAND, "og.jpg"));
  const kb = Math.round(fs.statSync(path.join(BRAND, "og.jpg")).size / 1024);
  console.log(`og.jpg: ${kb} KB`);
}

(async () => {
  await makePattern();
  await makeLogoTiles();
  await makeOg();
  console.log("DONE");
})().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
