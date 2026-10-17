import { education, experience, profile, skills } from "@/lib/data";
import Reveal from "./Reveal";
import ResumePreview from "./ResumePreview";

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "MCS", label: "Computer Science" },
  { value: `${skills.length}`, label: "Core Skills" },
];

// Shown in the terminal card as the output of `php artisan about`
const about = [
  ["Name", profile.name],
  ["Role", profile.role],
  ["Company", experience[0].company],
  ["Location", profile.location],
  ["Education", "MCS · UMT Lahore"],
  ["Stack", "PHP · Laravel · MySQL"],
];

export default function About() {
  return (
    <section id="about" className="section-tinted py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <Reveal>
          <figure
            aria-label="Terminal summary"
            className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-brand-blue/30 bg-navy-950 shadow-[0_0_40px_rgb(47_128_255/0.25)]"
          >
            <div className="space-y-4 p-5 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
              <dl className="space-y-2">
                {about.map(([key, value]) => (
                  <div key={key} className="flex gap-2">
                    <dt className="w-20 shrink-0 text-brand-blue sm:w-24">
                      {key}
                    </dt>
                    <dd className="flex-1 border-l border-white/10 pl-3 text-ink/90">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                </span>
                <span className="text-green-400">
                  Available for new projects
                </span>
              </p>
            </div>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              I am a <strong className="text-ink">PHP Laravel Developer</strong>{" "}
              based in Lahore with hands-on experience building secure and
              scalable web applications. I currently work at{" "}
              <strong className="text-ink">Himologics</strong>, where I develop
              and maintain Laravel applications following MVC architecture and
              best coding practices.
            </p>
            <p>
              My day-to-day work covers MySQL databases, efficient queries,
              migrations and Eloquent ORM relationships, plus authentication,
              authorization and role-based access control. I care about
              application security, performance optimization and getting to the
              root of complex bugs — and I enjoy collaborating with front-end
              developers to ship responsive, user-friendly products.
            </p>
            <p>
              I hold a <strong className="text-ink">{education.degree}</strong>{" "}
              from {education.school} ({education.date}, GPA {education.gpa}).
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3 sm:max-w-md">
            {stats.map((s) => (
              <div key={s.label} className="card-glow px-3 py-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-gradient text-2xl font-bold">{s.value}</dd>
                <dd className="mt-1 text-[11px] leading-tight text-muted sm:text-xs">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <ResumePreview />
        </Reveal>
      </div>
    </section>
  );
}
