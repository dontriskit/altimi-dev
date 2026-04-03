"use client";

import { useState } from "react";
import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#scope", label: "What we modernize" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] bg-[#0a1926]">
      <div className="max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-lg:px-6">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <Image
            src="/images/logo-altimi-white.png"
            alt="Altimi"
            width={112}
            height={28}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={CTA_URL}
          className="hidden lg:flex font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[44px] px-6 rounded-[6.5px] items-center hover:bg-white/90 transition-colors whitespace-nowrap"
        >
          Book assessment
        </a>

        {/* Hamburger — visible below lg */}
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

      {/* Mobile/tablet menu */}
      {open && (
        <div className="lg:hidden bg-[#0a1926] border-t border-white/10 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[15px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={CTA_URL}
            onClick={() => setOpen(false)}
            className="mt-4 font-mono text-[15px] font-medium uppercase tracking-[0.65px] bg-white text-[#0a1926] h-[48px] rounded-[6.5px] flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            Book assessment
          </a>
        </div>
      )}
    </nav>
  );
}
