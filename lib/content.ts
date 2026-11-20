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
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
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
    slug: "move-canvas",
    eyebrow: "Personal project",
    title: "Move Canvas",
    summary:
      "A browser-based motion platform where phones become camera controllers for multiplayer games, focused movement practice, and an optional live player view on a shared display.",
    projectType: "Personal interactive product",
    role: "Product design and full-stack product engineering",
    timeline: "Independent product build · 2026",
    user: "A household or group that wants active, camera-based play without buying a console or dedicated motion sensor",
    userStory:
      "As a player, I want to use the phone and display I already own for an active game or guided practice session so setup is quick, multiple people can join, and I control whether my live camera appears on the TV.",
    scenario:
      "Friends want a shared motion game on the TV, while an individual player may want to practice a dance, mobility sequence, or specific tennis movement. Each phone must join reliably, analyze movement locally, and share only the state—or explicitly consented live view—the TV needs.",
    demoPath: [
      "Choose Motion Game, Dance Coach, or Tennis Coach on the shared display.",
      "Open the controller link on one or more phones and join the private room with a high-entropy possession code.",
      "Choose salsa, hip-hop, contemporary, yoga and mobility, or a forehand, backhand, serve, or volley practice focus.",
      "Select a built-in reference, upload a clip for scored local comparison, or find a YouTube video to use as an unscored visual reference.",
      "Arm hands-free calibration, step into frame, and optionally choose Show me on TV before practicing.",
      "Play or practice, then review team scores, player results, or bounded movement cues on the shared display.",
      "Save a game to My Space, publish it intentionally, or discover, like, and collect games from the public library.",
    ],
    decisions: [
      {
        title: "Keep analysis local; make video sharing explicit",
        detail:
          "Pose estimation, calibration, raw landmarks, reference media, and audio stay on the originating device. Private realtime channels carry semantic state. If the player separately enables Show me on TV, an encrypted WebRTC stream goes directly to the paired display and is never stored.",
      },
      {
        title: "Make the display and phones one recoverable system",
        detail:
          "An authoritative session clock, explicit state machine, and re-handshake protocol let either peer pause or stop safely and let a reloaded display restore ready, paused, or running state without resetting the session.",
      },
      {
        title: "Keep coaching useful and honestly bounded",
        detail:
          "Dance and tennis modes use deterministic, confidence-qualified 2D pose rules for built-in or uploaded clips. YouTube is kept to official search and playback because embedded video cannot be used as a dependable frame-analysis source.",
      },
      {
        title: "Design calibration for the distance it requires",
        detail:
          "A single tap arms a five-second capture window. The player can step back, establish full-body framing, and hear or read confirmation while neutral stance and comfortable range capture automatically.",
      },
      {
        title: "Separate private creation from public sharing",
        detail:
          "Games remain private in My Space until the creator chooses Publish. Supabase row-level security protects ownership, while a server-side trigger maintains trustworthy like counts for the public library.",
      },
    ],
    context:
      "Active games usually depend on a console, proprietary controllers, or a single small screen. Browser-capable TVs and phones already contain the display, camera, and networking needed for a lower-friction shared experience, but coordinating them safely creates real synchronization, privacy, and recovery problems.",
    challenge:
      "Build a multi-device motion product that feels coherent across a shared display and several phones, gives players direct control over live video sharing, recovers from peer reloads and tracking loss, and separates playful feedback from unsupported coaching claims.",
    approach: [
      "Designed three connected modes around a shared room model: a generated collect-and-dodge Motion Game, salsa/hip-hop/contemporary/mobility reference practice, and forehand/backhand/serve/volley shadow Tennis practice.",
      "Implemented anonymous authentication, private Supabase Realtime channels, exact-room authorization, named players, team and per-player scoring, and cross-room isolation.",
      "Built countdown-based hands-free calibration, confidence-qualified pose comparison, bundled reference clips, uploaded-video analysis, official YouTube search/embed, deterministic timing and phase analysis, and explicit loading, error, empty, and recovery states.",
      "Added a separately consented WebRTC player view so the TV can show the active person without uploading or persisting the stream; semantic practice still works if video connection fails.",
      "Added a creator library with private saves, intentional publishing, public discovery, likes, and Add to My Space, backed by scoped row-level security and server-owned like counts.",
      "Added strict boundary validation for stored and relayed data, keyboard and reduced-motion support, CI, security headers, deployment safeguards, and independent build, validation, audit, and live-review loops.",
    ],
    outcome:
      "Shipped a public Next.js and TypeScript product with three motion modes, multi-player private rooms, local-first movement analysis, optional peer-to-peer TV video, reference workflows, reconnect recovery, and a production-backed creator and community game library.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase Realtime",
      "WebRTC",
      "Computer vision UX",
      "Playwright",
    ],
    evidence: [
      {
        label: "Production workflow",
        detail:
          "Fresh-session verification covered multi-client synchronization, room isolation, reload recovery, private saves, intentional publishing, likes, collection, YouTube search, malformed-data handling, keyboard operation, and automated accessibility checks.",
        kind: "verified-outcome",
      },
      {
        label: "Release quality",
        detail:
          "CI passed formatting, linting, strict types, 42 unit and integration tests, a production build, dependency audit, and 12 Playwright scenarios. Browser verification established a real peer-to-peer media stream, and live checks confirmed the practice libraries, consent controls, eight YouTube results, and zero recent production errors.",
        kind: "verified-outcome",
      },
      {
        label: "Verified scope",
        detail:
          "Automated multi-browser flows and privacy boundaries were verified. Nora's physical phone/TV combination, restrictive-network TURN requirements, manual assistive-technology testing, coaching effectiveness, and measured latency were not established.",
        kind: "verified-scope",
      },
    ],
    disclosure:
      "Raw landmarks, uploaded reference media, and audio are not relayed. Camera video reaches the paired display only after the player explicitly enables an encrypted peer-to-peer live view, and it is not stored. YouTube videos are visual references only; scored comparison uses built-in or locally uploaded clips. Coaching modes provide bounded deterministic practice cues, not medical, injury-prevention, biomechanics, or professional instruction. Physical TV compatibility and coaching outcomes have not been established.",
    image: {
      src: "/projects/move-canvas-modes.png",
      alt: "Move Canvas mode selection for Motion Game, Dance Coach, and Tennis Coach",
      width: 1280,
      height: 1111,
    },
    repository: "https://github.com/nora-rasuli/move-canvas",
    status: "featured",
    links: [
      {
        label: "Open demo",
        href: "https://move-canvas.vercel.app",
        kind: "demo",
      },
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/move-canvas",
        kind: "source",
      },
    ],
  },
  {
    slug: "statechorus",
    eyebrow: "Personal project",
    title: "StateChorus",
    summary:
      "A local-first release-evidence workbench that turns real AI-interface traces into explainable accessibility findings and review-ready evidence.",
    projectType: "Personal developer tool",
    role: "Product design and frontend engineering",
    timeline: "One-week independent build · 2026",
    user: "An accessibility QA engineer reviewing a shared AI interface before release",
    userStory:
      "As an accessibility QA engineer, I need to capture a complete AI interaction, see exactly which observable promise changed, and preserve the evidence so that regressions are actionable and native review starts with useful context.",
    scenario:
      "A release changes streaming updates, a tool-approval prompt, and a stalled state. The reviewer needs to see which observable promise changed, what evidence supports the finding, and what remains outside browser-level authority.",
    demoPath: [
      "Download the Playwright capture helper, instrument a local or staging interface, and exercise one complete AI turn.",
      "Import the generated JSON trace to evaluate state order, focus, approval controls, transcript behavior, and live-status signals locally in the browser.",
      "Inspect expected versus observed evidence, then export a provenance-aware JSON or Markdown record for native assistive-technology review.",
    ],
    decisions: [
      {
        title: "Capture the product teams already test",
        detail:
          "A small Playwright adapter records declared browser-observable signals from a local or staging interface. StateChorus imports that trace instead of crawling arbitrary URLs or requiring production credentials.",
      },
      {
        title: "Keep analysis local and fail closed",
        detail:
          "The static app validates the complete semantic trajectory in browser memory. Malformed or incomplete traces produce visible recovery states and are never replaced with a sample result.",
      },
      {
        title: "Export lineage, then preserve the authority boundary",
        detail:
          "Evidence retains input identity, capture and analysis environments, events, findings, and integrity hashes. Even a local pass ends with native verification required; DOM evidence never becomes a screen-reader or WCAG verdict.",
      },
    ],
    context:
      "AI turns move through submission, thinking, approval, streaming, stalls, retries, and completion. Static scans can inspect a final DOM, but they do not explain whether that stateful sequence kept its observable accessibility promises.",
    challenge:
      "Build a deterministic test harness that catches meaningful interaction regressions without presenting local automation as native assistive-technology evidence.",
    approach: [
      "Defined a typed twelve-state contract plus a strict 1.1 trace schema that requires the complete ordered interaction trajectory and state-consistent semantic signals.",
      "Separated capture from analysis: the downloadable helper records a user-controlled interface, while pure local modules normalize observations, reduce semantic episodes, and evaluate invariants.",
      "Built JSON and Markdown exports with trace-native identity, separate capture and analysis environments, reproducible hashes, and no fixture lineage for user-supplied input.",
      "Kept an optional broken/fixed sample for orientation, then used independent verification loops to harden real-input validation, keyboard focus, evidence immutability, privacy, and failure recovery.",
    ],
    outcome:
      "Shipped a public React and TypeScript tool that accepts real Playwright traces, rejects incoherent evidence, exports reviewable records, and preserves an explicit route from local browser findings to qualified native review.",
    skills: [
      "React",
      "TypeScript",
      "Accessibility architecture",
      "Playwright",
      "Evidence provenance",
      "Product design",
    ],
    evidence: [
      {
        label: "Functional user-input path",
        detail:
          "A fresh non-corpus trace was captured in one browser context, imported in another, evaluated locally, and exported as JSON and Markdown with trace-native provenance.",
        kind: "verified-outcome",
      },
      {
        label: "Verified release gate",
        detail:
          "The dated 1.1 gate includes 42 Vitest checks, 24 rendered-browser corpus attempts, 19 Playwright checks, strict types, build, contrast, provenance, license, and claim checks.",
        kind: "verified-outcome",
      },
      {
        label: "Authority boundary",
        detail:
          "Results cover declared browser-observable behavior only; native assistive-technology and disabled-user testing were not performed.",
        kind: "verified-scope",
      },
    ],
    disclosure:
      "The bundled broken/fixed scenario is optional sample data. User-supplied traces are analyzed locally and are not uploaded by the static app. Browser-level results do not establish WCAG conformance, native screen-reader behavior, or disabled-user experience.",
    image: {
      src: "/projects/statechorus-setup-overview.png",
      alt: "StateChorus real-trace workflow with capture helper, local JSON import, and optional sample",
      width: 1280,
      height: 1250,
    },
    repository: "https://github.com/nora-rasuli/statechorus",
    status: "featured",
    links: [
      {
        label: "Open demo",
        href: "https://statechorus-eta.vercel.app/",
        kind: "demo",
      },
      {
        label: "View source",
        href: "https://github.com/nora-rasuli/statechorus",
        kind: "source",
      },
    ],
  },
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
