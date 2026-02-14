import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay2() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={2}>
        <h1>Day 2｜稳定性：重试、降级、错误提示</h1>
        <p>把“能跑”变成“能长期跑”。</p>
        <PrevNext locale="zh" day={2} />
      </DocsLayout>
    </SiteShell>
  );
}
