# End of Abyss fact ledger

Checked 2026-10-04 (Asia/Shanghai). Research only; no game playthrough performed. Rules read: launch_gamesites.md 一、二、阶段 1、阶段 3、六 6.1–6.6. Claims below are paraphrases; sources and research caveats belong in this ledger and /sources, not repeated as website furniture.

## Source register

| ID | Source / URL | Evidence quality / retrieved artifact |
|---|---|---|
| S1 | Section 9 official game site https://www.section9interactive.com/ | Developer; `_raw/official.html`; site retains preorder wording, so use the release date with S2/S3 rather than stale CTA. |
| S2 | Epic storefront https://store.epicgames.com/p/end-of-abyss | Publisher storefront read using web; direct curl was 403, `_raw/epic.html` is EMPTY and not evidence. |
| S3 | PlayStation storefront https://store.playstation.com/en-us/concept/10012377 | Independent platform confirmation; `_raw/ps5.html`; identity/release corroboration only. |
| S4 | Epic hands-on + developer interview https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Brian Crecente hands-on, 2026-09-30; web full-page read succeeded. Original `_raw/epic-hands-on.html` is EMPTY; Jina returned a security error, not an article. Specific findings below were read in web view. |
| S5 | Xbox Wire hands-on https://news.xbox.com/en-us/2026/06/19/end-of-abyss-combat-exploration-hands-on/ | Platform first-hand preview by Will Fulton; prelaunch mechanics may differ from released game; checked against S4 and current player reports. |
| S6 | Epic achievements https://store.epicgames.com/achievements/end-of-abyss | Publisher achievement definitions; full-page web read. Dynamic player unlock percentages must not become static difficulty or demand claims. |
| S7 | Official patch notes https://www.section9interactive.com/news | Developer; `_raw/raw-facts-official-news.html` and `.txt`; linked directly by official https://x.com/section9int/status/2106125581968658529. |
| S8 | 100% Guides weapon guide https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | First-hand gameplay guide with its own location screenshots and creator video; `_raw/raw-facts-100p-weapons.html`. Coordinates are not independently played by us. Avoid copying their instructions/screenshots. |
| S9 | 100% Guides critical route https://www.100pguides.com/guides/end-of-abyss-story-path-walkthrough | First-hand screenshot walkthrough; `_raw/raw-facts-100p-story.html`; use only bounded dependency summaries, no fabricated precise route. |
| S10 | GamesRadar first-hand SGF demo https://www.gamesradar.com/games/survival-horror/i-played-30-minutes-of-the-new-game-from-the-original-little-nightmares-devs-and-it-turns-out-a-twin-stick-survival-horror-metroidvania-is-a-recipe-for-spooky-heaven/ | Demo observation of death/spent ammo; 2025 preview, independently corroborated by live Reddit players (S11). |
| S11 | Reddit firsthand player thread https://www.reddit.com/r/metroidvania/comments/1wvrmw1/anyone_else_having_mixed_feelings_about_end_of/ | OpenCLI real logged-in session; `_raw/raw-facts-reddit-mixed.yaml`; player reports establish pain and sometimes corroborate mechanics, not universal rates. |
| S12 | Reddit launch thread https://www.reddit.com/r/CronosNewDawn/comments/1wvhv8o/end_of_abyss_a_metroidvania_shooter_released/ | OpenCLI; `_raw/raw-facts-reddit-launch.yaml`; observed UI complaints only. |
| S14 | Reddit released-game reviews thread https://www.reddit.com/r/Games/comments/1wu6dyf/end_of_abyss_review_thread/ | OpenCLI targeted read; `_raw/raw-facts-reddit-review-thread.yaml`; ammo and energy-door complaints. |
| S13 | Official video links in Section 9 feed https://x.com/section9int/status/2100616402084450448 | Developer links to exploration diary https://youtu.be/Y-XqdJAu4I0; `_raw/raw-facts-twitter-official.txt`. Link identity confirmed; subtitle/embedding/visual facts belong to material agent verification. |

Independence: 6 publishers/communities, not 13 independent observations (S1/S7/S13 same developer; S2/S4/S6 same publisher; S8/S9 same guide maker). Competing wiki sites were discovery clues only and are not evidence for mechanics.

## CONFIRMED — bounded facts safe for site use

