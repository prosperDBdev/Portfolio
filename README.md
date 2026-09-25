# Ebitimi Ebelike — portfolio

Single-page portfolio built with Next.js 16 (App Router), React 19 and Tailwind CSS v4.
The only runtime dependencies are `next`, `react` and `react-dom`.

```bash
npm run dev     # local development
npm run build   # production build (fully static)
npm run lint
```

## Structure

The page is a sequence of chapters: Hero → Introduction → Selected work → How I think → Stack → Track record → Contact.

| What you want to change | Where |
| --- | --- |
| Name, email, links, resume path, chapter order | `data/site.ts` |
| Case studies and smaller projects | `data/projects.ts` |
| Engineering principles ("How I think") | `data/principles.ts` |
| Stack, and which project uses each tool | `data/skills.ts` |
| Colours, type, motion, diagram layout | `app/globals.css` |
| Metadata and fonts | `app/layout.tsx` |
| Social share image | `app/opengraph-image.tsx` |

Content lives in `data/`, so most updates never touch a component.

- **Links:** a project's `links.demo` / `links.source` render automatically once added.
- **Case study depth:** `hardPart` and `learned` are optional; each section only appears when filled in.
- **Stack:** a tool with an empty `projects` list shows as "in my toolkit, not shown here".

## Motion and performance

- Scroll reveals and the scroll progress bar use CSS scroll-driven animations. Browsers without support just show the content.
- Everything respects `prefers-reduced-motion`.
- Client JavaScript is limited to the header's section tracking, the stack filter, the copy-email button and the Lagos clock.
