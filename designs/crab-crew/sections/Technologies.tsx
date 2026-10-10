"use client";

import { useTranslations } from "next-intl";
import { Chip, Panel, SectionLabel } from "../vendor/crab-crew";
import { TECHNOLOGIES, TECH_CATEGORIES } from "@/content/cv";

export default function Technologies() {
  const t = useTranslations("Technologies");

  return (
    <section className="cv-section" id="technologies" aria-labelledby="cv-tech">
      <h2 className="cv-title" id="cv-tech">
        {t("title")}
      </h2>
      <div className="cv-grid">
        {TECH_CATEGORIES.map((category) => (
          <Panel key={category}>
            <SectionLabel count={TECHNOLOGIES[category].length}>{t(category)}</SectionLabel>
            <div className="cv-chips">
              {TECHNOLOGIES[category].map((name) => (
                <Chip key={name}>{name}</Chip>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
