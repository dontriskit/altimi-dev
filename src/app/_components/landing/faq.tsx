"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How is this different from a full rewrite?",
    answer:
      "We don't do big-bang rewrites. Our approach is phased, frontend-first modernization with incremental backend extraction. This consistently outperforms full rewrites — ~85% success rate vs ~30% for rewrites — with faster time-to-value (months 2-4 vs. month 18+) and lower risk.",
  },
  {
    question: "What tech stacks do you modernize from / to?",
    answer:
      "We modernize from legacy stacks like AngularJS, jQuery, Meteor, legacy Java, PHP monoliths, and outdated .NET versions. Target stacks typically include React/Next.js for frontend, modern Node.js or Java/Kotlin for backend, and cloud-native infrastructure on AWS, Azure, or GCP.",
  },
  {
    question: "How do you use AI in the modernization process?",
    answer:
      "We use AI tools across the entire workflow: Cursor and Sourcegraph Cody for code understanding, Semgrep/CodeQL for security scanning, Grit.io for codemods, CodiumAI for test generation, and Playwright for E2E testing. This delivers 30-60% productivity improvements — but with human-in-the-loop governance at every architectural decision point.",
  },
  {
    question: 'What does "phased modernization" mean in practice?',
    answer:
      "Phase 1 typically starts with frontend migration to React/Next.js and a technical spike to validate backend upgrade feasibility. Phase 2+ covers backend refactoring, microservices extraction, and platform modernization. Each phase delivers working software — you see value from week one, not month eighteen.",
  },
  {
    question: "How long does a typical modernization take?",
    answer:
      "The Discovery Sprint takes 2-4 weeks and delivers a complete modernization roadmap. Full execution depends on system complexity — typically 3-9 months for Phase 1 (frontend + critical backend), with subsequent phases running in parallel with normal product development.",
  },
  {
    question: "What happens after the Discovery Sprint?",
    answer:
      "You receive a detailed execution proposal with phased roadmap, team structure, effort estimates, and CAPEX/OPEX projections. If you proceed, Altimi assembles a dedicated modernization team and begins execution. If not, you keep all deliverables — the Sprint is standalone value.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="rounded-t-3xl relative z-[1] bg-[#f5f5f5]">
      <div className="max-w-[800px] mx-auto px-[105px] max-md:px-6 py-[120px] max-md:py-[60px]">
        <span className="inline-block font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926]/70 bg-white px-4 py-1.5 rounded mb-8">
          FAQ
        </span>
        <h2 className="text-[clamp(32px,5vw,48px)] leading-[1.3] font-normal mb-12">
          Common questions.
        </h2>

        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div
              key={item.question}
              className="border-b border-[#0a1926]/10"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-[18px] font-normal pr-4">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#0a1926]/70 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "300px" : "0px",
                }}
              >
                <p className="text-[#333333] text-[16px] leading-[1.6] pb-6">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
