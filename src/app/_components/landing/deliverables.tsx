import Image from "next/image";

const deliverables = [
  {
    label: "Deliverable 1",
    title: "Architecture assessment with migration feasibility",
    description:
      "AI-powered legacy codebase analysis — dependency mapping, tech debt quantification, and a phased vs. big-bang comparison with risk scoring. You get a clear picture of what to modernize first and why.",
    image: "/images/deliverables/d1-architecture-assessment.webp",
    imageAlt: "Dashboard showing legacy codebase dependency graph with RAG-colored migration feasibility scores",
  },
  {
    label: "Deliverable 2",
    title: "90-day execution roadmap with AI toolset",
    description:
      "A concrete phased plan: quick wins in weeks 1–4, medium-term refactoring in weeks 5–8, strategic architecture changes in weeks 9–12. Each phase has effort estimates, team structure, and AI-augmented workflow recommendations delivering 30–60% productivity gains.",
    image: "/images/deliverables/d2-90day-roadmap.webp",
    imageAlt: "Gantt-chart timeline showing 3 phased execution plan over 90 days with team allocation",
  },
  {
    label: "Deliverable 3",
    title: "Business case with CAPEX/OPEX projections",
    description:
      "Cost projections for the full modernization engagement, productivity gains from AI-augmented workflows, and payback timeline. Formatted for stakeholder approval with clear ROI framing — ready for your board or budget committee.",
    image: "/images/deliverables/d3-business-case.webp",
    imageAlt: "Executive dashboard with CAPEX/OPEX projections, ROI metrics, and productivity gains chart",
  },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[100px] max-md:py-[60px]">
        <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/50 mb-4">
          OUR DELIVERABLES
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.15] font-normal text-[#0a1926] mb-4 max-w-[700px]">
          What You Get
        </h2>
        <p className="text-[#333333] text-[18px] leading-[1.6] mb-[100px] max-md:mb-[60px] max-w-[700px]">
          The Discovery Sprint delivers a complete modernization package —
          from legacy analysis to execution-ready roadmap with business case.
        </p>

        <div className="flex flex-col gap-[120px] max-md:gap-[60px]">
          {deliverables.map((d, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={d.label}
                className="grid md:grid-cols-2 gap-16 max-md:gap-10 items-center"
              >
                <div className={isEven ? "md:order-2" : ""}>
                  <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/40 mb-4">
                    {d.label}
                  </p>
                  <h3 className="text-[clamp(24px,3vw,40px)] leading-[1.15] font-normal text-[#0a1926] mb-6">
                    {d.title}
                  </h3>
                  <p className="text-[#333333] text-[18px] leading-[1.6]">
                    {d.description}
                  </p>
                </div>
                <div className={isEven ? "md:order-1" : ""}>
                  <Image
                    src={d.image}
                    alt={d.imageAlt}
                    width={700}
                    height={525}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
