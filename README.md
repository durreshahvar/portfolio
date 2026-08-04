# Shaik Durre Shahvar — Portfolio

A single-page, no-build portfolio site (plain HTML/CSS/JS — no npm install, no framework)
built around a "field survey" design system: topographic contour lines, a scale-bar ruler
as a recurring divider, and a coordinate/mono readout that ties back to a real project
(Service Map, a geo-tagging platform for government services).

Your photo now anchors the hero section (a framed portrait, not just a small thumbnail
in About) and gets reused in the About section and in the Open Graph preview image, so
it's the first thing a recruiter sees whether they land on the site or share the link.

## ⚡ Before you publish — 3-minute checklist

These are the only things left with placeholder values. Everything else (photo, résumé,
CGPA, copy) is already filled in and ready.

| # | What | Where | Find |
|---|---|---|---|
| 1 | Your GitHub username | Contact section | `<your-username>` in `index.html` (both the link `href` and the visible text) |
| 2 | Live site URL | `<head>` Open Graph tags | `<your-username>.github.io/<repo-name>` in `index.html` — fill this in **after** you deploy (Step 4 below), so LinkedIn/WhatsApp link previews show your photo |
| 3 | Project links | Projects section | `href="#"` on the `.report-link` elements — point these at your real repo/demo URLs |

Everything else — `assets/profile.jpg`, `assets/resume.pdf`, your CGPA (8.88), and all
copy — is already in place. No further edits needed unless you want to change wording.

## 1. Files are already in place

```
assets/
  profile.jpg   ✓ your photo (used in the hero and About section)
  resume.pdf    ✓ your résumé PDF (powers the "Résumé ↓" download buttons)
```

If you ever swap either file, drop the replacement in `assets/` using the same filename.
A portrait crop close to 4:5 (your current photo is 1024×1280, a perfect fit) fills the
frame best. If `profile.jpg` is ever missing, the site gracefully shows a placeholder
label instead of a broken image — it never looks broken while you're setting it up.

## 2. Preview locally

No build step needed. Either:

- Double-click `index.html`, **or**
- Run a tiny local server (recommended, avoids browser file:// quirks):

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## 3. Push to your existing GitHub repository

Since you already have a repo, just drop these files in at the root (or wherever
`index.html` needs to live for Pages to find it) and push:

```bash
cd portfolio
git add .
git commit -m "Refresh portfolio: hero portrait, corrected CGPA, social preview tags"
git push
```

(If this is a brand-new repo instead: `git init`, `git branch -M main`,
`git remote add origin https://github.com/<your-username>/<repo-name>.git`, then push.)

## 4. Deploy for free with GitHub Pages

1. On GitHub, open your repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Choose branch `main`, folder `/ (root)`, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/` within a
   minute or two. Once it's live, go back and fill in checklist item #2 above so link
   previews render correctly, then commit and push again.

## File structure

```
portfolio/
├── index.html      → all page content and structure
├── style.css        → design system: colors, type, layout, animation
├── script.js         → nav toggle, scroll-reveal, active-link highlighting, cursor
├── assets/
│   ├── profile.jpg   → your photo
│   └── resume.pdf     → your résumé
└── README.md
```

Everything is dependency-free except two Google Fonts (`Space Grotesk`, `IBM Plex Sans`,
`IBM Plex Mono`), loaded via CDN `<link>` tags in `index.html`. No React, no bundler — so
GitHub Pages can serve it as-is with zero configuration.

## What changed in this pass

- **Hero portrait**: your photo now has a framed, corner-bracketed spot front and center
  in the hero — not buried below the fold — so it reads as a personal brand, not a
  generic template.
- **About photo widened** (220px → 260px column) for more visual weight.
- **CGPA corrected** to 8.88 everywhere (hero, About stats, Credentials) to match your
  résumé — it previously read 8.95 in three places, which is the kind of inconsistency a
  recruiter comparing your site to your résumé would flag immediately.
- **Open Graph / Twitter card tags added** so the link preview on LinkedIn, WhatsApp, or
  email shows your photo, name, and role instead of a blank card.
- **GitHub link** now has a real `href` structure — just needs your handle dropped in.
