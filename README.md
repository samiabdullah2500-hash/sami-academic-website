# Sami Abdullah Mohammed — Academic Website

Personal academic website: portfolio, research profile, blog, projects showcase, and a dedicated
page for the **NanoSami** project. Built with [Astro](https://astro.build) + TypeScript —
fast, static, SEO-friendly, and free to host on GitHub Pages.

> **You do not need to touch HTML/CSS to update this site.**
> All content lives in a few simple files, listed below.

---

## 1. Where to edit what

| I want to change… | Edit this file |
|---|---|
| My biography, name, headline | `src/data/site.ts` → `profile` |
| Research interests / techniques | `src/data/site.ts` → `researchInterests`, `techniques` |
| Education | `src/data/site.ts` → `education` |
| Publications (when I have them) | `src/data/site.ts` → `publications` |
| GitHub / email / social links | `src/data/site.ts` → `links` |
| Navigation menu | `src/data/site.ts` → `navigation` |
| **NanoSami** version, features, changelog, roadmap, download links | `src/data/nanosami.ts` |
| **Add a project** | Copy `src/content/projects/example-project.md`, rename, edit |
| **Add a blog post** | Copy `src/content/blog/post-template.md`, rename, edit, set `draft: false` |
| My CV (PDF) | Put the file at `public/cv/Sami-Abdullah-Mohammed-CV.pdf` |
| Images | Put files in `public/images/…` and reference them like `/images/blog/photo.jpg` |
| Site colors / fonts | `src/styles/global.css` (the `:root` variables at the top) |

Placeholders everywhere are marked **`[ADD: …]`** — search the project for `[ADD` to find every
spot that still needs your real information. Never leave invented data in place of real facts.

## 2. Adding a blog post (step by step)

1. Duplicate `src/content/blog/post-template.md` and rename it, e.g. `zno-fuel-ratio.md`.
   The filename becomes the URL: `/blog/zno-fuel-ratio/`.
2. Fill in the top section (frontmatter): title, date, category, tags, description, references.
3. Write the article below it in Markdown.
4. Change `draft: true` to `draft: false` to publish.
5. Commit and push — the site rebuilds automatically.

Categories available: *Nanotechnology, ZnO Nanoparticles, Materials Characterization,
Scientific Data Analysis, AI in Research, NanoSami Development.*
(To add a category, edit the list in `src/content.config.ts`.)

## 3. Adding a project

1. Duplicate `src/content/projects/example-project.md` and rename it.
2. Edit the frontmatter: `title`, `description`, `technologies`, `github`, `demo`, `docs`,
   `status` (Active / In development / Completed / Archived), `featured`
   (true = shown on the home page), `order` (lower = first).
3. Add screenshots to `public/images/projects/` and reference them via `image:` and `gallery:`.
4. Write project details in the Markdown body.

## 4. Updating NanoSami releases

Open `src/data/nanosami.ts` and:
1. Update `currentVersion` and `releaseDate`.
2. Add a new entry at the **top** of `changelog`.
3. Update `links.download` if the release URL changed.
4. Update `roadmap` statuses.

## 5. Run locally

Requires [Node.js](https://nodejs.org) 18+ (22 recommended).

```bash
npm install     # first time only
npm run dev     # start dev server at http://localhost:4321
npm run build   # production build into dist/
npm run preview # preview the production build
```

## 6. Deploy to GitHub Pages (free)

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. In the repository: **Settings → Pages → Source → GitHub Actions**.
3. Edit `astro.config.mjs`:
   - Set `site` to `https://YOUR-USERNAME.github.io`.
   - If the repo is **not** named `YOUR-USERNAME.github.io`, also uncomment and set
     `base: '/YOUR-REPO'`.
4. Push again. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   automatically on every push to `main`.

You can also edit content **directly on github.com** (open a file → pencil icon → commit);
the site redeploys itself. No local setup needed for day-to-day content updates.

Other free hosts (Netlify, Vercel, Cloudflare Pages) also work: point them at the repo,
build command `npm run build`, output directory `dist`.

## 7. Project structure

```
├── public/               # static files served as-is
│   ├── cv/               # your CV PDF goes here
│   └── images/           # blog / project / nanosami images
├── src/
│   ├── components/       # Header, Footer, cards, lattice background
│   ├── content/
│   │   ├── blog/         # ← blog posts (markdown)
│   │   └── projects/     # ← projects (markdown)
│   ├── data/
│   │   ├── site.ts       # ← profile, links, education, publications
│   │   └── nanosami.ts   # ← NanoSami page data
│   ├── layouts/Base.astro
│   ├── pages/            # one file per page/route
│   └── styles/global.css # design system (colors, fonts)
└── .github/workflows/deploy.yml  # automatic deployment
```

## 8. Design notes

- Identity inspired by the **hexagonal wurtzite lattice of ZnO** (the hero background and logo).
- Fonts: Space Grotesk (headings), IBM Plex Sans + IBM Plex Sans Arabic (body — full Arabic
  support), IBM Plex Mono (labels/data). Arabic text renders correctly anywhere via `lang="ar"`.
- Dark/light mode with system preference detection and a manual toggle.
- Accessible: keyboard focus styles, reduced-motion support, semantic HTML.

## 9. License

Site code is under the [MIT License](./LICENSE). Your written content and images remain yours.
