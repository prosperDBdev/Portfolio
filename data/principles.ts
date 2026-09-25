import type { ProjectId } from "./projects";

export interface Principle {
  area: string;
  title: string;
  body: string;
  evidence: ProjectId[];
}

// Each principle has to point at a project where it actually happened.
export const principles: Principle[] = [
  {
    area: "Security",
    title: "Fail closed.",
    body: "If the system can't confirm that someone is allowed to do something, the answer is no. Ping's access controls deny by default, its media upload pipeline is hardened, and JUnit tests cover both.",
    evidence: ["ping"],
  },
  {
    area: "Architecture",
    title: "Match the tool to the job.",
    body: "Ping uses JWT-secured REST for request/response work and WebSocket/STOMP for anything live. Data goes where it fits: MongoDB for Ping, PostgreSQL through Drizzle for SolarHouse's quote requests, and IndexedDB on the device for LearnTogether.",
    evidence: ["ping", "solarhouse", "learntogether"],
  },
  {
    area: "Resilience",
    title: "Treat the network as optional.",
    body: "LearnTogether precaches itself with a service worker and keeps its state in IndexedDB, so it keeps working without a connection. That matters anywhere connectivity is unreliable.",
    evidence: ["learntogether"],
  },
  {
    area: "Testing",
    title: "Prove it with tests.",
    body: "LearnTogether has more than 340 tests. Ping has 26 JUnit tests on its security-critical paths. Tests are how I know a change didn't quietly break something I can't see.",
    evidence: ["learntogether", "ping"],
  },
  {
    area: "Product",
    title: "Build for the real user.",
    body: "LearnTogether was built around one real learner with cerebral palsy, not an imagined average user. Designing for them meant writing a finger-tracing engine from scratch.",
    evidence: ["learntogether"],
  },
  {
    area: "Delivery",
    title: "Own it after it ships.",
    body: "I built SolarHouse NG from nothing but the client's social media, then kept going: a shop with WhatsApp ordering, a PostgreSQL-backed quote system, and ongoing work on the live site.",
    evidence: ["solarhouse"],
  },
];
