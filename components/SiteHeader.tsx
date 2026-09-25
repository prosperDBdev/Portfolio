"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/data/site";

const navItems = chapters.filter((c) => c.nav);

export default function SiteHeader() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as "current" while it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" },
    );

    sections.forEach((s) => observer.observe(s));

    // Clear the readout when back at the top.
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.4) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const current = chapters.find((c) => c.id === active);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <div className="page flex h-14 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <a href="#top" className="shrink-0 text-[15px] font-medium tracking-tight">
            Ebitimi<span className="hidden sm:inline"> Ebelike</span>
            <span className="sr-only">, back to top</span>
          </a>
          <span
            aria-hidden="true"
            className={`label hidden truncate text-subtle transition-opacity duration-300 md:inline ${current ? "opacity-100" : "opacity-0"}`}
          >
            <span className="mx-2 text-line-strong">/</span>
            <span className="text-accent">{current?.number}</span> {current?.label}
          </span>
        </div>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-[13px] sm:gap-7 sm:text-sm">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative py-2 transition-colors ${isActive ? "text-fg" : "text-muted hover:text-fg"}`}
                  >
                    {item.nav}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div aria-hidden="true" className="scroll-progress absolute inset-x-0 -bottom-px h-px bg-accent/80" />
    </header>
  );
}
