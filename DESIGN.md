---
name: King of Sweets
description: Bilingual brand site for a family-run Syrian sweets shop in Newcastle — Damascus craft since 2004.
colors:
  brass-gold: "oklch(0.74 0.13 78)"
  damask-maroon: "oklch(0.36 0.13 22)"
  maroon-deep: "oklch(0.28 0.12 22)"
  warm-ink: "oklch(0.22 0.02 40)"
  soft-ink: "oklch(0.42 0.02 40)"
  counter-white: "oklch(0.975 0.012 75)"
  warm-white: "oklch(0.98 0.01 75)"
  counter-shade: "oklch(0.95 0.02 70)"
  warm-hairline: "oklch(0.88 0.02 60)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(36px, 5.6vw, 60px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "2px"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(30px, 4vw, 42px)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.2
  accent:
    fontFamily: "Reem Kufi, sans-serif"
    fontSize: "26px"
    fontWeight: 500
  body-lg:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Reem Kufi, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    letterSpacing: "1.5px"
  chip:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
rounded:
  sm: "8px"
  md: "14px"
  lg: "16px"
  pill: "100px"
spacing:
  xs: "6px"
  sm: "14px"
  md: "22px"
  lg: "28px"
  xl: "64px"
  section: "100px"
components:
  button-primary:
    backgroundColor: "{colors.damask-maroon}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.maroon-deep}"
  button-gold:
    backgroundColor: "{colors.brass-gold}"
    textColor: "{colors.warm-ink}"
    rounded: "{rounded.pill}"
    padding: "15px 28px"
  menu-card:
    backgroundColor: "{colors.counter-white}"
    rounded: "{rounded.lg}"
  tag-chip:
    rounded: "{rounded.pill}"
    padding: "5px 10px"
---

# Design System: King of Sweets

## 1. Overview

**Creative North Star: "The Damascus Ribbon"**

The maroon welcome ribbons hanging down the page are the system's organizing idea: heritage unfurled from Damascus to Westgate Road. Everything else behaves like the shop around them — a warm, flat counter surface where golden trays and real photographs carry the abundance, and the ribbon is the one element allowed to hang *over* the page, casting the only true shadows. The system is generous, proud and bustling (PRODUCT.md's three words): full-bleed photography of piled-high trays, pill buttons you can't miss, and two scripts — Latin and Arabic — treated as equal citizens.

This system explicitly rejects the takeaway listing site (a menu grid with prices, transactional and soulless) and the sterile luxury patisserie (French-minimal, white-marble, whisper-quiet). Warmth comes from brass, maroon, and photography — never from preciousness or from cultural wallpaper.

**Key Characteristics:**
- Two-voice palette: Brass Gold accents on Damask Maroon commitments, on a warm flat ground
- Serif display (Cormorant Garamond) over workhorse sans (Work Sans); Reem Kufi + Tajawal own the Arabic page
- Flat tone-on-tone surfaces; shadows reserved for hanging elements
- Real photography everywhere — the counter, the owner, the storefront — never stock-generic or colored placeholder blocks
- Fully mirrored RTL experience at `/ar/` — layout, gradients and type all flip deliberately

## 2. Colors

A two-voice palette — gold speaks, maroon commits — over warm flat neutrals.

### Primary
- **Brass Gold** (oklch(0.74 0.13 78)): the voice of the brand — crest, kickers, hero headline, star ratings, the active language pill, and the gold CTA. Named for the brass trays on the counter.
- **Damask Maroon** (oklch(0.36 0.13 22)): the commitment color — primary buttons, section titles, the ribbon gradient, pull quotes. Named for Damascus silk.
- **Deep Maroon** (oklch(0.28 0.12 22)): hover state for maroon surfaces and the dark end of the ribbon gradient.

