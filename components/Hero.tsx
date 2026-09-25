import { chapters, site } from "@/data/site";
import { ArrowDown } from "./Icons";

const status = [
  { term: "Now", detail: "Frontend Developer at Deexon Solutions" },
  { term: "Building", detail: "Ping, real-time messaging on Spring Boot" },
  { term: "Studying", detail: "Software Engineering at NIIT, focused on enterprise Java" },
  { term: "Based in", detail: "Lagos, Nigeria (WAT, UTC+1)" },
];

// Each qualifier in the headline points at the project that proves it.
function Proof({ href, label, children }: { href: string; label: string; children: string }) {
  return (
    <a
      href={href}
      className="underline decoration-accent/60 decoration-1 underline-offset-[0.14em] transition-colors hover:decoration-accent"
    >
      {children}
      <span className="sr-only"> ({label})</span>
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="page flex min-h-[100svh] flex-col justify-between pt-28 pb-10 md:pt-40"
    >
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="intro-in label text-subtle" style={{ "--i": 0 } as React.CSSProperties}>
            {site.name} <span className="text-line-strong">/</span> {site.role}
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-[19ch] text-[clamp(2.25rem,1.45rem+3.4vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.035em]"
          >
            I build software that holds up{" "}
            <span className="text-muted">
              <Proof href="#ping" label="see the Ping case study">in real time</Proof>,{" "}
              <Proof href="#learntogether" label="see the LearnTogether case study">offline</Proof>, and{" "}
              <Proof href="#solarhouse" label="see the SolarHouse NG case study">in production</Proof>.
            </span>
          </h1>

          <p
            className="intro-in mt-8 max-w-[52ch] text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            I&apos;m Ebitimi, a full-stack developer who leans backend. I design
            systems in <span className="text-fg">Java and Spring Boot</span>, and
            build the <span className="text-fg">React and Next.js</span>{" "}
            interfaces that sit on top of them.
          </p>

          <div
            className="intro-in mt-10 flex flex-wrap items-center gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-white"
            >
              Explore my work
              <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-md border border-line-strong px-6 text-[15px] font-medium text-fg transition-colors hover:border-muted"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        <aside
          aria-label="Current status"
          className="intro-in self-end lg:col-span-4"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          <p className="label flex items-center gap-2 text-subtle">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Status
          </p>
          <dl className="mt-4 divide-y divide-line border-y border-line">
            {status.map((row) => (
              <div key={row.term} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-[15px] leading-snug">
                <dt className="label pt-0.5 text-subtle">{row.term}</dt>
                <dd className="text-fg/90">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <nav
        aria-label="Chapters on this page"
        className="intro-in mt-20 border-t border-line pt-5"
        style={{ "--i": 5 } as React.CSSProperties}
      >
        <ol className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
          {chapters.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="group label flex gap-2 text-subtle transition-colors hover:text-fg">
                <span className="text-accent/80 group-hover:text-accent">{c.number}</span>
                {c.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
