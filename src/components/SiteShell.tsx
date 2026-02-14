import { SiteNav } from "@/components/SiteNav";

export function SiteShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: "en" | "zh";
}) {
  const items =
    locale === "zh"
      ? [
          { href: "/zh/docs", label: "文档" },
          { href: "/zh/blog", label: "博客" },
          { href: "/zh/changelog", label: "更新日志" },
        ]
      : [
          { href: "/docs", label: "Docs" },
          { href: "/blog", label: "Blog" },
          { href: "/changelog", label: "Changelog" },
        ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-slate-100">
      <SiteNav items={items} />
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      <footer className="border-t border-[var(--border-subtle)] py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <span className="mono text-xs">›</span>
              <span>{new Date().getFullYear()} OpenClawAI.club</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs">Built with OpenClaw</span>
              <span className="text-[var(--border-default)]">|</span>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs hover:text-[var(--text-secondary)] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
