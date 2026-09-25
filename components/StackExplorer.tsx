"use client";

import { useState } from "react";
import type { ProjectId } from "@/data/projects";
import type { ToolGroup } from "@/data/skills";

type Option = { id: ProjectId; name: string };

export default function StackExplorer({ groups, options }: { groups: ToolGroup[]; options: Option[] }) {
  const [selected, setSelected] = useState<ProjectId | null>(null);

  const total = groups.reduce((n, g) => n + g.tools.length, 0);
  const used = selected
    ? groups.reduce((n, g) => n + g.tools.filter((t) => t.projects.includes(selected)).length, 0)
    : 0;
  const selectedName = options.find((o) => o.id === selected)?.name;

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
      active
        ? "border-fg bg-fg text-bg"
        : "border-line-strong text-muted hover:border-muted hover:text-fg"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-3">
        <p id="stack-filter-label" className="label shrink-0 text-subtle">
          Show what a project uses
        </p>
        <div role="group" aria-labelledby="stack-filter-label" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={selected === null} onClick={() => setSelected(null)} className={chip(selected === null)}>
            Everything
          </button>
          {options.map((o) => (
            <button
              key={o.id}
              type="button"
              aria-pressed={selected === o.id}
              onClick={() => setSelected(selected === o.id ? null : o.id)}
              className={chip(selected === o.id)}
            >
              {o.name}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="label mt-5 min-h-[1.4em] text-subtle">
        {selected ? (
          <>
            <span className="text-accent">{selectedName}</span> uses {used} of the {total} tools below
          </>
        ) : (
          <span className="flex flex-wrap gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" /> Used in a project on this page
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full border border-subtle" /> In my toolkit, not shown here
            </span>
          </span>
        )}
      </p>

      <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.layer}>
            <h3 className="font-medium text-fg">{group.layer}</h3>
            <p className="mt-1 text-sm text-subtle">{group.note}</p>
            <ul className="mt-4 border-t border-line">
              {group.tools.map((tool) => {
                const inProject = tool.projects.length > 0;
                const dimmed = selected !== null && !tool.projects.includes(selected);
                const lit = selected !== null ? !dimmed : inProject;
                return (
                  <li
                    key={tool.name}
                    className={`flex items-center justify-between gap-3 border-b border-line py-2.5 text-[15px] transition-opacity duration-300 ${dimmed ? "opacity-30" : "opacity-100"}`}
                  >
                    <span className={inProject ? "text-fg" : "text-muted"}>{tool.name}</span>
                    <span
                      aria-hidden="true"
                      className={`size-1.5 shrink-0 rounded-full transition-colors ${lit ? "bg-accent" : "border border-subtle"}`}
                    />
                    <span className="sr-only">
                      {inProject ? `, used in ${tool.projects.length} project${tool.projects.length > 1 ? "s" : ""}` : ", not shown in a project here"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
