import { crabs } from "./vendor/crab-crew";
import type { Costume, CrabLook } from "./vendor/crab-crew";
import { JOB_KEYS, PROJECTS } from "@/content/cv";

type Look = Exclude<CrabLook, string | null>;

/** Diego's own crab. Teal, after the Classic design's brand colour. Never Clawd, which is Claude's. */
export const DIEGO: Look = {
  palette: "Teal",
  eye: "determined",
  texture: "cheeks",
  tier: "engineer",
  name: "Diego",
};

const SKILL_COSTUMES: Costume[] = ["astronaut", "detective", "engineer", "chef"];

// One pass over every crab on the page, so no two share a look. Clawd and Diego
// are taken first, which steers every other crab away from their colours.
// Seeded picks are deterministic, so server and client draw the same crabs.
function buildLooks() {
  const taken: Look[] = [crabs.CLAWD as Look, DIEGO].map(normalize);
  const pick = (seed: string) => {
    const look = crabs.pickLook(seed, taken);
    taken.push(look);
    return look;
  };
  const jobs = Object.fromEntries(JOB_KEYS.map((k) => [k, pick(`job:${k}`)]));
  const projects = Object.fromEntries(PROJECTS.map((p) => [p.id, pick(`project:${p.id}`)]));
  const skills = SKILL_COSTUMES.map((tier, i) => ({ ...pick(`skill:${i}`), tier }));
  return { jobs, projects, skills };
}

// pickLook compares palettes, eyes and markings by index, so name-based looks are converted first.
function normalize(look: Look): Look {
  const { palettes, eyes, textures } = crabs;
  const index = <T,>(list: T[], v: unknown, key?: keyof T) =>
    typeof v === "number"
      ? v
      : Math.max(0, list.findIndex((x) => (key ? x[key] : x) === v));
  return {
    ...look,
    palette: index(palettes, look.palette, "name"),
    eye: index(eyes, look.eye),
    texture: index(textures, look.texture),
  };
}

export const LOOKS = buildLooks();

/** A crab with its name replaced by what it stands for (a company, a project, a skill). */
export function named(look: Look, name: string): Look {
  return { ...look, name };
}

export function crabColor(look: Look) {
  return crabs.lookColor(look).body;
}
