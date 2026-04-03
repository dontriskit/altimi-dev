import { Navbar } from "./_components/landing/navbar";
import { Hero } from "./_components/landing/hero";
import { LogoBar } from "./_components/landing/logo-bar";
import { Pricing } from "./_components/landing/pricing";
import { Testimonial } from "./_components/landing/testimonial";
import { Deliverables } from "./_components/landing/deliverables";
import { Problem } from "./_components/landing/problem";
import { Process } from "./_components/landing/process";
import { ScopeTabs } from "./_components/landing/scope-tabs";
import { CaseStudies } from "./_components/landing/case-studies";
import { Faq } from "./_components/landing/faq";
import { TeamComposition } from "./_components/landing/team-composition";
import { Results } from "./_components/landing/results";
import { CtaSection } from "./_components/landing/cta-section";
import { Insights } from "./_components/landing/insights";
import { Footer } from "./_components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Logos — proud display */}
      <section className="bg-white">
        <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 pt-4 pb-16">
          <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/70 mb-10 text-center">
            Trusted by teams at
          </p>
          <LogoBar />
        </div>
      </section>

      <Pricing />
      <Testimonial />
      <Deliverables />

      <section className="bg-white">
        <Problem />
      </section>

      <Process />
      <ScopeTabs />
      <CaseStudies />
      <Faq />
      <TeamComposition />
      <CtaSection />
      <Results />
      <Insights />
      <Footer />
    </>
  );
}
