import { NextResponse } from "next/server";
import { auth } from "@/server/better-auth";

const notConfigured = () =>
  NextResponse.json({ error: "Auth not configured" }, { status: 503 });

export const GET = auth
  ? (await import("better-auth/next-js")).toNextJsHandler(auth.handler).GET
  : notConfigured;

export const POST = auth
  ? (await import("better-auth/next-js")).toNextJsHandler(auth.handler).POST
  : notConfigured;
