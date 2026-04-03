# Skill: Altimi Design System Integration

## Goal
Replace the default T3 styling with the Altimi design system: fonts, tokens, globals.css, and layout.tsx.

## Context
- Design guidelines are at `../../Altimi-Design-Guidelines/`
- Uses Tailwind v4 with shadcn/ui token mapping
- Two fonts: Matter (sans) + DM Mono (mono) — loaded via `next/font/local`
- Dark-first hero sections, white content sections, gradient CTAs
- Noise grain texture, gradient blobs, dashed separators

## Steps

### 1. Copy font files
Copy from `../../Altimi-Design-Guidelines/fonts/` to `src/app/fonts/`:
- `MatterRegular.woff2`
- `DMMono-Regular.woff2`
- `DMMono-Medium.woff2`

### 2. Copy assets
Copy to `public/images/`:
- `../../Altimi-Design-Guidelines/assets/logo-altimi-white.png` → `public/images/logo-altimi-white.png`
- `../../Altimi-Design-Guidelines/assets/textures/bg-noise.png` → `public/images/bg-noise.png`
- `../../Altimi-Design-Guidelines/assets/shapes/shape-1.svg` → `public/images/shape-1.svg`
- `../../Altimi-Design-Guidelines/assets/shapes/shape-2.svg` → `public/images/shape-2.svg`

Copy client logos to `public/images/logos/`:
- All `*-white.png` files from `../../Altimi-Design-Guidelines/assets/logos/`

### 3. Rewrite `src/styles/globals.css`
Replace entirely with the content from `../../Altimi-Design-Guidelines/shadcn/globals.css`.
Update the `bg-grain` background-image path to `/images/bg-noise.png`.

### 4. Rewrite `src/app/layout.tsx`
- Remove Geist font import
- Add `next/font/local` imports for Matter and DM Mono
- Set CSS variables `--font-matter` and `--font-dm-mono`
- Update metadata: title="Altimi Tech Due Diligence", description="Independent technology assessment for investors"
- Keep TRPCReactProvider wrapper
- Apply font variables to html element

```tsx
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
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
```

## Constants
All CTA buttons must link to:
`https://altimi.platform.h2mai.com/dashboard/#/nc/form/087ef6cc-27e6-4295-89f4-ffd5a994939e`

## Files Modified
- `src/app/fonts/` — new directory with 3 woff2 files
- `public/images/` — new directory with logos, textures, shapes
- `src/styles/globals.css` — full rewrite
- `src/app/layout.tsx` — full rewrite

## Dependencies
None — can run in parallel with other tracks.
