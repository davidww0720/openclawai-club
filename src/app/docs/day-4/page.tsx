import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day4() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={4}>
        <h1>Day 4 — Multi-model fallback chain (never offline)</h1>
        <PrevNext locale="en" day={4} />
      </DocsLayout>
    </SiteShell>
  );
}
