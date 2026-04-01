# Tatheer Projects Showcase

A modern, responsive portfolio/projects showcase built with **React + Vite + TypeScript**.  
Includes a projects listing with category filtering, a dedicated project details page, a polished UI theme, and a **Hire Me** contact form powered by **EmailJS**.

---

## Features

- **Home page**
  - Clean hero section and professional layout blocks
  - Categorized tech stack section with **icons + labels**
  - Prominent CTA buttons and refined UI interactions
- **Projects page**
  - Category dropdown (**Frontend / Full Stack**)
  - Segmented filter (Frontend / Full Stack)
  - Progressive loading via **View More** (loads 4 at a time) + skeleton loaders
- **Project details**
  - Separate details view for each project
  - Hero “screenshot” preview panel
  - Project meta (client, role, timeline), stack/tech pills, highlights
  - Prominent **Live Preview** + **GitHub Repo** buttons
- **Contact**
  - Navbar **Hire Me** button opens a contact modal
  - Sends email via **EmailJS**
- **Floating WhatsApp button**
  - Bottom-right circular WhatsApp icon linking to WhatsApp chat
- **Polish**
  - Background themes (Home vs other pages)
  - Fade-in transitions between pages
  - First-load skeleton screen (1.5s)
  - Responsive layout for mobile/tablet/desktop

---

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Email**: EmailJS (`@emailjs/browser`)
- **Styling**: Custom CSS (modern UI, transitions, responsive grid)

---

## Getting Started

### Prerequisites

- Node.js (recommended: **v18+**)
- npm

### Install

```bash
npm install
```

### Run (Development)

```bash
npm run dev
```

Open the dev server URL printed in the terminal (usually `http://localhost:5173/`).

### Build (Production)

```bash
npm run build
```

### Preview (Production Build)

```bash
npm run preview
```

---

## EmailJS Setup (Hire Me Form)

This project uses EmailJS in the browser (no backend required).

### 1) Create your `.env`

Copy the template file:

```bash
cp .env.example .env
```

Then fill in:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### 2) Restart dev server

Vite only reads environment variables on start:

```bash
npm run dev
```

### 3) Template variables

The code sends common parameters including:

- `from_name`
- `reply_to`
- `subject`
- `message`
- **recipient fields**: `to_email`, `to`, `recipient`

If your EmailJS template uses different names, update the template (recommended) or adjust the params in `src/App.tsx` inside the `sendContact` function.

> Tip: If you see EmailJS `422` errors, it typically means missing/incorrect template variables (especially the **To Email** field). Make sure your template has a valid recipient (e.g. `{{to_email}}`) or a hardcoded email.

---

## Project Structure

```text
.
├─ public/
│  ├─ favicon.png
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ logo.png
│  │  └─ ...svg/png assets
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ style.css
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```

---

## Customization Guide

### Projects content

Projects are defined in `src/App.tsx` as a static array.  
Each project includes:

- `title`, `description`, `kind` (`frontend` / `fullstack`)
- `liveUrl`, `repoUrl`
- `client`, `role`, `timeline`
- `stack`, `tech`, `highlights`

You can replace dummy content with real projects and URLs.

### Branding

- Navbar brand name: `Tatheer` (in `src/App.tsx`)
- Logo: `src/assets/logo.png`
- Favicon: `public/favicon.png` (referenced in `index.html`)

---

## Deployment

This is a static Vite app. You can deploy `dist/` to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting

Build first:

```bash
npm run build
```

Then deploy the generated `dist` folder.

---

## Security Notes

- **Do not commit `.env`** (already ignored via `.gitignore`)
- EmailJS keys are public-facing by nature (client-side), so treat them as **non-secret identifiers** and keep your EmailJS template restrictions sensible.

---

## License

Private/portfolio use by default. Add a license file if you plan to open-source it.

