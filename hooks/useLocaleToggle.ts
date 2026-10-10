"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

/** Switches between English and Spanish, keeping the current path. */
export function useLocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const nextLocale = locale === "en" ? "es" : "en";

  const toggleLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return { locale, nextLocale, toggleLocale, isPending };
}
