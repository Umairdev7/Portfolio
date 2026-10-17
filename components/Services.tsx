import { services } from "@/lib/data";
import { serviceIcons } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-tinted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Services"
          subtitle="What I can build and take care of for your business or team."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.key];
            return (
              <li key={s.key}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <article className="h-full rounded-xl border border-white/10 bg-navy-900/60 p-6 transition duration-300 hover:border-brand-blue/50 hover:bg-navy-900/80">
                    <span className="bg-gradient-brand inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white">
                      <Icon aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
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
