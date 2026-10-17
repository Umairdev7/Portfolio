import { FiArrowUpRight } from "react-icons/fi";
import { SiLaravel, SiPhp, SiMysql, SiJavascript, SiWordpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { profile } from "@/lib/data";

// Floating tech badges placed around the code card (positions relative to the card wrapper)
const orbit = [
  { Icon: SiLaravel, label: "Laravel", pos: "flex -left-3 top-14 sm:-left-5 sm:top-16", delay: "0s" },
  { Icon: SiPhp, label: "PHP", pos: "flex -right-3 -top-5 sm:-right-5", delay: "0.6s" },
  { Icon: SiJavascript, label: "JavaScript", pos: "-left-5 top-1/2 hidden sm:flex", delay: "1.2s" },
  { Icon: SiMysql, label: "MySQL", pos: "-right-5 top-[55%] hidden sm:flex", delay: "1.8s" },
  { Icon: FaHtml5, label: "HTML5", pos: "flex left-10 -bottom-5", delay: "2.4s" },
  { Icon: SiWordpress, label: "WordPress", pos: "flex right-10 -bottom-5", delay: "3s" },
];

// Syntax-highlighted snippet: each line is a list of [text, colour class]
const k = "text-[#c792ea]"; // keyword
const v = "text-[#82aaff]"; // variable / function
const s = "text-[#c3e88d]"; // string
const c = "text-[#ffcb6b]"; // class
const p = "text-ink/70"; // punctuation
const code: [string, string][][] = [
  [["<?php", k]],
  [],
  [["class ", k], ["Developer ", c], ["extends ", k], ["Model", c]],
  [["{", p]],
  [["  public ", k], ["$name", v], [" = ", p], ["'Umair Shafi'", s], [";", p]],
  [["  public ", k], ["$role", v], [" = ", p], ["'Laravel Dev'", s], [";", p]],
  [["  public ", k], ["$stack", v], [" = [", p], ["'PHP'", s], [", ", p], ["'MySQL'", s], ["];", p]],
  [],
  [["  public function ", k], ["build", v], ["(", p], ["Idea ", c], ["$idea", v], [")", p]],
  [["  {", p]],
  [["    return ", k], ["$idea", v], ["->", p], ["secure", v], ["()", p]],
  [["      ->", p], ["scalable", v], ["()->", p], ["ship", v], ["();", p]],
  [["  }", p]],
  [["}", p]],
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="mb-3 inline-block rounded-full border border-brand-blue/40 bg-brand-blue/10 px-4 py-1 text-xs font-semibold tracking-wide text-brand-blue">
            {profile.role} · {profile.location.split(",")[0]}
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <span className="text-gradient mt-1 block pb-2">{profile.name}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted lg:mx-0">{profile.heroIntro}</p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="bg-gradient-brand w-full rounded-full px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition hover:brightness-110 sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-brand-blue/70 px-7 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-blue/10 sm:w-auto"
            >
              Let&apos;s Collaborate <FiArrowUpRight aria-hidden />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue/40 to-brand-red/40 blur-2xl" />
            <figure
              className="relative overflow-hidden rounded-2xl border border-brand-blue/40 bg-navy-950/95 shadow-[0_0_40px_rgb(47_128_255/0.35)]"
              aria-label="Code snippet describing Umair as a Laravel developer"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-red/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-3 truncate font-mono text-xs text-muted">app/Models/Developer.php</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[10.5px] leading-6 sm:p-6 sm:text-[13px]">
                <code>
                  {code.map((line, i) => (
                    <span key={i} className="block">
                      <span aria-hidden className="mr-3 inline-block w-4 select-none text-right text-white/20 sm:mr-4">
                        {i + 1}
                      </span>
                      {line.map(([text, cls], j) => (
                        <span key={j} className={cls}>
                          {text}
                        </span>
                      ))}
                    </span>
                  ))}
                </code>
              </pre>
            </figure>
            {orbit.map(({ Icon, label, pos, delay }) => (
              <span
                key={label}
                title={label}
                className={`animate-float absolute ${pos} h-10 w-10 items-center justify-center rounded-full border border-brand-blue/50 bg-navy-800/95 text-lg text-brand-blue shadow-[0_0_14px_rgb(47_128_255/0.45)] sm:h-12 sm:w-12 sm:text-xl`}
                style={{ animationDelay: delay }}
              >
                <Icon aria-hidden />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
