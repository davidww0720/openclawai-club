#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if [[ -f "$HOME/.config/openclawai-club/env" ]]; then
  # shellcheck disable=SC1090
  source "$HOME/.config/openclawai-club/env"
fi

"$ROOT/ops/scripts/preflight.sh"

npm run build
npx opennextjs-cloudflare build
npx wrangler deploy .open-next/worker.js --assets=.open-next/assets

echo "Deployed. Verify: https://openclawai.club/sitemap.xml"
