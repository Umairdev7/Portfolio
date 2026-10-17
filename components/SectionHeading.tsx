export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-xl text-center sm:mb-14">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>}
    </div>
  );
}
