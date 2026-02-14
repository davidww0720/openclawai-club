import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day2() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={2}>
        <h1>Day 2 — Make it stable (retries, fallbacks, clear errors)</h1>
        <p>We turn “it works” into “it keeps working”.</p>
        <PrevNext locale="en" day={2} />
      </DocsLayout>
    </SiteShell>
  );
}
