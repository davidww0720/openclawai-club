import { SiteShell } from "@/components/SiteShell";
import { DocsLayout } from "@/components/DocsLayout";

export default function ZhDocsIndex() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh">
        <h1>Docs</h1>
        <p>从 Day 1 开始按步骤跑起来；每篇都有验收清单与排错。</p>
      </DocsLayout>
    </SiteShell>
  );
}
