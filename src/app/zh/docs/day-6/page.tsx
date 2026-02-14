import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay6() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={6}>
        <h1>Day 6｜运维与监控</h1>
        <PrevNext locale="zh" day={6} />
      </DocsLayout>
    </SiteShell>
  );
}
