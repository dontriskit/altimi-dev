import { CTA_URL } from "@/app/_lib/constants";

export function Hero() {
  return (
    <section className="bg-white pt-32 max-md:pt-20 pb-16 max-md:pb-10">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6">
        <h1 className="text-[#0a1926] text-[clamp(36px,7vw,88px)] leading-[1.05] font-normal max-w-[900px] mb-8 max-md:mb-6">
          Unblock your roadmap. Modernize with Altimi.
        </h1>
        <p className="text-[#333333] text-[20px] max-md:text-[17px] leading-[1.6] mb-10 max-md:mb-8 max-w-[640px]">
          Altimi is a tech modernization partner that has helped 300+ teams
          migrate legacy systems, accelerate delivery, and scale capacity —
          with AI-augmented workflows and phased, low-risk execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] px-8 rounded-[6.5px] flex items-center justify-center hover:bg-[#0a1926]/90 transition-colors"
          >
            Reserve your sprint
          </a>
          <a
            href="#cases"
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926] h-[52px] px-8 rounded-[6.5px] flex items-center justify-center border border-[#0a1926]/20 hover:border-[#0a1926]/40 transition-colors"
          >
            See case studies
          </a>
        </div>
      </div>
    </section>
  );
}
