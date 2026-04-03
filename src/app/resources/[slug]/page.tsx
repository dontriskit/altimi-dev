import { notFound } from "next/navigation";
import { Navbar } from "../../_components/landing/navbar";
import { Footer } from "../../_components/landing/footer";

export const dynamic = "force-dynamic";

async function getArticleParts(slug: string): Promise<{ content: string; styles: string; scripts: string } | null> {
  try {
    const { env } = (await import("@opennextjs/cloudflare").then(
      (m) => m.getCloudflareContext()
    )) as { env: { CONTENT_BUCKET?: { get: (key: string) => Promise<{ text: () => Promise<string> } | null> } } };

    if (!env.CONTENT_BUCKET) return null;
    const obj = await env.CONTENT_BUCKET.get(`articles/${slug}/final/article.html`);
    if (!obj) return null;

    const fullHtml = await obj.text();

    // Extract the <main>...</main> block INCLUDING the tag (keeps max-w-3xl)
    const mainMatch = fullHtml.match(/(<main[^>]*>[\s\S]*?<\/main>)/i);
    const content = mainMatch?.[1] || fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || null;
    if (!content) return null;

    // Extract styles
    const styleMatches = fullHtml.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
    const styles = styleMatches?.join("\n") || "";

    // Extract scripts (Chart.js, reading progress, etc)
    const scriptMatches = fullHtml.match(/<script[^>]*>[\s\S]*?<\/script>/gi);
    const scripts = scriptMatches?.join("\n") || "";

    return { content, styles, scripts };
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
  const article = await getArticleParts(slug);

  if (!article) notFound();

  return (
    <>
      <Navbar />
      <div dangerouslySetInnerHTML={{ __html: article.styles }} />
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
      <div dangerouslySetInnerHTML={{ __html: article.scripts }} />
      <Footer />
    </>
  );
}
