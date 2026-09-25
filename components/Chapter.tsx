import type { ReactNode } from "react";
import { chapters, type ChapterId } from "@/data/site";
import { ArrowDown } from "./Icons";

function chapter(id: ChapterId) {
  return chapters.find((c) => c.id === id)!;
}

// Opening of every chapter: number + name, the heading, and a short lead.
export function ChapterHeader({
  id,
  title,
  lead,
}: {
  id: ChapterId;
  title: ReactNode;
  lead?: ReactNode;
}) {
  const { number, label } = chapter(id);

  return (
    <header className="reveal grid gap-6 md:grid-cols-12 md:gap-8">
      <p className="label flex items-center gap-3 self-start text-subtle md:col-span-3 md:pt-3">
        <span className="text-accent">{number}</span>
        <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
        <span>{label}</span>
      </p>
      <div className="md:col-span-9">
        <h2
          id={`${id}-title`}
          className="max-w-[22ch] text-[clamp(1.875rem,1.35rem+2.1vw,2.875rem)] font-medium leading-[1.1] tracking-[-0.025em]"
        >
          {title}
        </h2>
        {lead ? (
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}

// Closing line of a chapter: a sentence that bridges to the next one.
export function NextChapter({
  to,
  children,
}: {
  to: ChapterId;
  children: ReactNode;
}) {
  const { number, label } = chapter(to);

  return (
    <div className="mt-20 border-t border-line pt-6 md:mt-28 md:grid md:grid-cols-12 md:gap-8">
      <a
        href={`#${to}`}
        className="group flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between md:col-span-9 md:col-start-4"
      >
        <span className="text-muted transition-colors group-hover:text-fg">
          {children}
        </span>
        <span className="label inline-flex items-center gap-2 text-subtle transition-colors group-hover:text-accent">
          {number} {label}
          <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
        </span>
      </a>
    </div>
  );
}
