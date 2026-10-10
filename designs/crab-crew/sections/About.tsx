"use client";

import { useTranslations } from "next-intl";
import { Panel } from "../vendor/crab-crew";

export default function About() {
  const t = useTranslations("About");
  return (
    <section className="cv-section" id="about" aria-labelledby="cv-about">
      <h2 className="cv-title" id="cv-about">
        {t("title")}
      </h2>
      <div className="cv-lift">
        <Panel>
          <p className="cv-text">{t("content")}</p>
        </Panel>
      </div>
    </section>
  );
}
