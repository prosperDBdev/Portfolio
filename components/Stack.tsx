import { caseStudies, otherProjects } from "@/data/projects";
import { stack } from "@/data/skills";
import { ChapterHeader, NextChapter } from "./Chapter";
import StackExplorer from "./StackExplorer";

// Only offer projects that actually appear in the stack mapping.
const mapped = new Set(stack.flatMap((g) => g.tools.flatMap((t) => t.projects)));
const options = [...caseStudies, ...otherProjects]
  .filter((p) => mapped.has(p.id))
  .map((p) => ({ id: p.id, name: p.name }));

export default function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="page py-20 md:py-28">
      <ChapterHeader
        id="stack"
        title="The stack, mapped to the work."
        lead="Grouped by layer, and tied to the projects that use it. Pick a project to see exactly what it's made of."
      />

      <div className="reveal mt-14 md:mt-20">
        <StackExplorer groups={stack} options={options} />
      </div>

      <NextChapter to="record">Claims are cheap. Here&apos;s what you can check for yourself.</NextChapter>
    </section>
  );
}
