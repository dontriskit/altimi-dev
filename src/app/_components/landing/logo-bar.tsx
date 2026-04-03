import Image from "next/image";

const logos = [
  { src: "/images/logos-color/siemens.svg", alt: "Siemens" },
  { src: "/images/logos-color/softbank.svg", alt: "SoftBank" },
  { src: "/images/logos-color/opera.svg", alt: "Opera" },
  { src: "/images/logos-color/greenbone.png", alt: "Greenbone" },
  { src: "/images/logos-color/tidal.png", alt: "TIDAL" },
  { src: "/images/logos-color/benq.svg", alt: "BenQ" },
  { src: "/images/logos-color/etteplan.png", alt: "Etteplan" },
  { src: "/images/logos-color/bd.svg", alt: "BD" },
];

export function LogoBar() {
  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-4 max-md:grid-cols-2 gap-4">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center h-20 max-md:h-16"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={140}
            height={40}
            className="h-9 max-md:h-7 w-auto max-w-[120px] object-contain"
          />
        </div>
      ))}
    </div>
  );
}
