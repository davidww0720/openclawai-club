import Link from "next/link";

type NavItem = { href: string; label: string };

export function SiteNav({ items }: { items: NavItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-white"
        >
          OpenClawAI.club
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-200">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="hover:text-white"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
