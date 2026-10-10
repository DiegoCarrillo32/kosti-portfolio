"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

// Shared by every design: light/dark lives on <html class="dark">.
export function Provider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      disableTransitionOnChange
      defaultTheme="dark"
    >
      {children}
    </NextThemesProvider>
  );
}
