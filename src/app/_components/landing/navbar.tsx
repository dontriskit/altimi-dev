"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-[999] transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1926] shadow-lg shadow-black/10"
          : "bg-[#0a1926]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[52px] px-8 max-lg:px-5">
        <a href="/" className="shrink-0">
          <Image
            src="/images/logo-altimi-white.png"
            alt="Altimi"
            width={96}
            height={24}
            className="h-[22px] w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </a>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="/resources"
            className="text-[13px] text-white/60 hover:text-white transition-colors"
          >
            Resources
          </a>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[#0a1926] bg-white/95 hover:bg-white h-[34px] px-5 rounded-full flex items-center transition-all"
          >
            Work with Altimi
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-7 h-7"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-[1.5px] w-5 bg-white/80 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a1926] border-t border-white/5 px-5 pb-5">
          <div className="flex flex-col gap-3 pt-3">
            <a
              href="/resources"
              onClick={() => setOpen(false)}
              className="text-[14px] text-white/70 hover:text-white transition-colors py-2"
            >
              Resources
            </a>
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 text-[14px] font-medium text-[#0a1926] bg-white/95 hover:bg-white h-[40px] rounded-full flex items-center justify-center transition-all"
          >
            Work with Altimi
          </a>
        </div>
      )}
    </nav>
  );
}
