"use client";

import { useState } from "react";
import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] bg-[#0a1926]">
      <div className="max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-lg:px-6">
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo-altimi-white.png"
            alt="Altimi"
            width={112}
            height={28}
            className="h-7 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/resources"
            className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors"
          >
            Resources
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[44px] px-6 rounded-[6.5px] flex items-center hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Work with Altimi
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a1926] border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="/resources"
              onClick={() => setOpen(false)}
              className="font-mono text-[15px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors py-2"
            >
              Resources
            </a>
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[48px] rounded-[6.5px] flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            Work with Altimi
          </a>
        </div>
      )}
    </nav>
  );
}
