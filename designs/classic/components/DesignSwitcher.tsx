"use client";

import { NativeSelect } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useDesign } from "@/designs/DesignProvider";
import { isDesignId } from "@/designs/ids";

export default function DesignSwitcher() {
  const t = useTranslations("Designs");
  const { design, designs, setDesign } = useDesign();

  return (
    <NativeSelect.Root size="sm" width="auto">
      <NativeSelect.Field
        aria-label={t("label")}
        value={design}
        onChange={(e) => {
          if (isDesignId(e.target.value)) setDesign(e.target.value);
        }}
        borderRadius="full"
        borderColor="brand.300"
        color="brand.900"
        _dark={{ color: "gray.300", borderColor: "gray.700" }}
      >
        {designs.map((id) => (
          <option key={id} value={id}>
            {t(id)}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
}
