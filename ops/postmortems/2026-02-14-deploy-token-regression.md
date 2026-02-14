# Postmortem: deploy token regression (2026-02-14)

## Symptom
- `git push` failed with: `could not read Username for 'https://github.com'`
- `wrangler deploy` failed with: missing `CLOUDFLARE_API_TOKEN` (non-interactive requirement)

## Impact
- Deployment pipeline stalled; required manual intervention.

## Root causes
1) **Credentials were never persisted on this host**
   - Git remote uses HTTPS but no credential helper configured (`credential.helper` empty), so pushes require interactive credentials.
   - Wrangler requires `CLOUDFLARE_API_TOKEN` in non-interactive runs; token not present in environment.

2) **No runbook / preflight checks**
   - We didn't have a single command that verifies credentials and deployment prerequisites before attempting deploy.

## What we changed / will change
- Add runbook: `ops/runbooks/deploy.md`
- Add preflight script: `ops/scripts/preflight.sh`
- Add deploy script: `ops/scripts/deploy.sh` (loads env from a local secrets file)

## Prevention (hard rules)
- Never rely on interactive auth on VPS.
- All deploys must start with `preflight.sh`.
- Secrets are not stored in git; use a local secrets file and environment variables.

## Notes
- User pasted tokens in chat; rotate/revoke them immediately.
