# Left comp refinement — 2026-10-13

Published at https://endofabyss.quest/ as Cloudflare version `2606d999-ff02-4783-bd5f-0a668ca5613a`. Pre-release production version, checked through Wrangler rather than inferred from old notes: `a40c1348-faea-458b-9f1c-d77f670b2ed3`.

The selected original `.impeccable/mocks/scene-directory.png` and its 46 measured regions remain unchanged. Refined the headline and directory heading weight/tracking, summary wrapping, notebook heading/action spacing and complete book stroke. Mobile summaries use 16px. The desktop door explanation uses natural content growth with a 94px minimum. Dropdown navigation, theme persistence, guide facts, tools and isolated ad behavior are retained. Pre-existing Oct 13 source/content changes were preserved and included in the independent source audit.

## Evidence and scope

- Full `pnpm build` gates passed, then the normal `pnpm cf:deploy` workflow passed. Independent source review used `gpt-6-astra` with high reasoning and covered the exact 100-path review manifest. Deployment baseline includes 101 paths with the generated page-freeze ledger.
- Same-frame original-comp reading improved from 0.8727 to 0.9026. Missing regions: 0. Contradicted readings remain for headline, entry-3, entry-6, notes-icon and notes-title. These are retained, not relabeled as automatic passes.
- The 1440px native desktop gate still reads 0.7702: the global alignment heuristic shifts the scaled screenshot before regional scoring. The diagnostic side-by-side is unshifted. Neither the comparison algorithm nor its thresholds were changed to obtain acceptance.
- Independent finish review reports 0 visual material findings but **disposition: fix**, because native responsive remains open and a human capture receipt is absent. This release does not establish native automatic `ship`, human screenshot acceptance, or award recognition.
- User explicitly requested skipping the review page. Continued the authorized implementation/release while preserving the unclosed native status. No receipt was fabricated or submitted on the user's behalf.
- Live QA: 34 route/theme states, 14 navigation combinations, all 7 tool flows passed; browser page errors 0. Twenty live captures have no horizontal overflow. Six checked desktop/mobile/theme captures are pixel-identical to local at RGB tolerance 2; the 1505px dark first viewport differs by 0.271%, wholly within the game-image band, with header/directory/helper pixels unchanged.
- Native live checks: iOS and Android each checked home and Scanner, 6 screenshots and 2 contact sheets; all 4 sheets viewed. Android body taps produced no hijack or new tabs. iOS body-tap checks were not run. Android's OS connection detector banner remained present while the production URL/page loaded correctly. Both owned simulators were stopped; the physical USB device was untouched.

## Native capture repair

Task-local official engine-v0.1.11 source, commit `86be0f02dcdaaeb3f9b6780711dbdc03a14ce222`, supports declared `.webmanifest`/`.json` MIME types and adds `manifest-src 'self'` to the offline snapshot response. Production CSP remains unchanged. Frozen-byte checks, explicit paths, input budgets, undeclared/private/traversal 404 behavior, scoring and approval handling remain intact. Six snapshot tests passed; the patch received a narrow independent source-review PASS.

The native capture now succeeds against the post-deploy export: revision `c9dd354cf19effb73e7329ed0c1bb0db8496ae2b5909d58ebbd338f3648c8720`, status `awaiting-review`, receipt null. The global Impeccable installation is unchanged. Root symlinks for `_next`, art, fonts and manifest/favicon files give the frozen review's absolute resource URLs an explicit local route; their targets stay inside the project export. They do not affect the deployed asset tree.

Evidence archive: `../end_of_abyss/_review/comp-closure-20261013/` — summary.json, source-review.md, finish-review.md, final/diff1505/, native-capture-postdeploy.json, hero-manifest-final.json, live/, qa-live/, mobile-ios-live/, mobile-android-live/ and engine-mime-support.patch. Full build/deploy/QA logs: `../end_of_abyss/_raw/comp-closure-*-20261013.log`.

Binary SHA-256: `14cce08363e6b985bbf3f226f46e204cc8f96071b8bce7c42d59e03457695b82`.
Patch SHA-256: `3b09c547be954ffcd39eba486e96a6d87825849bd75ead8625ab12f9d3d0bfe9`.

Documentation: DESIGN.md and the token-bearing .impeccable/design.json were independently reconciled with source/export. The unavailable named finish/documenter roles used fresh default-agent fallbacks with the supplied degraded role references; substitution was disclosed in their reports.
