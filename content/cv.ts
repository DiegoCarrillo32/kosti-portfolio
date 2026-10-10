// CV data shared by every design. Text lives in messages/{en,es}.json;
// this file holds the structure and anything that is not translated.

export const CONTACT = {
  email: "diegocarrilloa@outlook.com",
  github: "https://github.com/DiegoCarrillo32",
  githubUser: "DiegoCarrillo32",
  linkedin: "https://linkedin.com/in/diegocarrillodev",
  resume: "/CVDiegoC.pdf",
} as const;

export type ProjectMethod = "ai" | "organic";

export const PROJECTS: { id: string; url: string; method: ProjectMethod }[] = [
  {
    id: "portfolio",
    url: "https://diegocarrillo.com",
    method: "ai",
  },
  {
    id: "cafedostazas",
    url: "https://cafedostazas.com",
    method: "organic",
  },
  {
    id: "samanthazul",
    url: "https://www.samanthazul.com/", // Placeholder
    method: "organic",
  },
  {
    id: "volcanicvillas",
    url: "https://www.arenalvolcanicvillas.com/", // Placeholder
    method: "organic",
  },
];

/** Newest first. The first job is the current one. */
export const JOB_KEYS = ["konrad", "plan21", "nativo"] as const;

export type TechCategory = "languages" | "frameworks" | "tools";

export const TECHNOLOGIES: Record<TechCategory, string[]> = {
  languages: [
    "Java",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  frameworks: ["React", "Angular", "Spring Boot", "Express", "Android", "Compose"],
  tools: ["Git", "MongoDB", "Azure (Microsoft)", "Docker", "GraphQL", "Tailwind"],
};

export const TECH_CATEGORIES = Object.keys(TECHNOLOGIES) as TechCategory[];

export const NAV_SECTIONS = [
  "about",
  "projects",
  "experience",
  "technologies",
  "skills",
] as const;
