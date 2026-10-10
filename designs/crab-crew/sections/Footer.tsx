"use client";

import { useTranslations } from "next-intl";
import { EmptyState, Facts } from "../vendor/crab-crew";
import { DIEGO } from "../looks";
import { CONTACT } from "@/content/cv";

export default function Footer() {
  const t = useTranslations("CrabCrew");
  const tf = useTranslations("Footer");

  return (
    <footer className="cv-footer">
      <div className="cv-wrap">
        <EmptyState
          look={DIEGO}
          pose="sleep"
          title={t("endTitle")}
          action={
            <div className="cv-links">
              <a className="cc-btn cc-btn--primary cc-btn--sm" href={`mailto:${CONTACT.email}`}>
                {t("contact")}
              </a>
              <a
                className="cc-btn cc-btn--secondary cc-btn--sm"
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="cc-btn cc-btn--secondary cc-btn--sm"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          }
        >
          {t("endText")}
        </EmptyState>
        <Facts
          items={[
            `© ${new Date().getFullYear()} Diego Carrillo Arroyo`,
            tf("rights"),
            t("credit"),
          ]}
        />
      </div>
    </footer>
  );
}
