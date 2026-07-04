# GK7 Unique Store

A static, framework-free storefront for **GK7 Unique Store** — luxury attars, pure oudhs and designer-inspired perfumes. Orders route to WhatsApp. No backend, no database, no payment gateway.

**Stack:** HTML + CSS (custom properties) + vanilla JS (ES modules). No build step.

## Run locally

ES modules must be served over http(s) — don't open `index.html` via `file://`.

```bash
python3 -m http.server 5173
# or
npx serve .
# or use the VS Code "Live Server" extension
```

Visit http://localhost:5173

## Edit the essentials

| Want to change… | Edit |
|-----------------|------|
| WhatsApp number / Instagram | `js/config.js` |
| Products (add/remove scents) | `js/products.js` |
| Reviews | `data/reviews.js` |
| Colors / fonts | `css/tokens.css` |
| Layout / sections | `css/sections.css`, `css/components.css` |

## Images

Drop compressed shots (< 200 KB each) into `assets/images/` following the paths referenced in `js/products.js` and `index.html`. Use relative paths only (`assets/images/...`), never a leading `/`, so GitHub Pages project subpaths keep working.

## Deploy

Any static host works — GitHub Pages, Netlify (drag-and-drop the folder), Vercel, or Cloudflare Pages. No build command; publish directory is the root (`.`). See `PROJECT_STRUCTURE.md` for step-by-step host instructions.

## Pre-launch checklist

- [ ] Real, compressed images in `assets/images/`
- [ ] WhatsApp number + IG handle verified in `js/config.js`
- [ ] Every tile's "Enquire" opens WhatsApp with the right product name
- [ ] Favicon + `assets/og-image.jpg` set
- [ ] Update the domain in `robots.txt`, `sitemap.xml` and the OG `og:image` in `index.html`
- [ ] Test on real mobile
- [ ] Lighthouse ≥ 90 (Performance, Accessibility, SEO)
