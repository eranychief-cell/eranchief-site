# CHIEF website: source and publication

- Existing site: https://eranchief.com
- Platform: ChatGPT Sites; custom HTML/CSS/JavaScript with a generated Worker and static pages.
- Project: CHIEF Fine Art Photography
- Project ID: `appgprj_6a96aeb290148191928ea92f73ca40d4`
- Repository: `https://git.chatgpt-team.site/3b71fe01-fe97-4e6b-bd65-c0877b609675/appgprj_6a96aeb290148191928ea92f73ca40d4.git`
- Branch: `main`
- `.openai/hosting.json` preserves the existing Sites identity and D1 binding.
- GoDaddy is the domain registrar. Do not recreate the site, use Airo/Wix, or change DNS.

## Source locations

- `index.html`: English homepage and artist summary, homepage metadata and structured data.
- `build.mjs`: generates Hebrew pages, `/about/`, catalogue pages, XML sitemaps and the Worker. Edit this source, not generated `dist/` files.
- `artist-profile.css`: existing portrait and biography styling.
- `press/index.html`: press archive.
- `app.js`: artwork catalogue and storefront behaviour.

## Publication

Use the installed Sites building/hosting skills. Retrieve this existing project; obtain a short-lived source credential when needed. Keep credentials out of files and Git configuration. Pull the current `main` before edits. Refresh the execution profile, install locked dependencies if absent, and build through the Sites build helper (project build: `node build.mjs`). Validate generated routes, JSON-LD, canonicals and local references. Commit and push the exact source before packaging `dist` with the Sites package helper. Save that pushed commit with the archive, deploy the saved version, and check for terminal deployment success. Verify the public content after deployment. Never claim Google indexing or AI citation based on publication success alone.

## Biography update — 20 September 2026

The user authorized completing and publishing the biography/identity correction. Source changes describe photography and editing exclusively on iPhone, the origin in photographing his daughter, and current artistic practice. They keep FANTASEA as historical exhibition context. A stable English biography at `/about/` is paired with `/he/eran-yerushalmi-photographer/`. The artist identity retains `https://eranchief.com/#artist`; social links include the user's two Instagram profiles and Facebook.

Validation before publication: build successful; 416 JSON-LD blocks parse; 419 unique sitemap URLs; modified biography pages have self-canonicals, reciprocal language links, indexable metadata and valid local references. No compatible local browser preview is configured for this custom build. Google Search Console opened to a signed-out account; URL Inspection and Request Indexing still require authentication and must not be recorded as completed until verified in the UI.

Google chooses the sources of AI answers. These changes improve clarity and discoverability; they do not force exclusive citation of this site. Follow up on the exact three URLs: `/`, `/about/`, `/he/eran-yerushalmi-photographer/`.

## Brand correction — 20 September 2026

User explicitly requires the public artist name to be CHIEF only, including Hebrew pages. Do not use the surname or Hebrew transliteration in authored website copy or metadata. Preserve existing lowercase URLs and asset paths to prevent broken links.

Version 84 biography updates were published and all three URL Inspection indexing requests (homepage, Hebrew biography, English biography) were accepted by Google Search Console on 20 September 2026. Acceptance is not evidence of completed recrawling or AI citation.

## Identity restoration — 22 September 2026

The user explicitly reversed the CHIEF-only instruction after the personal portrait stopped surfacing in Google. Use **Eran Yerushalmi (CHIEF)** as the primary artist identity in English and **ערן ירושלמי (CHIEF)** in Hebrew. Keep CHIEF as the artist alias and brand. The homepage, biography titles, visible artist headings, portrait alt text, Open Graph metadata, `Person` schema and `ImageObject` must consistently connect the legal name, artist alias and portrait. Preserve existing URLs and all later catalogue, press and commerce additions.

## Instagram archive scope — 21 September 2026

The user confirmed ownership of @dylan_tlv and @chiefgallerytlv. Attribute their photographic work to CHIEF. For the CHIEF Gallery TLV audit, the user requested excluding personal portrait posts and explicitly confirmed that photography-community publications of art and dance work should be included. Preserve the distinction between community selections, brand photography publications and professional awards. The archive source data records each account audit and its counts; avoid adding duplicate post URLs.

The user subsequently asked to exclude SCOOTAIR. Its records and highlight were removed from the Instagram archive and press page; do not re-add them in future account audits.
