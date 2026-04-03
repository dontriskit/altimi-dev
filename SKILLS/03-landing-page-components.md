# Skill: Landing Page Components

## Goal
Build the full landing page as React server components, replacing the T3 boilerplate page.

## Context
- Reference HTML prototype: `../../lp-messaging/index.html`
- Copy & messaging: `../../lp-context/copy-and-messaging.md`
- Products: `../../lp-context/products.md`
- Design patterns: `../../Altimi-Design-Guidelines/components/patterns.md`
- Layout patterns: `../../Altimi-Design-Guidelines/patterns/layouts.md`
- This is a STATIC landing page — no auth, no DB queries needed for the main page
- All CTA links point to: `https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e`

## CTA URL Constant
Define in `src/app/_lib/constants.ts`:
```ts
export const CTA_URL = "https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e";
```

## Component Structure
All components in `src/app/_components/landing/`:

```
src/app/_components/landing/
  navbar.tsx          — sticky glassmorphic nav
  hero.tsx            — dark hero with gradient blobs, H1, CTAs
  logo-bar.tsx        — client logos strip (light bg, brightness-0 filter)
  problem.tsx         — problem statement + interactive checklist
  process.tsx         — 4-step process cards (how it works)
  pricing.tsx         — 2 product cards + upsell bar
  testimonial.tsx     — dark section, blockquote
  scope-tabs.tsx      — tab bar with 5 assessment areas (CLIENT component)
  faq.tsx             — accordion FAQ (CLIENT component)
  cta-section.tsx     — gradient CTA with two buttons + logo marquee
  footer.tsx          — 4-column dark footer
  dashed-separator.tsx — reusable dashed line component
```

## Page File: `src/app/page.tsx`
Replace entirely — import and compose all landing components:
```tsx
import { Navbar } from "./_components/landing/navbar";
import { Hero } from "./_components/landing/hero";
// ... etc
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* ... remaining sections */}
    </>
  );
}
```

## Key Design Rules (from Altimi Design Guidelines)

### Section Labels
```tsx
<span className="inline-block font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-foreground/50 bg-foreground/5 px-4 py-1.5 rounded">
  SECTION NAME
</span>
```

### Section Headings
Matter font, weight 400 (never bold), sizes:
- Hero: `text-[clamp(48px,7vw,100px)] leading-[1.05]`
- Section: `text-[clamp(32px,5vw,70px)] leading-[1.15]`

### CTA Buttons
```tsx
// Primary (white on navy, or navy on white)
<a href={CTA_URL} className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[52px] px-7 rounded-[6.5px] flex items-center">

// Secondary (outline)
<a href={CTA_URL} className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-white h-[52px] px-7 rounded-[6.5px] flex items-center border border-white/20">
```

### Section Transitions
Every section that changes bg color gets: `className="rounded-t-3xl relative z-[1]"`

### Dashed Separator
Reusable component with `variant="light" | "dark"` prop.

### Client-side Components
Only `scope-tabs.tsx` and `faq.tsx` need `"use client"` (for interactivity).
Everything else is a server component.

## Content (from lp-context/copy-and-messaging.md)
- Hero headline: "Know what you're buying before you sign."
- Problem headline: "Investment decisions built on surface-level tech assessments."
- Process headline: "From first look to clear recommendation."
- Pricing headline: "Two products. Fixed price. No surprises."
- Scope headline: "What our auditors look at."
- FAQ headline: "Common questions."
- CTA headline: "Ready to see what's under the hood?"

## Pricing Data (from lp-context/products.md)
### Entry Tech Scan — EUR 5,000
- Timeline: 1 week
- Tag: "Most popular for screening"
- Includes: Documentation review, CTO interview, Tech stack assessment, Red flag identification
- Deliverables: 5-10 page executive summary, RAG scoring, Go/No-go recommendation

### Rapid Tech DD — EUR 8,500
- Timeline: 2-3 weeks
- Tag: "Best for pre-investment" + "Recommended" badge
- Includes: VDR analysis, CTO & lead interviews, Stack review, AI assessment, Code review
- Deliverables: 20-50 page report, Scalability assessment, AI scorecard, Risk matrix, Recommendation

## Files Created
- `src/app/_lib/constants.ts`
- `src/app/_components/landing/*.tsx` (12 component files)
- `src/app/page.tsx` (full rewrite)

## Files Deleted
- `src/app/_components/post.tsx` (T3 boilerplate demo)

## Dependencies
- Requires Skill 02 (design system) to be done first for fonts/assets to exist
- But can be written in parallel — just needs the CSS/fonts at build time
