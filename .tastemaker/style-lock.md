# Style lock — LAVERT

Not a generated style. This project has a real brand book: **LAVERT Brand Guideline v1.0 (Oct 2026)**
plus **Portfolio 2026** (22pp). Both are the source of truth. Nothing here was invented by the
palette generator, and nothing here may be re-derived on a later pass.

## Mood

`premium / elegant` — the guideline's own words: calm not loud, poetic but disciplined,
"simple in form, deep in impact". Copy voice dial follows the premium row of
`references/copy-voice.md`: short declarative sentences, no exclamation marks, no stacked
intensifiers.

## Color contract

Brand tokens (fixed, from the guideline):

| Token | Hex | Role |
|---|---|---|
| Void | `#0B0813` | ground, 60% of surface |
| Night | `#3B3448` | dark surface, cards |
| Plum | `#7B728E` | **decorative / large only** |
| Dusk | `#9285A8` | large text, borders |
| Lilac | `#A49CB6` | body text on dark |
| Mist | `#BDB6D3` | emphasis body |
| Glow | `#CDBEFF` | accent, one per headline |
| Moonlight | `#F5F3F9` | primary text |

Derived (Void-based, not off-palette): `--surface #120D1D`, `--surface-2 #171125`.

**Measured with `scripts/contrast.cjs`** (node stand-in; Python is a Store stub on this machine
so tastemaker's own `check_contrast.py` could not run):

- Text-safe on Void (>=4.5:1): Moonlight 18.02, Glow 11.72, Mist 10.20, Lilac 7.57, Dusk 5.80
- Text-safe on Night: Moonlight 10.77, Glow 7.01, Mist 6.10, Lilac 4.52
- **Plum fails body text everywhere**: 4.38 on Void, 4.21 on surface, 2.62 on Night.
  Large text and non-text UI only. The previous build used it for every small label; that was
  a real failure, caught only by running the numbers.
- Button: Void on Glow = 11.72:1, text-safe. Glow is the only filled-button color.

**Rule for new pairings:** small text uses Lilac or lighter. Never Plum, never Dusk below 18px.

## Type

| Role | Family | Notes |
|---|---|---|
| Arabic display | Alexandria | 500/600/700 |
| Arabic body | IBM Plex Sans Arabic | 300/400/500 |
| English + all numerals | Montserrat | tracked uppercase for labels |

Arabic leads and is larger; English sits beneath at about half size on the same edge.
**Arabic is never letter-spaced.** Western digits throughout. Arabic line-height 1.8, English 1.6.

## Structure (build 2)

- **Macrostructure:** `12 · Poster Fold`
- **Rotation:** build 1 was Feature Stack / alternating bands end to end, with `Ft3` index-column
  footer and an `N2` bar — two of the catalog's named AI fingerprints. Rotated away from both.
- **Arc:** hook -> who we are -> the name -> what we do -> how we work -> proof -> close
- **Archetypes:** `N3` floating pill · `H1` statement fold · `F2` bento (services) ·
  `F6` spec sheet (work) · `F3` sticky scroll stack (why) · `F4` numbered steps (process) ·
  `P1` hairline logo wall · `P4` stat strip · `C2` statement + action · `Ft4` statement close
- **Section heads:** `S4` stacked eyebrow on the four main sections, `S1` hanging elsewhere.
  The banned eyebrow-left/heading-right two-column head is not used anywhere.

## Motion

Guideline tokens, used verbatim: ease `cubic-bezier(.2,.8,.2,1)`, durations 150 / 250 / 400ms.
Signature: the logomark is two planes rising at 45 degrees, so every reveal on the site is a
45-degree clip-path wipe at 400ms, mirrored for RTL.

**One engine: GSAP + ScrollTrigger.** framer-motion was removed in build 2 so the page does not
ship two motion libraries (tastemaker's component-coherence rule).

Sections are observed, never the planes themselves: a hidden plane is a zero-area `clip-path`,
which IntersectionObserver reads as zero visible area, so observing one directly leaves it
hidden permanently.

## Assets

All real, all from the client. No stock sourcing was needed or used.

- Logo lockups: `public/assets/brand26/` (horizontal, no-descriptor, logomark)
- Ten 3D scene renders: `public/assets/scenes/*.webp` (352KB total, converted from the
  guideline's own 1920x1080 JPEGs)
- Six showreel clips + posters: `public/assets/videos/`
- 18 real client logos: `public/assets/clients/logos/`
- Hero 3D is generated live in WebGL (three.js) to the guideline's stated material:
  liquid chrome and frosted glass, pearlescent lavender, soft overhead light, dark ground.

Illustration vs photography split: not applicable. Every visual is a brand asset or the live
3D scene; no Openverse photos, no unDraw illustrations, no generated imagery.

## Copy

Arabic copy is transcribed verbatim from Portfolio 2026 pages 2-7 and the guideline's tagline
list. Per `references/copy-voice.md`, user-supplied exact copy is never rewritten, so the
template-bank check does not apply to it. The em-dash ban does apply to anything written for
this build; the two English sentences that carry an em dash are verbatim portfolio lines and
are kept as the documented exception.

Contact details come from Portfolio 2026 p22, which supersedes the old site:
+966 53 217 4142, +966 50 918 4704, @lavertoffical.
