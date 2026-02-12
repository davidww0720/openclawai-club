import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

// Minimal config for MVP (static-first). We can enable R2 incremental cache later.
export default defineCloudflareConfig({});
