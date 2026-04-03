import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_components/landing/footer";

export const metadata: Metadata = {
  title: "Resources — Altimi Tech Due Diligence",
};

export default function ResourcesIndex() {
  return (
    <>
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
        <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[80px] max-md:py-[40px]">
          <h1 className="text-[#0a1926] text-[40px] leading-[1.15] font-normal mb-4">
            Resources
          </h1>
          <p className="text-[#333333] text-[18px] leading-[1.6] mb-16 max-w-[600px]">
            Research, reports, and insights from the Altimi tech due diligence practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px]">
            <Link
              href="/resources/soc-reports"
              className="border-2 border-[#0a1926] rounded-2xl p-8 hover:bg-[#0a1926]/[0.02] transition-colors group"
            >
              <span className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/70 bg-[#0a1926]/8 px-3 py-1 rounded">
                Research
              </span>
              <h2 className="text-[24px] font-normal text-[#0a1926] mt-4 mb-3">
                500 SOC 2 Reports. One Uncomfortable Truth.
              </h2>
              <p className="text-[#333333] text-[15px] leading-[1.6] mb-4">
                We analyzed 485 compliance reports from VC-backed companies. $291M in funding tracked. The finding: compliance does not equal maturity.
              </p>
              <span className="font-mono text-[14px] text-[#0a1926] group-hover:underline">
                Read more &rarr;
              </span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
