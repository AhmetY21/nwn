# CONTEXT.md

---

## 1. Project Mission

We are building a **digital content platform that helps people rebuild their relationship with food and their bodies** — moving away from restrictive diet culture toward body literacy, interoceptive awareness, and evidence-based nutritional understanding.

**This is not a diet app.** It is explicitly the opposite. Every product, design, and copy decision must reflect this positioning.

### Core Beliefs (Non-Negotiable)

- Weight loss is NOT our success metric. Relationship repair is.
- Bodies are not broken machines to be fixed; they are ecosystems to be supported.
- Restriction-based diets fail long-term because they ignore the psychological and physiological complexity of eating.
- Diet culture actively harms people. Our job is to protect users from it, not perpetuate it.
- Science matters. Claims must be grounded in peer-reviewed evidence.
- People can learn to read their body's signals with guidance and practice.

---

## 2. Product Vision

A Turkish-first content platform (with future mobile app + AI coach) that:

1. Educates users about diet culture's harms using accessible science
2. Teaches body signal recognition (hunger, satiety, emotional eating triggers)
3. Offers a non-prescriptive, reflective approach to nutrition
4. Builds a community of people healing their food relationship

**Current phase (MVP):** Content authority + waitlist capture. No app, no AI, no accounts yet.

---

## 3. Target Audience

**Primary persona:** Aylin, 32, university-educated woman in Istanbul. Has tried 4+ diets over 10 years. Currently feels broken, guilty, exhausted by food thoughts. Suspects diets don't work but doesn't know what else to do. Intelligent, research-oriented, skeptical of wellness influencers.

**Secondary:** People with non-clinical disordered eating patterns seeking alternatives to restriction.

**Design implication:** She is smart, tired, and distrustful. Do NOT talk down to her. Do NOT use before/after photos. Do NOT use weight-focused language. Do NOT mimic diet-app aesthetics.

---

## 4. Brand & Tone

### Voice Principles

- **Warm but not saccharine** — like a trusted friend who happens to be a scientist
- **Direct but not clinical** — we explain mechanisms without being cold
- **Confident but not preachy** — we don't moralize food choices
- **Turkish-native** — not translated-from-English Turkish

### Language Rules

**Never use these words/phrases:**
- "kilo verme", "zayıflama", "ideal kilo", "fazla kilo" (unless critiquing diet culture)
- "temiz yeme", "clean eating", "detoks", "toksin atma"
- "yasak yiyecek", "kaçamak", "hile günü"
- "iradesiz", "disiplinsiz"
- "mucize", "garantili sonuç"
- English loanwords when good Turkish exists

**Prefer these:**
- "beden" over "vücut" (when discussing relationship — "beden" carries more respect)
- "beslenme ilişkisi" over "diyet"
- "açlık/tokluk sinyalleri" for hunger/satiety cues
- "beden farkındalığı" for body awareness
- "sezgisel beslenme" for intuitive eating
- "diyet kültürü" when referring to the systemic issue

### Tone Examples

❌ "Sağlıklı kiloya ulaşmanın bilimsel yolu!"
✅ "Bedenin sinyallerini dinlemeyi yeniden öğrenmek."

❌ "5 adımda yeme bozukluğundan kurtul!"
✅ "Yemekle ilişkini yeniden kurmanın yolları üzerine."

❌ "Bu besinler metabolizmanı hızlandırır!"
✅ "Metabolizma hakkında yaygın yanlış bilgiler ve gerçekler."

---

## 5. Visual Design Direction

### Aesthetic

- **Editorial, not clinical** — think long-form magazine (The Atlantic, Aeon), not health app
- **Warm, not sterile** — cream/off-white backgrounds, not pure white + medical blue
- **Confident typography** — serif headings convey authority; sans-serif body for readability

### Color Palette (Suggested — finalize before coding)

```css
--color-bg:        #FBF7F2   /* warm cream */
--color-surface:   #F4EEE4   /* soft beige */
--color-text:      #1F2420   /* near-black, warmer than pure black */
--color-muted:     #6B6B63   /* muted olive-gray */
--color-accent:    #5C7F5C   /* deep sage green */
--color-highlight: #C87856   /* muted terracotta */
--color-border:    #E5DFD3
```

