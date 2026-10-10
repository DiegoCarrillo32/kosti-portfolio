// Pure data about the available CV designs. No React here: middleware imports it.

export const DESIGN_IDS = ["classic", "crab-crew"] as const;

export type DesignId = (typeof DESIGN_IDS)[number];

export const DEFAULT_DESIGN: DesignId = "classic";

/** Cookie that remembers the visitor's chosen design. */
export const DESIGN_COOKIE = "cv-design";

/** Query param that picks a design from a shared link, e.g. `/en?design=crab-crew`. */
export const DESIGN_PARAM = "design";

export const DESIGN_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export function isDesignId(value: unknown): value is DesignId {
  return (
    typeof value === "string" &&
    (DESIGN_IDS as readonly string[]).includes(value)
  );
}
