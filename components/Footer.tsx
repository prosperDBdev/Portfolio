import { site } from "@/data/site";
import { ArrowUp } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page flex flex-col gap-4 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Designed and built in Lagos with Next.js.
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top
          <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  );
}
