import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, role, currentStack, primaryDriver, previousAttempts, teamSize, timelinePressure, areasFocus, outputNeeded } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }

    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { DB?: { prepare: (sql: string) => { bind: (...args: unknown[]) => { run: () => Promise<unknown> } } } } };
    const db = env.DB;

    if (!db) {
      console.log("[Intake] D1 not available, submission not stored:", email);
      return NextResponse.json({ success: true, stored: false });
    }

    await db.prepare(
      `INSERT INTO intake_submission (name, email, company, role, currentStack, primaryDriver, previousAttempts, teamSize, timelinePressure, areasFocus, outputNeeded)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      name,
      email,
      company || null,
      role || null,
      JSON.stringify(currentStack || []),
      primaryDriver || null,
      previousAttempts || null,
      teamSize || null,
      timelinePressure || null,
      JSON.stringify(areasFocus || []),
      outputNeeded || null,
    ).run();

    return NextResponse.json({ success: true, stored: true });
  } catch (error) {
    console.error("[Intake] Error:", error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
