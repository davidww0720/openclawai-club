import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day3() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={3}>
        <h1>Day 3 — Providers without API keys (subscriptions & OAuth)</h1>
        <p>
          We’ll document MiniMax subscription, Codex OAuth, and Gemini OAuth
          — step-by-step.
        </p>
        <PrevNext locale="en" day={3} />
      </DocsLayout>
    </SiteShell>
  );
}
