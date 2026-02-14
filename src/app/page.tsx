import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";

// Roadmap data - 7 days
const ROADMAP = [
  { day: 1, title: "Environment Setup", desc: "Deploy OpenClaw to production with Telegram bot", status: "done" },
  { day: 2, title: "Telegram Commands", desc: "Add /gpt, /claude, /deepseek commands with fallbacks", status: "done" },
  { day: 3, title: "Image Generation", desc: "Add DALL-E and SDXL for image generation", status: "done" },
  { day: 4, title: "Voice Features", desc: "Add STT and TTS for voice interactions", status: "done" },
  { day: 5, title: "Web Search", desc: "Integrate web search with Brave and Tavily", status: "done" },
  { day: 6, title: "Browser Control", desc: "Add browser automation for complex tasks", status: "done" },
  { day: 7, title: "Deployment", desc: "Deploy with Cloudflare Workers + KV", status: "done" },
];

// Featured content
const FEATURED_DOCS = [
  { href: "/docs/day-1", label: "Getting Started", desc: "Deploy your first AI assistant" },
  { href: "/docs/day-2", label: "Model Routing", desc: "Route between GPT, Claude, DeepSeek" },
  { href: "/docs/day-7", label: "Production Deploy", desc: "Full deployment guide" },
];

const BLOG_POSTS = [
  { 
    href: "/blog/first-post", 
    title: "Building AI Assistants with OpenClaw", 
    date: "2024-01-15",
    excerpt: "How to build production-ready AI assistants that actually work"
  },
];

export default function Home() {
  return (
    <SiteShell locale="en">
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative pt-8 pb-4">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent)]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
            <span className="text-xs font-medium text-[var(--accent)] mono">OpenClaw v2.0 Released</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Build AI Agents with<br />
            <span className="text-[var(--accent)]">Real Power</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)] leading-relaxed">
            A practical, copy-paste guide to building production-ready AI assistants. 
            Telegram control, model routing, fallbacks, and DevOps — all in 7 days.
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/docs/day-1" className="btn btn-primary btn-md">
              <span className="mono">›</span>
              Start Day 1
            </Link>
            <Link href="/docs" className="btn btn-secondary btn-md">
              Browse Docs
            </Link>
          </div>
          
          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div>
              <div className="text-2xl font-semibold text-[var(--text-primary)] mono">7</div>
              <div className="text-[var(--text-muted)]">Day Roadmap</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[var(--text-primary)] mono">3+</div>
              <div className="text-[var(--text-muted)]">Models Supported</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-[var(--text-primary)] mono">∞</div>
              <div className="text-[var(--text-muted)]">Possibilities</div>
            </div>
          </div>
        </section>
        
        {/* 7-Day Roadmap */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded bg-[var(--accent)] flex items-center justify-center">
              <span className="text-black font-bold mono text-sm">07</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">7-Day Roadmap</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {ROADMAP.map((item) => (
              <Link
                key={item.day}
                href={`/docs/day-${item.day}`}
                className="card card-interactive p-5 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="mono text-xs text-[var(--accent)]">Day {item.day}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 uppercase tracking-wider">
                      {item.status}
                    </span>
                  </div>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                    →
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </section>
        
        {/* Featured Sections */}
        <section className="grid gap-8 lg:grid-cols-2">
          {/* Featured Docs */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Documentation</span>
            </div>
            <div className="space-y-3">
              {FEATURED_DOCS.map((doc) => (
                <Link
                  key={doc.href}
                  href={doc.href}
                  className="flex items-center justify-between p-3 -mx-3 rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors group"
                >
                  <div>
                    <div className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {doc.label}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">{doc.desc}</div>
                  </div>
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)]">→</span>
                </Link>
              ))}
              <Link
                href="/docs"
                className="inline-flex items-center gap-1 mt-2 text-sm text-[var(--accent)] hover:underline"
              >
                View all docs <span>→</span>
              </Link>
            </div>
          </div>
          
          {/* Latest Updates / Blog */}
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider">Latest Updates</span>
            </div>
            <div className="space-y-4">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="block group"
                >
                  <div className="text-xs text-[var(--text-muted)] mono mb-1">{post.date}</div>
                  <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
              <Link
                href="/changelog"
                className="inline-flex items-center gap-1 mt-2 text-sm text-[var(--accent)] hover:underline"
              >
                View changelog <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Language Switcher Banner */}
        <section className="card p-6 bg-[var(--bg-secondary)] border-[var(--border-strong)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[var(--text-primary)]">Bilingual Support</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                中文版文档也已同步更新。Switch to Chinese anytime.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/"
                className="btn btn-secondary btn-sm"
              >
                English
              </Link>
              <Link
                href="/zh"
                className="btn btn-ghost btn-sm"
              >
                中文
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
