"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Hilmar Eidsson",
    role: "CO-FOUNDER & CTO, KARA CONNECT",
    country: "Iceland",
    flag: "\u{1F1EE}\u{1F1F8}",
    quote:
      "Our internal team is highly satisfied with their work. Knowledgeable and professional, Altimi goes above and beyond to meet all our needs. Their ability to stay focused and promptly address any issues makes them a reliable partner.",
    photo: "/people/hilmareidsson.jpeg",
    logo: "/images/logos-color/karaconnect.png",
    logoAlt: "Kara Connect",
  },
  {
    name: "Thorsteinn Gestsson",
    role: "CEO, GESTSSON EHF.",
    country: "Iceland",
    flag: "\u{1F1EE}\u{1F1F8}",
    quote:
      "Altimi\u2019s understanding and responsive approach to the partnership enables seamless collaboration and accurate cost and timeline estimates. The team takes ownership of their work quality and remains open to constructive feedback.",
    photo: "/people/thorsteinngestsson.jpeg",
    logo: "/images/logos-color/gestsson.png",
    logoAlt: "Gestsson",
  },
  {
    name: "Stephan Kaufmann",
    role: "FOUNDER & CEO, RIDELINK GMBH",
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    quote:
      "We recommend Altimi as a trusted partner whose strengths over competitors include flexibility, high quality, and a deep understanding of our needs and those of our customers. We consider Altimi a highly recommendable company and are very satisfied with the work we\u2019ve completed together.",
    photo: "/people/StephanKaufmann.jpeg",
    logo: "/images/logos-color/ridelink.png",
    logoAlt: "Ridelink",
  },
  {
    name: "Thomas R\u00fcdel",
    role: "CEO, KAUZ GMBH",
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    quote:
      "During this time, Altimi provided a development team consisting of front-end developers, testers, administrators, and DevOps specialists \u2014 in total, 8 developers. Together, we developed our main project. We are very pleased with the results and confidently recommend Altimi as a trusted partner.",
    photo: "/people/ThomasRuedel.jpeg",
    logo: "/images/logos-color/kauz.png",
    logoAlt: "Kauz",
  },
  {
    name: "Stanis\u0142aw Namys\u0142ak",
    role: "IT MANAGER, SANTANDER",
    country: "Poland",
    flag: "\u{1F1F5}\u{1F1F1}",
    quote:
      "The skills provided by Altimi specialists met our expectations, and their experience and responsiveness ensured the feasibility of the project.",
    photo: null,
    logo: "/images/logos-color/santander.png",
    logoAlt: "Santander",
  },
];

export function Results() {
  const [active, setActive] = useState(0);
  const t = testimonials[active]!;

  return (
    <section className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[120px] max-md:py-[60px]">
        <span className="inline-block font-mono text-[15px] font-medium uppercase tracking-[0.65px] text-[#0a1926]/70 bg-[#0a1926]/8 px-4 py-1.5 rounded mb-6">
          300+ projects delivered
        </span>
        <h2 className="text-[#0a1926] text-[clamp(32px,5vw,56px)] leading-[1.15] font-normal mb-20">
          What our partners say about working with Altimi
        </h2>

        {/* Quote area — 2-column: attribution left, quote right */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-0 mb-20">
          {/* Left: quote mark + attribution */}
          <div className="border-r border-[#0a1926]/10 pr-12 max-md:border-r-0 max-md:pr-0 max-md:mb-10">
            {/* Photo or quote mark */}
            {t.photo ? (
              <Image
                src={t.photo}
                alt={t.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover mb-8"
              />
            ) : (
              <svg
                className="w-16 h-16 text-[#0a1926] mb-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            )}

            {/* Attribution */}
            <h3 className="text-[#0a1926] text-[22px] font-normal mb-2">
              {t.name}
            </h3>
            <p className="font-mono text-[13px] uppercase tracking-[0.65px] text-[#0a1926]/70 mb-4">
              {t.role}
            </p>
            <p className="text-[15px] text-[#333333]">
              {t.flag} {t.country}
            </p>
          </div>

          {/* Right: quote text */}
          <div className="pl-12 max-md:pl-0 flex items-center">
            <p className="text-[#0a1926] text-[clamp(20px,2.5vw,28px)] leading-[1.6] font-normal">
              {t.quote}
            </p>
          </div>
        </div>

        {/* Company logo tabs — clickable */}
        <div className="grid grid-cols-5 max-md:grid-cols-3 gap-4">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center justify-center h-20 rounded-xl border transition-all ${
                i === active
                  ? "border-[#0a1926]/20 bg-white shadow-sm"
                  : "border-[#0a1926]/10 bg-transparent hover:border-[#0a1926]/20"
              }`}
            >
              <Image
                src={item.logo}
                alt={item.logoAlt}
                width={120}
                height={40}
                className="h-8 w-auto max-w-[100px] object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
