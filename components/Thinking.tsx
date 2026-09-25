import { principles } from "@/data/principles";
import { projectNames } from "@/data/projects";
import { ChapterHeader, NextChapter } from "./Chapter";

export default function Thinking() {
  return (
    <section id="thinking" aria-labelledby="thinking-title" className="page py-20 md:py-28">
      <ChapterHeader
        id="thinking"
        title="How I think about building software."
        lead="Anyone can list technologies. These are the habits behind the projects above, and each one points to where it actually happened."
      />

      <ol className="mt-16 md:mt-24">
        {principles.map((p, i) => (
          <li
            key={p.title}
            className="reveal group grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <p className="label flex gap-3 text-subtle md:col-span-3 md:pt-2">
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
              {p.area}
            </p>
            <div className="md:col-span-6">
              <h3 className="text-[clamp(1.375rem,1.2rem+0.7vw,1.75rem)] font-medium leading-snug tracking-[-0.015em]">
                {p.title}
              </h3>
              <p className="mt-3 max-w-[58ch] leading-relaxed text-muted">{p.body}</p>
            </div>
            <div className="md:col-span-3 md:pt-2">
              <p className="label text-subtle">Seen in</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px]">
                {p.evidence.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className="link text-fg">
                      {projectNames[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <NextChapter to="stack">
        Habits need tools. Here&apos;s the stack, mapped to where I&apos;ve used it.
      </NextChapter>
    </section>
  );
}
