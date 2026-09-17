# Maui Gift Outlet Landing Page

Single-page landing site for Maui Gift Outlet with "Coming Soon" hero section.

## Tech Stack

- Astro 5.12.3
- LESS for styling
- Vanilla JavaScript for mobile navigation

## Structure

```
src/
├── components/
│   ├── Header.astro    # Fixed header with navigation and branding
│   └── Footer.astro    # Footer with attribution
├── layouts/
│   └── BaseLayout.astro # Base layout with SEO meta tags
├── pages/
│   └── index.astro     # Hero section with wave dividers
├── styles/
│   └── root.less       # Global styles and CSS variables
└── js/
    └── nav.js          # Mobile menu toggle functionality

public/assets/
├── favicons/           # Site icons
├── images/             # Store photo
└── svgs/              # Turtle logo and wave decorations
```

## Key Features

- Responsive design (mobile-first)
- Fixed header with mobile hamburger menu
- Custom SVG wave dividers
- Google fonts (Amatic SC, Roboto)
- Dark mode support (framework included, not actively used)
- SEO meta tags and Open Graph support

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Customization

Colors defined in `src/styles/root.less:10-17`:
- Primary: #5CB3D4 (blue)
- Secondary: #40BD37 (green)
- Header: #1a1a1a (dark gray)

## Notes

- Google Maps link in hero button (index.astro:27)
- Store info in header nav items (Header.astro:36-42)
- Background image: `/public/assets/images/Store-photo.jpg`
