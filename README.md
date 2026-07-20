# King of Sweets · ملك الحلويات

Website for **King of Sweets**, a Syrian sweets shop at 404 Westgate Rd, Newcastle upon Tyne — kunafa, baqlawa and cheese sweets made fresh daily since 2004.

Built with [Astro](https://astro.build). Bilingual: English (`/`) and Arabic with full RTL layout (`/ar/`).

## Development

```sh
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/pages/index.astro`, `src/pages/ar/index.astro` — the two locale routes, both render `src/components/Landing.astro`
- `src/i18n.ts` — all UI strings for both languages
- `src/data/site.ts` — address, hours, links, menu structure, reviews
- `src/components/` — Nav (with language switcher), Hero, Ribbon, Story, Menu, CounterBand, Order, Reviews, Visit, Footer
- `src/assets/` — optimized webp images (processed via fal.ai: Nano Banana Pro hero, Topaz-upscaled shop photos)
- `image-sources/` — original source images before upscaling/processing
