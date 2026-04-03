import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";

interface Article {
  slug: string;
  title: string;
  target_site: string;
  sequence_position: number;
  assembly_status: string;
  primary_keyword: string | null;
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(
      "https://altimi-content-pipeline.whitecontext.workers.dev/articles",
      { next: { revalidate: 300 } },
    );
    if (!res.ok) return [];
    const data = await res.json() as { articles: Article[] };
    return data.articles
      .filter(
        (a) =>
          a.target_site === "altimi-dev.com" &&
          a.assembly_status === "completed",
      )
      .sort((a, b) => a.sequence_position - b.sequence_position);
  } catch {
    return [];
  }
}

export async function Insights() {
  const articles = await getArticles();
  if (articles.length === 0) return null;

  return (
    <section id="insights" className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[100px] max-md:py-[60px]">
        <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/50 mb-4">
          RESEARCH &amp; INSIGHTS
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.15] font-normal text-[#0a1926] mb-4 max-w-[700px]">
          Data-Driven Modernization Insights
        </h2>
        <p className="text-[#333333] text-[18px] leading-[1.6] mb-[100px] max-md:mb-[60px] max-w-[700px]">
          Research-backed articles with original data, charts, and sourced
          citations. Each piece is built from 3 parallel deep research streams.
        </p>

        <div className="flex flex-col gap-[100px] max-md:gap-[50px]">
          {articles.map((a, i) => {
            const isEven = i % 2 === 1;
            return (
              <a
                key={a.slug}
                href={`/resources/${a.slug}`}
                className="grid md:grid-cols-2 gap-12 max-md:gap-8 items-center group"
              >
                <div className={isEven ? "md:order-2" : ""}>
                  <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/40 mb-4">
                    {a.primary_keyword || `Insight ${a.sequence_position}`}
                  </p>
                  <h3 className="text-[clamp(22px,3vw,36px)] leading-[1.2] font-normal text-[#0a1926] mb-4 group-hover:text-[#419AF0] transition-colors">
                    {a.title}
                  </h3>
                  <span className="font-mono text-[14px] uppercase tracking-[0.65px] text-[#419AF0] group-hover:text-[#0a1926] transition-colors">
                    Read article &rarr;
                  </span>
                </div>
                <div className={isEven ? "md:order-1" : ""}>
                  <div className="overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                    <Image
                      src={`/cdn-cgi/image/width=800,quality=80,format=auto/resources/${a.slug}/images/hero.jpg`}
                      alt={a.title}
                      width={700}
                      height={400}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-[100px] max-md:mt-[60px] text-center">
          <div className="border-t border-[#0a1926]/10 pt-16">
            <h3 className="text-[clamp(24px,4vw,40px)] leading-[1.2] font-normal text-[#0a1926] mb-4">
              Ready to unblock your roadmap?
            </h3>
            <p className="text-[#333333] text-[18px] leading-[1.6] mb-8 max-w-[500px] mx-auto">
              Start with a 2-4 week Discovery Sprint. No lock-in - just a
              clear modernization plan.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] px-8 rounded-[6.5px] items-center hover:bg-[#0a1926]/90 transition-colors"
            >
              Book a Modernization Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
