# Skill: Cleanup + README

## Goal
Remove T3 boilerplate content and write a proper README for the project.

## Cleanup Steps

### 1. Delete boilerplate files
- `src/app/_components/post.tsx` — T3 demo component

### 2. Clean up tRPC router
Update `src/server/api/routers/post.ts` — replace the demo CRUD with a simple health check:
```ts
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  health: publicProcedure.query(() => {
    return { status: "ok", timestamp: new Date().toISOString() };
  }),
});
```

### 3. Remove react-grab dev script
In `src/app/layout.tsx`, the react-grab Script tag will be removed by Skill 02 (design system rewrite).

### 4. Update `biome.jsonc`
No changes needed — keep existing config.

## README Content

Write `README.md` with:

```markdown
# Altimi Tech Due Diligence

Landing page and e-commerce platform for Altimi's Tech Due Diligence services.

## Products

- **Entry Tech Scan** (EUR 5,000) — 1-week high-level tech assessment
- **Rapid Tech DD** (EUR 8,500) — 2-3 week focused due diligence

## Tech Stack

- **Framework:** Next.js 15 (App Router, standalone output)
- **Styling:** Tailwind CSS v4 + Altimi Design System
- **Database:** Cloudflare D1 (via Drizzle ORM)
- **Auth:** Better Auth (disabled for MVP)
- **API:** tRPC v11
- **Deploy:** CapRover (Docker)

## Development

```bash
pnpm install
pnpm dev
```

## Build & Deploy

```bash
# Build standalone
pnpm build

# Deploy to CapRover
caprover deploy -d
```

## Environment Variables

Copy `.env.example` to `.env` and fill in values:

```
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_D1_TOKEN=
CLOUDFLARE_D1_DATABASE_ID=
```

## Project Structure

```
src/
  app/
    _components/landing/  # Landing page sections
    _lib/constants.ts     # CTA URL and shared constants
    layout.tsx            # Root layout with Altimi fonts
    page.tsx              # Landing page composition
  server/
    api/                  # tRPC routers
    db/                   # Drizzle + D1 setup
  styles/
    globals.css           # Altimi design tokens
public/
  images/                 # Logos, textures, gradient shapes
```
```

## Files Modified
- `README.md` — full rewrite
- `src/app/_components/post.tsx` — deleted
- `src/server/api/routers/post.ts` — simplified

## Dependencies
Should run after all other tracks are complete.
