// Paste-able probe: reports horizontal overflow and any grid row that fails to
// fill its track (the "ugly gap" check), for whatever viewport is current.
window.__probe = () => {
  const d = document.documentElement;
  const out = { w: d.clientWidth, overflow: d.scrollWidth - d.clientWidth, gaps: [], wide: [] };

  [...document.querySelectorAll('*')].forEach((e) => {
    const r = e.getBoundingClientRect();
    if (r.width > d.clientWidth + 1 && getComputedStyle(e).position !== 'fixed')
      out.wide.push(e.tagName.toLowerCase() + '.' + String(e.className).slice(0, 18) + '=' + Math.round(r.width));
  });

  // grid containers whose last row may be short
  [['.bento', '.tile'], ['.steps', '.step'], ['.stats', '.stat']].forEach(([cs, is]) => {
    const c = document.querySelector(cs);
    if (!c) return;
    const cw = c.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(c).columnGap) || 0;
    const rows = new Map();
    [...c.querySelectorAll(is)].forEach((el) => {
      const t = Math.round(el.getBoundingClientRect().top);
      if (!rows.has(t)) rows.set(t, []);
      rows.get(t).push(el);
    });
    [...rows.entries()].forEach(([top, els], i) => {
      const used = els.reduce((a, e) => a + e.getBoundingClientRect().width, 0) + gap * (els.length - 1);
      const short = cw - used;
      if (short > gap + 2)
        out.gaps.push(`${cs} row${i + 1}: ${els.length} item(s), ${Math.round(short)}px unfilled`);
    });
  });

  // masonry column balance: tallest vs shortest column bottom
  const g = document.querySelector('.gallery');
  if (g) {
    const cols = new Map();
    [...g.querySelectorAll('.shot')].forEach((el) => {
      const r = el.getBoundingClientRect();
      const key = Math.round(r.left / 10);
      cols.set(key, Math.max(cols.get(key) || 0, r.bottom));
    });
    const vals = [...cols.values()];
    if (vals.length > 1)
      out.masonrySkew = Math.round(Math.max(...vals) - Math.min(...vals)) + 'px across ' + vals.length + ' cols';
  }
  return JSON.stringify(out);
};
