import Image from "next/image";

const testimonials = [
  {
    quote:
      "Our internal team is <strong>highly satisfied</strong> with their work. Knowledgeable and professional, Altimi goes above and beyond to meet all our needs. Their ability to stay focused and promptly address any issues makes them a reliable partner.",
    name: "Hilmar Eidsson",
    company: "Co-Founder & CTO, Kara Connect",
    photo: "/people/hilmareidsson.jpeg",
    linkedin: "https://is.linkedin.com/in/hilmareidsson",
  },
  {
    quote:
      "Altimi\u2019s understanding and responsive approach enables <strong>seamless collaboration</strong> and accurate cost and timeline estimates. The team takes ownership of their work quality and remains open to constructive feedback.",
    name: "Thorsteinn Gestsson",
    company: "CEO, Gestsson ehf.",
    photo: "/people/thorsteinngestsson.jpeg",
    linkedin: "https://www.linkedin.com/in/thorsteinnhjalmargestsson/",
  },
  {
    quote:
      "We recommend Altimi as a trusted partner whose strengths include <strong>flexibility, high quality</strong>, and a deep understanding of our needs and those of our customers.",
    name: "Stephan Kaufmann",
    company: "Founder & CEO, Ridelink GmbH",
    photo: "/people/StephanKaufmann.jpeg",
    linkedin: "https://www.linkedin.com/in/stephankaufmann/",
  },
  {
    quote:
      "Altimi provided a development team of <strong>8 specialists</strong> \u2014 front-end developers, testers, administrators, and DevOps. We are very pleased with the results and confidently recommend Altimi as a trusted partner.",
    name: "Thomas R\u00fcdel",
    company: "CEO, Kauz GmbH",
    photo: "/people/ThomasRuedel.jpeg",
    linkedin: "https://www.linkedin.com/in/thomas-ruedel-92980985/",
  },
];

export function Testimonial() {
  return (
    <section className="bg-white">
      <div className="max-w-[1540px] mx-auto px-[105px] max-md:px-6 py-[80px] max-md:py-[40px]">
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-[#0a1926]/10 overflow-hidden"
            >
              {/* Quote */}
              <div className="p-6 flex-grow">
                <p
                  className="text-[#0a1926] text-[15px] leading-[1.7]"
                  dangerouslySetInnerHTML={{
                    __html: `&ldquo;${t.quote}&rdquo;`,
                  }}
                />
              </div>

              {/* Attribution — card footer */}
              <div className="border-t border-[#0a1926]/10 px-6 py-4 bg-[#f5f5f5] flex items-center gap-3">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="flex-grow min-w-0">
                  <p className="text-[#0a1926] text-[14px] font-medium leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[#333333] text-[13px] leading-tight truncate">
                    {t.company}
                  </p>
                </div>
                <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0a1926]/30 hover:text-[#0077b5] transition-colors shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
