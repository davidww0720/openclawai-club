import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

export default function ZhHome() {
  return (
    <SiteShell locale="zh">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400">
            OPENCLAWAI.CLUB / 中文
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
            OpenClaw 实战教程（可复现）
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            面向普通用户的可执行教程：Telegram 控制、模型路由与降级链、运维与内容工作流。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/zh/docs/day-1"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
            >
              从 Day 1 开始
            </Link>
            <Link
              href="/zh/docs"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              查看 Docs
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">语言</div>
          <p className="mt-2 text-sm text-slate-300">
            默认英文在根路径 <code>/</code>。
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="rounded-xl border border-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/5"
            >
              English →
            </Link>
          </div>
        </aside>
      </div>
    </SiteShell>
  );
}
