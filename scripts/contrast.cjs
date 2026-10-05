// WCAG contrast matrix. Node stand-in for tastemaker's check_contrast.py
// (Python is a Store stub on this machine and cannot run).
const T = {
  void: '#0B0813', night: '#3B3448', plum: '#7B728E', dusk: '#9285A8',
  lilac: '#A49CB6', mist: '#BDB6D3', glow: '#CDBEFF', moon: '#F5F3F9',
  surface: '#120D1D', surface2: '#171125',
};
const lin = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const L = hex => { const n = parseInt(hex.slice(1), 16);
  return 0.2126 * lin(n >> 16 & 255) + 0.7152 * lin(n >> 8 & 255) + 0.0722 * lin(n & 255); };
const cr = (a, b) => { const x = L(a), y = L(b); return ((Math.max(x, y) + .05) / (Math.min(x, y) + .05)); };
const grounds = ['void', 'surface', 'surface2', 'night'];
const inks = ['moon', 'mist', 'lilac', 'dusk', 'plum', 'glow'];
const rows = [];
for (const g of grounds) for (const i of inks) {
  const r = cr(T[g], T[i]);
  rows.push({ pair: `${i} on ${g}`, ratio: +r.toFixed(2),
    text: r >= 4.5 ? 'TEXT-SAFE' : r >= 3 ? 'LARGE/UI only' : 'decorative only' });
}
console.log('PAIR'.padEnd(22), 'RATIO'.padEnd(7), 'VERDICT');
rows.forEach(r => console.log(r.pair.padEnd(22), String(r.ratio).padEnd(7), r.text));
console.log('\n-- on-accent (text sitting ON the Glow button) --');
['void', 'night', 'surface'].forEach(g => console.log(`${g} on glow`.padEnd(22), String(+cr(T.glow, T[g]).toFixed(2)).padEnd(7),
  cr(T.glow, T[g]) >= 4.5 ? 'TEXT-SAFE' : 'fail'));
