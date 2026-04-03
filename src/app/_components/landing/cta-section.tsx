"use client";

import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";
import { DashedSeparator } from "./dashed-separator";

const logos = [
  { src: "/images/logos/siemens-white.png", alt: "Siemens", height: "h-7" },
  { src: "/images/logos/softbank-white.png", alt: "SoftBank", height: "h-6" },
  { src: "/images/logos/tidal-white.png", alt: "TIDAL", height: "h-5" },
  { src: "/images/logos/opera-white.png", alt: "Opera", height: "h-7" },
  { src: "/images/logos/greenbone-white.png", alt: "Greenbone", height: "h-8" },
  { src: "/images/logos/benq-white.png", alt: "BenQ", height: "h-5" },
  { src: "/images/logos/etteplan-white.png", alt: "Etteplan", height: "h-6" },
  { src: "/images/logos/bd-white.png", alt: "BD", height: "h-7" },
];

function LogoSet() {
  return (
    <>
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={120}
          height={32}
          className={`${logo.height} w-auto opacity-70`}
        />
      ))}
    </>
  );
}

export function CtaSection() {
  return (
    <section className="rounded-t-3xl relative z-[1] overflow-hidden bg-[#0a1926]">
      {/* Animated blob 1 — magenta, floats slowly */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          right: -100,
          top: -200,
          animation: "float1 20s ease-in-out infinite",
        }}
      >
        <Image
          src="/images/shape-1.svg"
          alt=""
          width={700}
          height={700}
          className="opacity-40"
          style={{ filter: "blur(80px)" }}
        />
      </div>

      {/* Animated blob 2 — blue, floats counter-direction */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          left: -150,
          bottom: -200,
          animation: "float2 25s ease-in-out infinite",
        }}
      >
        <Image
          src="/images/shape-2.svg"
          alt=""
          width={600}
          height={600}
          className="opacity-30"
          style={{ filter: "blur(80px)" }}
        />
      </div>

      {/* Small accent blob — center, subtle pulse */}
      <div
        className="absolute pointer-events-none left-1/2 top-1/3 -translate-x-1/2"
        style={{
          width: 400,
          height: 400,
          animation: "pulse-glow 8s ease-in-out infinite",
        }}
      >
        <div
          className="w-full h-full rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #D34489 0%, #419AF0 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] opacity-30"
        style={{
          backgroundImage: "url('/images/bg-noise.png')",
          backgroundSize: "250px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[120px] max-md:py-[60px] text-center">
        <h2 className="text-white text-[clamp(32px,5vw,70px)] leading-[1.15] font-normal max-w-[800px] mx-auto mb-6">
          Ready to unblock your roadmap?
        </h2>
        <p className="text-white/80 text-[18px] leading-[1.5] max-w-[500px] mx-auto mb-12">
          Start with a 2–4 week Discovery Sprint. No lock-in — just
          a clear modernization plan you can act on.
        </p>
        <div className="flex justify-center mb-6">
          <a
            href="https://meetings.hubspot.com/jacek-podoba"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[52px] px-8 rounded-[6.5px] flex items-center hover:bg-white/90 transition-colors"
          >
            Book a Modernization Assessment
          </a>
        </div>
        <p className="font-mono text-[13px] text-white/60 mt-6">
          Currently booking Q2 2026 · 3 slots remaining
        </p>

        <DashedSeparator
          variant="dark"
          className="max-w-[1540px] mx-auto mt-16 mb-12"
        />

        {/* Logo marquee */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-16"
            style={{
              width: "calc(300%)",
              animation: "marquee 40s linear infinite",
            }}
          >
            <LogoSet />
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -40px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-3deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, 30px) rotate(-5deg); }
          66% { transform: translate(40px, -20px) rotate(4deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
          50% { transform: translateX(-50%) scale(1.3); opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
