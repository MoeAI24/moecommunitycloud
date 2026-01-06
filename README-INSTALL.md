# MBCC How-It-Works Page (Drop-in Pack)

This package adds a new page:

- /how-it-works/index.html

…and minimal shared assets:

- /assets/css/mbcc.css
- /assets/js/mbcc.js

It also includes a copy/paste nav link snippet:

- /partials/nav-snippet.html

## Install (Static Site / GitHub Pages)

1) Copy these folders into the root of your site/repo:

- how-it-works/
- assets/
- partials/ (optional, but included so you can copy/paste the nav link)

2) Add the nav link to your existing header navigation:

Open: `partials/nav-snippet.html`

Pick the variant that matches your nav structure and paste it into your site’s main navbar.
Minimum (plain link) option:

<a href="/how-it-works/" aria-label="How MBCC Works">How It Works</a>

3) Deploy your site (GitHub Pages / Azure Static Web Apps / etc.)

## AdSense

Recommended:
- Keep ads OFF near the CTA section.
- If using Auto Ads, disable vignette/anchor for this page URL to preserve UX.
- Place any manual ads between sections (never above the fold, never near buttons).

## Notes

- The diagrams are original SVGs (no external image dependencies).
- All links are plain relative paths; update /consulting.html and /membership.html if your paths differ.
