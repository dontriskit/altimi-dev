export function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-[700px] mx-auto px-6 py-[80px] max-md:py-[40px]">
        <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6">
          <h2 className="text-[36px] max-md:text-[28px] leading-[1.15] font-normal text-[#0a1926] mb-4">
            Modernization Discovery Sprint
          </h2>

          <p className="text-[#333333] text-[16px] leading-[1.6] mb-8">
            A 2–4 week accelerated analysis phase combining AI-assisted
            discovery, dependency mapping, and impact analysis — delivering a
            concrete modernization roadmap with a phased execution plan and
            cost estimation.
          </p>

          <div className="border-l-[3px] border-[#D34489] pl-5 mb-10">
            <p className="text-[15px] text-[#0a1926]">
              <strong>Discovery Sprint</strong>, fixed price
            </p>
            <p className="font-mono text-[48px] max-md:text-[36px] font-medium text-[#0a1926] leading-tight">
              &euro;8,500
            </p>
          </div>

          <div className="border-t border-[#0a1926]/10 mb-8" />

          <p className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926] mb-6">
            What you get:
          </p>
          <div className="space-y-5">
            <div>
              <p className="flex items-start gap-3 text-[16px] font-medium text-[#0a1926]">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Architecture assessment &amp; migration feasibility
              </p>
              <p className="text-[#333333] text-[14px] leading-[1.6] ml-8 mt-1">
                Full legacy stack analysis, dependency mapping, upgrade path
                validation — powered by AI-assisted code understanding.
              </p>
            </div>
            <div>
              <p className="flex items-start gap-3 text-[16px] font-medium text-[#0a1926]">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                90-day execution roadmap
              </p>
              <p className="text-[#333333] text-[14px] leading-[1.6] ml-8 mt-1">
                Phased migration plan with quick wins, effort estimates, team
                structure, and AI toolset recommendations.
              </p>
            </div>
            <div>
              <p className="flex items-start gap-3 text-[16px] font-medium text-[#0a1926]">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                Business case with CAPEX/OPEX projections
              </p>
              <p className="text-[#333333] text-[14px] leading-[1.6] ml-8 mt-1">
                Cost estimation, productivity gains (30–60% with AI-augmented
                workflows), and payback timeline for stakeholder approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
