import Link from "next/link";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-slate-600">
          先占位。下一步会接 MDX 列表 + 文章页，并支持同步到飞书/公众号。
        </p>
        <p className="mt-10 text-sm text-slate-600">
          <Link className="underline" href="/">返回首页</Link>
        </p>
      </div>
    </main>
  );
}
