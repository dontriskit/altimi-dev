import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string; path: string[] }> }
) {
  const { slug, path } = await params;
  const filename = path.join("/");

  try {
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { CONTENT_BUCKET?: { get: (key: string) => Promise<{ body: ReadableStream; httpMetadata?: { contentType?: string } } | null> } } };

    if (!env.CONTENT_BUCKET) {
      return new NextResponse("Not available", { status: 503 });
    }

    const obj = await env.CONTENT_BUCKET.get(
      `articles/${slug}/images/${filename}`
    );

    if (!obj) {
      return new NextResponse("Not found", { status: 404 });
    }

    return new NextResponse(obj.body, {
      headers: {
        "Content-Type": obj.httpMetadata?.contentType || "image/jpeg",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  } catch {
    return new NextResponse("Error", { status: 500 });
  }
}
