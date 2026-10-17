"use client";

import { useState } from "react";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle, FiLinkedin, FiLoader } from "react-icons/fi";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { type: "idle" | "sending" | "success" | "error"; message?: string };

const empty: Fields = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

const contactInfo = [
  { Icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
  { Icon: FiLinkedin, label: "LinkedIn — " + profile.linkedinHandle, href: profile.linkedin, external: true },
  { Icon: FiMapPin, label: profile.location },
];

export default function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    if (status.type !== "sending") setStatus({ type: "idle" });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.type === "sending") return;

    const found = validate(fields);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus({ type: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
        return;
      }
      setFields(empty);
      setStatus({ type: "success", message: "Thanks! Your message has been sent. I'll get back to you soon." });
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection and try again." });
    }
  };

  const errorText = (key: keyof Fields) =>
    errors[key] && (
      <p id={`contact-${key}-error`} className="mt-1.5 pl-3 text-xs text-brand-red">
        {errors[key]}
      </p>
    );

  const inputProps = (key: keyof Fields) => ({
    id: `contact-${key}`,
    name: key,
    value: fields[key],
    onChange: update(key),
    required: true,
    "aria-invalid": Boolean(errors[key]),
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  const sending = status.type === "sending";

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Contact Me"
          subtitle="Have a project in mind? Let's connect and discuss how I can help bring your ideas to life."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
          <Reveal>
            <h3 className="text-2xl font-bold sm:text-3xl">Get in touch today</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, backend challenges, or opportunities to be part of your team.
            </p>
            <ul className="mt-8 space-y-5 text-sm">
              {contactInfo.map(({ Icon, label, href, external }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-blue/40 text-brand-blue transition group-hover:bg-brand-blue/10">
                      <Icon aria-hidden />
                    </span>
                    <span className="break-all">{label}</span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-3 hover:text-brand-blue"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="card-glow space-y-5 p-5 sm:p-8" aria-label="Contact form">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">
                    Name <span className="text-brand-red" aria-hidden>*</span>
                  </label>
                  <input type="text" placeholder="Your name" autoComplete="name" maxLength={100} className="field" {...inputProps("name")} />
                  {errorText("name")}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold">
                    Email <span className="text-brand-red" aria-hidden>*</span>
                  </label>
                  <input type="email" placeholder="you@example.com" autoComplete="email" maxLength={200} className="field" {...inputProps("email")} />
                  {errorText("email")}
                </div>
              </div>

              {/* Honeypot: hidden from people, bots fill it in */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold">
                  Message <span className="text-brand-red" aria-hidden>*</span>
                </label>
                <textarea rows={6} placeholder="Please type your message here..." maxLength={5000} className="field resize-y rounded-2xl" {...inputProps("message")} />
                {errorText("message")}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="bg-gradient-brand inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
              >
                {sending ? (
                  <>
                    Sending… <FiLoader aria-hidden className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send message <FiSend aria-hidden />
                  </>
                )}
              </button>

              <div role="status" aria-live="polite" className="min-h-5 text-center text-sm">
                {status.type === "success" && (
                  <p className="inline-flex items-center gap-1.5 text-green-400">
                    <FiCheckCircle aria-hidden /> {status.message}
                  </p>
                )}
                {status.type === "error" && (
                  <p className="inline-flex items-center gap-1.5 text-brand-red">
                    <FiAlertCircle aria-hidden /> {status.message}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
