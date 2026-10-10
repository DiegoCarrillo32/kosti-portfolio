import { Geist_Mono, Pixelify_Sans, Silkscreen } from "next/font/google";

// The three Crab Crew faces, under the variable names vendor/bundle.css reads.
// Not preloaded: only visitors who pick this design download them.

export const pixel = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  preload: false,
  fallback: ["Silkscreen", "ui-monospace", "monospace"],
});

export const label = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

export const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "SF Mono", "Menlo", "Consolas", "monospace"],
});

export const fontVariables = `${pixel.variable} ${label.variable} ${mono.variable}`;
