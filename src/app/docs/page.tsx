import Link from "next/link";

export default function DocsIndex() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
        <p className="mt-3 text-slate-600">
          这里会沉淀“可复现”的配置与操作过程（对标 openclaw101.dev）。
        </p>
        <div className="mt-8 rounded-xl border border-slate-200 p-5">
          <div className="font-medium">第一批目录（建议）</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>安装与部署（Cloudflare/Telegram/Gateway）</li>
            <li>安全与权限（最小权限、token 管理）</li>
            <li>公众号工作流（草稿箱/排版/封面）</li>
            <li>稳定性（降级/重试/错误提示规范）</li>
          </ul>
        </div>
        <p className="mt-10 text-sm text-slate-600">
          <Link className="underline" href="/">返回首页</Link>
        </p>
      </div>
    </main>
  );
}
