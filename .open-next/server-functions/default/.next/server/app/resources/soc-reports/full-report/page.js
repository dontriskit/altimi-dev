(()=>{var a={};a.id=839,a.ids=[839],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16034:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,88882,23)),Promise.resolve().then(c.t.bind(c,921,23))},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},58623:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>k,metadata:()=>j});var d=c(38617),e=c(4228),f=c(66244),g=c.n(f),h=c(25228);let i=`
<header class="mb-16">
  <div class="text-blue-400 text-sm font-medium mb-3">RESEARCH \xb7 485 COMPANIES \xb7 $291M+ IN TRACKED FUNDING</div>
  <h1 class="text-4xl md:text-5xl font-black text-white leading-tight mb-6">What 500 SOC 2 Reports Reveal About the Technology Foundations of VC-Backed Companies</h1>
  <p class="text-xl text-slate-300 leading-relaxed mb-4"><strong class="text-white">SOC 2 is not a measure of tech maturity.</strong> It's a signal of operational discipline in a narrow domain — controls and security. We analyzed 485 SOC 2 compliance reports from VC-backed companies to understand exactly what these reports reveal about security posture and operational discipline — and where they fall completely silent.</p>
  <p class="text-lg text-slate-400 leading-relaxed mb-6">Companies backed by Andreessen Horowitz, Benchmark, Kleiner Perkins, Lightspeed, and Y Combinator. Total tracked funding: $291M+. The finding that shaped this entire analysis: <em>a proper Tech Due Diligence is still absolutely required.</em> SOC 2 is the starting line, not the finish.</p>

  <div class="flex flex-wrap items-center gap-6 mt-6 mb-8">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">JP</div>
      <div><div class="text-white font-semibold">Jacek Podoba</div><div class="text-slate-400 text-sm">CEO, <a href="https://altimi.com" class="text-blue-400">Altimi.com</a></div></div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">MH</div>
      <div><div class="text-white font-semibold">Maksym Huczyński</div><div class="text-slate-400 text-sm">CTO, <a href="https://whitecontext.com" class="text-blue-400">WhiteContext.com</a></div></div>
    </div>
    <div class="text-slate-500 text-sm">March 2026</div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="bg-slate-800 rounded-xl p-5 border border-slate-700"><div class="text-3xl font-black text-white">485</div><div class="text-slate-400 text-sm">SOC 2 Reports</div></div>
    <div class="bg-slate-800 rounded-xl p-5 border border-slate-700"><div class="text-3xl font-black text-purple-400">$291M+</div><div class="text-slate-400 text-sm">Tracked Funding</div></div>
    <div class="bg-slate-800 rounded-xl p-5 border border-slate-700"><div class="text-3xl font-black text-green-400">99%</div><div class="text-slate-400 text-sm">Have MFA</div></div>
    <div class="bg-slate-800 rounded-xl p-5 border border-slate-700"><div class="text-3xl font-black text-red-400">22%</div><div class="text-slate-400 text-sm">Have Cyber Insurance</div></div>
  </div>
</header>

<h2 id="summary" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6">1. Executive Summary — Signals vs Reality</h2>

<div class="bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-6 my-6">
  <p class="text-lg text-slate-200 font-semibold mb-2">The core finding:</p>
  <p class="text-slate-300">SOC 2 compliance validates how a company <em>operates</em>, not what it has <em>built</em>. It tells you whether they wash their hands — not whether they can cook. For investors, it's a signal of organizational discipline, not engineering capability.</p>
</div>

<p class="text-slate-300 leading-relaxed mb-4">SOC 2 (System and Organization Controls 2) is a compliance framework developed by the AICPA that evaluates how a company manages data security, availability, processing integrity, confidentiality, and privacy. It's become table stakes for B2B SaaS companies selling to enterprises — procurement teams require it, and compliance automation platforms like Vanta, Drata, and Secureframe have made achieving it faster than ever.</p>

<p class="text-slate-300 leading-relaxed mb-4">But speed of compliance is not depth of capability. When a company achieves SOC 2 in 8 weeks using an automation platform and a template-driven auditor, the resulting report tells you about their <em>control design</em> — not their <em>engineering quality</em>. The overlap between SOC 2 and a real Tech Due Diligence is roughly 10%: some security controls, some infrastructure indicators, and some process documentation. The other 90% — codebase quality, SDLC maturity, team capability, scalability, technical debt, AI practices — is completely absent from every report we analyzed.</p>

<p class="text-slate-300 leading-relaxed mb-4">
<div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 my-8">
  <h3 class="text-white font-semibold mb-3">How we did this</h3>
  <p class="text-slate-300 text-sm leading-relaxed mb-3">We built an automated pipeline that processes every page of every PDF through a vision AI model (Moonshot kimi-k2.5, 256K context window). Each report — typically 57-81 pages — was converted to page images, uploaded to Cloudflare R2, and processed through Cloudflare Workflows. The model extracted structured data matching a 22-field schema covering infrastructure, security controls, vendor dependencies, and compliance details.</p>
  <p class="text-slate-300 text-sm leading-relaxed mb-3">Processing 485 reports (approximately 38,000 pages total) completed in under two hours. All extracted data is stored in a Cloudflare D1 database and available through a searchable API. The analysis modules were built in Python using seaborn and matplotlib, with Tailwind CSS for the report framework.</p>
  <p class="text-slate-300 text-sm leading-relaxed"><strong class="text-white">Limitations:</strong> Vision AI extraction is imperfect — small text in diagrams may be missed, and template-heavy reports can inflate feature detection rates. Where possible, we cross-referenced diagram content against system descriptions. Of 485 companies, 121 received complete dimension scoring; the remaining 364 have binary feature extraction only. All statistics in this article are clearly labeled with their sample size.</p>
</div>

<p class="text-slate-300 leading-relaxed mb-4">After processing all 485 reports through a vision AI pipeline (every page of every PDF, including architecture diagrams), five core insights emerged:</p>

<ol class="space-y-4 mb-6">
  <li class="bg-slate-800/50 rounded-lg p-4 border border-slate-700"><span class="text-white font-semibold">1. Funding does not predict operational maturity.</span><span class="text-slate-400"> A company that raised $75M from a16z and Benchmark produces a SOC 2 report indistinguishable from a $500K seed-stage startup. Money buys market access and headcount — not process discipline.</span></li>
  <li class="bg-slate-800/50 rounded-lg p-4 border border-slate-700"><span class="text-white font-semibold">2. Template-driven compliance is the dominant pattern.</span><span class="text-slate-400"> A single auditor (Accorp Partners) appears across the vast majority of reports, using identical boilerplate. 70%+ of control descriptions are word-for-word the same across different companies. The unique signal lives in architecture diagrams and vendor lists — the parts the auditor didn't write.</span></li>
  <li class="bg-slate-800/50 rounded-lg p-4 border border-slate-700"><span class="text-white font-semibold">3. Security hygiene is near-universal — and therefore uninformative.</span><span class="text-slate-400"> 99% have MFA, 99% have RBAC, 97% use VPCs. These are the floor, not the ceiling. A company <em>without</em> MFA would be the signal — its presence tells you nothing.</span></li>
  <li class="bg-slate-800/50 rounded-lg p-4 border border-slate-700"><span class="text-white font-semibold">4. Policy exceeds practice by a dramatic margin.</span><span class="text-slate-400"> 100% have BCDR policies, but only 51% test them annually. 88% have multi-AZ (a cloud provider default), but only 28% chose multi-region (an architectural decision). The gap between what's documented and what's implemented is the real story.</span></li>
  <li class="bg-slate-800/50 rounded-lg p-4 border border-slate-700"><span class="text-white font-semibold">5. SOC 2 is completely silent on what matters most for Tech DD.</span><span class="text-slate-400"> Code quality, SDLC process, team capability, deployment frequency, scalability analysis, technical debt assessment, AI/ML practices — zero signal in any report we analyzed.</span></li>
</ol>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-00.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">SOC 2 covers operational controls (left). It is completely silent on engineering capability (right).</p></figure>

<h2 id="security" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">2. Security Controls — Strong Signals, Limited Depth</h2>

<p class="text-slate-300 leading-relaxed mb-4">Security is where SOC 2 reports provide their most reliable signal. The framework was designed to evaluate security controls, and the data confirms that VC-backed companies overwhelmingly adopt baseline protections. If you're evaluating a funded startup's <em>security stance</em>, the SOC 2 report has genuine value.</p>

<p class="text-slate-300 leading-relaxed mb-4">But "security controls exist" and "security is robust" are different claims. SOC 2 confirms the first. It cannot confirm the second.</p>

<h3 class="text-lg font-semibold text-green-400 mt-6 mb-3">What you can expect in VC-backed companies:</h3>
<p class="text-slate-300 leading-relaxed mb-4">Generally good hygiene. 99.4% enforce MFA on administrative access — this is effectively universal. 99% implement role-based access control. 97% use network isolation via VPCs. 88% deploy firewalls and IDS/IPS systems. 88% perform vulnerability scanning. These numbers are so high that their presence is uninformative — a company <em>without</em> MFA would be the actual signal worth noting.</p>
<p class="text-slate-300 leading-relaxed mb-4">Formalized security policies exist across the board, though they are often template-driven. The same compliance automation platforms that help companies achieve SOC 2 quickly also generate standardized policy documents. The policy exists; whether it reflects the company's actual security posture is a separate question that the audit format doesn't always answer.</p>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-01.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">Security feature adoption rates across 485 companies. Green = near-universal (80%+), Yellow = differentiator (40-80%), Red = rare (<40%).</p></figure>

<h3 class="text-lg font-semibold text-red-400 mt-6 mb-3">What this likely hides:</h3>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Weak multi-tenant isolation in practice.</strong> SOC 2 confirms that per-tenant data segregation exists in 53% of companies. But it doesn't test the implementation — whether database-level row isolation, schema-level separation, or application-level filtering. For a SaaS company where data leakage between tenants is existential, the SOC 2 assurance is paper-thin.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Over-permissioning between reviews.</strong> Only 43% conduct quarterly access reviews. For the remaining 57%, user permissions set during onboarding may persist unchanged for months or years — through role changes, project rotations, and scope creep. SOC 2 confirms the review process exists; it doesn't confirm that permissions are appropriate at any given moment.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Gaps between policy and real enforcement.</strong> WAF adoption sits at just 44% — meaning 56% of internet-facing SaaS applications lack a web application firewall. For API-first products handling sensitive data, this is a material gap that the SOC 2 report doesn't flag as a deficiency because WAF isn't a required control.</p>

<div class="bg-red-950/20 border-l-4 border-red-500 rounded-r-xl p-5 my-6">
  <p class="text-slate-200"><strong>The Cyber Insurance Paradox:</strong> 78% of these companies pass SOC 2 without purchasing cybersecurity insurance. This is revealing: if management genuinely believed their security controls were sufficient to prevent breach, cyber insurance would be cheap and an obvious purchase. Its widespread absence suggests that passing SOC 2 is not the same as feeling secure — or that the insurance market sees risks that the audit doesn't measure.</p>
</div>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-02.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">78% of SOC 2-compliant companies do not insure against the risks SOC 2 is supposed to address.</p></figure>

<h2 id="availability" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">3. Availability & Reliability — Process Over Engineering</h2>

<p class="text-slate-300 leading-relaxed mb-4">SOC 2 reports provide a window into how companies think about uptime, backup, and disaster recovery. The Availability trust criteria — when included in scope — evaluates whether the company has procedures to maintain system availability commitments. What we found is a consistent pattern: <strong class="text-white">processes are defined on paper, but resilience engineering is thin.</strong></p>

<h3 class="text-lg font-semibold text-green-400 mt-6 mb-3">What to expect:</h3>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Backups exist.</strong> 54% perform daily backups; virtually all have some backup policy. This is table stakes for any SaaS company. <strong class="text-white">Multi-AZ deployment is the default.</strong> 88% deploy across multiple availability zones — but this is a cloud provider default in AWS, GCP, and Azure, not an architectural choice. Selecting "multi-AZ" during RDS setup takes one click. <strong class="text-white">Incident response is defined.</strong> 100% have a BCDR (Business Continuity and Disaster Recovery) policy documented. Many include communication plans, role assignments, and escalation procedures.</p>

<h3 class="text-lg font-semibold text-red-400 mt-6 mb-3">What this likely hides:</h3>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Fragile architecture under scale.</strong> The 60-point gap between multi-AZ (88%) and multi-region (28%) is the clearest illustration of compliance vs. maturity. Multi-AZ is what the cloud gives you automatically. Multi-region is what you build intentionally — it requires cross-region data replication, routing decisions, and tested failover procedures. SOC 2 counts both as "available" with no distinction.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Manual recovery processes.</strong> Approximately 85% of companies don't state specific RTO (Recovery Time Objective) or RPO (Recovery Point Objective) targets anywhere in their SOC 2 report. They have a disaster recovery plan but no measurable commitment for how quickly they can recover or how much data they can afford to lose. This is the difference between "we have a plan" and "we've committed to recovering in 4 hours with less than 1 hour of data loss."</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Limited real resilience testing.</strong> Only 51% test their DR plans annually. The other 49% have a disaster recovery plan they've never rehearsed — for a disaster they can't recover from quickly, with no insurance to cover the loss.</p>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-03.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">The compliance-to-maturity drop-off: from 100% policy to 22% insurance.</p></figure>

<div class="bg-blue-950/30 border-l-4 border-blue-500 rounded-r-xl p-5 my-6">
  <p class="text-slate-200"><strong>Key insight:</strong> When an investor reads "multi-AZ deployment" in a SOC 2 report, they should mentally translate that to "used the cloud provider's default settings." When they read "multi-region deployment," they should understand that as "made a deliberate, expensive architectural decision to build geographic redundancy." The SOC 2 report doesn't distinguish between a $20/month checkbox and a $20,000/month infrastructure decision.</p>
</div>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-04.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">The resilience gap from BCDR policy (100%) to actual multi-region deployment (28%).</p></figure>

<h2 id="infrastructure" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">4. Infrastructure & Operations — Indirect Signals Only</h2>

<p class="text-slate-300 leading-relaxed mb-4">This is where SOC 2 reports begin to fail as a source of technical insight. Infrastructure is mentioned — cloud providers are named, network diagrams are included, change management processes are described — but the information is <strong class="text-white">never sufficient for a genuine technical assessment.</strong> The signal is indirect, heavily filtered through compliance boilerplate, and often misleading in its apparent specificity.</p>

<h3 class="text-lg font-semibold text-green-400 mt-6 mb-3">What you can infer:</h3>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Some CI/CD pipeline exists.</strong> 69% of companies have branch protection configured — meaning code changes require approval before merging to production. This implies a merge-based deployment model and at least rudimentary code review. But SOC 2 doesn't tell you which CI/CD tool, how fast deployments happen, what percentage of deployments succeed, or how rollbacks work.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Production/non-production separation is present.</strong> Most companies describe separate environments for development, staging, and production. SOC 2 auditors verify that these environments exist and that production deployments follow a defined process. But they don't assess whether the environments are equivalent (many staging environments bear no resemblance to production).</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Architecture diagrams are the one genuine signal.</strong> In our analysis, the network/architecture diagrams included in SOC 2 reports (typically pages 18-19) are the most valuable technical artifacts. They name specific services, show data flows, reveal vendor dependencies, and — critically — are the one part of the report that the compliance template can't auto-generate. When a diagram shows AWS ECS Fargate clusters with Aurora Serverless, ElastiCache Redis, and Lambda functions in VPC, that's real architectural signal. When it's a sample placeholder that was never replaced, that's signal too — just a different kind.</p>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-05.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">AWS dominates at 59%, creating portfolio-level concentration risk.</p></figure>

<h3 class="text-lg font-semibold text-red-400 mt-6 mb-3">What remains completely unclear:</h3>

<div class="grid md:grid-cols-2 gap-4 my-6">
  <div class="bg-slate-800 rounded-xl p-5 border border-red-800/30"><h4 class="text-red-400 font-semibold mb-2">Scalability</h4><p class="text-slate-400 text-sm">Can this architecture handle 10x traffic? SOC 2 doesn't test load, measure latency, or evaluate auto-scaling. A single EC2 instance and a fully orchestrated Kubernetes cluster both pass.</p></div>
  <div class="bg-slate-800 rounded-xl p-5 border border-red-800/30"><h4 class="text-red-400 font-semibold mb-2">Cost Efficiency</h4><p class="text-slate-400 text-sm">Is infrastructure spending appropriate? Is the company over-provisioned or running on fumes? No financial data exists in SOC 2.</p></div>
  <div class="bg-slate-800 rounded-xl p-5 border border-red-800/30"><h4 class="text-red-400 font-semibold mb-2">Technical Debt</h4><p class="text-slate-400 text-sm">How much legacy code, architectural shortcuts, or unmaintained dependencies exist? SOC 2 evaluates operational controls, not codebase health.</p></div>
  <div class="bg-slate-800 rounded-xl p-5 border border-red-800/30"><h4 class="text-red-400 font-semibold mb-2">Cloud Architecture Quality</h4><p class="text-slate-400 text-sm">Is this a well-designed system or spaghetti? The compliance report can't distinguish a monolith on a single VM from a well-orchestrated microservices platform. Both can pass SOC 2 with identical control descriptions.</p></div>
</div>

<p class="text-slate-300 leading-relaxed mb-4">
<h3 class="text-lg font-semibold text-white mt-8 mb-3">What We Learned from the Architecture Diagrams</h3>
<p class="text-slate-300 leading-relaxed mb-4">The architecture diagrams embedded in SOC 2 reports (typically pages 18-19) were the most genuinely interesting technical artifacts in this entire analysis. Unlike the boilerplate control descriptions, these diagrams are company-specific — they show actual services, data flows, and vendor integrations. Some of our findings from comparing diagrams across the portfolio:</p>
<ul class="text-slate-300 space-y-2 ml-4 mb-4">
  <li>• <strong class="text-white">The "standard AI startup" stack is visible:</strong> Vercel or AWS for compute, Supabase or RDS for database, OpenAI for LLM, Clerk or STYTCH for auth, Stripe for payments, Sentry for monitoring. Companies with this full stack named in their diagram tend to have more deliberate architecture.</li>
  <li>• <strong class="text-white">~15% of diagrams are sample placeholders</strong> that were never replaced with the company's actual architecture. The auditor accepted a template diagram. This tells you more about audit rigor than about the company's technology.</li>
  <li>• <strong class="text-white">Diagrams reveal vendor dependencies invisible in the text.</strong> Several companies have 8-12 named integrations visible in their diagram (OpenAI, Anthropic, Twilio, ElevenLabs) that appear nowhere in the control descriptions. The diagram is the most honest page in the report.</li>
  <li>• <strong class="text-white">Self-hosted LLM infrastructure stands out.</strong> A small number of companies run their own AI models (Llama on GPU clusters via Modal or Baseten) rather than calling third-party APIs. These architectures are significantly more complex — and more interesting from a technical IP perspective — than standard API-calling patterns.</li>
</ul>
<p class="text-slate-300 leading-relaxed mb-4">We generated 479 D2 infrastructure diagrams from the extracted data, creating a searchable gallery of architecture patterns across the portfolio. This gallery — available alongside this article — may be more valuable for technical due diligence than the SOC 2 reports themselves, because it normalizes the architectural signal into a comparable format.</p>
<p class="text-slate-300 leading-relaxed mb-4">The template boilerplate problem deserves emphasis: when 70%+ of control descriptions across different companies use the exact same language — "system firewalls are configured on the application gateway and production network to limit unnecessary ports, protocols and services" — the control description becomes noise. The auditor is confirming a template was filled in, not that the firewall configuration is appropriate, tested, or maintained.</p>

<h2 id="process" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">5. Process & Organizational Discipline — The Strongest Signal</h2>

<p class="text-slate-300 leading-relaxed mb-4">If there's one domain where SOC 2 genuinely earns its keep, it's here. The framework excels at evaluating whether a company has <strong class="text-white">repeatable, documented processes</strong> for managing access, handling incidents, governing changes, and overseeing vendors. This is valuable signal — not about technology, but about organizational maturity.</p>

<h3 class="text-lg font-semibold text-green-400 mt-6 mb-3">What to expect:</h3>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Defined ownership structures.</strong> Companies that achieve SOC 2 have org charts with named roles (CTO, CISO or equivalent), governance committees, and documented responsibility assignments. This doesn't mean the structure is effective, but its existence is a prerequisite for organizational scaling.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Repeatable processes.</strong> Change management, access provisioning, incident response, and vendor evaluation all follow documented procedures. The audit verifies that these procedures exist and — in Type 2 reports — that they operated consistently over the audit period.</p>
<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">Audit trails.</strong> Logging of administrative activities, access changes, and security events is confirmed. This is foundational for accountability and incident investigation.</p>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-06.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">Type 2 reports provide operational evidence over time; Type 1 evaluates design only.</p></figure>

<h3 class="text-lg font-semibold text-blue-400 mt-6 mb-3">What this suggests about the company:</h3>
<p class="text-slate-300 leading-relaxed mb-4">A company with a SOC 2 Type 2 report, quarterly access reviews, annual penetration testing, and a vendor management program has demonstrated something real: <strong class="text-white">it can execute structured processes consistently over time.</strong> That's the organizational capability that SOC 2 validates. It doesn't tell you the technology is good — but it tells you the <em>organization</em> can operate with discipline. For an investor, this is the signal that the company has moved past the chaotic startup phase into something more repeatable.</p>

<div class="bg-green-950/20 border-l-4 border-green-500 rounded-r-xl p-5 my-6">
  <p class="text-slate-200"><strong>The honest statement:</strong> SOC 2 compliance is best understood as enterprise-readiness certification. It tells prospective customers: "We can operate your data responsibly, and we can prove it to an auditor." For investors, the corresponding signal is: "This company can execute structured processes" — which is a necessary but not sufficient condition for building great technology.</p>
</div>

<p class="text-slate-300 leading-relaxed mb-4"><strong class="text-white">What SOC 2 does NOT tell you about process:</strong> Execution speed. Engineering productivity. Sprint velocity. Feature delivery cadence. Bug resolution time. Code review turnaround. Deployment frequency. These are the SDLC (Software Development Lifecycle) metrics that actually predict engineering effectiveness — and they're entirely absent from every SOC 2 report we analyzed. A company can have perfect change management processes that take 3 weeks to ship a one-line fix. SOC 2 would report this as "controls operating effectively."</p>

<h2 id="gap" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">6. The Maturity Gap — Where SOC 2 Misleads</h2>

<p class="text-slate-300 leading-relaxed mb-4">SOC 2 can create false confidence when investors — or procurement teams — treat it as a proxy for overall technical quality. Three archetypes emerge from our analysis of 485 reports, and understanding them is essential for calibrating how much weight to give a SOC 2 opinion.</p>

<div class="space-y-4 my-6">
  <div class="bg-red-950/20 border border-red-800/30 rounded-xl p-5">
    <h4 class="text-red-400 font-semibold mb-2">"Compliant but Fragile" (~15% of portfolio)</h4>
    <p class="text-slate-300 text-sm leading-relaxed">Clean SOC 2 opinion, zero exceptions — but the report contains template placeholders, sample diagrams that were never replaced, "Your Name Here" in the signing authority, and highlighted template instructions visible in the published PDF. The company used a compliance automation tool to generate a SOC 2 report in weeks, and the auditor confirmed the controls are "suitably designed." Whether those controls exist beyond the documentation is unknowable from the report alone. These companies passed the audit because the template was filled in correctly — not because the controls were validated in depth.</p>
  </div>
  <div class="bg-amber-950/20 border border-amber-800/30 rounded-xl p-5">
    <h4 class="text-amber-400 font-semibold mb-2">"Process-Heavy but Slow" (~70% of portfolio)</h4>
    <p class="text-slate-300 text-sm leading-relaxed">The largest archetype. These companies have real processes — change management, access reviews, incident response — but the 3-month audit window, generic tool descriptions, and identical boilerplate control language suggest a young compliance program. The processes exist to pass the audit; whether they accelerate or impede engineering velocity is unclear. A Risk and Governance Executive Committee meeting semiannually sounds impressive for a 5-person startup, but may represent overhead rather than value. SOC 2 cannot distinguish efficient discipline from bureaucratic compliance theater.</p>
  </div>
  <div class="bg-blue-950/20 border border-blue-800/30 rounded-xl p-5">
    <h4 class="text-blue-400 font-semibold mb-2">"Genuinely Mature" (~15% of portfolio)</h4>
    <p class="text-slate-300 text-sm leading-relaxed">Detailed architecture diagrams naming specific services (ECS Fargate, Aurora Serverless v2, CloudFront CDN with WAF rules). Five or more vendors disclosed transparently. Multi-region deployment with tested failover. Named monitoring tools (Datadog, Sentry, Grafana). A 6-12 month audit window. CDK v2 TypeScript IaC mentioned by name. These reports read like technical documentation — the compliance template was a vehicle for genuine disclosure, not a substitute for it. These are the companies where SOC 2 provides real signal, precisely because the engineering team used it as an opportunity to document what they actually built.</p>
  </div>
</div>

<h3 class="text-lg font-semibold text-white mt-8 mb-3">Funding Does Not Predict Operational Maturity</h3>
<p class="text-slate-300 leading-relaxed mb-4">We tracked funding data across 27 companies in our top-scoring cohort. The finding is clear: there is no meaningful correlation between capital raised and SOC 2 quality. 11x AI ($75M+, $350M valuation, backed by a16z and Benchmark) produces a report in the same tier as companies that raised $500K from Y Combinator. Meanwhile, Scribeberry — a bootstrapped Canadian healthtech with no disclosed venture funding — produces the most architecturally detailed report in the entire dataset.</p>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-07.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">Funding vs operational discipline as measured by SOC 2. No correlation.</p></figure>

<div class="bg-slate-800 rounded-xl p-6 border border-slate-700 my-6">
  <p class="text-slate-200 text-lg"><strong>The key statement:</strong> <em>SOC 2 validates how you operate, not what you've built.</em> A company can have impeccable access controls, tested DR plans, and quarterly security reviews — and still have a fragile monolith running on a single VM with no automated tests, no staging environment that mirrors production, and technical debt accumulated over years. The compliance report would give them a clean opinion in both cases.</p>
</div>

<figure class="my-8"><img style="max-width:100%;height:auto;border-radius:12px;margin:24px 0" src="/reports/soc-2/charts/chart-08.png" alt="" class="rounded-xl w-full shadow-lg shadow-black/30"><p class="text-sm text-slate-400 mt-2 text-center italic">Most common red flags in SOC 2 reports — many are about disclosure gaps, not control failures.</p></figure>

<h2 id="investors" class="text-2xl font-bold text-white border-b border-slate-700 pb-3 mb-6 mt-16">7. What Investors Should Infer — and What They Should Ignore</h2>

<p class="text-slate-300 leading-relaxed mb-4">The purpose of this analysis is not to diminish SOC 2 — it serves its intended purpose well. The purpose is to calibrate what investors can and cannot learn from it, so they invest their diligence time where it matters most.</p>

<div class="grid md:grid-cols-3 gap-4 my-6">
  <div class="bg-green-950/20 border border-green-800 rounded-xl p-5">
    <h4 class="text-green-400 font-semibold text-sm mb-3 uppercase">✓ Signals to Trust</h4>
    <ul class="text-slate-300 text-sm space-y-2">
      <li>• <strong>Basic security hygiene</strong> — MFA, RBAC, encryption at rest/transit are confirmed</li>
      <li>• <strong>Organizational discipline</strong> — defined processes, audit trails, role-based governance</li>
      <li>• <strong>Enterprise-readiness</strong> — the company can produce compliance artifacts for procurement</li>
      <li>• <strong>Vendor management maturity</strong> — if vendors are named and evaluated, not just listed</li>
      <li>• <strong>Past the chaos phase</strong> — formalized operations suggest scaling readiness</li>
    </ul>
  </div>
  <div class="bg-red-950/20 border border-red-800 rounded-xl p-5">
    <h4 class="text-red-400 font-semibold text-sm mb-3 uppercase">✗ Signals to Discount</h4>
    <ul class="text-slate-300 text-sm space-y-2">
      <li>• <strong>Architecture quality</strong> — SOC 2 can't distinguish good design from bad</li>
      <li>• <strong>Scalability</strong> — no load testing, no performance data</li>
      <li>• <strong>Codebase health</strong> — test coverage, tech debt, code quality unmeasured</li>
      <li>• <strong>Engineering velocity</strong> — deployment frequency, lead time invisible</li>
      <li>• <strong>AI/ML practices</strong> — model governance, data pipelines, evaluation frameworks absent</li>
      <li>• <strong>Product-market fit</strong> — revenue, retention, user growth not in scope</li>
    </ul>
  </div>
  <div class="bg-purple-950/20 border border-purple-800 rounded-xl p-5">
    <h4 class="text-purple-400 font-semibold text-sm mb-3 uppercase">→ Where Real Tech DD Goes Deeper</h4>
    <ul class="text-slate-300 text-sm space-y-2">
      <li>• <strong>System design review</strong> — architecture walkthrough with the CTO</li>
      <li>• <strong>Data model assessment</strong> — schema complexity, migration strategy</li>
      <li>• <strong>Team capability</strong> — hiring quality, SDLC maturity, collaboration patterns</li>
      <li>• <strong>Delivery track record</strong> — deploy frequency, DORA metrics, incident history</li>
      <li>• <strong>AI practices audit</strong> — model evaluation, prompt engineering, data governance</li>
      <li>• <strong>Cost structure analysis</strong> — infrastructure spend, unit economics</li>
    </ul>
  </div>
</div>

<h3 class="text-lg font-semibold text-white mt-8 mb-3">10 Questions for Real Tech DD (Beyond SOC 2)</h3>
<p class="text-slate-300 leading-relaxed mb-4">If SOC 2 gives you the compliance picture, these questions give you the engineering picture. Every one of them addresses a dimension that SOC 2 is structurally incapable of measuring:</p>

<div class="bg-slate-800 rounded-xl p-6 border border-slate-700 my-6">
  <ol class="text-slate-300 space-y-3 list-decimal ml-4">
    <li><strong class="text-white">Walk me through your deployment pipeline.</strong> <span class="text-slate-400">How code goes from commit to production — tools, steps, time, failure rate. This reveals CI/CD maturity.</span></li>
    <li><strong class="text-white">Show me your monitoring dashboard.</strong> <span class="text-slate-400">What metrics do you watch? How quickly do you know when something breaks? This reveals operational awareness.</span></li>
    <li><strong class="text-white">What's your test coverage and testing strategy?</strong> <span class="text-slate-400">Unit, integration, E2E — what exists and what's missing. This reveals code quality culture.</span></li>
    <li><strong class="text-white">Describe your last production incident.</strong> <span class="text-slate-400">Timeline, detection, resolution, post-mortem, what changed. This reveals incident maturity better than any policy document.</span></li>
    <li><strong class="text-white">What happens at 10x your current load?</strong> <span class="text-slate-400">Where does the architecture break? What's the plan? This reveals scalability awareness and honesty.</span></li>
    <li><strong class="text-white">Show me the real architecture — not the SOC 2 version.</strong> <span class="text-slate-400">Services, databases, queues, external APIs, data flows. SOC 2 diagrams are often simplified or outdated.</span></li>
    <li><strong class="text-white">How does your team do code review?</strong> <span class="text-slate-400">Process, turnaround time, who reviews what, quality bar. This reveals engineering culture.</span></li>
    <li><strong class="text-white">What's your relationship with AI in development?</strong> <span class="text-slate-400">Code generation, testing, operations — how and where. This reveals adaptability and modernization pace.</span></li>
    <li><strong class="text-white">What would you rebuild if you started today?</strong> <span class="text-slate-400">This reveals tech debt awareness and architectural honesty — the willingness to admit what isn't working.</span></li>
    <li><strong class="text-white">What's your biggest technical risk right now?</strong> <span class="text-slate-400">The answer reveals self-awareness. A CTO who says "nothing" is either dishonest or unaware — both are concerning.</span></li>
  </ol>
</div>

<div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 my-6">
  <p class="text-slate-300 leading-relaxed"><strong class="text-white">Bottom line:</strong> SOC 2 compliance is a necessary signal of operational hygiene, not a sufficient signal of tech quality. It tells you a company can operate with discipline in the narrow domain of security controls and access management. It does not tell you whether what they built is scalable, maintainable, or any good. For that, you need a proper Technical Due Diligence — one that evaluates system design, team capability, delivery track record, and engineering culture. <em>SOC 2 is the starting line, not the finish.</em></p>
</div>

<div class="grid md:grid-cols-3 gap-4 my-12">
  <a href="modules/" class="block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"><div class="text-2xl mb-2">📊</div><h3 class="text-white font-bold mb-1">Deep Dive Modules</h3><p class="text-slate-400 text-sm">13 detailed analysis modules — security, vendors, BCDR, AI stack, funding signals.</p></a>
  <a href="diagrams/" class="block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"><div class="text-2xl mb-2">🏗️</div><h3 class="text-white font-bold mb-1">Architecture Gallery</h3><p class="text-slate-400 text-sm">479 infrastructure diagrams — the one genuine technical signal in SOC 2 reports.</p></a>
  <a href="https://delve-vision-extract.whitecontext.workers.dev/" class="block bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"><div class="text-2xl mb-2">🔍</div><h3 class="text-white font-bold mb-1">Searchable Database</h3><p class="text-slate-400 text-sm">Search 485 companies by technology, vendor, cloud provider.</p></a>
</div>

<div class="bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl p-10 my-12 border border-blue-800/50 text-center">
  <h2 class="text-3xl font-black text-white mb-4">SOC 2 is the Starting Line.<br>Real Tech DD is the Race.</h2>
  <p class="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">This analysis shows what compliance reports can tell you about security and operational discipline. For the full picture — system design, team capability, delivery track record, AI practices — you need a proper technical due diligence.</p>
  <div class="flex flex-col sm:flex-row gap-4 justify-center">
    <a href="mailto:hello@altimi.com" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg transition">Talk to Altimi →</a>
    <a href="https://whitecontext.com" class="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 py-3 rounded-lg transition">Talk to WhiteContext →</a>
  </div>
</div>
`,j={title:"What 500 SOC 2 Reports Reveal — Altimi Tech Due Diligence",description:"An analysis of 485 funded startups: what SOC 2 compliance tells investors about security and discipline — and what it doesn't."};function k(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("nav",{className:"sticky top-0 z-[999] bg-[#0a1926]",children:(0,d.jsxs)("div",{className:"max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-md:px-6",children:[(0,d.jsx)(g(),{href:"/",className:"shrink-0",children:(0,d.jsx)(e.default,{src:"/images/logo-altimi-white.png",alt:"Altimi",width:112,height:28,className:"h-7 w-auto"})}),(0,d.jsx)(g(),{href:"/resources/soc-reports",className:"font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors",children:"← Back to resources"})]})}),(0,d.jsx)("main",{className:"bg-[#0f172a]",children:(0,d.jsx)("div",{className:"max-w-4xl mx-auto px-6 pt-12 pb-20",children:(0,d.jsx)("article",{className:"report-content",dangerouslySetInnerHTML:{__html:i}})})}),(0,d.jsx)(h.w,{}),(0,d.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        .report-content {
          color: #cbd5e1;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          line-height: 1.7;
        }
        .report-content h1 { color: white; font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
        .report-content h2 { color: white; font-size: 24px; font-weight: 700; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin: 48px 0 24px; }
        .report-content h3 { color: white; font-size: 18px; font-weight: 600; margin: 32px 0 12px; }
        .report-content p { margin-bottom: 16px; }
        .report-content strong { color: white; }
        .report-content em { font-style: italic; }
        .report-content a { color: #60a5fa; text-decoration: underline; text-underline-offset: 4px; }
        .report-content a:hover { color: #93c5fd; }
        .report-content ol, .report-content ul { margin: 16px 0; padding-left: 0; }
        .report-content li { background: rgba(30,41,59,0.5); border: 1px solid rgba(51,65,85,0.5); border-radius: 8px; padding: 16px; margin-bottom: 8px; list-style: none; }
        .report-content img { max-width: 100%; height: auto; border-radius: 12px; margin: 24px 0; }
        .report-content .bg-slate-800 { background: rgba(30,41,59,0.8); }
        .report-content .bg-slate-800\\/50 { background: rgba(30,41,59,0.5); }
        .report-content .rounded-xl { border-radius: 12px; }
        .report-content .rounded-lg { border-radius: 8px; }
        .report-content .border { border-width: 1px; }
        .report-content .border-slate-700 { border-color: rgba(51,65,85,0.5); }
        .report-content .p-4 { padding: 16px; }
        .report-content .p-5 { padding: 20px; }
        .report-content .p-6 { padding: 24px; }
        .report-content .mb-2 { margin-bottom: 8px; }
        .report-content .mb-3 { margin-bottom: 12px; }
        .report-content .mb-4 { margin-bottom: 16px; }
        .report-content .mb-6 { margin-bottom: 24px; }
        .report-content .mt-6 { margin-top: 24px; }
        .report-content .my-6 { margin: 24px 0; }
        .report-content .my-8 { margin: 32px 0; }
        .report-content .text-white { color: white; }
        .report-content .text-slate-300 { color: #cbd5e1; }
        .report-content .text-slate-400 { color: #94a3b8; }
        .report-content .text-slate-500 { color: #64748b; }
        .report-content .text-sm { font-size: 14px; }
        .report-content .text-lg { font-size: 18px; }
        .report-content .text-xl { font-size: 20px; }
        .report-content .text-2xl { font-size: 24px; }
        .report-content .text-3xl { font-size: 30px; }
        .report-content .font-medium { font-weight: 500; }
        .report-content .font-semibold { font-weight: 600; }
        .report-content .font-bold { font-weight: 700; }
        .report-content .font-black { font-weight: 900; }
        .report-content .text-blue-400 { color: #60a5fa; }
        .report-content .text-purple-400 { color: #c084fc; }
        .report-content .text-green-400 { color: #4ade80; }
        .report-content .text-red-400 { color: #f87171; }
        .report-content .text-amber-400 { color: #fbbf24; }
        .report-content .text-amber-500 { color: #f59e0b; }
        .report-content .text-red-500 { color: #ef4444; }
        .report-content .border-amber-500 { border-color: #f59e0b; }
        .report-content .border-emerald-500 { border-color: #10b981; }
        .report-content .border-red-500 { border-color: #ef4444; }
        .report-content .border-blue-500 { border-color: #3b82f6; }
        .report-content .border-purple-500 { border-color: #a855f7; }
        .report-content .border-l-4 { border-left-width: 4px; }
        .report-content .rounded-r-xl { border-radius: 0 12px 12px 0; }
        .report-content .bg-amber-950\\/20 { background: rgba(120,53,15,0.2); }
        .report-content .bg-emerald-950\\/20 { background: rgba(6,78,59,0.2); }
        .report-content .bg-red-950\\/30 { background: rgba(69,10,10,0.3); }
        .report-content .bg-red-950\\/20 { background: rgba(69,10,10,0.2); }
        .report-content .bg-blue-950\\/20 { background: rgba(23,37,84,0.2); }
        .report-content .bg-purple-950\\/20 { background: rgba(59,7,100,0.2); }
        .report-content .grid { display: grid; gap: 16px; }
        .report-content .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .report-content .gap-4 { gap: 16px; }
        .report-content .gap-3 { gap: 12px; }
        .report-content .gap-6 { gap: 24px; }
        .report-content .space-y-4 > * + * { margin-top: 16px; }
        .report-content .leading-relaxed { line-height: 1.65; }
        .report-content .leading-tight { line-height: 1.25; }
        .report-content .flex { display: flex; }
        .report-content .items-center { align-items: center; }
        .report-content .flex-wrap { flex-wrap: wrap; }
        .report-content .w-10 { width: 40px; }
        .report-content .h-10 { height: 40px; }
        .report-content .rounded-full { border-radius: 9999px; }
        .report-content .bg-blue-600 { background: #2563eb; }
        .report-content .bg-purple-600 { background: #9333ea; }
        @media (min-width: 768px) {
          .report-content .md\\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
          .report-content .md\\:text-5xl { font-size: 48px; }
        }
      `}})]})}},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66244:(a,b,c)=>{let{createProxy:d}=c(4960);a.exports=d("/home/mhm/Documents/altimi-tech-dd/altimi-dev-com-site/node_modules/.pnpm/next@15.5.14_@opentelemetry+api@1.9.1_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/client/app-dir/link.js")},68068:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>D.a,__next_app__:()=>J,handler:()=>L,pages:()=>I,routeModule:()=>K,tree:()=>H});var d=c(93859),e=c(53932),f=c(77032),g=c(33581),h=c(60971),i=c(59915),j=c(5794),k=c(39303),l=c(62943),m=c(85621),n=c(59969),o=c(84086),p=c(18840),q=c(6049),r=c(261),s=c(93096),t=c(24717),u=c(26713),v=c(27665),w=c(64026),x=c(67454),y=c(5283),z=c(23453),A=c(4607),B=c(86439),C=c(71361),D=c.n(C),E=c(45657),F=c(53392),G={};for(let a in E)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(G[a]=()=>E[a]);c.d(b,G);let H={children:["",{children:["resources",{children:["soc-reports",{children:["full-report",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,58623)),"/home/mhm/Documents/altimi-tech-dd/altimi-dev-com-site/src/app/resources/soc-reports/full-report/page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,87560)),"/home/mhm/Documents/altimi-tech-dd/altimi-dev-com-site/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,71361,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,41637,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,77096,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,40987,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,I=["/home/mhm/Documents/altimi-tech-dd/altimi-dev-com-site/src/app/resources/soc-reports/full-report/page.tsx"],J={require:c,loadChunk:()=>Promise.resolve()},K=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/resources/soc-reports/full-report/page",pathname:"/resources/soc-reports/full-report",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:H},distDir:".next",relativeProjectDir:""});async function L(a,b,d){var C;let G="/resources/soc-reports/full-report/page";"/index"===G&&(G="/");let M=(0,h.getRequestMeta)(a,"postponed"),N=(0,h.getRequestMeta)(a,"minimalMode"),O=await K.prepare(a,b,{srcPage:G,multiZoneDraftMode:!1});if(!O)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:P,query:Q,params:R,parsedUrl:S,pageIsDynamic:T,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,serverActionsManifest:X,clientReferenceManifest:Y,subresourceIntegrityManifest:Z,prerenderManifest:$,isDraftMode:_,resolvedPathname:aa,revalidateOnlyGenerated:ab,routerServerContext:ac,nextConfig:ad,interceptionRoutePatterns:ae}=O,af=S.pathname||"/",ag=(0,r.normalizeAppPath)(G),{isOnDemandRevalidate:ah}=O,ai=K.match(af,$),aj=!!$.routes[aa],ak=!!(ai||aj||$.routes[ag]),al=a.headers["user-agent"]||"",am=(0,u.getBotType)(al),an=(0,p.isHtmlBotRequest)(a),ao=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[t.NEXT_ROUTER_PREFETCH_HEADER],ap=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[t.RSC_HEADER],aq=(0,s.getIsPossibleServerAction)(a),ar=(0,m.checkIsAppPPREnabled)(ad.experimental.ppr)&&(null==(C=$.routes[ag]??$.dynamicRoutes[ag])?void 0:C.renderingMode)==="PARTIALLY_STATIC",as=!1,at=!1,au=ar?M:void 0,av=ar&&ap&&!ao,aw=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),ax=!al||(0,p.shouldServeStreamingMetadata)(al,ad.htmlLimitedBots);an&&ar&&(ak=!1,ax=!1);let ay=!0===K.isDev||!ak||"string"==typeof M||av,az=an&&ar,aA=null;_||!ak||ay||aq||au||av||(aA=aa);let aB=aA;!aB&&K.isDev&&(aB=aa),K.isDev||_||!ak||!ap||av||(0,k.d)(a.headers);let aC={...E,tree:H,pages:I,GlobalError:D(),handler:L,routeModule:K,__next_app__:J};X&&Y&&(0,o.setReferenceManifestsSingleton)({page:G,clientReferenceManifest:Y,serverActionsManifest:X,serverModuleMap:(0,q.createServerModuleMap)({serverActionsManifest:X})});let aD=a.method||"GET",aE=(0,g.getTracer)(),aF=aE.getActiveScopeSpan();try{let f=K.getVaryHeader(aa,ae);b.setHeader("Vary",f);let k=async(c,d)=>{let e=new l.NodeNextRequest(a),f=new l.NodeNextResponse(b);return K.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aE.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aD} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aD} ${a.url}`)})},m=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:Q,params:R,page:ag,sharedContext:{buildId:P},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aC,Component:(0,j.T)(aC),params:R,routeModule:K,page:G,postponed:f,shouldWaitOnAllReady:az,serveStreamingMetadata:ax,supportsDynamicResponse:"string"==typeof f||ay,buildManifest:U,nextFontManifest:V,reactLoadableManifest:W,subresourceIntegrityManifest:Z,serverActionsManifest:X,clientReferenceManifest:Y,setIsrStatus:null==ac?void 0:ac.setIsrStatus,dir:c(33873).join(process.cwd(),K.relativeProjectDir),isDraftMode:_,isRevalidate:ak&&!f&&!av,botType:am,isOnDemandRevalidate:ah,isPossibleServerAction:aq,assetPrefix:ad.assetPrefix,nextConfigOutput:ad.output,crossOrigin:ad.crossOrigin,trailingSlash:ad.trailingSlash,previewProps:$.preview,deploymentId:ad.deploymentId,enableTainting:ad.experimental.taint,htmlLimitedBots:ad.htmlLimitedBots,devtoolSegmentExplorer:ad.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ad.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ad.experimental.cacheLife,basePath:ad.basePath,serverActions:ad.experimental.serverActions,...as?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:as}:{},experimental:{isRoutePPREnabled:ar,expireTime:ad.expireTime,staleTimes:ad.experimental.staleTimes,cacheComponents:!!ad.experimental.cacheComponents,clientSegmentCache:!!ad.experimental.clientSegmentCache,clientParamParsing:!!ad.experimental.clientParamParsing,dynamicOnHover:!!ad.experimental.dynamicOnHover,inlineCss:!!ad.experimental.inlineCss,authInterrupts:!!ad.experimental.authInterrupts,clientTraceMetadata:ad.experimental.clientTraceMetadata||[]},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>K.onRequestError(a,b,d,ac),err:(0,h.getRequestMeta)(a,"invokeError"),dev:K.isDev}},l=await k(e,i),{metadata:m}=l,{cacheControl:n,headers:o={},fetchTags:p}=m;if(p&&(o[y.NEXT_CACHE_TAGS_HEADER]=p),a.fetchMetrics=m.fetchMetrics,ak&&(null==n?void 0:n.revalidate)===0&&!K.isDev&&!ar){let a=m.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${aa}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:v.CachedRouteKind.APP_PAGE,html:l,headers:o,rscData:m.flightData,postponed:m.postponed,status:m.statusCode,segmentData:m.segmentData},cacheControl:n}},o=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i})=>{let j,k=!1===K.isDev,l=c||b.writableEnded;if(ah&&ab&&!f&&!N)return(null==ac?void 0:ac.render404)?await ac.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ai&&(j=(0,w.parseFallbackField)(ai.fallback)),j===w.FallbackMode.PRERENDER&&(0,u.isBot)(al)&&(!ar||an)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ah=!0),ah&&(j!==w.FallbackMode.NOT_FOUND||f)&&(j=w.FallbackMode.BLOCKING_STATIC_RENDER),!N&&j!==w.FallbackMode.BLOCKING_STATIC_RENDER&&aB&&!l&&!_&&T&&(k||!aj)){let b;if((k||ai)&&j===w.FallbackMode.NOT_FOUND)throw new B.NoFallbackError;if(ar&&!ap){let c="string"==typeof(null==ai?void 0:ai.fallback)?ai.fallback:k?ag:null;if(b=await K.handleResponse({cacheKey:c,req:a,nextConfig:ad,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:$,isRoutePPREnabled:ar,responseGenerator:async()=>m({span:i,postponed:void 0,fallbackRouteParams:k||at?(0,n.u)(ag):null}),waitUntil:d.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=ah||g||!au?void 0:au;if(as&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:v.CachedRouteKind.PAGES,html:x.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let p=T&&ar&&((0,h.getRequestMeta)(a,"renderFallbackShell")||at)?(0,n.u)(af):null;return m({span:i,postponed:o,fallbackRouteParams:p})},p=async c=>{var f,g,i,j,k;let l,n=await K.handleResponse({cacheKey:aA,responseGenerator:a=>o({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ah,isRoutePPREnabled:ar,req:a,nextConfig:ad,prerenderManifest:$,waitUntil:d.waitUntil});if(_&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),K.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!n){if(aA)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=n.value)?void 0:f.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=n.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof n.value.postponed;ak&&!av&&(!p||ao)&&(N||b.setHeader("x-nextjs-cache",ah?"REVALIDATED":n.isMiss?"MISS":n.isStale?"STALE":"HIT"),b.setHeader(t.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=n;if(au)l={revalidate:0,expire:void 0};else if(N&&ap&&!ao&&ar)l={revalidate:0,expire:void 0};else if(!K.isDev)if(_)l={revalidate:0,expire:void 0};else if(ak){if(n.cacheControl)if("number"==typeof n.cacheControl.revalidate){if(n.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${n.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:n.cacheControl.revalidate,expire:(null==(j=n.cacheControl)?void 0:j.expire)??ad.expireTime}}else l={revalidate:y.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(n.cacheControl=l,"string"==typeof aw&&(null==q?void 0:q.kind)===v.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=q.headers)?void 0:k[y.NEXT_CACHE_TAGS_HEADER];N&&ak&&c&&"string"==typeof c&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(aw);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(d,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.EMPTY,cacheControl:n.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...n,value:{...n.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&au)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(N&&ak||delete a[y.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let s=null==(g=q.headers)?void 0:g[y.NEXT_CACHE_TAGS_HEADER];if(N&&ak&&s&&"string"==typeof s&&b.setHeader(y.NEXT_CACHE_TAGS_HEADER,s),!q.status||ap&&ar||(b.statusCode=q.status),!N&&q.status&&F.RedirectStatusCode[q.status]&&ap&&(b.statusCode=200),p&&b.setHeader(t.NEXT_DID_POSTPONE_HEADER,"1"),ap&&!_){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:q.html,cacheControl:av?{revalidate:0,expire:void 0}:n.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:x.default.fromStatic(q.rscData,t.RSC_CONTENT_TYPE_HEADER),cacheControl:n.cacheControl})}let u=q.html;if(!p||N||ap)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:n.cacheControl});if(as)return u.push(new ReadableStream({start(a){a.enqueue(z.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}});let w=new TransformStream;return u.push(w.readable),m({span:c,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==v.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(w.writable)}).catch(a=>{w.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:ad.generateEtags,poweredByHeader:ad.poweredByHeader,result:u,cacheControl:{revalidate:0,expire:void 0}})};if(!aF)return await aE.withPropagatedContext(a.headers,()=>aE.trace(i.BaseServerSpan.handleRequest,{spanName:`${aD} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aD,"http.target":a.url}},p));await p(aF)}catch(b){throw b instanceof B.NoFallbackError||await K.onRequestError(a,b,{routerKind:"App Router",routePath:G,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ak,isOnDemandRevalidate:ah})},ac),b}}},75866:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,66244,23)),Promise.resolve().then(c.t.bind(c,14471,23))},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")}};var b=require("../../../../webpack-runtime.js");b.C(a);var c=b.X(0,[961,669,882,921,228,497],()=>b(b.s=68068));module.exports=c})();