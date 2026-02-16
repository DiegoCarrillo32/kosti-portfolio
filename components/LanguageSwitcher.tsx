"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@chakra-ui/react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button
      onClick={toggleLanguage}
      disabled={isPending}
      variant="ghost"
      color="brand.900"
      _hover={{ bg: "brand.200" }}
      size="sm"
      borderRadius="full"
    >
      {locale === "en" ? "ES" : "EN"}
    </Button>
  );
}
