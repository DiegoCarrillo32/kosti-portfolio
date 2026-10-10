"use client";

import { Button } from "@chakra-ui/react";
import { useLocaleToggle } from "@/hooks/useLocaleToggle";

export default function LanguageSwitcher() {
  const { nextLocale, toggleLocale, isPending } = useLocaleToggle();

  return (
    <Button
      onClick={toggleLocale}
      disabled={isPending}
      variant="ghost"
      color="brand.900"
      _hover={{ bg: "brand.200" }}
      size="sm"
      borderRadius="full"
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}
