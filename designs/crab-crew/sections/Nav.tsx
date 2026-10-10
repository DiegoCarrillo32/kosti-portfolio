"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Button, Crab } from "../vendor/crab-crew";
import { DIEGO } from "../looks";
import { NAV_SECTIONS } from "@/content/cv";
import { useDesign } from "@/designs/DesignProvider";
import { isDesignId } from "@/designs/ids";
import { useLocaleToggle } from "@/hooks/useLocaleToggle";

const noop = () => () => {};

function ThemeToggle() {
  const t = useTranslations("CrabCrew");
  const { resolvedTheme, setTheme } = useTheme();
  // The theme is only known in the browser; render nothing on the server.
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  if (!mounted) return null;

  const next = resolvedTheme === "dark" ? "light" : "dark";
  const nextLabel = t(next === "dark" ? "night" : "day");
  return (
    <Button
      variant="quiet"
      size="sm"
      onClick={() => setTheme(next)}
      aria-label={t("theme", { mode: nextLabel })}
    >
      {nextLabel}
    </Button>
  );
}

function DesignSwitcher() {
  const t = useTranslations("Designs");
  const { design, designs, setDesign } = useDesign();
  return (
    <label>
      <span className="cv-sr-only">{t("label")}</span>
      <select
        className="cc-input cv-select"
        value={design}
        onChange={(e) => {
          if (isDesignId(e.target.value)) setDesign(e.target.value);
        }}
      >
        {designs.map((id) => (
          <option key={id} value={id}>
            {t(id)}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Nav() {
  const t = useTranslations("Navbar");
  const tc = useTranslations("CrabCrew");
  const { nextLocale, toggleLocale, isPending } = useLocaleToggle();

  return (
    <header className="cv-nav">
      <a className="cv-sr-only cv-skip" href="#main">
        {tc("skip")}
      </a>
      <div className="cv-wrap">
        <div className="cv-nav-bar">
          <a className="cv-brand" href="#top">
            <Crab look={DIEGO} pose="walk" crop="portrait" scale={2} still alt="" />
            <span className="cv-brand-name">Diego Carrillo</span>
          </a>
          <div className="cv-controls">
            <DesignSwitcher />
            <ThemeToggle />
            <Button
              variant="quiet"
              size="sm"
              onClick={toggleLocale}
              disabled={isPending}
              aria-label={tc("language")}
            >
              {nextLocale.toUpperCase()}
            </Button>
          </div>
        </div>
        <nav className="cv-nav-links">
          {NAV_SECTIONS.map((id) => (
            <a key={id} className="cc-btn cc-btn--quiet cc-btn--sm" href={`#${id}`}>
              {t(id)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
