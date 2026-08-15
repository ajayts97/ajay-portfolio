# ajayts.dev — portfolio

A Next.js 14 (App Router) portfolio, built around a "release log" concept:
experience is framed as semantic-versioned app releases (v1.0.0 → v3.0.0),
tying the design to shipping mobile apps for a living.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Push this folder to a GitHub repo and import it on
[vercel.com/new](https://vercel.com/new) — zero config needed, it's a
stock Next.js app. Netlify works the same way.

## Structure

```
app/
  layout.tsx      Fonts (Space Grotesk / Inter / JetBrains Mono) + metadata
  page.tsx         Assembles the sections
  globals.css      Design tokens (color, type) + shared classes
components/
  Nav.tsx          Sticky header, mobile menu
  Hero.tsx         Intro + CSS-built phone mockup
  Changelog.tsx    Experience, as a release log — EDIT HERE to update jobs
  Stack.tsx        Skills, rendered as a package-manifest terminal block
  About.tsx        Bio, education, certifications
  Contact.tsx      Contact links + footer
public/
  resume.pdf       Linked from the nav "Resume" button
```

## Editing content

- **Experience** — edit the `RELEASES` array in `components/Changelog.tsx`.
- **Skills** — edit the `GROUPS` array in `components/Stack.tsx`.
- **Colors/type** — edit the CSS custom properties at the top of
  `app/globals.css`.
- **Resume file** — replace `public/resume.pdf` with an updated export.
