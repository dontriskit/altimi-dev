"use client";

import { useState, useMemo } from "react";
import { CTA_URL } from "@/app/_lib/constants";

const checklistItems = [
  "Your legacy system is blocking the product roadmap",
  "Development takes 3x longer than it should because of technical debt",
  "You can't hire developers who want to work on your outdated stack",
  "Last attempted migration was abandoned halfway through",
  "Your CTO says \"it works\" but new features keep breaking existing ones",
  "A regulatory deadline is approaching and the platform isn't ready",
];

function getSeverity(count: number) {
  if (count === 0) return null;
  if (count <= 2)
    return {
      level: "mild" as const,
      color: "bg-amber-400",
      message:
        "Some friction is normal — but these are early signs of technical debt compounding. A Discovery Sprint can map the real picture in 2 weeks.",
      cta: "See what the Sprint covers",
    };
  if (count <= 4)
    return {
      level: "concerning" as const,
      color: "bg-orange-500",
      message:
        "That's a pattern. Your legacy system is actively slowing the business. A phased modernization approach can unblock your roadmap without the risk of a full rewrite.",
      cta: "Explore the Discovery Sprint",
    };
  return {
    level: "critical" as const,
    color: "bg-red-600",
    message:
      "You already know the system needs modernization. The question is whether you start now — or wait until the next outage, missed deadline, or failed hire forces the issue.",
    cta: "Book a Modernization Assessment",
  };
}

export function Problem() {
  const [checked, setChecked] = useState<boolean[]>(
    () => new Array(checklistItems.length).fill(false),
  );

  const count = useMemo(() => checked.filter(Boolean).length, [checked]);
  const severity = getSeverity(count);

  const barPercent = (count / checklistItems.length) * 100;
  const barColor =
    count === 0
      ? "bg-gray-200"
      : count <= 2
        ? "bg-amber-400"
        : count <= 4
          ? "bg-orange-500"
          : "bg-red-600";

  function toggle(index: number) {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }

  return (
    <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[120px] max-md:py-[60px]">
      <span className="inline-block font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926]/70 bg-[#0a1926]/8 px-4 py-1.5 rounded mb-8">
        The Problem
      </span>

      <h2 className="text-[clamp(32px,5vw,70px)] leading-[1.15] font-normal max-w-[900px] mb-6">
        Do you have a modernization problem?
      </h2>

      <p className="text-[#333333] text-[18px] leading-[1.5] max-w-[700px] mb-12">
        Check all that apply. Be honest.
      </p>

      <div className="flex flex-col gap-3 max-w-[800px]">
        {checklistItems.map((item, i) => (
          <label
            key={item}
            onClick={() => toggle(i)}
            className={`flex items-center gap-4 px-5 py-4 rounded-lg cursor-pointer select-none transition-all duration-200 ${
              checked[i]
                ? "bg-[#0a1926]/[0.06] font-medium"
                : "bg-transparent hover:bg-[#0a1926]/[0.02]"
            }`}
          >
            {/* Custom checkbox */}
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-[4px] border-2 transition-all duration-200 flex items-center justify-center ${
                checked[i]
                  ? "bg-[#0a1926] border-[#0a1926]"
                  : "bg-white border-[#0a1926]/25"
              }`}
            >
              {checked[i] && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M2.5 6L5 8.5L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>

            <span className="text-[17px] leading-[1.5] text-[#0a1926]">
              {item}
            </span>
          </label>
        ))}
      </div>

      {/* Severity bar */}
      <div className="max-w-[800px] mt-10">
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ease-out ${barColor}`}
            style={{ width: `${barPercent}%` }}
          />
        </div>

        {severity && (
          <div className="mt-6 transition-all duration-300">
            <p className="text-[18px] leading-[1.6] text-[#0a1926]">
              {severity.message}
            </p>
            <a
              href={CTA_URL}
              className="inline-block mt-4 text-[16px] font-medium text-[#0a1926] underline underline-offset-4 decoration-[#0a1926]/30 hover:decoration-[#0a1926] transition-colors"
            >
              {severity.cta} &rarr;
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