### Neutral
- **Warm Ink** (oklch(0.22 0.02 40)): headings, strong text, the footer ground.
- **Soft Ink** (oklch(0.42 0.02 40)): body copy. Never lighter than this on light ground — 4.5:1 is the floor.
- **Counter White** (oklch(0.975 0.012 75)): the page ground and card fill.
- **Warm White** (oklch(0.98 0.01 75)): text and borders on dark/maroon ground, used at graded alphas (0.87 body, 0.8 muted, 0.6 borders/footer).
- **Counter Shade** (oklch(0.95 0.02 70)): alternating section panels (Menu, Reviews) — depth by tone, not shadow.
- **Warm Hairline** (oklch(0.88 0.02 60)): 1px borders on cards and the nav.

Allergen chips (nuts, dairy, vegetarian, vegan, halal) each pair a pastel fill with a dark same-hue text at ≥4.5:1; exact values live in `src/data/site.ts` and the design sidecar.

Tokens are implemented as Tailwind 4 `@theme` variables in `src/styles/global.css` (`bg-counter`, `text-maroon`, `border-hairline`, `font-display`, …). The shared layout utilities are `container-site` (1280px, clamp inline padding) and `section-pad` (clamp block padding) — every section uses both; ad-hoc containers are prohibited.

**The Damascene Lattice.** Shaded sections (Menu, Reviews) carry `bg-mosaic` — a girih eight-pointed-star SVG tile in Brass Gold at 16% stroke opacity (`public/mosaic.svg`). It is texture, not decoration: if the pattern is the first thing you notice, the opacity is too high. It never sits behind photography or on Counter White.

### Named Rules
**The Two-Thread Rule.** Brass Gold and Damask Maroon are the only two brand voices. New UI never introduces a third saturated color; if something needs emphasis, it gets gold, maroon, or scale — not a new hue.
**The Ribbon Wears Both.** Wherever the ribbon appears, gold sits on maroon (crest border, welcome script). That pairing is the brand signature; don't dilute it with white-on-maroon or gold-on-white ribbons.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif)
**Body Font:** Work Sans (with system-ui, sans-serif)
**Arabic Fonts:** Reem Kufi for display and labels, Tajawal for body

**Character:** A high-contrast serif with royal bearing over a plainspoken workhorse sans — the king's name over the stallholder's patter. On the Arabic page the same hierarchy re-renders natively: Reem Kufi's geometric Kufi display over Tajawal's clean body.

### Hierarchy
- **Display** (700, clamp(36px, 5.6vw, 60px), 1.05): the hero title only. Uppercase with 2px tracking in Latin; RTL uses line-height 1.3 and zero tracking.
- **Headline** (700, clamp(30px, 4vw, 42px), 1.15): section titles, in Damask Maroon.
- **Title** (700, 24px / text-2xl): card and story subheadings, in Warm Ink; also the counter-band caption in Warm White.
- **Accent** (Reem Kufi 500, 26px): the hero's Arabic/Latin secondary name line in Brass Gold.
- **Body-lg** (400, 19px, 1.55): the hero tagline and the story pull-quote.
- **Body** (400, 17px, 1.75): story paragraphs. Cap measure at 65–75ch.
- **Body-sm** (400–600, 15px, 1.6): buttons, card copy, review quotes, inline links.
- **Label** (Reem Kufi 500, 14px, 1.5px tracking, uppercase): section kickers in Brass Gold — the one deliberate cross-script accent on the English page.
- **Chip** (600, 12px): allergen tags. The ribbon's pennant lettering (24px script, 10px tracked micro-label, 16px name) is part of the signature lockup and deliberately off-ramp.

### Named Rules
**The Two-Script Rule.** Arabic is never an afterthought: `html[dir='rtl']` swaps the font variables (display → Reem Kufi, body → Tajawal) and zeroes ALL letter-spacing — tracking breaks connected script. Any new component must be designed against both directions before it ships.

## 4. Elevation

Flat counter, hanging ribbons. Surfaces separate by tone (Counter White ↔ Counter Shade) and 1px Warm Hairline borders — cards, chips and buttons cast no shadows at rest. Depth belongs exclusively to elements that physically hang over the page: the maroon ribbons and the sticky nav (backdrop blur + hairline, no shadow).

### Shadow Vocabulary
- **Ribbon shadow** (`box-shadow: 0 14px 32px oklch(0.22 0.02 40 / 0.6)`): the hanging pennants only.
- **Crest glow** (`drop-shadow(0 0 30px oklch(0.74 0.13 78 / 0.6))`): the hero crest's golden halo — a glow, not an elevation.

