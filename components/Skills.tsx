import { skills } from "@/lib/data";
import { skillIcons } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to build secure, fast and scalable web applications."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = skillIcons[skill.key];
            return (
              <li key={skill.key} className={i === skills.length - 1 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <article className="card-glow group flex h-full flex-col items-center px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgb(47_128_255/0.25)]">
                    <Icon aria-hidden className="text-5xl text-brand-blue transition group-hover:scale-110" />
                    <h3 className="mt-5 text-xl font-bold">{skill.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{skill.description}</p>
                    <div className="mt-auto w-full pt-6">
                      <div
                        className="h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                        role="meter"
                        aria-valuemin={0}
                        aria-valuemax={10}
                        aria-valuenow={skill.level}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div className="bg-gradient-brand h-full rounded-full" style={{ width: `${skill.level * 10}%` }} />
                      </div>
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
