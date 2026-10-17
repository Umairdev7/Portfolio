import { FiBriefcase, FiMapPin, FiAward } from "react-icons/fi";
import { education, experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Experience & Education"
          subtitle="Where I've been building production Laravel applications, and where I studied."
        />

        <ol className="relative space-y-8 border-l border-brand-blue/30 pl-6 sm:pl-10">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span className="bg-gradient-brand absolute -left-[41px] top-6 flex h-8 w-8 items-center justify-center rounded-full text-white ring-4 ring-navy-900 sm:-left-[57px]">
                <FiBriefcase aria-hidden />
              </span>
              <Reveal>
                <article className="card-glow p-6 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-gradient font-semibold">{job.company}</p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                        <FiMapPin aria-hidden /> {job.location}
                      </p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full border border-brand-blue/50 px-3 py-1 text-xs font-semibold text-brand-blue">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {job.points.map((p) => (
                      <li key={p.strong} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="bg-gradient-brand mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                        <span>{p.text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}

          <li className="relative">
            <span className="bg-gradient-brand absolute -left-[41px] top-6 flex h-8 w-8 items-center justify-center rounded-full text-white ring-4 ring-navy-900 sm:-left-[57px]">
              <FiAward aria-hidden />
            </span>
            <Reveal>
              <article className="card-glow p-6 sm:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{education.degree}</h3>
                    <p className="text-gradient font-semibold">{education.school}</p>
                    <p className="mt-1 text-xs text-muted">GPA: {education.gpa}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-brand-blue/50 px-3 py-1 text-xs font-semibold text-brand-blue">
                    {education.date}
                  </span>
                </div>
              </article>
            </Reveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