### Named Rules
**The Hanging Ribbon Rule.** If it doesn't hang, it doesn't cast. Adding a shadow to a card, button, or input is prohibited; use tone, border, or scale instead.

## 5. Components

### Buttons
- **Shape:** full pill (100px radius), generous padding (15px 28px; 16px 30px for order buttons at 12px radius)
- **Primary:** Damask Maroon fill, Warm White text; hover deepens to Deep Maroon
- **Gold:** Brass Gold fill, Warm Ink text; hover brightens 8%
- **Outline:** transparent with 1.5px border — Warm White border on photography, Damask Maroon border on light ground
- **Hover / Focus:** background/filter shifts at 0.15s ease; keyboard focus must stay visible on both light and dark ground

### Chips
- **Style:** allergen tags — pastel fill, dark same-hue text, full pill, 5px 10px padding, 11.5px/600
- **Dot:** every chip leads with a 6px color dot matching its text color

### Cards / Containers
- **Corner Style:** 14–16px radius
- **Background:** Counter White on shaded sections, hairline border
- **Shadow Strategy:** none — flat per the Hanging Ribbon Rule
- **Internal Padding:** 20–28px

### Navigation
- **Style:** sticky, Counter White at 0.93 alpha with 8px backdrop blur, hairline bottom border
- **Links:** Work Sans 500 14px, Warm Ink → Damask Maroon on hover
- **Language switcher:** segmented pill (Counter Shade track, hairline border); active segment fills Brass Gold with Warm Ink text
- **Mobile:** links collapse ≤960px, CTA hides ≤560px (brand + switcher remain)

### The Ribbon (signature)
Maroon pennant (`clip-path: polygon(0 0, 100% 0, 100% 82%, 50% 100%, 0 82%)`), gradient 165deg Damask Maroon → Deep Maroon, ribbon shadow, hung from the section top at the inline-end edge so it mirrors in RTL. Contains the crest in a gold-bordered rotated diamond and the bilingual welcome. **It appears exactly once per page** — the 180px pennant hanging over the story section. Repeating it at section corners dilutes the signature and is prohibited. Hidden below 1100px.

## 6. Do's and Don'ts

### Do:
- **Do** keep body text at ≥4.5:1 — Soft Ink (oklch(0.42 0.02 40)) is the *lightest* allowed body color on Counter White.
- **Do** design every new component in both directions; use logical properties (`padding-inline-end`, `inset-inline-end`, `margin-inline-start`) so RTL mirrors for free.
- **Do** use real photography of the actual shop — the counter, the trays, the owner, the storefront. One decisive photo beats five generic ones.
- **Do** separate sections by tone (Counter White ↔ Counter Shade), never by shadow.
- **Do** keep gold-on-maroon as the ribbon's signature pairing.

### Don't:
- **Don't** build anything that reads as a *takeaway listing site* — no price-grid menu tables, no transactional density (PRODUCT.md anti-reference, verbatim).
- **Don't** drift toward the *sterile luxury patisserie* — no white-marble minimalism, no whisper-quiet spacing that starves the page of abundance (PRODUCT.md anti-reference, verbatim).
- **Don't** introduce a third saturated hue — the Two-Thread Rule stands.
- **Don't** letter-space Arabic text, ever; the RTL page zeroes tracking globally and that is doctrine, not accident.
- **Don't** add shadows to cards, buttons, or inputs — flat counter, hanging ribbons.
- **Don't** use colored side-stripe borders, gradient text, or glassmorphism panels (blur belongs to the sticky nav alone).
- **Don't** replace photography with colored blocks or clip-art "oriental" decoration — heritage is a person, not a pattern. The Damascene Lattice is the sole sanctioned geometric texture, and only as a sub-perceptual background on shaded sections.
- **Don't** repeat the ribbon — one pennant per page, over the story section.
- **Don't** put text on a photograph without a scrim or gradient overlay that keeps it at ≥4.5:1 (hero scrim, counter-band gradient).
