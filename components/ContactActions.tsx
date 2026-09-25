"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "./Icons";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the mailto link next to this still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-md border border-line-strong px-3.5 text-sm text-muted transition-colors hover:border-muted hover:text-fg"
    >
      {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
});

// Local time in Lagos, so people in other time zones know when a reply is likely.
export function LagosTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--"} <span className="text-subtle">WAT</span>
    </span>
  );
}
