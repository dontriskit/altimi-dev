import "@/styles/globals.css";
import { type Metadata } from "next";
import localFont from "next/font/local";
import { TRPCReactProvider } from "@/trpc/react";

const matter = localFont({
  src: "./fonts/MatterRegular.woff2",
  variable: "--font-matter",
  weight: "400",
  display: "swap",
});

const dmMono = localFont({
  src: [
    { path: "./fonts/DMMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altimi Tech Due Diligence",
  description: "Independent technology assessment for investors. Surface hidden risks, validate scalability, and make confident decisions.",
  icons: [
    { rel: "icon", url: "/favicon.ico", type: "image/jpeg" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.jpg" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${matter.variable} ${dmMono.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
