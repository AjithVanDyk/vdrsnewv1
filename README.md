# 🏭 Van Dyk Recycling Solutions Website

Van Dyk Recycling Solutions' marketing site is a React 18 + TypeScript single-page application that showcases the organisation's equipment portfolio, solutions catalogue, and customer support programmes. The project is optimised for deployment on Vercel and favours accessibility, maintainability, and consistent content authoring over experimental features.

---

## 📋 Project Overview
- **Framework:** React 18 with Vite and TypeScript
- **Styling:** Tailwind CSS utility classes with custom design tokens
- **Animation & Interactions:** Framer Motion driven micro-interactions plus rich modal flows
- **Routing:** React Router DOM with code-splitting for every equipment and solution detail page
- **State & Utilities:** Zod validation, custom accessibility manager, performance/error monitors

The application intentionally unregisters legacy service workers on mount to avoid module loading conflicts. A progressive web app manifest remains in `public/manifest.json` for future enablement but is considered opt-in.

---

## 🧱 Application Structure
```
├── public/
│   ├── Images/                 # Static marketing assets served verbatim by Vite
│   ├── sw.js                   # Optional service worker (disabled by default in App.tsx)
│   ├── favicon + manifest      # Metadata for browsers and install prompts
│   └── index.html              # SPA shell template
├── src/
│   ├── components/             # Shared UI primitives (navbar, chatbot, modals, loaders)
│   ├── data/                   # Structured content for equipment & solutions
│   ├── pages/                  # Route-driven screens and rich content flows
│   ├── utils/                  # Performance, accessibility, caching, and helper modules
│   ├── App.tsx                 # Router + global providers
│   └── main.tsx                # Vite entry point
└── vercel.json                 # Production headers and rewrites for Vercel hosting
```

---

## 🎨 Asset Management
- Store marketing imagery in `public/Images`. Files placed in this directory are served as-is without bundling.
- Prefer lowercase, hyphenated filenames without spaces (e.g. `van-dyk-university.jpg`) so URLs do not require encoding.
- Remove unused assets when possible to avoid bloating the deployment bundle. See the Git history for examples of the clean-up performed in this revision.
- If you add new favicon or manifest icons, update `public/manifest.json` accordingly. The repository now includes `public/Images/vdrs-logo-icon.svg` for shortcuts and install prompts.

---

## 🚀 Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
3. **Open the site** at [`http://localhost:5173`](http://localhost:5173).

The project expects Node.js 18+.

---

## 🧪 Scripts & Quality Checks
| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Generate a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint with the repository ruleset |
| `npm run type-check` | Execute TypeScript in no-emit mode |
| `npm run build:vercel` | Build with strict type-checking for CI |

---

## 🖼️ **Media Health Checklist**

- ✅ All image and video references in `src/` now resolve to files inside `public/Images`. Hero modules that previously pointed at non-existent assets (e.g. the Equipment, Lubo Screening, and Pellenc ST pages) have been aligned with the shipped library to eliminate 404s during hydration.
- ✅ The reusable loading spinners no longer depend on a missing MP4 asset. They now ship with CSS/Framer Motion driven animations and respect the user’s `prefers-reduced-motion` setting.
- ✅ PWA metadata has been updated to use the bundled `vdrs-logo-icon.svg` and `van-dyk-logo-new.jpg`, ensuring install prompts on Vercel reference valid icons.
- ➕ When adding new media, drop the file in `public/Images`, prefer lowercase kebab-case naming, and update components or data objects with the new path. Avoid spaces in filenames to keep URLs readable.

Run `npm run lint` and `npm run type-check` after swapping assets to catch stale imports early.

---

## 🎨 **Design System**

---

## 📦 Deployment Notes
- Vercel deployment uses the default Vite static output in `dist/` with rewrites defined in `vercel.json` so that SPA routes resolve correctly.
- Static assets under `/Images/` are cached aggressively (`Cache-Control: public, max-age=31536000, immutable`). Bust caches by renaming the asset or updating the referencing URL.
- The optional `public/sw.js` caches only core assets. If you choose to re-enable service workers, remove the explicit unregistration logic in `App.tsx` and ensure the cached asset list stays in sync with reality.

---

## 🤝 Contributing Tips
- Keep copy updates and structured data changes in `src/data` so that they can be translated or reused consistently.
- Use existing component abstractions (`EquipmentPageTemplate`, `SolutionPageTemplate`, `LazyImage`) to ensure animations, image fallbacks, and accessibility affordances remain consistent.
- When adding imagery, test both light/dark overlays and modal views to guarantee aspect ratios behave as expected.
- Always run `npm run lint` and `npm run type-check` before submitting a pull request.

---

## 🧾 License
This repository is maintained by Van Dyk Recycling Solutions. All rights reserved unless otherwise noted.
