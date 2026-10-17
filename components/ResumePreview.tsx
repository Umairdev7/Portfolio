"use client";

import { useEffect, useRef } from "react";
import { FiEye, FiX, FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import { education, experience, profile, skills } from "@/lib/data";

// Read-only resume preview in a modal. There is intentionally no downloadable file.
export default function ResumePreview() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const restore = () => (document.body.style.overflow = "");
    dialog.addEventListener("close", restore);
    return () => dialog.removeEventListener("close", restore);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="bg-gradient-brand mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:brightness-110"
      >
        <FiEye aria-hidden /> View Resume
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${profile.name} resume`}
        onClick={(e) => e.target === e.currentTarget && close()}
        onContextMenu={(e) => e.preventDefault()}
        className="m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-3xl overflow-hidden rounded-2xl border border-brand-blue/40 bg-navy-900 p-0 text-ink shadow-2xl backdrop:bg-navy-950/80 backdrop:backdrop-blur-sm"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
          <p className="text-sm font-semibold">
            Resume <span className="text-muted">— preview</span>
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close resume preview"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-lg hover:bg-white/10"
          >
            <FiX />
          </button>
        </div>

        <div className="max-h-[calc(92dvh-3.75rem)] overflow-y-auto bg-navy-950/60 p-3 sm:p-6">
          {/* Paper sheet styled like the original PDF */}
          <article className="mx-auto max-w-[720px] select-none rounded-lg bg-white text-[#2b2b2b] shadow-xl">
            <header className="px-6 pt-8 pb-6 sm:px-10">
              <h2 className="text-3xl font-extrabold sm:text-4xl">{profile.name}</h2>
              <p className="mt-1 text-[#666]">{profile.title}</p>
              <ul className="mt-4 flex flex-col gap-2 text-sm text-[#555] sm:flex-row sm:flex-wrap sm:gap-x-8">
                <li className="flex items-center gap-2"><FiMail aria-hidden className="text-[#aaa]" /> {profile.email}</li>
                <li className="flex items-center gap-2"><FiLinkedin aria-hidden className="text-[#aaa]" /> {profile.linkedinHandle}</li>
                <li className="flex items-center gap-2"><FiMapPin aria-hidden className="text-[#aaa]" /> Lahore, Punjab</li>
              </ul>
            </header>

            <div className="grid sm:grid-cols-[3fr_2fr]">
              <section className="bg-[#f7f7f7] px-6 py-6 sm:px-10">
                <h3 className="text-sm font-bold tracking-wider">PROFESSIONAL EXPERIENCE</h3>
                {experience.map((job) => (
                  <div key={job.company} className="mt-5">
                    <p className="text-xs font-semibold text-[#888]">{job.period}</p>
                    <p className="mt-1 font-bold">{job.role}</p>
                    <p className="text-sm text-[#666]">{job.company}, {job.location}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#555]">
                      {job.points.map((pt) => (
                        <li key={pt.strong}>{pt.text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <aside className="px-6 py-6 sm:px-8">
                <h3 className="text-sm font-bold tracking-wider">PROFILE</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#666]">{profile.summary}</p>

                <h3 className="mt-6 text-sm font-bold tracking-wider">EDUCATION</h3>
                <p className="mt-3 text-xs text-[#888]">{education.date}</p>
                <p className="text-sm font-bold">{education.degree}</p>
                <p className="text-sm text-[#666]">{education.school}</p>
                <p className="text-sm text-[#666]">GPA: {education.gpa}</p>

                <h3 className="mt-6 text-sm font-bold tracking-wider">SKILLS</h3>
                <ul className="mt-3 space-y-3">
                  {skills.map((sk) => (
                    <li key={sk.key}>
                      <p className="text-sm text-[#444]">{sk.name}</p>
                      <div className="mt-1 flex gap-1.5" aria-label={`${sk.level} out of 10`}>
                        {Array.from({ length: 10 }, (_, i) => (
                          <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < sk.level ? "bg-[#2b2b2b]" : "bg-[#cfcfcf]"}`} />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </article>
        </div>
      </dialog>
    </>
  );
}
