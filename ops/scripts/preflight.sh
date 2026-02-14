#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "ERR: CLOUDFLARE_API_TOKEN is missing" >&2
  exit 2
fi

if [[ -z "${GITHUB_PAT:-}" ]]; then
  echo "WARN: GITHUB_PAT is missing (git push may fail)" >&2
fi

echo "OK: tokens present"

git remote -v | sed -n '1,4p'

node -v
npm -v
