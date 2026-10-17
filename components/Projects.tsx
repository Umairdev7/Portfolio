import { FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-tinted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="A selection of web applications and websites I've worked on."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const hasLinks = Boolean(p.github || p.demo);
            return (
              <li key={p.title}>
                <Reveal delay={(i % 2) * 120} className="h-full">
                  <article className="flex h-full flex-col rounded-xl border border-brand-red/40 bg-navy-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-red/70 hover:shadow-[0_10px_40px_rgb(240_67_90/0.18)] sm:p-7">
                    {/* faux browser preview */}
                    <div aria-hidden className="mb-5 overflow-hidden rounded-lg border border-white/10 bg-navy-950">
                      <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-brand-red/80" />
                        <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                        <span className="h-2 w-2 rounded-full bg-green-400/80" />
                      </div>
                      <div className="grid h-28 grid-cols-[1fr_3fr] gap-2 p-3">
                        <div className="rounded bg-brand-blue/15" />
                        <div className="space-y-2">
                          <div className="h-3 w-2/3 rounded bg-white/10" />
                          <div className="h-3 w-1/2 rounded bg-white/10" />
                          <div className="bg-gradient-brand h-8 w-full rounded opacity-30" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>

                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {p.tags.map((t) => (
                        <li key={t} className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-3 pt-6">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-brand inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                        >
                          <FiGithub aria-hidden /> GitHub <FiArrowUpRight aria-hidden />
                        </a>
                      )}
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                        >
                          Live Demo <FiArrowUpRight aria-hidden />
                        </a>
                      )}
                      {!hasLinks && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-muted">
                          <FiLock aria-hidden /> Client project · details on request
                        </span>
                      )}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
