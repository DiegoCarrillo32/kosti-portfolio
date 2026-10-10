"use client";

import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";
import { CrewCard, CrewRow, Panel, SectionLabel } from "../vendor/crab-crew";
import { LOOKS, crabColor, named } from "../looks";
import { JOB_KEYS } from "@/content/cv";

// The current job is a crab at work; past jobs are crabs that are done.
export default function Experience() {
  const t = useTranslations("Experience");
  const tc = useTranslations("CrabCrew");
  const [current, ...past] = JOB_KEYS;

  const bullets = (key: string) => t.raw(`jobs.${key}.description`) as string[];
  const look = (key: string) => named(LOOKS.jobs[key], t(`jobs.${key}.company`));

  return (
    <section className="cv-section" id="experience" aria-labelledby="cv-experience">
      <h2 className="cv-title" id="cv-experience">
        {t("title")}
      </h2>

      <SectionLabel count={1}>{tc("running")}</SectionLabel>
      <div className="cv-job">
        <div className="cv-lift">
          <CrewCard
            look={look(current)}
            costume="engineer"
            role={t(`jobs.${current}.role`)}
            elapsed={t(`jobs.${current}.date`)}
            description={bullets(current)[0]}
          />
        </div>
        <Panel edge={look(current)}>
          <ul className="cv-bullets">
            {bullets(current)
              .slice(1)
              .map((line) => (
                <li key={line}>{line}</li>
              ))}
          </ul>
        </Panel>
      </div>

      <SectionLabel count={past.length}>{tc("done")}</SectionLabel>
      {past.map((key) => (
        <div
          className="cv-job"
          key={key}
          style={{ "--cc-edge": crabColor(LOOKS.jobs[key]) } as CSSProperties}
        >
          <CrewRow
            status="done"
            look={look(key)}
            description={t(`jobs.${key}.role`)}
            facts={[t(`jobs.${key}.date`)]}
          />
          <Panel edge={look(key)}>
            <ul className="cv-bullets">
              {bullets(key).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </Panel>
        </div>
      ))}
    </section>
  );
}
