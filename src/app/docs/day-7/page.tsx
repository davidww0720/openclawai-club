import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day7() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={7}>
        <h1>Day 7 — Content workflow (Feishu → Site → WeChat drafts)</h1>
        <PrevNext locale="en" day={7} />
      </DocsLayout>
    </SiteShell>
  );
}
