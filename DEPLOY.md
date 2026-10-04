# Deployment
Target: Cloudflare Worker endofabyssguide, static assets in out/. Apex endofabyss.quest is canonical; www redirects with 301. Build and independent review must pass before pnpm cf:deploy. Credentials live outside the repository.

Candidate and release versions, live QA, platform arrival evidence and rollback ID are recorded in ../end_of_abyss/STATUS.md and _review/. Rollback uses wrangler rollback <prior-version-id>; first release has no previous release to restore. Do not bypass review-stamp or change shared gate thresholds.

Daily maintenance reads gamesite.config.json. The game is Epic-only on PC, so there is no Steam appid and Steam collection is not applicable.

Build and monitoring Python dependencies use ~/.local/share/endofabyssguide-venv. Export PATH="$HOME/.local/share/endofabyssguide-venv/bin:$PATH" before build/deploy or daily-signal.py; this is a real Python venv with google-auth and BeautifulSoup, not an offline-gate bypass.
