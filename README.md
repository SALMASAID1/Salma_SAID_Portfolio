# SALMA SAID — Data Engineering Portfolio

A modern, responsive portfolio built with **React 18 + Vite + Tailwind CSS**.

## 📁 Project Structure

```
portfoliosalmasaid/
├── public/                     # Static assets (put your CV PDF here)
│   └── salma-said-cv.pdf       # Your downloadable CV
├── src/
│   ├── components/             # React UI components
│   │   ├── Navbar.jsx          # Navigation bar with lang/theme toggles
│   │   ├── Hero.jsx            # Hero section with typing animation
│   │   ├── About.jsx           # About me section
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Projects.jsx        # Projects grid with filters
│   │   ├── Skills.jsx          # Skills & technologies grid
│   │   ├── Education.jsx       # Education timeline
│   │   ├── Certifications.jsx  # Certifications cards
│   │   ├── Contact.jsx         # Contact form & links
│   │   └── Footer.jsx          # Site footer
│   ├── context/
│   │   └── AppContext.jsx      # Theme (dark/light) + Language (EN/FR) context
│   ├── data/
│   │   └── content.js          # All text content in EN and FR
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Scroll-reveal animation hook
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind directives + custom styles
├── index.html                  # HTML template (SEO meta tags)
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS config
├── vite.config.js              # Vite config
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📝 How to Update Content

All portfolio content lives in **one file**: `src/data/content.js`

- **English text**: `content.en`
- **French text**: `content.fr`

Simply edit the text values and the site updates automatically. No need to touch any component files for content changes.

### Common updates:
| What to change | Where |
|---|---|
| Personal info, links | `content.en.contact.links` and `content.fr.contact.links` |
| Experience entries | `content.en.experience.items` and `content.fr.experience.items` |
| Projects | `content.en.projects.items` and `content.fr.projects.items` |
| Skills | `content.en.skills.categories` and `content.fr.skills.categories` |
| Education | `content.en.education.items` and `content.fr.education.items` |
| Certifications | `content.en.certifications.items` and `content.fr.certifications.items` |
| CV Download | Put your PDF in `public/salma-said-cv.pdf` |

## 🌐 Deployment

### Option 1: Vercel (Recommended — Easiest)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"New Project"** → Import your repository
4. Vercel auto-detects Vite — click **"Deploy"**
5. Your site is live! You'll get a URL like `https://your-project.vercel.app`

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → **"Add new site"** → **"Import from Git"**
3. Select your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy"**

### Option 3: GitHub Pages

1. Install the gh-pages helper:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. In `vite.config.js`, set the base to your repo name:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. Run:
   ```bash
   npm run deploy
   ```

5. In your GitHub repo → **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: `gh-pages` → Save

## 🔗 Custom Domain Setup

### On Vercel:
1. Go to your project dashboard → **Settings** → **Domains**
2. Add your domain (e.g., `salmasaid.dev`)
3. Update your domain's DNS:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

### On Netlify:
1. Go to **Domain settings** → **Add domain**
2. Follow DNS configuration instructions
   - **CNAME:** `your-site.netlify.app`

### On GitHub Pages:
1. Add a file `public/CNAME` containing your domain:
   ```
   salmasaid.dev
   ```
2. In your domain's DNS settings, add:
   - **CNAME Record:** `yourusername.github.io`

## ⚡ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Vite 6 | Fast build tool & dev server |
| Tailwind CSS 3.4 | Utility-first styling |
| Font Awesome 6 | Icons |
| Inter + JetBrains Mono | Typography |
| Devicon | Technology logos |

## ♿ Accessibility

- Semantic HTML (`nav`, `main`, `section`, `footer`)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Proper heading hierarchy (h1 → h2 → h3)
- Color contrast ratios meet WCAG standards
- Responsive from 320px to 2560px+

## 🎨 Features

- **Dark / Light mode** — toggle with system preference detection
- **EN / FR language switch** — persisted in localStorage
- **Smooth scroll** — CSS `scroll-smooth` + anchor links
- **Scroll-reveal animations** — IntersectionObserver-based
- **Typing effect** — animated title in hero section
- **Counter animation** — stats animate on scroll
- **Project filters** — filter by category
- **Responsive** — mobile-first design
- **SEO** — meta tags, semantic HTML, proper structure
- **Performance** — Vite tree-shaking, lazy-loaded images
