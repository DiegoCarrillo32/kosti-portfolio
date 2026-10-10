"use client";

import { useTranslations } from "next-intl";
import { Chip, Crab, Panel, PixelIcon } from "../vendor/crab-crew";
import { LOOKS, named } from "../looks";
import { PROJECTS } from "@/content/cv";

export default function Projects() {
  const t = useTranslations("Projects");
  const tc = useTranslations("CrabCrew");

  return (
    <section className="cv-section" id="projects" aria-labelledby="cv-projects">
      <h2 className="cv-title" id="cv-projects">
        {t("title")}
      </h2>
      <div className="cv-grid">
        {PROJECTS.map((project) => {
          const title = t(`list.${project.id}.title`);
          const look = named(LOOKS.projects[project.id], title);
          return (
            <div className="cv-lift" key={project.id}>
              <Panel edge={look} className="cv-tile">
                <div className="cv-tile-head">
                  <Crab look={look} pose="walk" crop="portrait" still alt="" />
                  <h3 className="cv-tile-name">{title}</h3>
                </div>
                <p className="cv-tile-text">{t(`list.${project.id}.description`)}</p>
                <div className="cv-chips">
                  {(t.raw(`list.${project.id}.tech`) as string[]).map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
                <div className="cv-tile-foot">
                  <Chip tone={project.method === "ai" ? "clawd" : "success"} dot>
                    {t(`methods.${project.method}`)}
                  </Chip>
                  <a
                    className="cc-btn cc-btn--secondary cc-btn--sm"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${tc("visit")}: ${title}`}
                  >
                    <span>{tc("visit")}</span>
                    <span className="cc-btn-icon" aria-hidden>
                      <PixelIcon name="arrow-right" size={12} />
                    </span>
                  </a>
                </div>
              </Panel>
            </div>
          );
        })}
      </div>
    </section>
  );
}
