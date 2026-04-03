import { auth } from ".";
import { headers } from "next/headers";
import { cache } from "react";

export const getSession = cache(async () => {
  if (!auth) return null;
  return auth.api.getSession({ headers: await headers() });
});
