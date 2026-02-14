import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function listPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .sort()
    .reverse();
}

export function getPostMeta(slug: string): PostMeta {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);

  return {
    slug,
    title: String(data.title ?? slug),
    description: data.description ? String(data.description) : undefined,
    date: data.date ? String(data.date) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  };
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: getPostMeta(slug), content };
}

export function listPosts(): PostMeta[] {
  return listPostSlugs().map(getPostMeta);
}
