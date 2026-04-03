import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/server/db";

function createAuth() {
  if (!db) {
    console.warn("[Auth] DB not available, Better Auth is disabled.");
    return null;
  }

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
    }),
    emailAndPassword: {
      enabled: true,
    },
  });
}

export const auth = createAuth();

export type Session = NonNullable<typeof auth> extends { $Infer: { Session: infer S } } ? S : null;
