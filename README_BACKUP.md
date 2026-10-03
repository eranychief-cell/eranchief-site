# CHIEF Fine Art Photography — Source Backup

Source snapshot: commit `989e9f5911319b1350a5dbe7e01a181a3f48caa5` (3 October 2026). This archive contains the tracked source tree, original image assets, configuration, database schema/migrations, and Worker source. It excludes `.git`, `node_modules`, `dist`, local credentials, and the live database/object storage.

## Build

Requires Node.js, npm, Python 3, and Python Pillow. In the extracted directory:

```sh
python3 -m pip install Pillow
npm ci
npm run build
```

The output is in `dist/client` (static site and generated WebP previews), `dist/server` (Worker module), and `dist/.openai` (hosting configuration and migrations). `generate-previews.py` reads the original images without replacing them.

## Server and data

`build.mjs` generates the Worker entry point for `/api/newsletter`, `/api/fx`, redirects, and static asset serving. `collector-stories-worker.js` handles story submission, moderation, retrieval, and uploaded photos. The `/api/fx` endpoint fetches public exchange rates.

The hosting configuration names the database binding `DB` (Cloudflare D1) and image storage binding `BUCKET` (R2). The Worker also uses `ASSETS` to serve static files. Schema and migrations are in `db/schema.ts` and `drizzle/`.

Database tables (schema only; no live records in this backup):
- `newsletter_subscribers`: email, source, and signup time.
- `collector_stories`: first name, email, city, artwork, message, photo reference/type, publication consent, moderation status, IP hash, and submission time.

Customer-uploaded story photos live in `BUCKET`, not in the ZIP. This source backup does not include subscribers, submitted stories, uploaded photos, or other live account data.

## Sensitive configuration

No passwords or API keys are included. Configuration/binding **names only**, without values: `DB`, `BUCKET`, `ASSETS`. Authentication headers are supplied by the hosting platform. If any external service is connected later, its credentials must be configured separately and never placed in this archive.
