const roles = [
  {
    title: "Head of Engineering & AI Delivery Lead",
    description:
      "Senior technical oversight with 20+ years of experience. Validates key architecture decisions, recommends AI toolset configurations, and ensures alignment with security and maintainability standards. Guides the effective use of AI in delivery while maintaining human oversight at critical decision points.",
  },
  {
    title: "Solution Architect",
    description:
      "Leads the architecture assessment, migration planning, and microservices design. Evaluates legacy system decomposition strategies, defines API-first communication layers, and ensures the modernized architecture supports long-term scalability and product evolution.",
  },
  {
    title: "Frontend Migration Specialist",
    description:
      "Specializes in migrating legacy frontends (AngularJS, jQuery, Meteor templates) to modern React/Next.js with TypeScript and Tailwind CSS. Uses AI-assisted component conversion (Cursor Composer, Grit.io codemods) for efficient, safe migration at scale.",
  },
  {
    title: "Backend / Infrastructure Engineer",
    description:
      "Handles backend refactoring, database modernization, cloud infrastructure assessment, and CI/CD pipeline design. Focuses on progressive rollout strategies, observability improvements, and ensuring the operational backbone supports the modernized platform.",
  },
];

export function TeamComposition() {
  return (
    <section id="team" className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[100px] max-md:py-[60px]">
        <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/50 mb-4">
          THE TEAM
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.15] font-normal text-[#0a1926] mb-4 max-w-[800px]">
          Team Composition
        </h2>
        <p className="text-[#333333] text-[18px] leading-[1.6] mb-[60px] max-md:mb-[40px] max-w-[800px]">
          The Discovery Sprint is delivered by a senior modernization squad
          combining architecture, frontend migration, backend refactoring, and
          AI-augmented delivery expertise — the same team structure used in
          projects like Cuculus, JetShop, and Origo.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {roles.map((role) => (
            <div
              key={role.title}
              className="border border-[#0a1926]/10 rounded-xl p-8 max-md:p-6"
            >
              <h3 className="text-[20px] font-medium text-[#0a1926] mb-4">
                {role.title}
              </h3>
              <p className="text-[#333333] text-[15px] leading-[1.6]">
                {role.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-dashed border-[#0a1926]/20 rounded-xl p-8 max-md:p-6 mb-12">
          <h3 className="text-[18px] font-medium text-[#0a1926] mb-3">
            Execution team (post-Discovery)
          </h3>
          <p className="text-[#333333] text-[15px] leading-[1.6]">
            For the full modernization engagement, the core team scales with
            additional QA automation engineers, security specialists, and
            domain-specific developers. Team size typically ranges from 4–8
            depending on system complexity.
          </p>
        </div>

        <div className="bg-[#f5f5f5] rounded-xl p-8 max-md:p-6">
          <h3 className="text-[18px] font-medium text-[#0a1926] mb-3">
            Why this team setup works
          </h3>
          <p className="text-[#333333] text-[15px] leading-[1.6]">
            This structure combines deep modernization expertise with
            AI-augmented productivity — delivering 30–60% efficiency gains on
            migration and refactoring tasks while maintaining human oversight
            at every architectural decision point. It mirrors the actual team
            composition used in successful modernization projects across
            finance, IoT, and e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
}
