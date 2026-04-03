import Image from "next/image";
import { CTA_URL } from "@/app/_lib/constants";
import { DashedSeparator } from "./dashed-separator";

export function Footer() {
  return (
    <footer className="bg-[#0a1926]">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Image
              src="/images/logo-altimi-white.png"
              alt="Altimi"
              width={112}
              height={28}
              className="h-7 w-auto mb-6"
            />
            <p className="text-white/60 text-[14px] leading-[1.6] mb-4">
              AI-powered system modernization for engineering leaders.
            </p>
            <span className="font-mono text-[12px] uppercase tracking-[0.65px] text-white/60 bg-white/5 px-3 py-1 rounded">
              ISO 27001 Certified
            </span>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/60 mb-4">
              Services
            </p>
            <ul className="space-y-3 text-[15px] text-white/80">
              <li>
                <a href={CTA_URL} className="hover:text-white transition-colors">
                  Discovery Sprint
                </a>
              </li>
              <li>
                <a href={CTA_URL} className="hover:text-white transition-colors">
                  Frontend Modernization
                </a>
              </li>
              <li>
                <a href={CTA_URL} className="hover:text-white transition-colors">
                  Backend Refactoring
                </a>
              </li>
              <li>
                <a href={CTA_URL} className="hover:text-white transition-colors">
                  Full Platform Modernization
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/60 mb-4">
              Company
            </p>
            <ul className="space-y-3 text-[15px] text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Altimi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-white transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/60 mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-[15px] text-white/80">
              <li>
                <a
                  href={CTA_URL}
                  className="hover:text-white transition-colors"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <DashedSeparator variant="dark" className="mt-12 mb-8" />

        <p className="text-white/60 text-[14px] text-center">
          &copy; {new Date().getFullYear()} Altimi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
