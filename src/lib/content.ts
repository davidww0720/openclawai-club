import { POST_MAP, POST_SLUGS, POSTS } from "@/generated/posts";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
};

export function listPostSlugs(): string[] {
  // newest first by slug (we use YYYY-MM-DD-* naming)
  return [...POST_SLUGS].sort().reverse();
}

export function listPosts(): PostMeta[] {
  return [...POSTS]
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.slug < b.slug ? 1 : -1));
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const p = POST_MAP[slug];
  if (!p) throw new Error(`Post not found: ${slug}`);
  const { content, ...meta } = p;
  return { meta, content };
}
