import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day5() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={5}>
        <h1>Day 5 — Tools & permissions (safe-by-default)</h1>
        <PrevNext locale="en" day={5} />
      </DocsLayout>
    </SiteShell>
  );
}
