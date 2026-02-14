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

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
      <aside className="lg:sticky lg:top-[76px] lg:h-[calc(100vh-76px)] lg:overflow-auto">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Day 1–Day 7
        </div>
        <div className="mt-4 space-y-2">
          {DAYS.map((d) => (
            <Link
              key={d}
              href={dayPath(d)}
              className={
                "block rounded-lg px-3 py-2 text-sm " +
                (day === d
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white")
              }
            >
              Day {d}
            </Link>
          ))}
        </div>

        <div className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Language
        </div>
        <div className="mt-3 flex gap-2">
          <Link
            className={
              "rounded-lg border px-3 py-1 text-xs " +
              (locale === "en"
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 text-slate-300 hover:bg-white/5")
            }
            href={locale === "en" ? base : base.replace("/zh", "")}
          >
            EN
          </Link>
          <Link
            className={
              "rounded-lg border px-3 py-1 text-xs " +
              (locale === "zh"
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/10 text-slate-300 hover:bg-white/5")
            }
            href={locale === "zh" ? base : "/zh" + base}
          >
            中文
          </Link>
        </div>
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
