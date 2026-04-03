const deliverables = [
  {
    label: "Deliverable 1",
    title: "Legacy system assessment",
    description:
      "A comprehensive architecture analysis of the current system — dependency mapping, tech debt quantification, and identification of the components that block roadmap delivery. This gives you a clear picture of where modernization effort should focus first.",
    placeholder: "Legacy System Assessment",
    // IMAGE PROMPT: A clean dashboard mockup on a light gradient background showing a legacy codebase dependency graph with color-coded nodes (green=healthy, yellow=aging, red=critical). Altimi logo in corner. Professional, modern SaaS aesthetic.
  },
  {
    label: "Deliverable 2",
    title: "Migration feasibility report",
    description:
      "Stack evaluation, risk analysis, and upgrade path validation for the recommended migration strategy. Includes a comparison of approaches (phased vs. big-bang) with success probability, timeline, and cost implications for each.",
    placeholder: "Migration Feasibility Report",
    // IMAGE PROMPT: A professional report page mockup showing a comparison table with two columns: "Phased Migration (~85% success)" vs "Full Rewrite (~30% success)" with RAG-colored risk indicators. Clean white background with subtle blue accents. Altimi branding.
  },
  {
    label: "Deliverable 3",
    title: "AI-powered code analysis",
    description:
      "Automated discovery of hidden dependencies, business logic extraction from legacy spaghetti code, and detection of outdated patterns that should be abandoned rather than migrated. Powered by Cursor, Sourcegraph Cody, and Semgrep/CodeQL.",
    placeholder: "AI Code Analysis",
    // IMAGE PROMPT: A laptop screen showing an IDE with AI-assisted code analysis — highlighted dependency chains in a large codebase, with a sidebar showing AI suggestions for refactoring. Dark code editor theme, modern workspace background. Altimi logo.
  },
  {
    label: "Deliverable 4",
    title: "Frontend modernization plan",
    description:
      "A concrete migration strategy from legacy frameworks (AngularJS, jQuery, Meteor templates) to modern React/Next.js. Includes component-by-component conversion plan, AI-assisted translation approach using Cursor Composer and Grit.io codemods.",
    placeholder: "Frontend Modernization Plan",
    // IMAGE PROMPT: A split-screen mockup: left side shows old AngularJS code fading out, right side shows modern React/Next.js components appearing. Connected by arrows showing the migration path. Clean gradient background, professional. Altimi branding.
  },
  {
    label: "Deliverable 5",
    title: "Backend refactoring roadmap",
    description:
      "Phased backend extraction strategy — from monolith to modular architecture with staged microservices extraction. Includes API-first communication layer design (REST/GraphQL), database modernization path, and Meteor 3 upgrade feasibility.",
    placeholder: "Backend Refactoring Roadmap",
    // IMAGE PROMPT: An architecture diagram showing a monolith on the left gradually decomposing into clean microservices on the right, with phases labeled (Phase 1, Phase 2, Phase 3). Color-coded boxes, clean lines, professional technical diagram style. Altimi logo.
  },
  {
    label: "Deliverable 6",
    title: "Infrastructure &amp; DevOps review",
    description:
      "CI/CD maturity assessment, cloud readiness evaluation, observability gaps analysis, and infrastructure-as-code recommendations. Identifies what needs to change in the operational backbone to support the modernized platform.",
    placeholder: "Infrastructure Review",
    // IMAGE PROMPT: A cloud infrastructure diagram showing AWS/Azure services connected with CI/CD pipelines, monitoring dashboards, and deployment stages. RAG-colored health indicators on each component. Modern, clean technical illustration. Altimi branding.
  },
  {
    label: "Deliverable 7",
    title: "Team scaling &amp; capacity plan",
    description:
      "How to grow delivery capacity 2–3x without proportional headcount growth. Includes AI-augmented workflow design (30–60% productivity improvement), team structure recommendations, and onboarding acceleration strategy for the new stack.",
    placeholder: "Team Scaling Plan",
    // IMAGE PROMPT: A bar chart showing team capacity growth: "Current" bar vs "With AI-Augmented Workflow" bar showing 2-3x output. Below, a team composition diagram showing 4-5 specialized roles. Clean business presentation style. Altimi branding.
  },
  {
    label: "Deliverable 8",
    title: "90-day execution roadmap",
    description:
      "A concrete phased plan: quick wins in weeks 1–4, medium-term refactoring in weeks 5–8, and strategic architecture changes in weeks 9–12. Each phase has defined scope, effort estimates, dependencies, and measurable outcomes.",
    placeholder: "90-Day Roadmap",
    // IMAGE PROMPT: A Gantt-chart style timeline showing 3 phases over 90 days with milestones, deliverables, and team allocation. Color-coded phases (green=quick wins, blue=refactoring, purple=architecture). Clean, professional project plan aesthetic. Altimi logo.
  },
  {
    label: "Deliverable 9",
    title: "Business case with CAPEX/OPEX projections",
    description:
      "Cost projections for the full modernization engagement, productivity gains from AI-augmented workflows (30–60%), and payback timeline. Formatted for stakeholder approval with clear ROI framing and risk-adjusted scenarios.",
    placeholder: "Business Case",
    // IMAGE PROMPT: A financial dashboard mockup showing CAPEX/OPEX projection charts for 2027-2030, with a ROI timeline graph and key metrics highlighted (productivity gain %, cost reduction %, payback period). Professional executive presentation style. Altimi branding.
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
          The Discovery Sprint delivers a complete modernization package — from
          legacy analysis to execution-ready roadmap. Every deliverable is
          based on real project structures used with clients like Cuculus,
          JetShop, and Origo.
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
                  <div className="bg-[#f5f5f5] rounded-xl aspect-[4/3] flex items-center justify-center text-[#0a1926]/30 text-[18px] font-mono">
                    {d.placeholder}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
