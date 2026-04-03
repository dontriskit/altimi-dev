const cases = [
  {
    company: "Cuculus GmbH",
    country: "Germany",
    industry: "IoT / Utilities",
    challenge:
      "Project delayed, risk of missing regulatory compliance deadline for German smart metering market.",
    scope:
      "Delivery restart, architecture support (Java/Kotlin/Kafka/AWS/Kubernetes), test automation, roadmap management.",
    results: [
      "Regulatory deadline met (November 2024)",
      "300% capacity growth without increasing client headcount",
      "100% roadmap delivery",
      "Platform handling data from millions of smart meters",
    ],
  },
  {
    company: "RB Bank Iceland",
    country: "Iceland",
    industry: "Finance / Banking",
    challenge:
      "Legacy banking systems and mobile applications needed modernization under strict security and compliance requirements.",
    scope:
      "Banking system modernization, mobile app development with encryption, certificate pinning, and secure P2P payments.",
    results: [
      "Improved customer experience quality and security",
      "Full compliance with financial sector requirements",
      "Accelerated digital feature delivery",
    ],
  },
  {
    company: "JetShop",
    country: "Sweden",
    industry: "E-commerce",
    challenge:
      "Scaling platform serving thousands of businesses needed further modernization for performance and capacity.",
    scope:
      "Platform modernization (ASP.NET MVC, Web API, SQL Server, AWS), dedicated development team.",
    results: [
      "Stable platform for 3,000+ businesses",
      "Improved scalability and performance",
      "Faster product improvement delivery",
    ],
  },
  {
    company: "Apport Systems",
    country: "Denmark",
    industry: "Logistics",
    challenge:
      "Warehouse management operations needed better ergonomics and system alignment with real-world processes.",
    scope:
      "New WMS development and modernization of logistics support applications.",
    results: [
      "Improved usability and operational ergonomics",
      "Multi-year stable partnership",
      "Better system-to-process alignment",
    ],
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="bg-[#f5f5f5]">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[100px] max-md:py-[60px]">
        <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/50 mb-4">
          CASE STUDIES
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.15] font-normal text-[#0a1926] mb-4 max-w-[800px]">
          Modernization results from real projects
        </h2>
        <p className="text-[#333333] text-[18px] leading-[1.6] mb-[60px] max-md:mb-[40px] max-w-[700px]">
          These are actual Altimi engagements where legacy systems were
          modernized under time pressure, compliance constraints, and scaling
          demands.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c) => (
            <div
              key={c.company}
              className="bg-white border border-[#0a1926]/10 rounded-xl p-8 max-md:p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[22px] font-medium text-[#0a1926]">
                    {c.company}
                  </h3>
                  <p className="text-[14px] text-[#333333]/70">
                    {c.country} · {c.industry}
                  </p>
                </div>
              </div>

              <p className="text-[15px] text-[#333333] leading-[1.6] mb-3">
                <strong className="text-[#0a1926]">Challenge:</strong>{" "}
                {c.challenge}
              </p>
              <p className="text-[15px] text-[#333333] leading-[1.6] mb-4">
                <strong className="text-[#0a1926]">Scope:</strong> {c.scope}
              </p>

              <div className="border-t border-[#0a1926]/10 pt-4">
                <p className="font-mono text-[12px] uppercase tracking-[0.65px] text-[#0a1926]/50 mb-3">
                  Results
                </p>
                <ul className="space-y-2">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-[14px] text-[#0a1926] leading-[1.5]"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#419AF0]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
