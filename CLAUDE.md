# King of Sweets

Bilingual Astro site for a Syrian sweets shop in Newcastle. English at `/`, Arabic (full RTL) at `/ar/`; UI strings live in `src/i18n.ts`, shop data in `src/data/site.ts`.

## Design Context

- **PRODUCT.md** — strategy: brand register, audiences, positioning ("Damascus craft since 2004"), personality (generous, proud, bustling), anti-references, WCAG 2.2 AA. Read before any design or copy work.
- **DESIGN.md** — visual system: "The Damascus Ribbon" north star, Brass Gold / Damask Maroon palette (OKLCH), type stack (Cormorant Garamond + Work Sans; Reem Kufi + Tajawal for Arabic), named rules (Two-Thread, Two-Script, Hanging Ribbon). Tokens in frontmatter are normative.
- Every new component must work in both LTR and RTL (use logical properties) and keep body text at ≥4.5:1 contrast.
