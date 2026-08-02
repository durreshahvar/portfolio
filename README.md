# Shaik Durre Shahvar — Portfolio

A single-page, no-build portfolio site (plain HTML/CSS/JS — no npm install, no framework)
built around a "field survey" design system: topographic contour lines, a scale-bar ruler
as a recurring divider, and a coordinate/mono readout that ties back to a real project
(Service Map, a geo-tagging platform for government services).

## 1. Add your files

The code references two files that need to be placed by hand (they can't be embedded
automatically):

```
assets/
  profile.jpg   ← your photo (the one used in the About section)
  resume.pdf    ← your résumé PDF (powers the "Résumé ↓" download buttons)
```

Any photo works, but a portrait crop close to 4:5 (e.g. 1000×1250px) will fill the frame
best. If `profile.jpg` is missing, the About section gracefully shows a placeholder label
instead of a broken image — so the site never looks broken while you're setting it up.

## 2. Preview locally

No build step needed. Either:

- Double-click `index.html`, **or**
- Run a tiny local server (recommended, avoids browser file:// quirks):

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## 3. Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy for free with GitHub Pages

1. On GitHub, open your repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Choose branch `main`, folder `/ (root)`, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a
   minute or two.

## 5. Before you publish — update these placeholders

| What | Where | Find |
|---|---|---|
| GitHub link | Contact section | `github.com/<your-username>` in `index.html` |
| Project repo/demo links | Projects section | `href="#"` on `.report-link` elements |
| Photo | `assets/profile.jpg` | replace placeholder |
| Résumé | `assets/resume.pdf` | replace placeholder |

## File structure

```
portfolio/
├── index.html      → all page content and structure
├── style.css        → design system: colors, type, layout, animation
├── script.js         → nav toggle, scroll-reveal, active-link highlighting, cursor
├── assets/
│   ├── profile.jpg   → (add your own)
│   └── resume.pdf     → (add your own)
└── README.md
```

Everything is dependency-free except two Google Fonts (`Space Grotesk`, `IBM Plex Sans`,
`IBM Plex Mono`), loaded via CDN `<link>` tags in `index.html`. No React, no bundler — so
GitHub Pages can serve it as-is with zero configuration.
