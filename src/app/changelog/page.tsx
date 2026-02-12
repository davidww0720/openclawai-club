import Link from "next/link";

export default function Changelog() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
        <div className="mt-6 space-y-6 text-slate-700">
          <div className="rounded-xl border border-slate-200 p-5">
            <div className="text-sm text-slate-500">2026-02-12</div>
            <div className="mt-1 font-medium">MVP 上线：Next.js + Cloudflare Workers（OpenNext）</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>打通 GitHub 仓库与自动部署链路</li>
              <li>加 nodejs_compat，Worker 路由 openclawai.club/*</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-sm text-slate-600">
          <Link className="underline" href="/">返回首页</Link>
        </p>
      </div>
    </main>
  );
}