### Typography

- **Headings:** A serif with character — suggest *Fraunces*, *Source Serif 4*, or *Literata*
- **Body:** A highly readable sans — suggest *Inter*, *IBM Plex Sans*, or *Figtree*
- **Reading comfort:** body text 18–20px, line-height 1.7, max-width 65ch for articles

### Imagery

- Real food, real bodies, real contexts — avoid stock photo clichés
- No before/after shots. Ever.
- No scales, measuring tapes, tight abs, "inspirational" gym imagery
- Prefer: hands preparing food, shared meals, quiet domestic moments, nature

---

## 6. Technical Stack

### Core Framework
- **Astro 4.x** — static site generator, ships minimal JS
- **TypeScript** (strict mode) — catch errors early, better LLM code generation
- **Tailwind CSS** — utility-first styling
- **MDX** — for rich content posts

### Deployment
- **GitHub Pages** via GitHub Actions
- Auto-deploy on push to `main`
- Custom domain (HTTPS required)

### Content
- **Astro Content Collections** with Zod schemas for type-safe Markdown
- Posts live in `src/content/posts/*.md`
- No database. Git IS the CMS.

### Third-Party Services
- **Email capture:** Buttondown or ConvertKit (TBD — use env var for API endpoint)
- **Analytics:** Plausible or Umami (privacy-first, GDPR/KVKK-compliant)
- **Forms:** Same as email; fallback to Formspree if needed

### Explicitly NOT using (yet)
- Authentication / user accounts
- Databases
- Serverless functions (unless strictly necessary)
- Client-side state management libraries
- React/Vue/Svelte for general pages (use Astro components; add Islands only when interactivity demands it)

---

## 7. Code Conventions

### File & Folder Naming
- `kebab-case` for files and folders: `post-card.astro`, `email-form.astro`
- Astro components: `PascalCase` inside the file but kebab-case for filenames when imported as routes
- Content slugs: Turkish, kebab-case, ASCII-safe (use `-` not `_`, no diacritics in URLs)
  - Example: `diyet-kulturu-nedir.md` not `diyet_kültürü.md`

### TypeScript
- `strict: true` in tsconfig
- No `any` — use `unknown` and narrow, or define proper types
- Define content schemas in `src/content/config.ts` with Zod
- Prefer `type` for unions/aliases, `interface` for object shapes that may extend

### Astro Components
- One component per file
- Props typed with `interface Props {}`
- Use slots for composition
- Prefer `.astro` over framework components unless interactivity requires it
- No client-side JS by default; add `client:visible` / `client:load` only when needed

### Styling
- Tailwind utility classes preferred
- Extract to `@apply` in component `<style>` blocks only for repeated complex patterns
- Mobile-first: write base styles for mobile, use `md:` / `lg:` for larger
- Respect `prefers-reduced-motion` and `prefers-color-scheme`

### Accessibility (Non-Negotiable)
- All images have meaningful `alt` text (empty `alt=""` only for decorative)
- Semantic HTML: `<article>`, `<nav>`, `<main>`, `<aside>`, proper heading hierarchy
- Color contrast: WCAG AA minimum (AAA for body text preferred)
- Keyboard navigable — test tab order
- Focus states visible and styled
- `lang="tr"` on `<html>` for Turkish pages

### SEO Defaults
- Every page: unique `<title>`, `<meta description>`, canonical URL
- Open Graph + Twitter Card tags
- JSON-LD structured data for articles (`Article` schema)
- Sitemap auto-generated
- RSS feed for blog

### Performance Targets
- Lighthouse scores 95+ across the board
- LCP < 2.0s, CLS < 0.1, INP < 200ms
- No JS on content pages unless required
- Optimize images with Astro's `<Image>` component
- Self-host fonts with `font-display: swap`

---

## 8. Content Structure

### Post Frontmatter Schema

```yaml
---
title: "Açlık Sinyallerini Yeniden Tanımak"
slug: "aclik-sinyallerini-yeniden-tanimak"
description: "Bedenin açlık ve tokluk mesajlarını nasıl okuyacağını öğrenmek neden temel bir beceridir?"
publishDate: 2026-04-18
updatedDate: 2026-04-18
category: "beden-farkindalgi"
tags: ["interoception", "aclik", "sezgisel-beslenme"]
coverImage: "./covers/hunger-signals.jpg"
coverImageAlt: "Tabakta taze hazırlanmış kahvaltı"
author: "author-name"
readingTime: 7
featured: false
draft: false
---
```

