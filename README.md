# Andi Shkodra Campaign Website

A bilingual (Albanian and English) single-page campaign site for Andi Shkodra, a candidate for the Municipal Assembly of Gjilan.

## Overview

This is the campaign website for Andi Shkodra, a candidate for the Gjilan Municipal Assembly (Kuvendi Komunal i Gjilanit) in Kosovo. The page covers his background, experience and certificates, a timeline of his political path, a photo gallery, a campaign video, a six-point local platform and a contact form. It loads in Albanian by default, with a one-click switch to English. It was designed and built by Art Halimi as client work.

## Features

- **Albanian and English toggle.** About 135 translated strings per language, and the visitor's choice is remembered in `localStorage`.
- **Scroll-spy navigation.** The active section is highlighted as you scroll, links smooth-scroll with an offset for the fixed navbar, and there is a mobile menu.
- **Campaign video** inside an iPhone frame mockup, with custom play and pause overlays.
- **Photo gallery slider** that shows one, two or three slides depending on screen width. It auto-advances every 5 seconds, supports swipe on touch screens, and opens a fullscreen lightbox with previous and next controls.
- **About section** with a biography, experience cards and an auto-advancing certificates slider.
- **Political timeline** and a **platform section** covering urban infrastructure, transparency, environment, education and youth, health, and the local economy.
- **Contact form** that sends through EmailJS directly from the browser, with loading, success and error states.
- A floating ballot-number badge and a scroll-to-top button.

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- EmailJS (`@emailjs/browser`)

## Technical highlights

- **Translations without a library.** [`src/hooks/useTranslation.js`](src/hooks/useTranslation.js) reads the language from `localStorage` and listens for a custom `languagechange` event that the navbar fires. Every component using the hook re-renders on a switch without a context provider. Strings are flat key maps per language in [`src/translations/index.js`](src/translations/index.js), and a missing key falls back to the key itself.
- **Midline scroll-spy.** [`src/components/Navbar.jsx`](src/components/Navbar.jsx) uses an `IntersectionObserver` with a `-50% 0px` root margin, so a section becomes active when it crosses the middle of the viewport, not its edge.
- **Hand-built sliders.** The gallery ([`src/components/Gallery.jsx`](src/components/Gallery.jsx)) and the certificates slider ([`src/pages/RrethMeje.jsx`](src/pages/RrethMeje.jsx)) are written from scratch with no carousel package. They set the number of visible slides from the viewport width, keep the index in range, restart the auto-advance timer after manual navigation and use a 50 px swipe threshold. The lightbox locks page scroll and pauses the slideshow while open.

## Getting started

**Prerequisites:** Node.js 18 or newer.

```bash
npm install
npm run dev       # Vite dev server
npm run build     # production build to dist/
npm run preview   # serve the production build
npm run lint
```

No environment variables are needed. The contact form needs an EmailJS service, template and public key, which are set in [`src/pages/Kontakti.jsx`](src/pages/Kontakti.jsx).

## Project structure

```
Andi-Shkodra/
├── public/              campaign video, .htaccess SPA fallback
└── src/
    ├── components/      Navbar, Hero, VideoDisplay, Gallery, Timeline, Motto, Footer
    ├── pages/           RrethMeje (about), Platforma (platform), Kontakti (contact)
    ├── hooks/           useTranslation
    ├── translations/    Albanian and English strings
    └── images/
```

## Author

Designed and built by [Art Halimi](https://arthalimi.com) · [GitHub](https://github.com/ArtHalimi7)

## License

Released under the [MIT License](LICENSE).
