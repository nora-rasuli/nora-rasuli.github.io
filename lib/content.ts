export type EvidenceKind =
  "verified-outcome" | "verified-scope" | "public-artifact";
export interface Evidence {
  label: string;
  detail: string;
  kind: EvidenceKind;
}
export interface ExternalLink {
  label: string;
  href: string;
  kind: "source" | "demo" | "profile";
}
export interface WorkStory {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string[];
  outcome: string;
  skills: string[];
  evidence: Evidence[];
  confidentialityNote?: string;
  links?: ExternalLink[];
}
export interface PublicProject extends WorkStory {
  repository: string;
  status: "featured" | "earlier-work";
}
export interface SkillGroup {
  title: string;
  skills: string[];
}

export const professionalWork: WorkStory[] = [
  {
    slug: "knowledge-quality",
    eyebrow: "Professional work · GenAI",
    title: "Making AI knowledge quality explainable",
    summary:
      "A React and TypeScript interface that turns probabilistic quality signals into evidence content teams can review and act on.",
    context:
      "Enterprise knowledge teams need trustworthy content before agents and AI experiences can produce trustworthy answers.",
    challenge:
      "Duplicate and conflicting articles are not binary matches. The interface had to make embedding similarity, natural-language inference, and LLM verification understandable without overstating certainty.",
    approach: [
      "Structured model output into reviewable conflict evidence and confidence signals.",
      "Designed workflows for knowledge-base-wide findings and per-article quality checks.",
      "Built the product frontend in React and TypeScript as its first frontend engineer.",
    ],
    outcome:
      "The workflow helped content managers identify quality issues that affect both human agents and AI-generated answers.",
    skills: [
      "React",
      "TypeScript",
      "AI UX",
      "Complex state",
      "Information design",
    ],
    evidence: [
      {
        label: "Ownership",
        detail: "First frontend engineer on the product.",
        kind: "verified-scope",
      },
      {
        label: "Scope",
        detail: "Knowledge-base analysis and per-article quality review.",
        kind: "verified-scope",
      },
    ],
    confidentialityNote:
      "Product visuals and implementation details are omitted because this work is proprietary.",
  },
  {
    slug: "knowledge-gap-discovery",
    eyebrow: "Professional work · Zero to one",
    title: "Turning support signals into a knowledge roadmap",
    summary:
      "A GenAI product that ranks customer questions, detects knowledge gaps, and supports review of AI-generated answers and articles.",
    context:
      "Support transcripts and failed searches contain valuable demand signals, but their volume makes it difficult to decide what to create next.",
    challenge:
      "The interface had to connect source signals, business value, gap detection, generation, and human review in one legible workflow.",
    approach: [
      "Translated the initial Figma prototype into a production React and TypeScript application.",
      "Designed flows for question ranking, gap detection, instant-answer review, and article review.",
      "Delivered the initial frontend independently while partnering across product and AI workstreams.",
    ],
    outcome:
      "After a VP showcase, the company staffed a dedicated team; the product was adopted by three enterprise clients.",
    skills: [
      "React",
      "TypeScript",
      "Product ownership",
      "AI review workflows",
      "Figma",
    ],
    evidence: [
      {
        label: "Ownership",
        detail: "Sole frontend engineer on the initial build.",
        kind: "verified-scope",
      },
      {
        label: "Adoption",
        detail: "Adopted by three enterprise clients.",
        kind: "verified-outcome",
      },
    ],
    confidentialityNote:
      "Product visuals, customer identities, and implementation details are omitted because this work is proprietary.",
  },
  {
    slug: "geospatial-workspace",
    eyebrow: "Professional work · Data-heavy UI",
    title: "A faster workspace for complex map data",
    summary:
      "A Vue.js workspace that made civil and environmental map workflows more approachable for non-specialist teams.",
    context:
      "Large environmental and civil datasets need strong information hierarchy and responsive interaction, especially for non-GIS specialists.",
    challenge:
      "The platform needed a clearer workspace model, reusable interaction patterns, and better rendering behavior with large map datasets.",
    approach: [
      "Rebuilt the platform with a new toolbar and data-layer management.",
      "Introduced reusable Vue component patterns and accessibility improvements.",
      "Profiled and improved expensive rendering paths.",
    ],
    outcome:
      "The performance work reduced load times by 30% and improved responsiveness on large map datasets.",
    skills: [
      "Vue.js",
      "Geospatial UI",
      "Performance",
      "Accessibility",
      "Component architecture",
    ],
    evidence: [
      {
        label: "Measured result",
        detail: "30% reduction in load time.",
        kind: "verified-outcome",
      },
      {
        label: "Scope",
        detail: "Toolbar, map layers, and reusable components.",
        kind: "verified-scope",
      },
    ],
    confidentialityNote:
      "Client data, product visuals, and implementation details are omitted because this work is proprietary.",
  },
];

