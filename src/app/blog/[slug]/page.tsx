import Link from "next/link";
import { marked } from "marked";
import { getPost, listPostSlugs } from "@/lib/content";

export const dynamic = "force-static";

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const { meta, content } = getPost(params.slug);
  const html = marked.parse(content);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-sm text-slate-500">{meta.date ?? ""}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
        {meta.description ? (
          <p className="mt-4 text-slate-700">{meta.description}</p>
        ) : null}

        <div
          className="prose prose-slate mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <p className="mt-12 text-sm text-slate-600">
          <Link className="underline" href="/blog">返回 Blog</Link>
        </p>
      </div>
    </main>
  );
}
