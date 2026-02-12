import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-8">
          <p className="text-sm font-medium text-slate-500">openclawai.club</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            OpenClaw 实战笔记与可复现教程
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            记录我们如何把 OpenClaw（小龙虾）+ 小月 跑通到「能长期稳定产出」：配置、踩坑、
            自动化工作流，以及对外展示。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            className="rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:bg-slate-50"
            href="/docs"
          >
            <div className="text-base font-semibold">Docs</div>
            <div className="mt-1 text-sm text-slate-600">配置 / 操作手册 / 复现步骤</div>
          </Link>
          <Link
            className="rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:bg-slate-50"
            href="/blog"
          >
            <div className="text-base font-semibold">Blog</div>
            <div className="mt-1 text-sm text-slate-600">对外文章（后续可同步飞书/公众号）</div>
          </Link>
          <Link
            className="rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:bg-slate-50"
            href="/changelog"
          >
            <div className="text-base font-semibold">Changelog</div>
            <div className="mt-1 text-sm text-slate-600">更新日志 / 版本记录</div>
          </Link>
        </div>

        <div className="mt-10 rounded-xl bg-slate-50 p-5 text-sm text-slate-700">
          <p className="font-medium">下一步（我来做）：</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>把内容系统接上（MDX + frontmatter + 列表页）</li>
            <li>加一个“操作记录/配置记录”模板页（openclaw101 风格）</li>
            <li>接入一键分发：网站 → 飞书 → 微信草稿箱（人工确认发布）</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