export const publicProjects: PublicProject[] = [
  {
    slug: "career-tracker",
    eyebrow: "Public build · Featured",
    title: "Career Tracker",
    summary:
      "A focused 12-week job-search and interview-preparation tracker that works without an account or backend.",
    context:
      "Long job searches create fragmented tasks and make progress difficult to see.",
    challenge:
      "Preserve useful progress without authentication, a database, or a build pipeline.",
    approach: [
      "Used browser storage for progress and start-date state.",
      "Added JSON backup and restore.",
      "Kept deployment intentionally static and dependency-light.",
    ],
    outcome:
      "The public build provides a complete local-first workflow with explicit backup and recovery behavior.",
    skills: [
      "Product scoping",
      "Local storage",
      "Backup and restore",
      "Static deployment",
    ],
    evidence: [
      {
        label: "Public artifact",
        detail: "Source and deployment workflow are publicly inspectable.",
        kind: "public-artifact",
      },
    ],
    repository: "https://github.com/nora-rasuli/career-tracker",
    status: "featured",
    links: [
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/career-tracker",
        kind: "source",
      },
    ],
  },
  {
    slug: "giant-pennies",
    eyebrow: "Earlier work",
    title: "Giant Pennies",
    summary:
      "An earlier React application exploring authentication flows, dashboard navigation, and Tailwind CSS.",
    context: "Retained as an honest snapshot of earlier frontend work.",
    challenge:
      "Build a multi-route React interface and deploy it as a working application.",
    approach: [
      "Built with React and JavaScript.",
      "Styled with Tailwind CSS.",
      "Deployed to Vercel.",
    ],
    outcome:
      "A working public demo and source repository remain available for historical context.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    evidence: [
      {
        label: "Public artifact",
        detail: "Source and live deployment are public.",
        kind: "public-artifact",
      },
    ],
    repository: "https://github.com/nora-rasuli/giant-pennies",
    status: "earlier-work",
    links: [
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/giant-pennies",
        kind: "source",
      },
      {
        label: "Open demo",
        href: "https://giant-pennies.vercel.app/login",
        kind: "demo",
      },
    ],
  },
  {
    slug: "nutrifood",
    eyebrow: "Earlier work",
    title: "NutriFood",
    summary:
      "An earlier meal-planning application integrating recipe data with calorie and meal-plan workflows.",
    context: "Retained as an honest snapshot of earlier API and product work.",
    challenge:
      "Connect user inputs, calculated nutrition needs, external recipe data, and saved meals.",
    approach: [
      "Integrated the Spoonacular API.",
      "Built BMR and meal-plan flows.",
      "Added saved-meal behavior.",
    ],
    outcome:
      "A public source repository and deployment document the original implementation.",
    skills: ["JavaScript", "API integration", "Product flows"],
    evidence: [
      {
        label: "Public artifact",
        detail: "Source and live deployment are public.",
        kind: "public-artifact",
      },
    ],
    repository: "https://github.com/nora-rasuli/Nutrifood-v2",
    status: "earlier-work",
    links: [
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/Nutrifood-v2",
        kind: "source",
      },
      {
        label: "Open demo",
        href: "https://nutrifood-v2.vercel.app",
        kind: "demo",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product engineering",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vue.js",
      "State management",
      "REST and GraphQL",
    ],
  },
  {
    title: "Quality",
    skills: [
      "Accessibility",
      "Performance",
      "Design systems",
      "Jest",
      "Playwright",
      "Responsive UI",
    ],
  },
  {
    title: "AI and complex data",
    skills: [
      "AI product interfaces",
      "Human review workflows",
      "Data visualization",
      "Geospatial UI",
    ],
  },
];
// Employer projects remain resume-only; the portfolio publishes personal work.
export const allWork: WorkStory[] = [...publicProjects];
export function getWorkBySlug(slug: string) {
  return allWork.find((item) => item.slug === slug);
}
