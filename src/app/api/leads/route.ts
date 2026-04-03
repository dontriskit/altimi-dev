import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, company, role, source } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Access D1 via Cloudflare context
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { DB?: { prepare: (sql: string) => { bind: (...args: unknown[]) => { run: () => Promise<unknown> } } } } };
    const db = env.DB;

    if (!db) {
      // Fallback: just return success without storing (for local dev)
      console.log("[Leads] D1 not available, lead not stored:", email);
      return NextResponse.json({ success: true, stored: false });
    }

    await db.prepare(
      "INSERT OR IGNORE INTO leads (email, name, company, role, source) VALUES (?, ?, ?, ?, ?)"
    ).bind(
      email,
      name || null,
      company || null,
      role || null,
      source || "research-report"
    ).run();

    return NextResponse.json({ success: true, stored: true });
  } catch (error) {
    console.error("[Leads] Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
