import { FiMail, FiLinkedin, FiArrowUp } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, Icon: FiMail },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: FiLinkedin,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 border-b border-brand-red/30 pb-8 lg:flex-row lg:justify-between">
          <a href="#home" className="text-gradient text-xl font-bold">
            {profile.brand}
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-block py-1.5 text-ink/80 hover:text-brand-blue"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-3">
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-blue text-white transition hover:-translate-y-0.5 hover:bg-brand-red"
                >
                  <Icon aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-muted sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} {profile.name} | All Rights
            Reserved
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1 hover:text-brand-blue"
          >
            Back to top <FiArrowUp aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
