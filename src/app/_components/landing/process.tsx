import { INTAKE_URL } from "@/app/_lib/constants";

export function Process() {
  return (
    <section id="how-it-works" className="bg-[#f5f5f5]">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[100px] max-md:py-[60px]">
        <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.15] font-normal text-center mb-16 text-[#0a1926]">
          How we modernize your system
        </h2>

        {/* Card 1: Pre-work */}
        <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6 mb-6 bg-white">
          <span className="inline-block px-6 py-2.5 rounded-full text-[16px] font-mono font-medium mb-10 bg-[#0a1926] text-white">
            Pre-work
          </span>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-0">
            <div className="pr-8 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <h3 className="text-[22px] font-medium text-[#0a1926] mb-3">
                Your team
              </h3>
              <p className="text-[16px] text-[#333333] leading-[1.7]">
                <a href={INTAKE_URL} className="text-[#0a1926] underline underline-offset-4 hover:text-[#419AF0] transition-colors">Fill out the intake form</a> about your current tech stack, architecture, and modernization priorities. Provision read-only access to code repositories and cloud console.
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-8 max-md:border-l-0 max-md:pl-0">
              <h3 className="text-[22px] font-medium text-[#0a1926] mb-3">
                Our team
              </h3>
              <p className="text-[16px] text-[#333333] leading-[1.7]">
                We review architecture docs, set up AI-assisted code analysis tools (Cursor, Sourcegraph Cody, Semgrep), and identify initial focus areas based on your roadmap priorities.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Week 01-02 — Discovery Sprint */}
        <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6 mb-6 bg-white">
          <span className="inline-block px-6 py-2.5 rounded-full text-[16px] font-mono font-medium mb-10 bg-[#419AF0] text-white">
            Week 01–02 — Discovery Sprint
          </span>

          <div className="grid grid-cols-4 max-md:grid-cols-1 gap-0">
            <div className="pr-6 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Day 1-3</p>
              <h4 className="text-[20px] font-medium text-[#419AF0] mb-1">
                AI-Assisted Code Analysis
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Automated dependency mapping, business logic extraction, and hidden coupling detection across the legacy codebase
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 pr-6 max-md:border-l-0 max-md:pl-0 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Day 4-5</p>
              <h4 className="text-[20px] font-medium text-[#0a1926] mb-1">
                Architecture Assessment
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Stack evaluation, migration feasibility analysis, upgrade path validation for frontend and backend
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 pr-6 max-md:border-l-0 max-md:pl-0 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Day 6-8</p>
              <h4 className="text-[20px] font-medium text-[#0a1926] mb-1">
                Team &amp; Process Review
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                CTO sessions, delivery maturity evaluation, capacity scaling analysis, AI workflow readiness
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 max-md:border-l-0 max-md:pl-0">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Day 9-10</p>
              <h4 className="text-[20px] font-medium text-[#0a1926] mb-1">
                Migration Feasibility
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Phased vs. big-bang comparison, risk scoring, preliminary roadmap draft
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Week 03-04 — Roadmap & Planning */}
        <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6 bg-white">
          <span className="inline-block px-6 py-2.5 rounded-full text-[16px] font-mono font-medium mb-10 bg-[#D34489] text-white">
            Week 03–04 — Roadmap &amp; Delivery Plan
          </span>

          <div className="grid grid-cols-4 max-md:grid-cols-1 gap-0">
            <div className="pr-6 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Week 3</p>
              <h4 className="text-[20px] font-medium text-[#D34489] mb-1">
                Phased Migration Plan
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Frontend-first migration to React/Next.js, incremental backend refactoring, microservices extraction
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 pr-6 max-md:border-l-0 max-md:pl-0 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Week 3</p>
              <h4 className="text-[20px] font-medium text-[#D34489] mb-1">
                AI Toolset &amp; Workflow
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Recommended AI tools for code understanding, refactoring, QA, and documentation — with governance model
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 pr-6 max-md:border-l-0 max-md:pl-0 max-md:pr-0 max-md:pb-6 max-md:border-b max-md:border-[#0a1926]/10 max-md:mb-6">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Week 3-4</p>
              <h4 className="text-[20px] font-medium text-[#0a1926] mb-1">
                90-Day Execution Roadmap
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Quick wins, medium-term refactoring, strategic architecture changes — with effort estimates and ROI
              </p>
            </div>

            <div className="border-l border-[#0a1926]/10 pl-6 max-md:border-l-0 max-md:pl-0">
              <p className="text-[13px] font-medium text-[#0a1926]/60 uppercase tracking-wide mb-2">Week 4</p>
              <h4 className="text-[20px] font-medium text-[#0a1926] mb-1">
                Executive Presentation
              </h4>
              <p className="text-[14px] text-[#333333] leading-[1.7]">
                Business case with CAPEX/OPEX, C-level walkthrough, execution proposal handover
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
