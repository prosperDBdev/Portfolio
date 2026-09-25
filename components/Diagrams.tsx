import type { ReactNode } from "react";

// Small system sketches for the case studies. They only show components
// named in the project write-ups, nothing inferred.

function Node({ kind, title, detail }: { kind: string; title: string; detail?: string }) {
  return (
    <div className="rounded-md border border-line-strong bg-raised px-4 py-3 md:flex md:min-h-[6rem] md:min-w-0 md:max-w-48 md:flex-1 md:flex-col md:justify-center">
      <p className="label text-subtle">{kind}</p>
      <p className="mt-1 font-medium leading-snug text-fg">{title}</p>
      {detail ? <p className="mt-1 text-sm leading-snug text-muted">{detail}</p> : null}
    </div>
  );
}

type Lane = { label: string; note?: string; live?: boolean };

function Connector({ lanes }: { lanes: Lane[] }) {
  const anyLive = lanes.some((l) => l.live);
  return (
    <div className="connector">
      <span className="connector-line" aria-hidden="true">
        {anyLive ? <span className="packet" /> : null}
      </span>
      {lanes.map((lane) => (
        <div key={lane.label} className="lane">
          <span className={`label ${lane.live ? "text-accent" : "text-muted"}`}>{lane.label}</span>
          <span className="lane-line" aria-hidden="true">
            {lane.live ? <span className="packet" /> : null}
          </span>
          {lane.note ? <span className="text-[13px] leading-snug text-subtle">{lane.note}</span> : null}
        </div>
      ))}
    </div>
  );
}

function Frame({ caption, children, notes }: { caption: string; children: ReactNode; notes: string[] }) {
  return (
    <figure className="rounded-lg border border-line bg-surface p-5 md:p-8">
      <figcaption className="label mb-6 flex items-center justify-between gap-4 text-subtle">
        <span>{caption}</span>
        <span aria-hidden="true" className="hidden text-line-strong sm:inline">System sketch</span>
      </figcaption>
      <div className="flow">{children}</div>
      <ul className="mt-8 flex flex-wrap gap-2 border-t border-line pt-5">
        {notes.map((note) => (
          <li
            key={note}
            className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-muted"
          >
            {note}
          </li>
        ))}
      </ul>
    </figure>
  );
}

export function PingDiagram() {
  return (
    <Frame
      caption="Ping: how a message moves"
      notes={["Access control fails closed", "Hardened media uploads", "26 JUnit tests"]}
    >
      <Node kind="Client" title="Next.js" detail="TypeScript" />
      <Connector
        lanes={[
          { label: "REST + JWT", note: "request / response" },
          { label: "WebSocket + STOMP", note: "messages, presence, read receipts", live: true },
        ]}
      />
      <Node kind="Server" title="Spring Boot" detail="Java" />
      <Connector lanes={[{ label: "Persistence" }]} />
      <Node kind="Data" title="MongoDB" />
    </Frame>
  );
}

export function LearnTogetherDiagram() {
  return (
    <Frame
      caption="LearnTogether: working without a network"
      notes={["Precached by a Serwist service worker", "Works offline", "340+ Vitest tests"]}
    >
      <Node kind="Learner" title="Finger tracing" detail="Touch input" />
      <Connector lanes={[{ label: "Strokes", note: "custom tracing engine" }]} />
      <Node kind="App" title="Next.js 16" detail="TypeScript" />
      <Connector lanes={[{ label: "Persist state", note: "on the device" }]} />
      <Node kind="Storage" title="IndexedDB" />
    </Frame>
  );
}

export function SolarHouseDiagram() {
  return (
    <Frame
      caption="SolarHouse NG: from brief to live site"
      notes={["Shop page with WhatsApp ordering", "Live in production", "Maintained after launch"]}
    >
      <Node kind="Brief" title="Social media only" detail="No design files" />
      <Connector lanes={[{ label: "Design + build", note: "end to end" }]} />
      <Node kind="Site" title="Next.js 16" detail="React 19, Tailwind CSS v4" />
      <Connector lanes={[{ label: "Quote requests", note: "through Drizzle ORM" }]} />
      <Node kind="Data" title="PostgreSQL" />
    </Frame>
  );
}

export const diagrams = {
  ping: PingDiagram,
  learntogether: LearnTogetherDiagram,
  solarhouse: SolarHouseDiagram,
};
