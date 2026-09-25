import Image from "next/image";
import { caseStudies, otherProjects } from "@/data/projects";
import { ChapterHeader, NextChapter } from "./Chapter";
import CaseStudy, { ProjectLinks } from "./CaseStudy";

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="page py-20 md:py-28">
      <ChapterHeader
        id="work"
        title="Four projects, chosen for what they prove."
        lead="A real-time backend, an offline-first app, production client work and a full MERN build. Each one opens up to show the decisions behind it."
      />

      <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
        {caseStudies.map((project, i) => (
          <CaseStudy key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-24 border-t border-line pt-10 md:mt-32 md:grid md:grid-cols-12 md:gap-8 md:pt-14">
        <div className="reveal md:col-span-3">
          <h3 className="text-xl font-medium tracking-tight">Also shipped</h3>
          <p className="mt-2 text-[15px] text-muted">Smaller builds, all live.</p>
        </div>
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 md:col-span-9 md:mt-0 lg:grid-cols-3 lg:gap-6">
          {otherProjects.map((p) => (
            <li key={p.id} className="reveal group">
              {p.image ? (
                <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-surface">
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              ) : null}
              <h4 className="mt-4 font-medium text-fg">{p.name}</h4>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">{p.summary}</p>
              <p className="mt-2 font-mono text-[13px] text-subtle">
                <span className="sr-only">Built with: </span>
                {p.stack.join(" · ")}
              </p>
              <div className="mt-3">
                <ProjectLinks name={p.name} links={p.links} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <NextChapter to="thinking">
        That&apos;s what I built. Next, the reasoning that runs through it.
      </NextChapter>
    </section>
  );
}
