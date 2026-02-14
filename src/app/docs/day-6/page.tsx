import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day6() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={6}>
        <h1>Day 6 — Ops & monitoring</h1>
        <PrevNext locale="en" day={6} />
      </DocsLayout>
    </SiteShell>
  );
}
