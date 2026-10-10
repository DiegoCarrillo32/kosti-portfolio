"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button, PixelIcon } from "../vendor/crab-crew";

export default function ScrollToTop() {
  const t = useTranslations("CrabCrew");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="cv-top">
      <Button
        variant="secondary"
        size="sm"
        aria-label={t("top")}
        icon={<PixelIcon name="arrow-up" size={12} />}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
