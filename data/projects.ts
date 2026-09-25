// Every fact in this file comes from the resume or the live projects.
// Optional fields (links, hardPart, learned) only render when they're filled in,
// so add them here as they become available instead of editing components.

export type ProjectId =
  | "ping"
  | "learntogether"
  | "solarhouse"
  | "apex"
  | "taskflow"
  | "coastland"
  | "epiphany";

export type Visual =
  | { kind: "diagram"; diagram: "ping" | "learntogether" | "solarhouse" }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

export interface Links {
  demo?: string;
  source?: string;
  privateSource?: boolean;
}

export interface CaseStudy {
  id: ProjectId;
  name: string;
  tagline: string;
  status: string;
  context?: string;
  product: string;
  problem: string;
  role: string;
  stack: string[];
  decisions: string[];
  hardPart?: string;
  learned?: string;
  visual: Visual;
  links: Links;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ping",
    name: "Ping",
    tagline: "Real-time messaging platform",
    status: "Live · in progress",
    product:
      "A full-stack messaging app with live chat, presence and read receipts.",
    problem:
      "Chat only feels real if messages, presence and receipts arrive instantly. A messaging app also holds private conversations and user-uploaded files, so access has to be airtight.",
    role: "Full stack: Spring Boot and MongoDB on the backend, Next.js and TypeScript on the client.",
    stack: ["Java", "Spring Boot", "MongoDB", "WebSocket / STOMP", "JWT", "Next.js", "TypeScript", "JUnit"],
    decisions: [
      "JWT-secured REST APIs for request/response work.",
      "WebSocket with STOMP for everything that has to be live: messages, presence and read receipts.",
      "Access controls that fail closed. If access can't be confirmed, the request is refused.",
      "A security-hardened pipeline for media uploads.",
      "26 JUnit tests covering the upload pipeline and access rules.",
    ],
    hardPart:
      "File uploads are one of the easiest ways into an application. The upload pipeline was hardened and the access rules fail closed, with tests behind both.",
    visual: { kind: "diagram", diagram: "ping" },
    links: { demo: "https://ping.ebitimi.dev", source: "https://github.com/prosperDBdev/Ping" },
  },
  {
    id: "learntogether",
    name: "LearnTogether",
    tagline: "Offline-first accessible learning app",
    status: "Live",
    product:
      "An accessible learning PWA built around a real learner with cerebral palsy.",
    problem:
      "Generic learning tools assume a generic learner. This one had to fit one specific person, and be ready whenever they are, whether there's a connection or not.",
    role: "Designed and built the app, including a finger-tracing engine written from scratch in TypeScript.",
    stack: ["Next.js 16", "TypeScript", "IndexedDB", "Serwist", "Vitest"],
    decisions: [
      "Offline by default: a Serwist service worker precaches the app.",
      "App state persists in IndexedDB on the device.",
      "A custom finger-tracing engine, written from scratch in TypeScript.",
      "340+ tests across the app, written with Vitest.",
    ],
    hardPart:
      "Designing for one real learner instead of an imagined average user. That's what led to building the tracing engine from scratch.",
    visual: { kind: "diagram", diagram: "learntogether" },
    links: { demo: "https://learn-together-umber.vercel.app", privateSource: true },
  },
  {
    id: "solarhouse",
    name: "SolarHouse NG",
    tagline: "Production website for a client",
    status: "Live · client work",
    context: "Deexon Solutions · 2026",
    product:
      "The production marketing website for SolarHouse NG, with a shop and a quote request system.",
    problem:
      "The client needed a real web presence but had no design files. The only brief was their social media.",
    role: "Frontend Developer at Deexon Solutions. Built it end to end, and now own maintenance and new features on the live site.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "PostgreSQL", "Drizzle ORM"],
    decisions: [
      "Built on Next.js 16, React 19, TypeScript and Tailwind CSS v4.",
      "A shop page with WhatsApp-based ordering.",
      "A quote request system backed by PostgreSQL through Drizzle ORM.",
      "Ongoing ownership after launch: maintenance and feature work on the live site.",
    ],
    hardPart:
      "No design files. The visual direction had to come from the client's social media alone.",
    visual: { kind: "diagram", diagram: "solarhouse" },
    links: { demo: "https://solar-house-ng.vercel.app" },
  },
  {
    id: "apex",
    name: "Apex Home Stores",
    tagline: "Full-stack e-commerce platform",
    status: "Live",
    product: "A furniture e-commerce store built on the MERN stack.",
    problem:
      "A store only works if the unglamorous parts do: accounts, a cart that keeps its state, and products someone can actually manage.",
    role: "Full stack: REST API with Node.js, Express and MongoDB, and a React interface.",
    stack: ["MongoDB", "Express", "React", "Node.js", "REST"],
    decisions: [
      "RESTful APIs for products and the cart.",
      "Authentication and product management.",
      "Responsive UI, deployed to Vercel.",
    ],
    visual: {
      kind: "image",
      src: "/images/projects/apex-home-stores.webp",
      alt: "Apex Home Furnishings storefront showing a Featured Collections grid of sofas and chairs with prices in naira.",
      width: 1600,
      height: 782,
    },
    links: {
      demo: "https://apex-home-stores.vercel.app",
      source: "https://github.com/Ebitimiebelike/ApexHomeStores",
    },
  },
];

export interface OtherProject {
  id: ProjectId;
  name: string;
  summary: string;
  stack: string[];
  status: string;
  image?: { src: string; alt: string };
  links: Links;
}

export const otherProjects: OtherProject[] = [
  {
    id: "taskflow",
    name: "TaskFlow API",
    summary: "A REST API in Go with CRUD operations and JSON persistence, plus a small frontend.",
    stack: ["Go", "HTML", "CSS", "JavaScript"],
    status: "Live",
    image: {
      src: "/images/projects/task-flow.webp",
      alt: "TaskFlow interface with done, in-progress and total counters and a form to add a task.",
    },
    links: {
      demo: "https://taskflow-go.onrender.com",
      source: "https://github.com/Ebitimiebelike/taskflow-go",
    },
  },
  {
    id: "coastland",
    name: "Coastland Energy Logistics",
    summary: "A corporate website for a maritime logistics company.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live",
    image: {
      src: "/images/projects/coastal-energy.webp",
      alt: "Coastland Energy Logistics homepage with the headline Navigating the Future of Marine Logistics over a photo of a vessel.",
    },
    links: { demo: "https://coastal-energy.vercel.app", privateSource: true },
  },
  {
    id: "epiphany",
    name: "Epiphany Properties",
    summary: "A real estate site for presenting property listings in Lagos.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS"],
    status: "Live",
    image: {
      src: "/images/projects/epiphany-homes.webp",
      alt: "Epiphany Properties homepage with the headline Sell Properties Faster in Lagos and WhatsApp contact buttons.",
    },
    links: { demo: "https://epiphany-homes-3a84.vercel.app" },
  },
];

export const projectNames: Record<ProjectId, string> = Object.fromEntries(
  [...caseStudies, ...otherProjects].map((p) => [p.id, p.name]),
) as Record<ProjectId, string>;
