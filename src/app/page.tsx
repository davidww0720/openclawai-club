import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell locale="en">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400">
            OPENCLAWAI.CLUB
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            OpenClaw Practical Tutorials
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            A runnable, copy-paste friendly guide to building a real AI assistant
            with OpenClaw — Telegram control, model routing, fallbacks, and
            operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs/day-1"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              Start Day 1
            </Link>
            <Link
              href="/docs"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              Browse Docs
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[ 
              { href: "/docs", title: "Docs", desc: "Step-by-step, reproducible" },
              { href: "/blog", title: "Blog", desc: "Hot takes + playbooks" },
              { href: "/changelog", title: "Changelog", desc: "What changed" },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/7"
              >
                <div className="text-base font-semibold text-white">
                  {c.title}
                </div>
                <div className="mt-1 text-sm text-slate-300">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Language</div>
          <p className="mt-2 text-sm text-slate-300">
            Chinese version is available under <code>/zh</code>.
          </p>
          <div className="mt-4">
            <Link
              href="/zh"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              中文版 →
            </Link>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
