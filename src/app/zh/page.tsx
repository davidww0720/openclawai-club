import { SiteShell } from "@/components/SiteShell";
import { Badge, ButtonLink, Card } from "@/components/ui";
import { POSTS } from "@/generated/posts";

export default function ZhHome() {
  const latest = POSTS.slice(0, 2);

  return (
    <SiteShell locale="zh">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>教程站</Badge>
            <Badge>可复现</Badge>
            <Badge>运维手记</Badge>
          </div>

          <h1 className="mt-6 font-[var(--font-display)] text-5xl leading-[0.92] tracking-tight text-white sm:text-6xl">
            OpenClaw 实战
            <br />
            给操作者的现场笔记。
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
            不是宣传页，而是一套能跑通、能复制、能抗故障的教程：Telegram 控制、模型路由与降级、
            安全边界与日常运维。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/zh/docs/day-1">从 Day 1 开始</ButtonLink>
            <ButtonLink href="/zh/docs" variant="ghost">
              查看 Docs
            </ButtonLink>
            <ButtonLink href="/zh/blog" variant="ghost">
              看 Blog
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { href: "/zh/docs", title: "Docs", desc: "7 天可复现路线" },
              { href: "/zh/blog", title: "Blog", desc: "工作流与观点" },
              { href: "/zh/changelog", title: "Changelog", desc: "更新记录" },
            ].map((c) => (
              <Card key={c.href} className="hover:border-white/20">
                <a href={c.href} className="block">
                  <div className="text-base font-semibold text-white">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm text-white/65">{c.desc}</div>
                </a>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs font-semibold tracking-[0.26em] text-white/50">
                  路线图
                </div>
                <div className="mt-2 font-[var(--font-display)] text-2xl text-white">
                  7 天做出稳定助手
                </div>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  每天一小步：可验证、可回滚、可维护。
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/70">
                中文 / EN
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {Array.from({ length: 7 }, (_, i) => i + 1).map((d) => (
                <a
                  key={d}
                  href={`/zh/docs/day-${d}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="font-semibold text-white">Day {d}</span>
                  <span className="text-white/50 group-hover:text-[var(--accent)]">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-4 text-sm text-white/60">
              英文版在 <a className="underline" href="/">/</a>。
            </div>
          </Card>

          <Card>
            <div className="text-xs font-semibold tracking-[0.26em] text-white/50">
              最新
            </div>
            <div className="mt-2 space-y-3">
              {latest.map((p) => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="text-sm font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {p.date} · {(p.tags ?? []).slice(0, 2).join(" / ")}
                  </div>
                  {p.description ? (
                    <div className="mt-2 text-sm text-white/65">
                      {p.description}
                    </div>
                  ) : null}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <div className="grid gap-6 rounded-[var(--radius)] border border-white/10 bg-white/[0.035] p-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.26em] text-white/50">
              核心主张
            </div>
            <h2 className="mt-3 font-[var(--font-display)] text-3xl text-white">
              稳定性，比聪明更重要。
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
              我们用最小权限、明确边界、可回放审计 + 多模型降级链，把“能用”变成“长期能用”。
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/zh/docs/day-3" variant="ghost">
              Day 3：OAuth 方案
            </ButtonLink>
            <ButtonLink href="/zh/docs/day-4" variant="ghost">
              Day 4：降级链
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
