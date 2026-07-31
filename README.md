# The Polished Pup

Marketing website for **The Polished Pup**, a self-service dog wash and full-service
grooming spa at 352 Blue Star Highway, South Haven, Michigan.

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

---

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at <http://localhost:3000>.

Other scripts:

| Command | Purpose |
| --- | --- |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint via `eslint-config-next` |
| `npm run typecheck` | TypeScript with no emit |

---

## Before launch

Two things still need real content:

1. **Images.** Copy the brand logo to `public/images/the-polished-pup-logo.png` and the
   photography into `public/images/photos/` using the filenames listed in
   [`public/images/photos/README.md`](public/images/photos/README.md). For the artwork
   supplied with this build, run:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\scripts\import-assets.ps1
   ```

   Every image slot falls back to a labelled placeholder until its file exists, so
   nothing breaks in the meantime.
2. **Hours and geo coordinates.** `src/lib/site.ts` ships with placeholder opening hours
   and an approximate map pin. Replace both with the values from the Google Business
   Profile — they feed the footer, the contact page and the `LocalBusiness` structured data.

Also worth confirming: the Facebook and Instagram URLs in `src/lib/site.ts`, and the
production domain in `site.url` (used for canonical URLs, Open Graph tags and the sitemap).

---

## Project structure

```
src/
  app/
    layout.tsx           Fonts, metadata, LocalBusiness JSON-LD, header/footer
    page.tsx             Home
    services/            Self-service ($25) and full-service tiers
    about/               Founding story, values, team placeholder
    gallery/             Grid with accessible lightbox
    contact/             Details, map, validated enquiry form, FAQ
    api/contact/         Form endpoint (validates + logs; wire an email provider)
    sitemap.ts           Generated from the nav config
    robots.ts
  components/
    home/                Home-page sections
    ui/                  Buttons, cards, sections, icons, reveal animations, photo
    site-header.tsx      Sticky transparent-to-solid nav with mobile slide-in menu
    site-footer.tsx
    gallery-grid.tsx
    contact-form.tsx
    visit-band.tsx       Reusable address + map + hours CTA band
  lib/
    site.ts              NAP, hours, socials, navigation — single source of truth
    content.ts           Services, values, gallery items, FAQs, photo paths
    seo.ts               Per-page metadata helper and JSON-LD builders
```

---

## Design system

Tokens live in `tailwind.config.ts` and mirror the ornate green-and-gold logo.

| Token | Hex | Tailwind class |
| --- | --- | --- |
| Deep Green | `#1B4332` | `deep` |
| Forest Accent | `#2D6A4F` | `forest` |
| Gold | `#C9A227` | `gold` |
| Warm Gold Light | `#E8D08B` | `gold-light` |
| Cream | `#FAF8F3` | `cream` |
| Sage tint | `#EDF2EC` | `sage` |
| Charcoal | `#1A1A1A` | `charcoal` |

Type: **Fraunces** for headings (`font-display`), **Plus Jakarta Sans** for body
(`font-sans`), both loaded through `next/font`.

Gold is treated as an accent only. Because gold-on-cream fails contrast, gold text
appears exclusively on deep green (4.5:1); on light backgrounds gold is limited to
borders, rules and icon fills paired with dark text.

Section rhythm alternates `cream → sage → deep` backgrounds. Cards are `rounded-2xl`
with thin gold borders and lift on hover. Scroll reveals and staggered card entrances
use Framer Motion and are disabled automatically under
`prefers-reduced-motion: reduce`.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`) and a skip link.
- Keyboard-operable mobile menu and gallery lightbox — Escape to close, arrow keys to
  browse, focus returns to the trigger, and background scroll is locked while open.
- Tap targets are at least 44px; visible gold focus rings on every interactive element.
- The contact form validates without native popups, marks invalid fields with
  `aria-invalid`, links errors via `aria-describedby` and moves focus to the first error.
- Descriptive alt text throughout; decorative graphics are hidden from assistive tech.

---

## SEO

- `LocalBusiness` (`PetGroomer`) JSON-LD on every page, plus breadcrumb schema on inner
  pages and FAQ schema on Contact.
- Unique title and description per page, targeting "self-service dog wash South Haven"
  and "dog grooming Southwest Michigan".
- Canonical URLs, Open Graph and Twitter cards, generated `sitemap.xml` and `robots.txt`.
- Images are lazy-loaded by default and served as AVIF/WebP by `next/image`; only the
  hero photo is marked `priority`.

---

## Contact form

`POST /api/contact` validates the payload server-side and logs it. Connect an email
provider (Resend, Postmark, SendGrid) or a CRM at the `TODO` in
`src/app/api/contact/route.ts` — the client form needs no changes.
