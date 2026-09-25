import { site } from "@/data/site";
import { ArrowUpRight, LinkedInMark } from "./Icons";
import { CopyEmail, LagosTime } from "./ContactActions";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="page pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="reveal grid gap-6 md:grid-cols-12 md:gap-8">
        <p className="label flex items-center gap-3 self-start text-subtle md:col-span-3 md:pt-4">
          <span className="text-accent">06</span>
          <span aria-hidden="true" className="h-px w-6 bg-line-strong" />
          <span>Contact</span>
        </p>

        <div className="md:col-span-9">
          <h2
            id="contact-title"
            className="max-w-[16ch] text-[clamp(2.25rem,1.45rem+3.4vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.035em]"
          >
            If you need software that holds up, let&apos;s talk.
          </h2>

          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-muted">
            I&apos;m open to internships, freelance projects and engineering
            roles, especially backend and full-stack work. Email is the fastest
            way to reach me.
          </p>

          <div className="mt-12 border-y border-line py-8">
            <p className="label text-subtle">Email</p>
            <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <a
                href={`mailto:${site.email}`}
                className="break-all text-[clamp(1.25rem,0.95rem+1.5vw,2.25rem)] font-medium leading-tight tracking-[-0.02em] text-fg underline decoration-line-strong decoration-1 underline-offset-[0.2em] transition-colors hover:decoration-accent"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-fg transition-colors hover:text-accent"
                >
                  <LinkedInMark className="size-4" />
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                >
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a href={site.resume} className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent">
                  Resume (PDF)
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
            <p className="label text-subtle">
              {site.location} <span className="text-line-strong">/</span> <LagosTime />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
