# Skill: Next.js Standalone + Docker + CapRover

## Goal
Configure Next.js for standalone output and create a production Dockerfile compatible with CapRover `caprover deploy -d`.

## Context
- App is in `/home/mhm/Documents/altimi-tech-dd/altimi-tech-dd/`
- Uses Next.js 15, React 19, pnpm, Tailwind v4
- CapRover requires a `captain-definition` file at project root pointing to a Dockerfile
- Next.js standalone mode copies only needed files (~100MB vs ~1GB)
- All env vars will be injected at runtime via CapRover dashboard

## Steps

### 1. Update `next.config.js`
```js
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
};

export default config;
```

### 2. Create `Dockerfile`
```dockerfile
FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.7.1 --activate

# --- Dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# --- Builder ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV SKIP_ENV_VALIDATION=1
ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build

# --- Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

### 3. Create `.dockerignore`
```
node_modules
.next
.git
*.md
SKILLS
```

### 4. Create `captain-definition`
```json
{
  "schemaVersion": 2,
  "dockerfilePath": "./Dockerfile"
}
```

### 5. Verify
- `pnpm build` should produce `.next/standalone/server.js`
- `docker build -t altimi-tech-dd .` should succeed
- `captain-definition` file exists at project root

## Files Modified
- `next.config.js` — add `output: "standalone"`
- `Dockerfile` — new
- `.dockerignore` — new
- `captain-definition` — new

## Dependencies
None — this track can run first/independently.
