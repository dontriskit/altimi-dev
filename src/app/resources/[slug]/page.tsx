import { notFound } from "next/navigation";
import { Navbar } from "../../_components/landing/navbar";
import { Footer } from "../../_components/landing/footer";

export const dynamic = "force-dynamic";

async function getArticleHtml(slug: string): Promise<string | null> {
  try {
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { CONTENT_BUCKET?: { get: (key: string) => Promise<{ text: () => Promise<string> } | null> } } };

    if (!env.CONTENT_BUCKET) return null;
    const obj = await env.CONTENT_BUCKET.get(`articles/${slug}/final/article.html`);
    if (!obj) return null;

    const fullHtml = await obj.text();

    // Extract content between <main> and </main> (the article body)
    const mainMatch = fullHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) return mainMatch[1];

    // Fallback: extract between <body> and </body>
    const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) return bodyMatch[1];

    return fullHtml;
  } catch {
    return null;
  }
}

// Extract inline styles from the article HTML
function extractStyles(fullHtml: string): string {
  const styleMatches = fullHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  if (!styleMatches) return "";
  return styleMatches.join("\n");
}

async function getFullHtml(slug: string): Promise<{ content: string; styles: string } | null> {
  try {
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { CONTENT_BUCKET?: { get: (key: string) => Promise<{ text: () => Promise<string> } | null> } } };

    if (!env.CONTENT_BUCKET) return null;
    const obj = await env.CONTENT_BUCKET.get(`articles/${slug}/final/article.html`);
    if (!obj) return null;

    const fullHtml = await obj.text();
    const content = fullHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1]
      || fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]
      || null;

    if (!content) return null;

    const styles = extractStyles(fullHtml);
    // Also extract Chart.js scripts
    const scripts = fullHtml.match(/<script[^>]*>[\s\S]*?<\/script>/gi)?.join("\n") || "";

    return { content: content + scripts, styles };
  } catch {
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getFullHtml(slug);

  if (!article) notFound();

  return (
    <>
      <Navbar />
      <div
        dangerouslySetInnerHTML={{ __html: article.styles }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <Footer />
    </>
  );
}
