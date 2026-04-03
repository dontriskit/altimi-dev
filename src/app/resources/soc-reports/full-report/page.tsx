import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../../../_components/landing/footer";
import { reportHTML } from "./report-content";

export const metadata: Metadata = {
  title: "What 500 SOC 2 Reports Reveal — Altimi Tech Due Diligence",
  description:
    "An analysis of 485 funded startups: what SOC 2 compliance tells investors about security and discipline — and what it doesn't.",
};

export default function FullReportPage() {
  return (
    <>
      <nav className="sticky top-0 z-[999] bg-[#0a1926]">
        <div className="max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-md:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo-altimi-white.png"
              alt="Altimi"
              width={112}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/resources/soc-reports"
            className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors"
          >
            &larr; Back to resources
          </Link>
        </div>
      </nav>

      <main className="bg-[#0f172a]">
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-20">
          <article
            className="report-content"
            dangerouslySetInnerHTML={{ __html: reportHTML }}
          />
        </div>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />
    </>
  );
}
