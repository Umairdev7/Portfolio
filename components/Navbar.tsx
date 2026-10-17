"use client";

import { useEffect, useState } from "react";
import { FiMenu, FiX, FiPlus } from "react-icons/fi";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Close the mobile menu with Escape, and on resize to desktop
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-brand-red/30 bg-navy-900/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-20" aria-label="Main">
        <a href="#home" className="text-gradient text-lg font-bold sm:text-xl" onClick={() => setOpen(false)}>
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  active === link.href ? "text-brand-blue" : "text-ink/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full border border-brand-blue/60 px-5 py-2 text-sm font-semibold shadow-[0_0_18px_rgb(240_67_90/0.35)] transition hover:bg-brand-blue/15 md:inline-flex"
        >
          <FiPlus aria-hidden /> Hire Me
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/50 text-xl md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <div id="mobile-menu" className="md:hidden" hidden={!open}>
        <ul className="space-y-1 px-4 pb-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base font-medium hover:bg-white/5 ${
                  active === link.href ? "text-brand-blue" : "text-ink"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-gradient-brand block rounded-full py-3 text-center font-semibold text-white"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
