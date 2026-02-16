"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-doto)" },
        body: { value: "var(--font-roboto)" },
      },
      colors: {
        brand: {
          900: { value: "#09637E" }, // Deep Teal
          800: { value: "#088395" }, // Teal
          700: { value: "#4A9CA8" }, // Generated mid-tone
          600: { value: "#7AB2B2" }, // Light Teal
          500: { value: "#A0C9C9" },
          400: { value: "#C6E0E0" },
          300: { value: "#D9EBEB" },
          200: { value: "#EBF4F6" }, // Lightest
          100: { value: "#F5F9FA" },
        },
        custom: {
          primary: { value: "#09637E" },
          secondary: { value: "#088395" },
          accent: { value: "#7AB2B2" },
          bg: { value: "#EBF4F6" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <NextThemesProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme="dark"
      >
        {children}
      </NextThemesProvider>
    </ChakraProvider>
  );
}
