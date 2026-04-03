const areas = [
  {
    number: "01",
    title: "Architecture & Tech Stack",
    items: [
      { bold: "Framework currency", rest: "age, community support, upgrade path, obsolescence risk" },
      { bold: "Monolith decomposition", rest: "coupling analysis, extraction candidates, domain boundaries" },
      { bold: "API design", rest: "REST/GraphQL readiness, versioning, contract quality" },
      { bold: "Database modernization", rest: "schema health, migration complexity, scaling path" },
      { bold: "Dependencies", rest: "health, licensing, security vulnerabilities, upgrade blockers" },
      { bold: "Technical debt", rest: "quantification, prioritization, and remediation cost" },
    ],
  },
  {
    number: "02",
    title: "Frontend Modernization",
    items: [
      { bold: "Legacy framework", rest: "AngularJS, jQuery, Meteor templates — migration complexity" },
      { bold: "Component mapping", rest: "existing UI → modern React/Next.js component plan" },
      { bold: "AI-assisted conversion", rest: "Cursor Composer, Grit.io codemods for bulk migration" },
      { bold: "Design system", rest: "Tailwind CSS adoption, responsive layout, accessibility" },
      { bold: "State management", rest: "migration from legacy patterns to modern approaches" },
      { bold: "Build pipeline", rest: "bundling, code splitting, performance optimization" },
    ],
  },
  {
    number: "03",
    title: "Backend Refactoring",
    items: [
      { bold: "Modular monolith", rest: "staged extraction strategy, domain-driven boundaries" },
      { bold: "API-first layer", rest: "REST/GraphQL communication design between services" },
      { bold: "Business logic", rest: "extraction from spaghetti code, rule preservation" },
      { bold: "Data layer", rest: "ORM migration, query optimization, caching strategy" },
      { bold: "Async patterns", rest: "Meteor 2→3 migration, event-driven architecture" },
      { bold: "Microservices", rest: "gradual extraction of critical business capabilities" },
    ],
  },
  {
    number: "04",
    title: "AI-Augmented Development",
    items: [
      { bold: "Code understanding", rest: "Cursor, Sourcegraph Cody for legacy discovery" },
      { bold: "Refactoring support", rest: "AI-assisted decomposition of large legacy functions" },
      { bold: "Test generation", rest: "CodiumAI for unit/integration baselines, Playwright for E2E" },
      { bold: "Documentation", rest: "Mintlify, Mermaid for living architecture diagrams" },
      { bold: "Security scanning", rest: "Semgrep/CodeQL for outdated and insecure patterns" },
      { bold: "Human-in-the-loop", rest: "governance model ensuring oversight at decision points" },
    ],
  },
  {
    number: "05",
    title: "Infrastructure & CI/CD",
    items: [
      { bold: "Cloud readiness", rest: "AWS/Azure setup, environment isolation, IaC adoption" },
      { bold: "CI/CD maturity", rest: "progressive rollout, canary deployments, feature flags" },
      { bold: "Observability", rest: "logs, metrics, tracing, alerting gaps and remediation" },
      { bold: "Containerization", rest: "Docker/Kubernetes readiness, orchestration strategy" },
      { bold: "Disaster recovery", rest: "backup, rollback, RTO/RPO for modernized platform" },
      { bold: "Scaling path", rest: "horizontal scaling, load balancing, auto-scaling readiness" },
    ],
  },
];

export function ScopeTabs() {
  return (
    <section id="scope" className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[120px] max-md:py-[60px]">
        <span className="inline-block font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926]/70 bg-[#0a1926]/8 px-4 py-1.5 rounded mb-8">
          Scope
        </span>
        <h2 className="text-[clamp(32px,5vw,70px)] leading-[1.15] font-normal max-w-[800px] mb-16 text-[#0a1926]">
          What we assess and modernize.
        </h2>

        <div className="flex flex-col gap-0">
          {areas.map((area) => (
            <div key={area.number} className="border-t border-[#0a1926]/10 py-10">
              <div className="grid grid-cols-[60px_1fr] max-md:grid-cols-1 gap-4 items-start">
                <span className="font-mono text-[20px] font-medium text-[#0a1926]/60 pt-1">
                  {area.number}
                </span>
                <div>
                  <h3 className="text-[28px] font-normal text-[#0a1926] mb-6">{area.title}</h3>
                  <div className="flex flex-col gap-3 max-w-[600px]">
                    {area.items.map((item) => (
                      <div key={item.bold} className="flex items-start gap-3 text-[16px] leading-[1.6]">
                        <span className="w-5 h-5 mt-0.5 shrink-0 rounded border-2 border-[#419AF0] bg-[#419AF0] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        </span>
                        <span>
                          <strong className="text-[#0a1926]">{item.bold}</strong>
                          <span className="text-[#333333]"> — {item.rest}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
