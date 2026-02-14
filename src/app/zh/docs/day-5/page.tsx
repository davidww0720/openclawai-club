import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay5() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={5}>
        <h1>Day 5｜工具与权限：安全边界</h1>
        <PrevNext locale="zh" day={5} />
      </DocsLayout>
    </SiteShell>
  );
}
