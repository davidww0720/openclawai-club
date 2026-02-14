import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay4() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={4}>
        <h1>Day 4｜多模型降级链：永不掉线</h1>
        <PrevNext locale="zh" day={4} />
      </DocsLayout>
    </SiteShell>
  );
}
