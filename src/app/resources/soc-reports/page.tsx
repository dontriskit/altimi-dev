"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../_components/landing/footer";

const stats = [
  { value: "485", label: "companies analyzed" },
  { value: "99%", label: "have MFA" },
  { value: "28%", label: "multi-region" },
  { value: "22%", label: "cyber insured" },
  { value: "70%", label: "template boilerplate" },
];

const insights = [
  {
    num: "01",
    title: "$75M buys you the same SOC 2 as $500K.",
    desc: "Across 27 researched companies ($291M total), funding level has zero correlation with compliance quality.",
  },
  {
    num: "02",
    title: "70% of every report is copy-paste.",
    desc: "One auditor. Same template. Identical control descriptions across hundreds of companies.",
  },
  {
    num: "03",
    title: "78% pass SOC 2 without cyber insurance.",
    desc: "If they trusted their security controls, cyber insurance would be cheap and obvious. Its absence says more than the audit opinion.",
  },
  {
    num: "04",
    title: "100% have a disaster recovery plan. 49% never tested it.",
    desc: "The gap between policy and practice is the real story. SOC 2 counts both as 'available.'",
  },
  {
    num: "05",
    title: "SOC 2 tells you nothing about what actually matters.",
    desc: "Code quality. SDLC process. Team capability. Tech debt. AI practices. Zero signal in 500 reports.",
  },
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, company, source: "research-report" }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-[999] bg-[#0a1926]">
        <div className="max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-md:px-6">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo-altimi-white.png" alt="Altimi" width={112} height={28} className="h-7 w-auto" />
          </Link>
          <Link href="/" className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors">
            &larr; Back to home
          </Link>
        </div>
      </nav>

      <main className="bg-white">
        <div className="max-w-[800px] mx-auto px-[105px] max-md:px-6 py-[80px] max-md:py-[40px]">
          {/* Header */}
          <span className="inline-block font-mono text-[13px] font-medium uppercase tracking-[0.65px] text-[#0a1926]/70 bg-[#0a1926]/8 px-4 py-1.5 rounded mb-6">
            Research · 485 companies · $291M+ tracked
          </span>
          <h1 className="text-[#0a1926] text-[clamp(32px,5vw,48px)] leading-[1.1] font-normal mb-6">
            500 SOC 2 Reports. One Uncomfortable Truth.
          </h1>
          <p className="text-[#333333] text-[18px] leading-[1.6] mb-12">
            We analyzed every page of 485 compliance reports from companies backed by a16z, Benchmark, Kleiner Perkins, Lightspeed, and Y Combinator. The finding: compliance does not equal maturity.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-5 max-md:grid-cols-3 gap-3 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="border border-[#0a1926]/10 rounded-xl p-4 text-center">
                <div className="text-[24px] font-medium text-[#0a1926]">{s.value}</div>
                <div className="text-[12px] text-[#333333] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 5 insights */}
          <div className="space-y-4 mb-16">
            {insights.map((i) => (
              <div key={i.num} className="flex gap-4 items-start border border-[#0a1926]/10 rounded-xl p-5">
                <span className="font-mono text-[24px] font-medium text-[#0a1926]/30 shrink-0 w-10">{i.num}</span>
                <div>
                  <p className="text-[#0a1926] text-[16px] font-medium mb-1">{i.title}</p>
                  <p className="text-[#333333] text-[15px] leading-[1.6]">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#0a1926]/10 my-16" />

          {/* Gate or download */}
          {!submitted ? (
            <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6 text-center">
              <h2 className="text-[28px] font-normal text-[#0a1926] mb-4">
                Download the full report
              </h2>
              <p className="text-[#333333] text-[16px] leading-[1.6] mb-8 max-w-[500px] mx-auto">
                7 sections, 12 charts, 4,000 words. Everything SOC 2 reveals — and everything it hides — backed by data from 485 companies.
              </p>

              <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[6.5px] border border-[#0a1926]/15 text-[16px] text-[#0a1926] placeholder:text-[#0a1926]/40 focus:outline-none focus:border-[#0a1926]/40"
                />
                <input
                  type="text"
                  placeholder="Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[6.5px] border border-[#0a1926]/15 text-[16px] text-[#0a1926] placeholder:text-[#0a1926]/40 focus:outline-none focus:border-[#0a1926]/40"
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full h-[48px] px-4 rounded-[6.5px] border border-[#0a1926]/15 text-[16px] text-[#0a1926] placeholder:text-[#0a1926]/40 focus:outline-none focus:border-[#0a1926]/40"
                />
                {error && <p className="text-red-600 text-[14px]">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] rounded-[6.5px] flex items-center justify-center hover:bg-[#0a1926]/90 transition-colors disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Get the report"}
                </button>
              </form>

              <p className="text-[#333333]/60 text-[13px] mt-4">
                No spam. We&apos;ll send you the report link and nothing else.
              </p>
            </div>
          ) : (
            <div className="border-2 border-[#0a1926] rounded-2xl p-10 max-md:p-6 text-center">
              <div className="text-[32px] mb-4">&#10003;</div>
              <h2 className="text-[28px] font-normal text-[#0a1926] mb-4">
                Report unlocked
              </h2>
              <p className="text-[#333333] text-[16px] leading-[1.6] mb-8">
                Thank you. Here are your downloads:
              </p>
              <div className="space-y-3 max-w-[400px] mx-auto">
                <a
                  href="/resources/soc-reports/full-report"
                  className="w-full font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-[#0a1926] text-white h-[52px] rounded-[6.5px] flex items-center justify-center hover:bg-[#0a1926]/90 transition-colors"
                >
                  Read full report &rarr;
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
