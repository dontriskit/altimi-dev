# Skill: Drizzle + Cloudflare D1 Setup

## Goal
Replace the libsql/sqlite database with Cloudflare D1 accessed via HTTP API. Keep Drizzle ORM.

## Context
- Current setup: `@libsql/client` with `drizzle-orm/libsql` and `DATABASE_URL=file:./db.sqlite`
- Target: Cloudflare D1 via `drizzle-orm/d1-http` driver
- App runs on CapRover (not Cloudflare Workers), so we use the D1 HTTP API
- D1 is still SQLite dialect — schema stays the same
- For the landing page MVP, the DB is not actively used (no auth needed yet)
- We set this up now so it's ready for future features (lead tracking, admin, etc.)

## Steps

### 1. Install dependencies
```bash
cd /home/mhm/Documents/altimi-tech-dd/altimi-tech-dd
pnpm add drizzle-orm@latest
pnpm remove @libsql/client
```
Note: `drizzle-orm` already includes D1 HTTP support, no extra package needed.

### 2. Create `wrangler.toml` (for D1 management only)
```toml
name = "altimi-tech-dd"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "altimi-tech-dd"
database_id = "" # Fill after `wrangler d1 create altimi-tech-dd`
```

### 3. Update `src/env.js`
Add D1 env vars (all optional for now — landing page doesn't need DB):
```js
server: {
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
  CLOUDFLARE_D1_TOKEN: z.string().optional(),
  CLOUDFLARE_D1_DATABASE_ID: z.string().optional(),
},
runtimeEnv: {
  NODE_ENV: process.env.NODE_ENV,
  CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
  CLOUDFLARE_D1_TOKEN: process.env.CLOUDFLARE_D1_TOKEN,
  CLOUDFLARE_D1_DATABASE_ID: process.env.CLOUDFLARE_D1_DATABASE_ID,
},
```

### 4. Update `src/server/db/index.ts`
```ts
import { drizzle as drizzleD1Http } from "drizzle-orm/d1-http";
import { env } from "@/env";
import * as schema from "./schema";

function createDb() {
  const accountId = env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = env.CLOUDFLARE_D1_DATABASE_ID;
  const token = env.CLOUDFLARE_D1_TOKEN;

  if (!accountId || !databaseId || !token) {
    console.warn("[DB] Cloudflare D1 credentials not configured. DB calls will fail.");
    // Return a dummy that throws on use — landing page doesn't need DB
    return null;
  }

  return drizzleD1Http({
    accountId,
    databaseId,
    token,
    schema,
  });
}

export const db = createDb();
```

### 5. Update `drizzle.config.ts`
```ts
import { type Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_D1_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
} satisfies Config;
```

### 6. Update `.env.example`
```
# Cloudflare D1
CLOUDFLARE_ACCOUNT_ID=""
CLOUDFLARE_D1_TOKEN=""
CLOUDFLARE_D1_DATABASE_ID=""
```

### 7. Simplify tRPC context (DB is optional for now)
Update `src/server/api/trpc.ts` — make db nullable in context since landing page doesn't need it.

### 8. Clean up Better Auth
For the MVP landing page, auth is not needed. Comment out or simplify:
- `src/server/better-auth/config.ts` — make it conditional on DB availability
- `src/server/api/trpc.ts` — remove auth session from context for now
- `src/app/api/auth/[...all]/route.ts` — keep but make it gracefully handle missing DB

## Files Modified
- `package.json` — remove `@libsql/client`
- `wrangler.toml` — new
- `src/env.js` — add D1 env vars
- `src/server/db/index.ts` — rewrite for D1 HTTP
- `drizzle.config.ts` — update driver
- `.env.example` — update vars
- `src/server/api/trpc.ts` — simplify context
- `src/server/better-auth/config.ts` — make conditional

## Dependencies
None — can run in parallel. Just needs `pnpm install` to work.
