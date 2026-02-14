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
          { href: "/zh/docs", label: "Docs" },
          { href: "/zh/blog", label: "Blog" },
          { href: "/zh/changelog", label: "Changelog" },
        ]
      : [
          { href: "/docs", label: "Docs" },
          { href: "/blog", label: "Blog" },
          { href: "/changelog", label: "Changelog" },
        ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteNav items={items} />
      <div className="mx-auto max-w-5xl px-6 py-12">{children}</div>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-5xl px-6 text-xs text-slate-400">
          © {new Date().getFullYear()} OpenClawAI.club · Built with OpenClaw
        </div>
      </footer>
    </div>
  );
}
