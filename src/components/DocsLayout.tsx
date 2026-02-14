import Link from "next/link";

const DAYS = [1, 2, 3, 4, 5, 6, 7] as const;

export function DocsLayout({
  children,
  locale,
  day,
}: {
  children: React.ReactNode;
  locale: "en" | "zh";
  day?: number;
}) {
  const base = locale === "zh" ? "/zh/docs" : "/docs";
  const dayPath = (d: number) => `${base}/day-${d}`;

  const Nav = (
    <div>
      <div className="text-xs font-semibold tracking-[0.26em] text-white/50">
        DAY 1–DAY 7
      </div>
      <div className="mt-4 space-y-2">
        {DAYS.map((d) => (
          <Link
            key={d}
            href={dayPath(d)}
            className={
              "block rounded-2xl border px-3 py-2 text-sm transition " +
              (day === d
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/10 hover:text-white")
            }
          >
            <span className="font-semibold">Day {d}</span>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-xs font-semibold tracking-[0.26em] text-white/50">
        LANGUAGE
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          className={
            "rounded-2xl border px-3 py-1.5 text-xs font-semibold " +
            (locale === "en"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10")
          }
          href={locale === "en" ? base : base.replace("/zh", "")}
        >
          EN
        </Link>
        <Link
          className={
            "rounded-2xl border px-3 py-1.5 text-xs font-semibold " +
            (locale === "zh"
              ? "border-white/20 bg-white/10 text-white"
              : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10")
          }
          href={locale === "zh" ? base : "/zh" + base}
        >
          中文
        </Link>
      </div>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Mobile nav */}
      <div className="lg:hidden">
        <details className="rounded-[var(--radius)] border border-white/10 bg-white/[0.04]">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-white/90">
            Navigate · Day {day ?? "—"}
            <span className="ml-2 text-white/50">(tap)</span>
          </summary>
          <div className="border-t border-white/10 px-4 py-4">{Nav}</div>
        </details>
      </div>

      {/* Desktop nav */}
      <aside className="hidden lg:block lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:overflow-auto">
        {Nav}
      </aside>

      <article className="min-w-0">
        <div className="prose prose-invert prose-slate max-w-none">{children}</div>
      </article>
    </div>
  );
}

export function PrevNext({ locale, day }: { locale: "en" | "zh"; day: number }) {
  const base = locale === "zh" ? "/zh/docs" : "/docs";
  const prev = day > 1 ? `${base}/day-${day - 1}` : null;
  const next = day < 7 ? `${base}/day-${day + 1}` : null;

  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
      {prev ? (
        <Link className="text-sm text-slate-300 hover:text-white" href={prev}>
          ← Prev
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link className="text-sm text-slate-300 hover:text-white" href={next}>
          Next →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
