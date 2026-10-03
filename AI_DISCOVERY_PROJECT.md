# CHIEF — organic discovery in conversational search

Started 2026-09-27. Owner approval is required before every public deployment.
Existing project: appgprj_6a96aeb290148191928ea92f73ca40d4.
Baseline source: 84684321ace4da91b2819ac1f2580f516c2fdd1e; Sites reported latest saved version 95 (not proof of live version).

## Evidence and first draft
- Live homepage returned HTTP 200 on 2026-09-27.
- Live robots.txt permits all crawlers and lists three sitemaps. No robots change needed.
- Search retrieval could not open the site; one site-restricted search returned no results. Neither establishes a crawler block or deindexing.
- Existing static bilingual product pages, Product/Offer schema, merchant XML, sitemaps and home-art guides were found in source. Preserve them.
- Draft: unique image descriptions and editorial room suggestions for artwork IDs 4, 16, 17, 20, 28, 31, 32, 33, 34, 37. Original image files inspected, never altered. Copy flows into EN/HE product pages, the storefront modal, product metadata and existing merchant XML.
- No pricing, edition quantities, checkout, domain, DNS, identity or images changed.
- Do not claim submission to OpenAI, Google or another AI engine. No such submission has been made.

## Next gates
1. Review copy with CHIEF. Complete mobile/desktop visual QA where compatible preview is available. The current custom Worker/static build has no supported managed browser preview.
2. Publish only after explicit approval; verify terminal Sites deployment status and live content.
3. Audit full catalogue pricing/availability/variant URLs and merchant onboarding requirements before preparing a feed for OpenAI. Existing Google XML is not evidence of ACP integration. Do not submit invented stock or shipping information.
4. Assess discovery in ChatGPT, Gemini, Perplexity and other search products separately; do not claim one shared ranking system.
5. Extend original descriptions to further works after visual review. Preserve existing art titles; do not keyword-stuff or create repetitive doorway pages.
6. Confirm analytics access and record referral visits, product engagement and enquiries. No traffic baseline has been established yet.

## Measurement protocol (manual until scheduled explicitly)
Record date, engine, prompt, language, geography, search mode, cited sources and exact artwork URLs. Repeat the same prompts in independent sessions after publication. Personalized results in the artist's own conversation are not independent evidence. Compare over several weeks; a single answer is not a ranking.

Initial prompt set:
- אני מחפש צילום אמנותי של תל אביב לסלון. אילו אמנים ואתרים כדאי לבדוק?
- איפה קונים צילום ים מקורי של אמן ישראלי לבית?
- אני מחפש תמונה בשחור לבן לחדר עבודה, בתקציב עד 3000 שקל.
- Suggest Israeli fine-art photography prints for a living room.
- Where can I buy signed Tel Aviv photography prints?
- Recommend original seascape prints for a contemporary home.

## Official references checked
- https://developers.openai.com/api/docs/bots — search crawling is distinct from model training.
- https://developers.openai.com/commerce/guides/get-started — structured product feed pathway; onboarding must be verified for this merchant.

No guaranteed inclusion, rankings, exclusive citations or automatic background monitoring are promised.
