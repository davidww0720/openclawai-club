# Deploy runbook (openclawai-club)

## One-time setup (VPS)

### 1) Create local secrets file (NOT committed)
Create: `~/.config/openclawai-club/env` with:

```bash
export CLOUDFLARE_API_TOKEN="<token>"
export GITHUB_PAT="<fine-grained pat>"
```

Permissions:
```bash
mkdir -p ~/.config/openclawai-club
chmod 700 ~/.config/openclawai-club
chmod 600 ~/.config/openclawai-club/env
```

### 2) Configure git to use PAT for this repo
Option A (recommended): set remote url with PAT (fine-grained)
```bash
git remote set-url origin "https://x-access-token:${GITHUB_PAT}@github.com/davidww0720/openclawai-club.git"
```

Option B: credential helper (if available)

## Deploy (repeatable)
From repo root:
```bash
source ~/.config/openclawai-club/env
npm run build
npx opennextjs-cloudflare build
npx wrangler deploy .open-next/worker.js --assets=.open-next/assets
```

## Preflight checks
- `echo $CLOUDFLARE_API_TOKEN | wc -c` > 20
- `git remote -v` points to correct repo
- `curl -s https://openclawai.club/sitemap.xml` returns 200 after deploy