### Categories (Fixed Taxonomy)

- `manifesto` — foundational philosophy pieces
- `diyet-kulturu` — critiques of diet culture
- `beden-farkindalgi` — body awareness, interoception
- `beslenme-bilimi` — nutrition science explainers
- `psikoloji` — emotional eating, food psychology
- `pratikler` — exercises, practices, tools

---

## 9. Content Principles for LLM-Generated Drafts

If you are drafting article content:

1. **Cite sources.** Reference peer-reviewed research where making scientific claims. Prefer reviews and meta-analyses over single studies. Link to DOI or PubMed.
2. **Avoid absolutes.** Nutrition science is nuanced. Use "araştırmalar gösteriyor ki...", "mevcut kanıtlar..." rather than "bilim kanıtladı".
3. **Never prescribe specific diets or meal plans.** We are anti-prescription.
4. **Never comment on any individual's body.**
5. **Flag eating disorder content appropriately.** If a topic approaches clinical ED territory, add a content note and a resource link (e.g., Türkiye Psikiyatri Derneği).
6. **Write for curiosity, not guilt.** Every article should leave the reader feeling more capable, not more ashamed.

---

## 10. Directory Structure (Reference)

```text
/
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── content/
│   │   ├── forms/
│   │   └── ui/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── hakkimda.astro
│   │   ├── manifesto.astro
│   │   ├── bekleme-listesi.astro
│   │   ├── kaynaklar.astro
│   │   ├── iletisim.astro
│   │   └── makaleler/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   └── consts.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── README.md
└── CONTEXT.md
```

---

## 11. Definition of Done (for any feature)

Before marking a task complete, verify:

- [ ] TypeScript compiles with no errors and no `any`
- [ ] Lighthouse score 95+ on relevant page
- [ ] Works on mobile (375px), tablet (768px), desktop (1280px)
- [ ] Keyboard navigable; focus states visible
- [ ] `lang="tr"` and all user-facing strings are in Turkish
- [ ] No hardcoded English copy snuck in
- [ ] Meta tags present on new pages
- [ ] No console errors or warnings
- [ ] Images have meaningful alt text
- [ ] Links to external sites have `rel="noopener noreferrer"` when using `target="_blank"`

---

## 12. Prompts You Can Use

**For components:**
> "Create an Astro component at [path]. Follow CONTEXT.md. It should [requirements]. Use TypeScript strict, Tailwind utility classes, mobile-first responsive. All user-facing text in Turkish. Include proper ARIA and semantic HTML."

**For content:**
> "Draft a blog post for the [category] category. Follow the tone and language rules in CONTEXT.md — section 4 especially. Target length 1200–1800 words. Include 3+ citations to peer-reviewed research. Provide frontmatter per section 8 schema."

**For review:**
> "Review this code against CONTEXT.md. Flag any violations of our tone/language rules, accessibility requirements, TypeScript standards, or diet-culture language we've banned."

---

## 13. What NOT to Build (Scope Discipline)

If tempted to add these, STOP — they belong to later phases:

- User accounts, login, profiles
- Comments sections (moderation burden, diet-culture risk)
- AI chatbots or coaches
- Calorie/macro trackers
- Food logging features
- Recipe databases with "healthy" labels
- Social sharing of personal progress
- Gamification (streaks, badges)
- Paid tiers / subscriptions
- Community forums

Any of these require a dedicated product decision and likely a different architecture. The MVP is a content site with email capture. Nothing more.

---

## 14. Open Questions to Resolve Before Coding

Flag these to the human owner — don't assume:

- [ ] Final brand name + domain
- [ ] Email service: Buttondown vs ConvertKit vs Substack
- [ ] Analytics: Plausible (hosted vs self-hosted) vs Umami
- [ ] Exact color palette — hex values finalized
- [ ] Exact font choices — with licensing verified
- [ ] Cover image sourcing strategy (photography budget, Unsplash curation, custom illustrations)
- [ ] Turkish-only for MVP

