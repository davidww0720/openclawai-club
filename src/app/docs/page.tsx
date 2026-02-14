import { SiteShell } from "@/components/SiteShell";
import { DocsLayout } from "@/components/DocsLayout";

export default function DocsIndex() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en">
        <h1>Docs</h1>
        <p>
          Start from Day 1. Each day is designed to be runnable and
          copy-paste-friendly.
        </p>
      </DocsLayout>
    </SiteShell>
  );
}
