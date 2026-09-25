import { caseStudies, otherProjects } from "@/data/projects";
import { site } from "@/data/site";
import { ChapterHeader, NextChapter } from "./Chapter";
import { ProjectLinks, StatusMark } from "./CaseStudy";
import { ArrowUpRight } from "./Icons";

const all = [
  ...caseStudies.map((p) => ({ id: p.id, name: p.name, summary: p.tagline, stack: p.stack, status: p.status, links: p.links, context: p.context })),
  ...otherProjects.map((p) => ({ id: p.id, name: p.name, summary: p.summary, stack: p.stack, status: p.status, links: p.links, context: undefined })),
];

const liveLinks = all.filter((p) => p.links.demo).length;

// Every figure here is countable from the projects themselves. No rounding up.
const facts = [
  { value: String(liveLinks), label: "Live projects you can open right now" },
  { value: "1", label: "Production client site I maintain" },
  { value: "340+", label: "Tests on LearnTogether" },
  { value: "26", label: "JUnit tests on Ping's security paths" },
];

export default function Record() {
  return (
    <section id="record" aria-labelledby="record-title" className="page py-20 md:py-28">
      <ChapterHeader
        id="record"
        title="No inflated numbers. Just what exists."
        lead="Everything I've built that's on this page, where it stands, and where you can check it."
      />

      <dl className="reveal mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-20 lg:grid-cols-4">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col border-t border-line pt-5">
            <dt className="order-2 mt-2 text-sm leading-snug text-muted">{f.label}</dt>
            <dd className="order-1 text-[clamp(2rem,1.6rem+1.6vw,3rem)] font-medium leading-none tracking-[-0.03em] tabular-nums">
              {f.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="reveal mt-16 md:mt-24">
        <h3 className="label text-subtle">The ledger</h3>

        <div className="mt-4 hidden border-b border-line pb-3 md:grid md:grid-cols-12 md:gap-6">
          {["Project", "Built with", "Status", "Check it"].map((h, i) => (
            <span key={h} className={`label text-subtle ${["md:col-span-4", "md:col-span-3", "md:col-span-2", "md:col-span-3"][i]}`}>
              {h}
            </span>
          ))}
        </div>

        <ul className="border-t border-line md:border-t-0">
          {all.map((p) => (
            <li key={p.id} className="grid gap-3 border-b border-line py-5 md:grid-cols-12 md:gap-6">
              <div className="md:col-span-4">
                <p className="font-medium text-fg">{p.name}</p>
                <p className="mt-0.5 text-sm text-muted">{p.summary}</p>
              </div>
              <p className="font-mono text-[13px] leading-relaxed text-subtle md:col-span-3 md:pt-0.5">
                <span className="sr-only">Built with: </span>
                {p.stack.slice(0, 4).join(", ")}
              </p>
              <div className="flex flex-col gap-1 md:col-span-2 md:pt-0.5">
                <StatusMark status={p.status} />
                {p.context ? <span className="label text-subtle">{p.context}</span> : null}
              </div>
              <div className="md:col-span-3">
                {p.links.demo || p.links.source || p.links.privateSource ? (
                  <ProjectLinks name={p.name} links={p.links} />
                ) : (
                  <span className="text-[15px] text-subtle">No public link yet</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
          <a href={site.resume} className="group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent">
            Full history in my resume (PDF)
            <ArrowUpRight className="size-3.5" />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-fg"
          >
            GitHub profile<span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </p>
      </div>

      <NextChapter to="contact">You&apos;ve seen the work. Here&apos;s how to reach me.</NextChapter>
    </section>
  );
}
