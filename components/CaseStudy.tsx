import Image from "next/image";
import type { CaseStudy as CaseStudyData, Links } from "@/data/projects";
import { diagrams } from "./Diagrams";
import { ArrowUpRight, GitHubMark, Plus } from "./Icons";

export function StatusMark({ status }: { status: string }) {
  const live = status.startsWith("Live");
  const inProgress = status === "In progress";
  return (
    <span className="label inline-flex items-center gap-2 text-muted">
      <span
        aria-hidden="true"
        className={`size-1.5 rounded-full ${live ? "bg-accent" : inProgress ? "border border-muted" : "bg-muted"}`}
      />
      {status}
    </span>
  );
}

export function ProjectLinks({ name, links }: { name: string; links: Links }) {
  if (!links.demo && !links.source && !links.privateSource) return null;
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
      {links.demo ? (
        <li>
          <a
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
          >
            Live site
            <span className="sr-only"> for {name} (opens in a new tab)</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </li>
      ) : null}
      {links.source ? (
        <li>
          <a
            href={links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            <GitHubMark className="size-3.5" />
            Source
            <span className="sr-only"> code for {name} (opens in a new tab)</span>
          </a>
        </li>
      ) : null}
      {links.privateSource ? <li className="text-subtle">Private repository</li> : null}
    </ul>
  );
}

export default function CaseStudy({ project, index }: { project: CaseStudyData; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  const titleId = `${project.id}-name`;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="group/case grid gap-8 border-t border-line pt-10 md:pt-14 lg:grid-cols-12"
    >
      {/* Identity column: stays in view while the detail scrolls on large screens. */}
      <div className="reveal lg:col-span-3">
        <div className="lg:sticky lg:top-24">
          <p className="font-mono text-sm text-accent">{number}</p>
          <h3 id={titleId} className="mt-3 text-[1.75rem] font-medium leading-tight tracking-[-0.02em]">
            {project.name}
          </h3>
          <p className="mt-1 text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-col gap-1.5">
            <StatusMark status={project.status} />
            {project.context ? <span className="label text-subtle">{project.context}</span> : null}
          </div>
          <div className="mt-6">
            <ProjectLinks name={project.name} links={project.links} />
          </div>
        </div>
      </div>

      <div className="lg:col-span-9">
        <div className="reveal">
          {project.visual.kind === "diagram" ? (
            (() => {
              const Diagram = diagrams[project.visual.diagram];
              return <Diagram />;
            })()
          ) : (
            <figure className="overflow-hidden rounded-lg border border-line bg-surface">
              <Image
                src={project.visual.src}
                alt={project.visual.alt}
                width={project.visual.width}
                height={project.visual.height}
                sizes="(min-width: 1216px) 860px, (min-width: 768px) 72vw, 100vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover/case:scale-[1.015]"
              />
            </figure>
          )}
        </div>

        <dl className="reveal mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {[
            ["The product", project.product],
            ["The problem", project.problem],
            ["My role", project.role],
          ].map(([term, detail]) => (
            <div key={term}>
              <dt className="label text-subtle">{term}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-fg/90">{detail}</dd>
            </div>
          ))}
        </dl>

        <p className="reveal mt-8 font-mono text-[13px] leading-relaxed text-subtle">
          <span className="sr-only">Built with: </span>
          {project.stack.join("  ·  ")}
        </p>

        <details className="reveal group/details mt-8 border-y border-line">
          <summary className="flex items-center justify-between gap-4 py-4 text-[15px] text-fg transition-colors hover:text-accent">
            <span>
              Decisions and details<span className="sr-only"> for {project.name}</span>
            </span>
            <Plus className="size-4 text-muted transition-transform duration-300 group-open/details:rotate-45" />
          </summary>
          <div className="grid gap-8 pb-8 pt-2 md:grid-cols-2">
            <div>
              <h4 className="label text-subtle">Key decisions</h4>
              <ul className="mt-3 space-y-3">
                {project.decisions.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              {project.hardPart ? (
                <div>
                  <h4 className="label text-subtle">The hard part</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.hardPart}</p>
                </div>
              ) : null}
              {project.learned ? (
                <div>
                  <h4 className="label text-subtle">What I learned</h4>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.learned}</p>
                </div>
              ) : null}
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}
