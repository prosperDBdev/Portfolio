import Image from "next/image";
import { ChapterHeader, NextChapter } from "./Chapter";

const context = [
  {
    when: "Jul 2026 – now",
    what: "Frontend Developer, Deexon Solutions",
    detail: "Built the production website for SolarHouse NG end to end. I now own its maintenance and new features.",
  },
  {
    when: "In progress",
    what: "Ping",
    detail: "A real-time messaging platform on Spring Boot, MongoDB and WebSocket/STOMP, with a Next.js client.",
  },
  {
    when: "Until Apr 2027",
    what: "Software Engineering Program, NIIT",
    detail: "Semester 3. Current focus: enterprise development with Java and Spring Boot.",
  },
];

export default function Intro() {
  return (
    <section id="about" aria-labelledby="about-title" className="page py-20 md:py-28">
      <ChapterHeader id="about" title="Full-stack by practice. Backend by focus." />

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
        <figure className="reveal md:col-span-3">
          <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-md border border-line bg-surface md:w-full md:max-w-[15rem]">
            <Image
              src="/images/profile.webp"
              alt="Portrait of Ebitimi Ebelike wearing a navy suit and glasses."
              fill
              sizes="(min-width: 768px) 240px, 160px"
              className="object-cover object-top"
            />
          </div>
          <figcaption className="label mt-3 text-subtle">Ebitimi Ebelike, Lagos</figcaption>
        </figure>

        <div className="md:col-span-9">
          <div className="reveal max-w-[40ch] space-y-6 text-[clamp(1.25rem,1.1rem+0.6vw,1.625rem)] leading-[1.45] tracking-[-0.01em] text-muted">
            <p>
              Most of what I build sits on both sides of an API. On the server I
              work in <span className="text-fg">Java and Spring Boot</span>:
              authentication, access control, data and real-time messaging. On
              the client I use <span className="text-fg">React and Next.js</span>{" "}
              to turn that into something people can use.
            </p>
            <p>
              The projects I&apos;ve chosen to show keep coming back to the same
              questions. <span className="text-fg">How does data move? Who is
              allowed to touch it? What happens when the network drops?</span>
            </p>
            <p>
              Where I&apos;m heading: deeper into backend engineering, while
              still owning features all the way to the screen.
            </p>
          </div>

          <div className="reveal mt-16">
            <h3 className="label text-subtle">Context</h3>
            <dl className="mt-4 border-t border-line">
              {context.map((item) => (
                <div
                  key={item.what}
                  className="grid gap-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
                >
                  <dt className="label pt-1 text-subtle">{item.when}</dt>
                  <dd>
                    <p className="font-medium text-fg">{item.what}</p>
                    <p className="mt-1 max-w-[60ch] text-[15px] text-muted">{item.detail}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <NextChapter to="work">That&apos;s the context. Here&apos;s what it looks like in practice.</NextChapter>
    </section>
  );
}
