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
  projectType?: string;
  role?: string;
  timeline?: string;
  user?: string;
  userStory?: string;
  scenario?: string;
  demoPath?: string[];
  decisions?: { title: string; detail: string }[];
  disclosure?: string;
}
export interface PublicProject extends WorkStory {
  repository: string;
  status: "featured" | "earlier-work";
}
export interface SkillGroup {
  title: string;
  skills: string[];
}

export const publicProjects: PublicProject[] = [
  {
    slug: "disclosuretrace",
    eyebrow: "Personal project",
    title: "Disclosure Trace",
    summary:
      "An on-demand SEC filing workspace that shows exactly how a company’s annual Risk Factors disclosure changed.",
    projectType: "Personal product",
    role: "Product design and full-stack product engineering",
    timeline: "One-week independent build · 2026",
    user: "A research-oriented reader comparing a company’s annual risk disclosures",
    userStory:
      "As a reader reviewing a new annual filing, I need to see the exact wording that changed and return to both sources so that I can investigate without relying on an untraceable summary.",
    scenario:
      "A company has filed a new 10-K. The reader needs to retrieve the correct annual filings, isolate Item 1A, distinguish wording edits from document noise, verify the original context, and preserve follow-up questions.",
    demoPath: [
      "Enter a public-company ticker to retrieve its latest two annual 10-Ks from SEC EDGAR.",
      "Filter to modified wording, move through the review queue, and inspect prior and current SEC context.",
      "Save a browser-local note, reload it, and export the comparison notes as Markdown.",
    ],
    decisions: [
      {
        title: "Live retrieval with a reliable fallback",
        detail:
          "The primary path resolves a ticker, discovers the latest two 10-Ks, and generates the comparison on demand. Saved verified examples keep the workflow available during SEC outages and make automated tests deterministic.",
      },
      {
        title: "Textual evidence instead of generated interpretation",
        detail:
          "The comparison classifies added, removed, and modified wording without turning those edits into unsupported judgments about materiality or investment significance.",
      },
      {
        title: "Useful notes without an account system",
        detail:
          "Validated plain-text notes remain in the browser and export to Markdown, completing the research loop without storing personal research on a server.",
      },
    ],
    context:
      "Comparing two long filings side by side makes it difficult to preserve exact wording, source context, review position, and follow-up notes.",
    challenge:
      "Turn inconsistent public filing HTML into a trustworthy review workflow without hiding uncertainty, overloading the SEC, or converting textual changes into financial conclusions.",
    approach: [
      "Built a server-side pipeline for ticker resolution, filing discovery, SEC retrieval, Item 1A boundary validation, and deterministic alignment.",
      "Defined typed contracts for filing metadata, provenance, exclusions, change spans, and API responses.",
      "Separated URL-owned review state, asynchronous source state, transient interface state, and browser-local research notes.",
      "Designed explicit loading, unavailable, partial, empty, retry, and local-storage failure paths, then tested the workflow across desktop and mobile.",
    ],
    outcome:
      "Shipped a public Next.js product that compares the latest compatible annual filings on demand, preserves direct SEC provenance, supports a no-account research workflow, and retains verified examples for resilience.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Data pipelines",
      "Accessibility",
      "Playwright",
    ],
    evidence: [
      {
        label: "Public artifact",
        detail: "The source repository and production application are public.",
        kind: "public-artifact",
      },
      {
        label: "Live product scope",
        detail:
          "Ticker lookup, latest-filing discovery, server-side SEC retrieval, Item 1A extraction, and source-linked comparison run on demand.",
        kind: "verified-scope",
      },
      {
        label: "Verified quality",
        detail:
          "CI verifies typed contracts, parsing, deterministic alignment, accessibility behavior, production builds, and desktop/mobile browser workflows.",
        kind: "verified-outcome",
      },
    ],
    repository: "https://github.com/nora-rasuli/disclosuretrace",
    status: "featured",
    links: [
      {
        label: "Open demo",
        href: "https://disclosuretrace.vercel.app",
        kind: "demo",
      },
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/disclosuretrace",
        kind: "source",
      },
    ],
  },
  {
    slug: "career-tracker",
    eyebrow: "Personal project",
    title: "Career Tracker",
    summary:
      "A focused 12-week job-search and interview-preparation tracker that works without an account or backend.",
    projectType: "Personal utility",
    role: "Product design and frontend engineering",
    timeline: "Independent project",
    user: "A job seeker managing a long, multi-track search",
    userStory:
      "As a job seeker, I need one place to see what matters this week so that applications, interview preparation, and follow-ups do not disappear into separate notes.",
    scenario:
      "The search has entered week four. Applications are moving at different speeds, preparation tasks are scattered, and the user needs to decide what to do next without rebuilding a plan every morning.",
    demoPath: [
      "Choose a start date to generate the 12-week plan.",
      "Mark this week’s work complete and review overall progress.",
      "Export a backup, reset the tracker, and restore the saved state.",
    ],
    decisions: [
      {
        title: "Local-first instead of account-first",
        detail:
          "Browser storage removes onboarding friction and keeps personal job-search data off a server, while JSON export provides an explicit recovery path.",
      },
      {
        title: "A weekly plan instead of another application database",
        detail:
          "The product emphasizes consistent action and interview preparation rather than duplicating a spreadsheet or applicant-tracking system.",
      },
    ],
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
        label: "Open demo",
        href: "https://nora-rasuli.github.io/career-tracker/",
        kind: "demo",
      },
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/career-tracker",
        kind: "source",
      },
    ],
  },
  {
    slug: "nutrifood",
    eyebrow: "Personal project",
    title: "NutriFood",
    summary:
      "A meal-planning application integrating recipe data with calorie and meal-plan workflows.",
    projectType: "Independent concept",
    role: "Product design and frontend engineering",
    timeline: "Personal project",
    user: "A busy home cook planning meals around a daily calorie target",
    userStory:
      "As a home cook with limited planning time, I need recipes that fit my daily target so that I can assemble a realistic meal plan without calculating every ingredient manually.",
    scenario:
      "It is Sunday evening and the user needs a workable plan for the week. They know their nutrition target but do not want to compare recipes across multiple tabs and manually total each day.",
    disclosure:
      "Independent concept project using a fictional user scenario and external recipe data.",
    demoPath: [
      "Enter personal inputs to calculate a daily target.",
      "Browse recipe options returned from the recipe API.",
      "Save meals and assemble a plan around the target.",
    ],
    decisions: [
      {
        title: "Connect calculation to action",
        detail:
          "The nutrition estimate becomes useful only when it immediately shapes recipe discovery and meal selection.",
      },
      {
        title: "Treat external data as unreliable",
        detail:
          "Recipe-driven interfaces need explicit loading, missing-data, and API-failure behavior because third-party results are incomplete by nature.",
      },
    ],
    context:
      "A personal exploration of API-driven meal planning and nutrition workflows.",
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
  {
    slug: "giant-pennies",
    eyebrow: "Personal project",
    title: "Giant Pennies",
    summary:
      "A React application exploring authentication flows, dashboard navigation, and Tailwind CSS.",
    projectType: "Independent concept",
    role: "Frontend engineering",
    timeline: "Personal project",
    user: "A member returning to a private financial dashboard",
    userStory:
      "As a returning member, I need to enter a protected workspace and understand its navigation quickly so that I can reach the account task I came to complete.",
    scenario:
      "The user arrives from a saved bookmark and must move from sign-in to a multi-section dashboard without losing confidence about where they are or what is protected.",
    disclosure:
      "Independent concept project using a fictional product and user scenario.",
    demoPath: [
      "Open the sign-in experience and review validation behavior.",
      "Enter the protected dashboard shell.",
      "Move between primary dashboard destinations at desktop and mobile widths.",
    ],
    decisions: [
      {
        title: "Make route structure visible",
        detail:
          "The project focuses on predictable navigation and clear page hierarchy rather than simulating a large financial data model.",
      },
      {
        title: "Use a constrained component vocabulary",
        detail:
          "Repeated layout and interaction patterns keep a multi-route interface consistent while the project remains small.",
      },
    ],
    context:
      "A personal exploration of multi-route application structure and dashboard interaction patterns.",
    challenge:
      "Build a multi-route React interface and deploy it as a working application.",
    approach: [
      "Built with React and JavaScript.",
      "Styled with Tailwind CSS.",
      "Deployed to Vercel.",
    ],
    outcome: "A working public demo and source repository are available.",
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
