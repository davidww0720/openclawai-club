import { SiteShell } from "@/components/SiteShell";
import { DocsLayout, PrevNext } from "@/components/DocsLayout";

export default function Day1() {
  return (
    <SiteShell locale="en">
      <DocsLayout locale="en" day={1}>
        <h1>Day 1 — OpenClaw + Telegram in 1 hour (Beginner-friendly)</h1>
        <p>
          Goal: by the end of this guide, you can talk to your assistant via
          Telegram, and you know where to find config and logs.
        </p>
        <h2>What you will achieve (Checklist)</h2>
        <ul>
          <li>Telegram bot replies to your message</li>
          <li>OpenClaw running on the VPS (no continuous errors)</li>
          <li>You can locate config + logs</li>
        </ul>
        <h2>Step 1 — SSH into your VPS</h2>
        <p>
          You’ll run the following commands <em>on the VPS</em> after SSH login.
        </p>
        <h2>Step 2 — Install Node.js (recommended: nvm)</h2>
        <p>
          If you haven’t installed Node before, use nvm to avoid permission
          issues.
        </p>
        <h2>Step 3 — Install OpenClaw</h2>
        <h2>Step 4 — Create Telegram bot</h2>
        <h2>Step 5 — Verify</h2>
        <p>
          This is the website short version. The Feishu version is the full
          version with more troubleshooting.
        </p>
        <PrevNext locale="en" day={1} />
      </DocsLayout>
    </SiteShell>
  );
}
