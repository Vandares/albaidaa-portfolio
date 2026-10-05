/**
 * Node stand-in for tastemaker's anti_slop_scan.py + audit_motion.py.
 * Python on this machine is a Microsoft Store stub and cannot execute, so the
 * skill's own scripts could not be run. These implement the same checks.
 *
 *   node scripts/gates.cjs src
 */
const fs = require("fs");
const path = require("path");

const roots = process.argv.slice(2);
const files = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const f = path.join(d, e.name);
    if (e.isDirectory()) walk(f);
    else if (/\.(jsx?|tsx?|css|html)$/.test(e.name)) files.push(f);
  }
};
roots.forEach((r) => (fs.statSync(r).isDirectory() ? walk(r) : files.push(r)));

const findings = [];
const add = (sev, file, line, rule, detail) =>
  findings.push({ sev, file, line, rule, detail });

// Lines that are comments (our own prose) are not shipped copy.
const isComment = (l) => /^\s*(\/\/|\*|\/\*|<!--)/.test(l);

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  const lines = src.split("\n");
  const css = file.endsWith(".css");

  lines.forEach((l, i) => {
    const n = i + 1;

    // ---- anti-slop ----
    if (!css && !isComment(l) && /["'>][^"'<]*—[^"'<]*["'<]/.test(l))
      add("HIGH", file, n, "em-dash", l.trim().slice(0, 90));
    if (/\btransition:\s*all\b|\btransition-all\b/.test(l))
      add("HIGH", file, n, "transition-all", l.trim().slice(0, 90));
    if (/linear-gradient\([^)]*(#6366f1|#8b5cf6|#a855f7|#06b6d4|indigo|violet-5|purple-5)/i.test(l))
      add("HIGH", file, n, "generic-ai-gradient", l.trim().slice(0, 90));
    if (/-webkit-background-clip:\s*text|background-clip:\s*text/.test(l))
      add("MED", file, n, "gradient-text", l.trim().slice(0, 90));
    if (/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(l) && !isComment(l))
      add("HIGH", file, n, "emoji-as-icon", l.trim().slice(0, 90));
    if (/\b(lorem ipsum|placeholder text|TODO:|FIXME:)/i.test(l))
      add("MED", file, n, "placeholder-copy", l.trim().slice(0, 90));
    if (/href=["']#["']/.test(l)) add("MED", file, n, "dead-link", l.trim().slice(0, 90));
    if (/<img(?![^>]*\balt=)/.test(l)) add("HIGH", file, n, "img-missing-alt", l.trim().slice(0, 90));
    if (/\bh-screen\b/.test(l)) add("MED", file, n, "h-screen", l.trim().slice(0, 90));

    // ---- motion audit ----
    if (css) {
      if (/transition[^;]*\bease-in\b(?!-out)/.test(l))
        add("MED", file, n, "ease-in-on-ui", l.trim().slice(0, 90));
      if (/scale\(0\)/.test(l)) add("MED", file, n, "scale-zero", l.trim().slice(0, 90));
      const dur = l.match(/(\d{3,4})ms/g);
      if (dur) {
        dur.forEach((d) => {
          const ms = parseInt(d);
          // long durations are legal on ambient/decorative loops only
          if (ms > 400 && !/animation|keyframes|ticker|wall|cue|float|drip|decorative/i.test(l))
            add("MED", file, n, "ui-motion-over-400ms", `${d} :: ${l.trim().slice(0, 70)}`);
        });
      }
      if (/transition:[^;]*\b(width|height|top|left|right|bottom|margin|padding)\b/.test(l))
        add("MED", file, n, "layout-property-animation", l.trim().slice(0, 90));
    }
  });

  // whole-tag img alt check (alt often sits on a later line than '<img')
  const tags = src.match(/<img[sS]*?>/g) || [];
  tags.forEach((tag) => {
    if (!/alt=/.test(tag))
      add('HIGH', file, 0, 'img-missing-alt', tag.replace(/s+/g, ' ').slice(0, 80));
  });
}

// ---- document-level checks ----
const allCss = files.filter((f) => f.endsWith(".css")).map((f) => fs.readFileSync(f, "utf8")).join("\n");
if (!/prefers-reduced-motion/.test(allCss))
  add("HIGH", "(css)", 0, "no-reduced-motion", "no prefers-reduced-motion block found");

const js = files.filter((f) => /\.jsx?$/.test(f)).map((f) => fs.readFileSync(f, "utf8")).join("\n");
const engines = ["framer-motion", "gsap", "react-spring", "motion/react", "animejs"].filter((e) =>
  new RegExp(`from ["']${e}`).test(js)
);
if (engines.length > 1)
  add("HIGH", "(js)", 0, "multiple-motion-engines", engines.join(" + "));

const iconPkgs = ["lucide-react", "react-icons", "@heroicons", "@tabler/icons"].filter((e) =>
  new RegExp(`from ["']${e}`).test(js)
);
if (iconPkgs.length > 1) add("HIGH", "(js)", 0, "multiple-icon-families", iconPkgs.join(" + "));

// ---- report ----
const high = findings.filter((f) => f.sev === "HIGH");
const med = findings.filter((f) => f.sev === "MED");
const show = (arr, label) => {
  console.log(`\n${label}: ${arr.length}`);
  arr.forEach((f) => console.log(`  ${f.rule.padEnd(26)} ${f.file}:${f.line}  ${f.detail || ""}`));
};
show(high, "HIGH");
show(med, "MEDIUM");
console.log(`\nscanned ${files.length} files · motion engines: ${engines.join(", ") || "none"}`);
process.exitCode = high.length ? 1 : 0;
