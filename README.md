# TTD Website

Static marketing website for TTD (glassmorphism style, multi-page HTML/CSS/JS).

## Stack

- HTML (7 pages): `index`, `about`, `products`, `projects`, `news`, `careers`, `contact`
- CSS: `assets/css/styles.css`
- JS: `assets/js/main.js` (menu mobile, hero slider, image fallback, support-card hover effect)
- Assets: `assets/img`

## Project Structure

```text
TTD-website/
  assets/
    css/styles.css
    js/main.js
    img/
  index.html
  about.html
  products.html
  projects.html
  news.html
  careers.html
  contact.html
```

## Run Local

No build step required.

```bash
cd TTD-website
python -m http.server 5500
```

Open: `http://localhost:5500/index.html`

## Dev Notes

- UTF-8 only (`.editorconfig` enforced).
- LF line endings only (`.gitattributes` enforced).
- Keep all page links relative so the site works on static hosting.
- Hero slider behavior is controlled by `data-hero-*` attributes in `index.html`.
- Image fallback logic in `main.js` switches broken links to:
  - `assets/img/hero-fallback.svg` (hero)
  - `assets/img/card-fallback.svg` (cards)

## Content Update Quick Guide

- Header menu/footer links: update each HTML page consistently.
- Home page sections: `index.html`.
- Global styles/tokens: `assets/css/styles.css`.
- Interactive behavior: `assets/js/main.js`.

## Deployment Checklist

- Verify all pages open from local static server.
- Check mobile menu on <= `760px`.
- Validate hero slide images are reachable.
- Hard refresh (`Ctrl + F5`) before final QA screenshots.
