import type { ProjectId } from "./projects";

// Each tool lists the projects on this site that use it.
// An empty list means it's in the toolkit (resume, coursework) but not shown in a project here.
export interface Tool {
  name: string;
  projects: ProjectId[];
}

export interface ToolGroup {
  layer: string;
  note: string;
  tools: Tool[];
}

export const stack: ToolGroup[] = [
  {
    layer: "Backend",
    note: "Where most of my current focus is.",
    tools: [
      { name: "Java", projects: ["ping"] },
      { name: "Spring Boot", projects: ["ping"] },
      { name: "REST API design", projects: ["ping", "apex", "taskflow"] },
      { name: "WebSocket / STOMP", projects: ["ping"] },
      { name: "JWT authentication", projects: ["ping"] },
      { name: "JPA / Hibernate", projects: [] },
      { name: "Node.js", projects: ["apex"] },
      { name: "Express", projects: ["apex"] },
      { name: "Go", projects: ["taskflow"] },
    ],
  },
  {
    layer: "Frontend",
    note: "The interfaces on top of the systems.",
    tools: [
      { name: "TypeScript", projects: ["ping", "learntogether", "solarhouse", "coastland"] },
      { name: "React", projects: ["apex", "solarhouse", "ping", "learntogether", "coastland", "epiphany"] },
      { name: "Next.js", projects: ["ping", "learntogether", "solarhouse", "coastland", "epiphany"] },
      { name: "Tailwind CSS", projects: ["solarhouse", "coastland", "epiphany"] },
      { name: "JavaScript", projects: ["apex", "taskflow"] },
      { name: "React Native", projects: [] },
    ],
  },
  {
    layer: "Data",
    note: "Server-side and on the device.",
    tools: [
      { name: "MongoDB", projects: ["ping", "apex", "epiphany"] },
      { name: "PostgreSQL", projects: ["solarhouse"] },
      { name: "Drizzle ORM", projects: ["solarhouse"] },
      { name: "IndexedDB", projects: ["learntogether"] },
      { name: "SQL", projects: ["solarhouse"] },
      { name: "MySQL", projects: [] },
    ],
  },
  {
    layer: "Quality & delivery",
    note: "Testing, offline support, shipping.",
    tools: [
      { name: "JUnit", projects: ["ping"] },
      { name: "Vitest", projects: ["learntogether"] },
      { name: "Service workers (Serwist)", projects: ["learntogether"] },
      { name: "Vercel", projects: ["apex", "coastland", "epiphany"] },
      { name: "Render", projects: ["taskflow"] },
      { name: "Railway", projects: [] },
      { name: "Cloudflare R2", projects: [] },
      { name: "Git & GitHub", projects: [] },
    ],
  },
];
