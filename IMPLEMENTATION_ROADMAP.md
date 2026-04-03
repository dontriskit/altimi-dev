# Implementation Roadmap

## Overview

Transform the T3 boilerplate into Altimi's Tech Due Diligence landing page with e-commerce for 2 products (Entry Tech Scan, Rapid Tech DD).

**Deploy target:** CapRover (`caprover deploy -d`)
**Database:** Cloudflare D1 (via wrangler + Drizzle ORM)
**CTA URL:** `https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e`

---

## Tracks

### Track A: Infrastructure (Skill 01)
**Priority:** P0 — blocks deployment
**Dependency:** None

| Step | Task | Status |
|------|------|--------|
| A1 | Set `output: "standalone"` in `next.config.js` | pending |
| A2 | Create `Dockerfile` (multi-stage: deps → build → runner) | pending |
| A3 | Create `.dockerignore` | pending |
| A4 | Create `captain-definition` for CapRover | pending |

---

### Track B: Design System (Skill 02)
**Priority:** P0 — blocks landing page
**Dependency:** None

| Step | Task | Status |
|------|------|--------|
| B1 | Copy fonts (Matter, DM Mono) to `src/app/fonts/` | pending |
| B2 | Copy assets (logos, textures, shapes) to `public/images/` | pending |
| B3 | Rewrite `src/styles/globals.css` with Altimi shadcn tokens | pending |
| B4 | Rewrite `src/app/layout.tsx` with local fonts + metadata | pending |

---

### Track C: Landing Page Components (Skill 03)
**Priority:** P0 — the product
**Dependency:** Track B (fonts/CSS must exist at build time)

| Step | Task | Status |
|------|------|--------|
| C1 | Create `src/app/_lib/constants.ts` (CTA URL) | pending |
| C2 | Create `dashed-separator.tsx` (reusable) | pending |
| C3 | Create `navbar.tsx` (glassmorphic, sticky) | pending |
| C4 | Create `hero.tsx` (dark, gradient blobs, H1, CTAs) | pending |
| C5 | Create `logo-bar.tsx` (client logos) | pending |
| C6 | Create `problem.tsx` (problem statement + checklist) | pending |
| C7 | Create `process.tsx` (4-step cards) | pending |
| C8 | Create `pricing.tsx` (2 product cards + upsell) | pending |
| C9 | Create `testimonial.tsx` (dark blockquote) | pending |
| C10 | Create `scope-tabs.tsx` (client component, 5 tabs) | pending |
| C11 | Create `faq.tsx` (client component, accordion) | pending |
| C12 | Create `cta-section.tsx` (gradient CTA + logo marquee) | pending |
| C13 | Create `footer.tsx` (4-column dark) | pending |
| C14 | Rewrite `src/app/page.tsx` (compose all sections) | pending |
| C15 | Delete `src/app/_components/post.tsx` | pending |

---

### Track D: Database (Skill 04)
**Priority:** P1 — not needed for MVP landing page, but set up now
**Dependency:** None

| Step | Task | Status |
|------|------|--------|
| D1 | Remove `@libsql/client`, keep `drizzle-orm` | pending |
| D2 | Create `wrangler.toml` | pending |
| D3 | Update `src/env.js` with D1 env vars | pending |
| D4 | Rewrite `src/server/db/index.ts` for D1 HTTP | pending |
| D5 | Update `drizzle.config.ts` | pending |
| D6 | Simplify `src/server/api/trpc.ts` (optional DB) | pending |
| D7 | Make Better Auth conditional on DB | pending |
| D8 | Update `.env.example` | pending |

---

### Track E: Cleanup (Skill 05)
**Priority:** P2 — polish
**Dependency:** Tracks A-D complete

| Step | Task | Status |
|------|------|--------|
| E1 | Simplify `post.ts` router to health check | pending |
| E2 | Rewrite `README.md` | pending |
| E3 | Verify `pnpm build` succeeds | pending |
| E4 | Verify `docker build` succeeds | pending |

---

## Execution Plan

```
Parallel wave 1:  Track A (infra) + Track B (design) + Track D (database)
Parallel wave 2:  Track C (components) — after B finishes
Sequential:       Track E (cleanup) — after all tracks
Final:            Build verification + commit
```

## Definition of Done

- [ ] `pnpm build` produces standalone output without errors
- [ ] `docker build -t altimi-tech-dd .` succeeds
- [ ] Landing page renders all 9 sections correctly
- [ ] All CTA buttons link to the NocoDB form URL
- [ ] No T3 boilerplate content visible
- [ ] `captain-definition` exists for CapRover
- [ ] `wrangler.toml` exists for D1 management
- [ ] README accurately describes the project
