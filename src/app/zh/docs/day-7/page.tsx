import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay7() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={7}>
        <h1>Day 7｜内容工作流：飞书 → 网站 → 公众号草稿箱</h1>
        <PrevNext locale="zh" day={7} />
      </DocsLayout>
    </SiteShell>
  );
}
