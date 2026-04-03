# Altimi Tech Due Diligence — altimitech.com

> LLMs.txt — Complete content map and data points for the Altimi PE landing page.

## Site overview

- **URL:** https://altimitech.com
- **Repo:** https://github.com/dontriskit/altimi-pe
- **Product:** Rapid Tech DD — independent technology due diligence for PE, VC, and growth investors
- **Single price point:** EUR 8,500 (Seed, growing complexity)
- **Timeline:** 2–3 weeks
- **CTA calendar:** https://meetings.hubspot.com/jacek-podoba
- **CTA form:** https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e

---

## Tech stack

- **Framework:** Next.js 15.5 (App Router)
- **Styling:** Tailwind CSS v4, custom fonts (Matter Regular, DM Mono)
- **Database:** Cloudflare D1 (SQLite) via Drizzle ORM
- **API:** tRPC v11, Better Auth v1.3
- **Deploy:** Cloudflare Workers via OpenNext (`pnpm run cf:deploy`)
- **Worker URL:** https://altimi-tech-dd.whitecontext.workers.dev

---

## Page sections (in order)

### 1. Navbar
- **File:** `src/app/_components/landing/navbar.tsx`
- **Links:** How it works (#how-it-works), Pricing (#pricing), What we assess (#scope), FAQ (#faq)
- **CTA:** "Reserve assessment" → CTA_URL
- **Breakpoint:** Hamburger menu below 1024px (lg:)

### 2. Hero
- **File:** `src/app/_components/landing/hero.tsx`
- **Headline:** "Let's de-risk your next deal."
- **Paragraph 1:** "Altimi delivers independent tech due diligence for PE, VC, and growth investors. Rapid Tech DD provides a clear investment recommendation in 2–3 weeks, combining code sampling, organizational maturity review, application audit, infrastructure assessment, and scalability analysis in one focused engagement."
- **Paragraph 2:** "This service is designed for investors and buyers who need an evidence-based view of technology risk before committing capital. The review focuses not only on how the platform performs today, but also on whether it can support the next stage of growth without disproportionate cost, risk, or delivery friction."
- **CTA 1:** "Reserve your assessment" → CTA_URL
- **CTA 2:** "See what you get" → #deliverables

### 3. Logo Bar
- **File:** `src/app/_components/landing/logo-bar.tsx`
- **Label:** "Trusted by teams at"
- **Logos:** Siemens, SoftBank, Opera, Greenbone, TIDAL, BenQ, Etteplan, BD

### 4. Pricing
- **File:** `src/app/_components/landing/pricing.tsx`
- **Anchor:** #pricing
- **Product:** Rapid Tech DD
- **Description:** "A focused process to evaluate your target's technology, sample code, assess AI maturity, and deliver a clear investment recommendation — scoped to the complexity of the company you're evaluating."
- **Price:** EUR 8,500 (Seed, growing complexity) — single tier only
- **What you get:**
  - Technical DD report (20–50 pages) — Architecture, code quality, infrastructure, security, and team maturity — with RAG scoring.
  - Scalability & AI maturity assessment — Growth scenario analysis, AI adoption scoring, data readiness evaluation.
  - Risk matrix + investment recommendation — Severity-scored findings with remediation priorities. Clear go/no-go for your IC memo.

### 5. Testimonials (cards)
- **File:** `src/app/_components/landing/testimonial.tsx`
- **Layout:** 2x2 grid
- **Testimonial 1:** Hilmar Eidsson, Co-Founder & CTO, Kara Connect — "Our internal team is highly satisfied with their work. Knowledgeable and professional, Altimi goes above and beyond to meet all our needs."
- **Testimonial 2:** Thorsteinn Gestsson, CEO, Gestsson ehf. — "Altimi's understanding and responsive approach enables seamless collaboration and accurate cost and timeline estimates."
- **Testimonial 3:** Stephan Kaufmann, Founder & CEO, Ridelink GmbH — "We recommend Altimi as a trusted partner whose strengths include flexibility, high quality, and a deep understanding of our needs."
- **Testimonial 4:** Thomas Rüdel, CEO, Kauz GmbH — "Altimi provided a development team of 8 specialists — front-end developers, testers, administrators, and DevOps."

### 6. Deliverables ("What You Get")
- **File:** `src/app/_components/landing/deliverables.tsx`
- **Anchor:** #deliverables
- **Layout:** Fletch-style — one deliverable per full-width section, alternating text/image
- **Subtitle:** "The deliverables below reflect the actual structure and outputs already used in the completed client audit report."
- **Deliverable 1:** Executive summary with investor takeaways — Green/Amber/Red Flag view, business implications, conclusions for decision-makers. Image: d1-table-of-contents.webp
- **Deliverable 2:** Organizational maturity assessment — team setup, onboarding, mentoring, role clarity, knowledge transfer, readiness to scale. Image: d2-team-rag.webp
- **Deliverable 3:** Roadmap and SDLC maturity review — roadmap discipline, prioritization, release management, code review, testing, deployment. Image: d3-sdlc-rag.webp
- **Deliverable 4:** AI and Business Intelligence maturity assessment — AI implementation maturity, data usage quality, analytics-driven decisions. Image: d4-bi-rag.webp
- **Deliverable 5:** Technical audit of the application — architecture, code structure, maintainability, modularity, dependencies, API logic. Image: d5-tech-maturity-chart.webp
- **Deliverable 6:** Infrastructure audit — cloud setup, resilience, monitoring, CI/CD, backup, disaster recovery, scaling readiness. Image: d6-infra-composite.webp
- **Deliverable 7:** Growth scenario and scaling implications — infrastructure vs functional scaling risk, 4x load modeling. Image: d7-sdlc-laptop.webp
- **Deliverable 8:** CAPEX / OPEX implications for scaling — cost projections for infrastructure, tooling, architecture, engineering capacity. Image: d8-capex-opex.webp
- **Deliverable 9:** Conclusion and strategic recommendation — platform stability verdict, long-term constraints, post-transaction priorities. Image: d9-security-rag.webp

### 7. Problem Checklist ("Do you have a tech risk problem?")
- **File:** `src/app/_components/landing/problem.tsx`
- **Interactive:** checkboxes with severity bar
- **Checklist items:**
  - CTO says "it's fine" but you have no independent validation
  - Tech section of the pitch deck is two slides and a diagram
  - Last quarter's "minor outage" was actually 6 hours of downtime
  - You're underwriting a 4x growth plan on infrastructure you've never seen
  - Nobody on the deal team can evaluate if the tech actually scales
  - Post-close surprises have cost you before — you'd rather know now
- **Severity levels:** 1-2 checked = mild (amber), 3-4 = concerning (orange), 5-6 = critical (red)

### 8. Process ("Here's exactly what the assessment looks like")
- **File:** `src/app/_components/landing/process.tsx`
- **Anchor:** #how-it-works
- **Pre-work (Your team):** Fill out intake form, provision read-only access to repos, cloud console, CI/CD
- **Pre-work (Our team):** Review documentation, set up VDR, prepare interview guides, identify focus areas
- **Week 01 — Assessment:**
  - Day 1-2: Stakeholder & Process Review — CTO and tech lead sessions
  - Day 3: Organisational Maturity — Stack assessment, API analysis, infrastructure topology
  - Day 4: Technical & Infrastructure Review — Code sampling, OWASP Top 10, dependency audit
  - Day 5: Initial Findings & Risk Scoring — Red flags, preliminary scoring, draft summary
- **Week 02–03 — Deep Dive:**
  - Week 2: 5x Growth Scenario — Growth modeling (4x load), database scaling, team constraints
  - Week 2: AI, BI & Delivery Maturity — AI in SDLC, data readiness, use-case prioritization
  - Week 2-3: Maturity Scores & Risk Register — 20-30 findings, severity scored, JIRA-ready
  - Week 3: 90-Day Action Roadmap — Quick wins, medium-term fixes, strategic initiatives with ROI
  - Week 3: Executive Summary & Final Deliverables — Executive summary, C-level walkthrough, handover

### 9. Scope ("What our auditors look at")
- **File:** `src/app/_components/landing/scope-tabs.tsx`
- **Anchor:** #scope
- **Area 01 — Architecture & Code Quality:** Tech stack, API design, backend architecture, code quality, dependencies, frontend-backend separation
- **Area 02 — Infrastructure & DevOps:** Cloud setup, CI/CD maturity, environments, observability, disaster recovery, IaC
- **Area 03 — Security & Compliance:** OWASP Top 10, auth model, secrets management, GDPR/RODO, web security, encryption
- **Area 04 — Team & SDLC Maturity:** SDLC process, roadmap, incident management, AI adoption, code review, bus factor
- **Area 05 — Scalability:** Bottlenecks, growth modeling (4x), database scaling, team scaling, SaaS metrics, growth conclusion

### 10. FAQ
- **File:** `src/app/_components/landing/faq.tsx`
- **Anchor:** #faq
- **Q: What access do you need?** — Read-only access to code repos, cloud console, CI/CD. We work with git bundles, Terraform exports if needed. Never write access.
- **Q: How is this different from Big 4?** — Faster (weeks not months), cheaper (fixed price), auditors are practicing engineers. 300+ projects delivered.
- **Q: Can I upgrade from Entry Scan to Rapid DD?** — Yes, findings carry over. Many start with scan for screening.
- **Q: Do you sign NDAs?** — Yes. ISO 27001 certified. Secure VDRs. 100% remote, fully confidential.
- **Q: What tech stacks do you cover?** — Java, Python, TypeScript/JavaScript, React, Angular, .NET, Kotlin, Symfony, Django. AWS, Azure, GCP. 250+ engineers.
- **Q: What happens after the report?** — Clear recommendation. Post-investment services: Architecture Audit (EUR 12k), AI Readiness (EUR 15k), engineering support.

### 11. Team Composition
- **File:** `src/app/_components/landing/team-composition.tsx`
- **Anchor:** #team
- **Intro:** Cross-functional audit squad combining BA/PM, Solution Architecture, infrastructure and SecDevOps expertise.
- **Role 1:** Business Analyst / Project Manager — audit coordination, stakeholder communication, business-facing recommendations
- **Role 2:** Solution Architect — architecture assessment, integration review, scalability risk interpretation
- **Role 3:** Infrastructure / Cloud Expert — cloud setup, DevOps maturity, resilience, disaster recovery, scaling readiness
- **Role 4:** Security / SecDevOps Expert — security implementation, access controls, compliance, vulnerability exposure
- **Optional:** Business Analyst, Infrastructure Engineer, Security Specialist, domain-specific experts
- **Why it works:** Covers business, organizational, architectural, infrastructure, and security dimensions while remaining rapid

### 12. CTA Section ("Ready to see what's under the hood?")
- **File:** `src/app/_components/landing/cta-section.tsx`
- **Subtitle:** "Delivered in 2–3 weeks. No stake in the deal — just the truth about the technology."
- **Single CTA:** "Book a 20-minute call" → https://meetings.hubspot.com/jacek-podoba
- **Status:** "Currently booking Q2 2026 · 3 slots remaining"
- **Logo marquee:** Siemens, SoftBank, TIDAL, Opera, Greenbone, BenQ, Etteplan, BD (white variants, animated)

### 13. Results (Partner Testimonials)
- **File:** `src/app/_components/landing/results.tsx`
- **Label:** "300+ projects delivered"
- **Headline:** "What our partners say about working with Altimi"
- **Interactive:** Click company logos to switch quotes
- **Partners:** Kara Connect (Iceland), Gestsson (Iceland), Ridelink (Germany), Kauz (Germany), Santander (Poland)

### 14. Footer
- **File:** `src/app/_components/landing/footer.tsx`
- **Brand:** "Independent tech due diligence for PE, VC, and growth investors." ISO 27001 Certified.
- **Services:** Entry Tech Scan, Rapid Tech DD, Deep Tech DD, Full Digital DD
- **Company:** About Altimi, Case Studies, Resources (/resources), Privacy Policy (/privacy), Terms
- **Contact:** Get in touch → CTA_URL

---

## Additional routes

### /pre-work — Intake Form
- **File:** `src/app/pre-work/page.tsx`
- **API:** `src/app/api/prework/route.ts` → Cloudflare D1
- **Contact fields:** Name*, Email*, Company/Fund
- **8 questions (single-select except Q3 multi-select):**
  1. Decision timeline (days / 3-4 weeks / 4+ weeks)
  2. Target company stage (pre-seed / seed / Series A+)
  3. Areas that matter most (architecture, infrastructure, security, scalability, AI, team) — multi-select
  4. Output type (red-flag screening / decision-ready report / deeper package)
  5. Access level (interviews only / repo access / cloud access / screenshots)
  6. Reason for assessment (screening before LOI / IC validation / valuation support / post-deal planning)
  7. Growth type (users+volume / geography / products+integrations / operating model)
  8. Needs today (fastest option / balanced rapid DD / deeper diligence)

### /resources — Resources page
### /resources/soc-reports — SOC Reports
### /resources/soc-reports/full-report — Full SOC Report
### /privacy — Privacy Policy

---

## Constants

- **CTA_URL:** `https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e`
- **PREWORK_URL:** `/pre-work`
- **Calendar URL:** `https://meetings.hubspot.com/jacek-podoba`

---

## Database schema (Cloudflare D1)

- **prework_submission** — intake form responses (name, email, company, 8 question fields, createdAt)
- **user / account / session / verification** — Better Auth tables
- **posts** — example table (unused)

---

## Development

```bash
pnpm install
pnpm dev          # Next.js dev with Turbo
pnpm run cf:deploy  # Build + deploy to Cloudflare Workers
```

## Environment

```
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_D1_TOKEN=
CLOUDFLARE_D1_DATABASE_ID=
```
