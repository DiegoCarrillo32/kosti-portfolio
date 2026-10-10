"use client";

import { useTranslations } from "next-intl";
import { Facts, PixelIcon, SpeechBubble } from "../vendor/crab-crew";
import { DIEGO } from "../looks";
import { CONTACT, JOB_KEYS } from "@/content/cv";
import { useGithubCommits } from "@/hooks/useGithubCommits";

export default function Hero() {
  const t = useTranslations("Hero");
  const tc = useTranslations("CrabCrew");
  const tj = useTranslations("Experience.jobs");
  const { commits } = useGithubCommits();
  const current = JOB_KEYS[0];

  return (
    <section className="cv-section cv-hero" id="top" aria-labelledby="cv-name">
      <h1 className="cv-display" id="cv-name">
        {t("name")}
      </h1>
      <SpeechBubble look={DIEGO} pose="walk" speaker="Diego">
        {t("greeting")} Diego. {t("role")}.
      </SpeechBubble>
      <Facts
        items={[
          t("location"),
          tj(`${current}.role`),
          tj(`${current}.company`),
          commits !== null ? tc("commits", { count: commits }) : null,
        ]}
      />
      <div className="cv-actions">
        <a className="cc-btn cc-btn--primary cc-btn--md" href={`mailto:${CONTACT.email}`}>
          <span>{tc("contact")}</span>
          <span className="cc-btn-icon" aria-hidden>
            <PixelIcon name="arrow-right" size={12} />
          </span>
        </a>
        <a
          className="cc-btn cc-btn--secondary cc-btn--md"
          href={CONTACT.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tc("resume")}
        </a>
      </div>
    </section>
  );
}
