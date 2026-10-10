"use client";

import { useTranslations } from "next-intl";
import { Crab, Panel } from "../vendor/crab-crew";
import { LOOKS, named } from "../looks";

export default function SoftSkills() {
  const t = useTranslations("Skills");
  const skills = t.raw("list") as { title: string; description: string }[];

  return (
    <section className="cv-section" id="skills" aria-labelledby="cv-skills">
      <h2 className="cv-title" id="cv-skills">
        {t("title")}
      </h2>
      <div className="cv-grid">
        {skills.map((skill, i) => {
          const look = named(LOOKS.skills[i % LOOKS.skills.length], skill.title);
          return (
            <div className="cv-lift" key={skill.title}>
              <Panel edge={look} className="cv-tile">
                <div className="cv-tile-head">
                  <Crab look={look} pose="costume" crop="full" alt="" />
                  <h3 className="cv-tile-name">{skill.title}</h3>
                </div>
                <p className="cv-tile-text">{skill.description}</p>
              </Panel>
            </div>
          );
        })}
      </div>
    </section>
  );
}
