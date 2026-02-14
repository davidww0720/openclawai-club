import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function ZhDay3() {
  return (
    <SiteShell locale="zh">
      <DocsLayout locale="zh" day={3}>
        <h1>Day 3｜不用 API Key：订阅套餐 & OAuth 模型接入</h1>
        <p>
          重点覆盖 MiniMax 订阅、Codex OAuth、Gemini OAuth，并写到可复用。
        </p>
        <PrevNext locale="zh" day={3} />
      </DocsLayout>
    </SiteShell>
  );
}