| Fact ID | Claim | Source URL | Scope / use |
|---|---|---|---|
| F01 | End of Abyss is Section 9 Interactive's game, published by Epic Games Publishing. | https://store.epicgames.com/p/end-of-abyss | Identity. |
| F02 | Release date October 1, 2026; PC through Epic, PS5, Xbox Series X/S. | https://www.section9interactive.com/ ; https://store.playstation.com/en-us/concept/10012377 ; https://store.epicgames.com/p/end-of-abyss | Already released; no countdown/preorder hero. No Steam release announced is safer than permanently exclusive. |
| F03 | Cel is a combat technician investigating an underground facility; the game is single-player. | https://store.epicgames.com/p/end-of-abyss | Introduction. |
| F04 | New equipment opens branching and previously sealed paths. | https://store.epicgames.com/p/end-of-abyss | Return-route checklist logic. |
| F05 | Scanner can mark keyed doors and breakable walls on the map. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Scan now, revisit later. |
| F06 | Hold right trigger for a deeper scan on an examinable target. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Controller only; do not invent PC keybind. |
| F07 | Scanning reveals door key requirements or power connections to shootable energy nodes. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Separate keyed doors from energy doors. |
| F08 | Running, dodging or drawing a weapon puts the Scanner away. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Clear hostile room before scanning; advice is an inference. |
| F09 | Map coverage expands through exploration; map stations also exist. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | A blank room is not automatically a bug. |
| F10 | Workbenches sit by Restoration Pods, support weapon upgrades, and pods are revival points. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Bench/pod roles. |
| F11 | There are six weapons; explored areas include Outer Sector, Habitation, Factory East/West and Waterworks. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Six guns must not be confused with six tools. |
| F12 | Husk Centipede attacks include bites, bile and a constricting grab. | https://store.epicgames.com/news/end-of-abyss-hands-on-interview-review | Hazard primer; no damage numbers or invented timing. |
| F13 | Left stick moves, right stick aims; dodge and healing are on face buttons. | https://news.xbox.com/en-us/2026/06/19/end-of-abyss-combat-exploration-hands-on/ | No inferred exact button mapping. |
| F14 | Basic energy pistol has unlimited use; shotgun ammunition is limited. | https://news.xbox.com/en-us/2026/06/19/end-of-abyss-combat-exploration-hands-on/ | Ammo planning. |
| F15 | Limited-use healing refills at save pods; flares illuminate and distract. | https://news.xbox.com/en-us/2026/06/19/end-of-abyss-combat-exploration-hands-on/ | Preview evidence; current consumable kit complaints do not disprove recharging heal. Distinguish kit from healing ability. |
| F16 | Materials from environments/enemies buy crafted ammo/equipment and permanent upgrades at stations. | https://news.xbox.com/en-us/2026/06/19/end-of-abyss-combat-exploration-hands-on/ | Spending tradeoff; do not invent recipes/costs. |
| F17 | Official October 2 patch versions are PS5 01.012.000; Xbox/PC 1.0.1.2. | https://www.section9interactive.com/news | Version-sensitive troubleshooting. |
| F18 | That patch fixes doors blocked when death interrupts energy-node destruction, including already affected players. | https://www.section9interactive.com/news | Update and reload before considering a fresh save. Recovery instruction is a conservative inference. |
| F19 | Patch also fixes Defibrillator revival freeze while taking damage, a missing map room and doors displaying reset after restart. | https://www.section9interactive.com/news | Do not promise every map bug is fixed. |
| F20 | Epic lists 43 achievements worth 1,000 XP. | https://store.epicgames.com/achievements/end-of-abyss | Epic version only; not PS trophy count. |
| F21 | Completionist requires Creatures, Notes, Data Shards and Codes in Logbook; separate achievements cover each. | https://store.epicgames.com/achievements/end-of-abyss | Useful four-category tracker. |
| F22 | Master Explorer requires every room; Second Sight upgrades Scanner; Shuttle Network Restored activates every station. | https://store.epicgames.com/achievements/end-of-abyss | Completion checklist. |
| F23 | Power Up fully upgrades one weapon; Super Power all weapons; Fully Suited Up maximizes Suit Power. | https://store.epicgames.com/achievements/end-of-abyss | Separate gear goals. |
| F24 | Focused uses one Security Rifle shot on multiple enemies; Triple-Kill uses one grenade for three enemies. | https://store.epicgames.com/achievements/end-of-abyss | Achievement task conditions; no farming coordinates. |
| F25 | Weapons named Pulse Gun, Riot Breaker, Security Rifle, Support Gun, Incinerator, Particle Disruptor. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Firsthand creator list corroborates official total; weapon roles beyond pistol/shotgun not invented. |
| F26 | Pulse Gun starts available; Riot Breaker Habitation F1; Security Rifle Factory East F2. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Locator overview, not exhaustive copied route. |
| F27 | Security Rifle access uses Factory Keycard and an Explosive Charge. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Return once tools owned. |
| F28 | Support Gun is in Outer Sector B2; Incinerator Lower Levels F1; Particle Disruptor Infirmary B1. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Creator-based sector/floor lookup. |
| F29 | Incinerator clears growth to obtain Infirmary Key; Particle Disruptor is beyond Infirmary's boss. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Dependency, no fabricated coordinates. |
| F30 | Creator guide says all six weapons remain obtainable after finishing the story. | https://www.100pguides.com/guides/end-of-abyss-all-weapon-locations | Useful reassurance; don't extend to all trophies/items. |
| F31 | Reactor objective uses Power Cells, a lockdown encounter and a security-door PC, before Husk Centipede and core activation. | https://www.100pguides.com/guides/end-of-abyss-story-path-walkthrough | Bounded route checklist; no copied turn-by-turn. |
| F32 | Factory West's documented energy door has three scanned nodes that must be shot. | https://www.100pguides.com/guides/end-of-abyss-story-path-walkthrough | Do not universalize three nodes to every door. |
| F33 | Central elevator progression calls for three SCU overrides. | https://www.100pguides.com/guides/end-of-abyss-story-path-walkthrough | Objective/route hub. |
| F34 | Spent ammo stayed spent after death in first-hand demo; current players report retained consumable expenditure too. | https://www.gamesradar.com/games/survival-horror/i-played-30-minutes-of-the-new-game-from-the-original-little-nightmares-devs-and-it-turns-out-a-twin-stick-survival-horror-metroidvania-is-a-recipe-for-spooky-heaven/ ; https://www.reddit.com/r/Games/comments/1wu6dyf/end_of_abyss_review_thread/ | Don't claim no death cost. Pod as practice reset has an ammo cost. |
| F35 | Demo observation: enemies reset at save points; opened shortcuts persist after death. | https://www.gamesradar.com/games/survival-horror/i-played-30-minutes-of-the-new-game-from-the-original-little-nightmares-devs-and-it-turns-out-a-twin-stick-survival-horror-metroidvania-is-a-recipe-for-spooky-heaven/ | Avoid universal all-enemies/all-inventory claims. |

