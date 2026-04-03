import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../_components/landing/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Altimi Tech Due Diligence",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Navbar — simplified for subpage */}
      <nav className="sticky top-0 z-[999] bg-[#0a1926]">
        <div className="max-w-[1540px] mx-auto flex items-center justify-between h-[64px] px-[105px] max-md:px-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-altimi-white.png"
              alt="Altimi"
              width={112}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="font-mono text-[13px] uppercase tracking-[0.65px] text-white/90 hover:text-white transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="bg-white">
        <div className="max-w-[800px] mx-auto px-[105px] max-md:px-6 py-[80px] max-md:py-[40px]">
          <h1 className="text-[#0a1926] text-[40px] leading-[1.15] font-normal mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#333333] text-[14px] mb-12">
            Last updated: March 27, 2026
          </p>

          <div className="prose-altimi space-y-10 text-[16px] leading-[1.7] text-[#333333]">
            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">1. Introduction</h2>
              <p>
                Altimi sp. z o.o. (&ldquo;Altimi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our Tech Due Diligence services and this website.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">2. Data Controller</h2>
              <p>
                The data controller is Altimi sp. z o.o., with its registered office in Wroclaw, Poland. For questions about data processing, contact us at{" "}
                <a href="mailto:wojciech.woziwodzki@altimi.com" className="text-[#0a1926] underline underline-offset-4">
                  wojciech.woziwodzki@altimi.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">3. Data We Collect</h2>
              <p className="mb-4">We collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact information</strong> — name, email address, phone number, company name, and job title when you submit a form or contact us.</li>
                <li><strong>Assessment data</strong> — technical documentation, code repository access, and infrastructure information provided during a due diligence engagement under NDA.</li>
                <li><strong>Usage data</strong> — anonymized analytics about how you interact with this website (pages visited, time on site).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">4. How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To deliver our Tech Due Diligence services as agreed in the engagement contract.</li>
                <li>To respond to inquiries and communicate about our services.</li>
                <li>To improve our website and service offerings.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">5. Legal Basis (GDPR)</h2>
              <p className="mb-4">We process your data based on:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contract performance</strong> — processing necessary to deliver our assessment services.</li>
                <li><strong>Legitimate interest</strong> — responding to inquiries, improving our services.</li>
                <li><strong>Consent</strong> — where you have opted in to marketing communications.</li>
                <li><strong>Legal obligation</strong> — where required by applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">6. Data Sharing</h2>
              <p>
                We do not sell your personal data. We may share data with trusted service providers (cloud hosting, analytics) who process data on our behalf under appropriate data processing agreements. All assessment data is handled under strict NDA and is never shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">7. Data Security</h2>
              <p>
                Altimi is ISO 27001 certified. We implement appropriate technical and organizational measures to protect your personal data, including encryption in transit and at rest, access controls, and regular security assessments. All due diligence engagements are conducted through secure Virtual Data Rooms (VDRs).
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">8. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary for the purposes described above. Contact data is retained for the duration of our business relationship plus 3 years. Assessment data is deleted or returned within 30 days of engagement completion, unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">9. Your Rights</h2>
              <p className="mb-4">Under GDPR / RODO, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure (&ldquo;right to be forgotten&rdquo;)</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at{" "}
                <a href="mailto:wojciech.woziwodzki@altimi.com" className="text-[#0a1926] underline underline-offset-4">
                  wojciech.woziwodzki@altimi.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">10. Cookies</h2>
              <p>
                This website uses only essential cookies required for functionality. We do not use tracking cookies or third-party advertising cookies. Analytics data is collected anonymously.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
              </p>
            </section>

            <section>
              <h2 className="text-[#0a1926] text-[24px] font-normal mb-4">12. Contact</h2>
              <p>
                Altimi sp. z o.o.<br />
                Wroclaw, Poland<br />
                <a href="mailto:wojciech.woziwodzki@altimi.com" className="text-[#0a1926] underline underline-offset-4">
                  wojciech.woziwodzki@altimi.com
                </a><br />
                +48 509 299 889
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
