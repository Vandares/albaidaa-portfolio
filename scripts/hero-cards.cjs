/* Generate optimized 3:4 card images for the hero Work Deck */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public/assets/hero");

const CARDS = [
  ["public/assets/work/campaign-1.png", "card-campaign.jpg"],
  ["public/assets/work/food-1.png", "card-food.jpg"],
  ["public/assets/work/social-1.png", "card-social.jpg"],
  ["public/assets/work/branding-1.png", "card-brand.jpg"],
  ["public/assets/videos/posters/night.jpg", "card-night.jpg"],
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [src, out] of CARDS) {
    await sharp(path.join(ROOT, src))
      .resize(640, 854, { fit: "cover", position: "attention" })
      .jpeg({ quality: 80 })
      .toFile(path.join(OUT, out));
    const kb = Math.round(fs.statSync(path.join(OUT, out)).size / 1024);
    console.log(`${out}: ${kb} KB`);
  }
  console.log("DONE");
})().catch((e) => { console.error("FAILED:", e.message); process.exit(1); });
