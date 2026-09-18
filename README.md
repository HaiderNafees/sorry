# My Heart Is Always With You — For My Wife

A single-page React + Tailwind CSS love letter in a **bento-grid layout**: a big center card (hero with arch photo, cherished memories, promises), a left rail (For My Love + apology teaser), and a right rail (closing love note). Floating hearts, gold squiggles, and a full-screen letter modal included. Fully static — no backend.

## Tech

- React 18 (functional components + hooks)
- Vite 5
- Tailwind CSS **v3** (utility classes only)
- No icon libraries; all icons are inline SVG
- Google Fonts: Playfair Display (headings) + Inter (body)

## Quick Start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## How to Personalize It

**All text lives in one file: `src/data/content.js`.** Replace every `[bracketed placeholder]` with your own words. Nothing else needs editing.

| Placeholder | What to write |
| --- | --- |
| `[Her Name]` / `[Your Name]` | Your names |
| `[What I Am Apologizing For]` | Name it honestly, without excuses |
| `[What I Will Do Differently]` ×3 | Concrete changes you commit to |
| `[Specific Thing I Appreciate About Her]` | One real, small thing |
| `[Memory That Reminds Me Of Her Love]` | A moment that proved her love |
| `[Memory Caption]` `[Date]` ×6 | Stories for your photos |
| `[Promise 1–4]` | Commitments you can keep |
| Hero photo | Set `photos.hero` in content.js (currently your iili.io image) |

### Adding photos

Drop your images into a new `public/photos/` folder using these names (or edit the paths in `content.js`):

```
public/photos/
  roses.jpg       ← "For My Love" card
  memory-1.jpg … memory-6.jpg  ← gallery + apology teaser
```

The hero image is set via URL in `content.js` (`photos.hero`) — currently
pointing at your uploaded `https://iili.io/nopOQbs.jpg`; change it or use a
local file anytime.

Until a photo exists, a soft rose placeholder with its filename hint shows automatically — no broken images.

## Project Structure

```
src/
  main.jsx                  React entry
  index.css                 Tailwind directives + base styles
  App.jsx                   Bento grid + decorations + letter modal
  data/content.js           ← ALL personal text, placeholders & photo paths
  components/
    LetterModal.jsx         Full apology + gratitude letter (Esc / backdrop to close)
    left/                   ForMyLoveCard, ApologyTeaserCard
    center/CenterCard       In-card nav, hero + arch photo, memories, promises
    right/                  ClosingCard
    ui/                     Photo (auto-fallback), FadeIn, Icons
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite. Keep defaults (`npm run build`, output `dist`) and click **Deploy**.

## Deploy to GitHub Pages

1. In `vite.config.js`, set the base path to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
2. Then:
   ```bash
   npm install -D gh-pages
   npm run build
   npx gh-pages -d dist
   ```
3. GitHub → **Settings → Pages → Source: `gh-pages` branch**.

## Notes

- Scroll animations respect `prefers-reduced-motion`.
- Fully responsive: rails stack under the center card on mobile; two-column bento on tablets; full three-column bento on desktop.
