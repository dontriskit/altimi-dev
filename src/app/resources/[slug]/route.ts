import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { CONTENT_BUCKET?: { get: (key: string) => Promise<{ text: () => Promise<string> } | null> } } };

    if (!env.CONTENT_BUCKET) {
      return NextResponse.json(
        { error: "Content storage not available" },
        { status: 503 }
      );
    }

    const obj = await env.CONTENT_BUCKET.get(
      `articles/${slug}/final/article.html`
    );

    if (!obj) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    const html = await obj.text();

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load article" },
      { status: 500 }
    );
  }
}
