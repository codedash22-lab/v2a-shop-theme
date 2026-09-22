# V2A Shop — Custom Twilight Theme

Custom Salla theme for [V2A Shop](https://v2ashop.com) — a digital gaming
products store (game codes, accounts, subscriptions, gift cards).

## Design direction

- **Base structure**: modeled on Loaded/CDKeys' direct-purchase flow —
  minimal navigation, one hero message at a time, dense but clear
  product cards.
- **Product card content**: platform icon, discount %, and
  strikethrough/final price in one glance — the HRK pattern.
- **Visual identity**: dark violet (`#0F0F1A` / `#7C3AED`) with a
  neon-green accent (`#22C55E`), Tajawal for Arabic body text,
  Orbitron for the wordmark/display numerals.
- **Product page additions** not present in the base Salla page:
  a platform/region/instant-delivery badge row, a short trust
  checklist, and a sticky mobile buy bar that appears once the main
  buy box scrolls out of view.

## Structure

```
twilight.json                    theme manifest + dashboard settings
src/views/layouts/master.twig    head, fonts, color tokens, body shell
src/views/components/header/     two-tone header + rating strip + search
src/views/components/footer/     dark footer
src/views/pages/index.twig       homepage (renders dashboard-configured blocks)
src/views/pages/product/single.twig   product page (badges, checklist, sticky bar)
src/assets/styles/app.scss       full stylesheet (Tailwind + custom v2a-* classes)
```

## Status

Initial structural pass — layout, header, footer, homepage entry point,
and product page are in place and styled. Category/listing pages and
the remaining home page sub-components (hero, best-sellers rail, deals
rail) still need to be ported from the mockup into their own
`src/views/components/home/*.twig` partials.

## Local development

```bash
npm install
npm run watch     # dev build with file watching
npm run production
```

See [docs.salla.dev](https://docs.salla.dev) for the full Twilight CLI
and publishing workflow (`salla theme:create`, `salla theme:link`, etc.).