## UNCONFIRMED / publishing limits

- Exact all-weapon damage, magazines, upgrade costs and crafting recipes: no values in the confirmed primary sources. Do not write rankings/math calculator with fabricated stats. Lead: https://www.100pguides.com/guides/end-of-abyss-all-weapon-upgrade-locations .
- Centipede head weak point, 50% phase boundary, grenade best strategy, grab taking 75% HP: player/third-party reports only, no independent video inspection. Official attack types F12 suffice for a conservative primer. Lead: https://www.reddit.com/r/metroidvania/comments/1wvrmw1/anyone_else_having_mixed_feelings_about_end_of/ .
- All bosses/list/order, precise secret endings, exact vault count and collectable totals: require separate direct gameplay/trophy audit. Lead: https://www.100pguides.com/trophy-guides/end-of-abyss .
- Map not displaying after patch: one player reports; cannot confirm generalized failure or a universal fix. Source: https://www.reddit.com/r/metroidvania/comments/1wvrmw1/anyone_else_having_mixed_feelings_about_end_of/ .
- Menu/loadout reopening reportedly helps one player's scrolling issue; do not state as developer fix. Same URL.
- No Steam release currently announced does not prove never on Steam. Official platform scope: https://www.section9interactive.com/ .
- Official video URLs are sourced, but no mechanics derived from unseen video. Link/embedding/subtitles still need material-agent gates: https://youtu.be/Y-XqdJAu4I0 .

## First-page plan (six to eight useful pages)

| Proposed route | User task | Facts / evidence | Presentation / links |
|---|---|---|---|
| /energy-node-door-not-opening | Door puzzle or launch bug? Preserve progress and match the symptom. | F07,F17–19,F32; Reddit energy-door pain. | Decision tree; first compare version, interrupted-node death, active nodes, keyed door. Link Scanner, map, saves. |
| /scanner | Record locked paths and follow energy connections safely. | F05–09,F21–22. | Four scanner jobs + safe-room advice; official exploration video first. Link door, map, checklist. |
| /save-pods-and-death | Understand revival, consumed ammunition and replenishment. | F10,F14–16,F34–35 + live pain. | Kept vs spent vs reset table, clearly bounded; practice plan. Link weapon list, scanner, boss primer. |
| /weapons | Find missing guns by sector and tool requirement. | F11,F14,F25–30. | Six-row sector/floor lookup with user-owned-tool filter; not a fabricated DPS tier list. Link saves, map, completion. |
| /map-and-backtracking | Decide whether to explore, return with a tool, or update for a map state fix. | F04–05,F09,F19,F22,F26–33. | Gates grouped by key/tool/power; map completion checkbox. Link door, scanner, weapons. |
| /reactor-power-cells | Resume early story at the right dependency. | F31; firsthand creator screenshots in source ledger. | Objective progression/checklist; write only bounded sequence until video verified; link Centipede/saves/map. |
| /husk-centipede | Prepare for bite, bile and grab without overspending retries. | F12,F14,F31,F34 + exact player complaints. | Attack-aware advice labeled as advice, no invented damage/phase timers. Link reactor, saves, weapons. |
| /achievements | Track logbook, rooms, Scanner and equipment goals. | F20–24,F30. | Four-category logbook and gear/transport checklists; no hidden-achievement locations. Link every relevant guide. |

No route should claim a full walkthrough or all locations until its own evidence supports that promise. Each page needs >=2 semantic body in-links plus outgoing next action; homepage lists every route once. There is enough evidence for 6 strong pages (door, Scanner, saves, weapons, map, achievements). Reactor and boss pages are useful but should stay focused and bounded, not padded to hit a word count.
