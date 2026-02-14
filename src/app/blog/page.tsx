import Link from "next/link";
import { listPosts } from "@/lib/content";

export const dynamic = "force-static";

export default function BlogIndex() {
  const posts = listPosts();

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-3 text-slate-600">
          热点观点 + 可复现教程。所有内容优先沉淀到网站，再同步飞书/公众号。
        </p>

        <div className="mt-10 space-y-6">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-5 text-slate-600">
              还没有文章。
            </div>
          ) : (
            posts.map((p) => (
              <article key={p.slug} className="rounded-xl border border-slate-200 p-5">
                <h2 className="text-lg font-semibold">
                  <Link className="hover:underline" href={`/blog/${p.slug}`}>
                    {p.title}
                  </Link>
                </h2>
                <div className="mt-1 text-sm text-slate-500">
                  {p.date ?? ""}{p.tags?.length ? ` · ${p.tags.join(" / ")}` : ""}
                </div>
                {p.description ? (
                  <p className="mt-3 text-slate-700">{p.description}</p>
                ) : null}
              </article>
            ))
          )}
        </div>

        <p className="mt-10 text-sm text-slate-600">
          <Link className="underline" href="/">返回首页</Link>
        </p>
      </div>
    </main>
  );
}
