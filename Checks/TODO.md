# Tidewritten — TODO

_Last reviewed: 2026-11-03_

This is the current roadmap and concise completion record. Detailed technical conventions live in [Notes.md](Notes.md), and the root [Instructions.txt](../Instructions.txt) defines the project workflow.

## Current status

**Status:** Phases 1–6 are complete. **Phase 7 — Personal Reading Experience is complete.** Phase 7.1 — Personal Bookshelf, Phase 7.2 — Library Improvements, and Phase 7.3 — Story Presentation Improvements are implemented, merged, deployed, and have passed their acceptance checks. Phase 7.3's GitHub Pages build and deployment succeeded for commit `0a5c05ca1c356a04891f99f599ae265a1d549222` (workflow run [#509](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41412730078)); the owner confirmed its rendered-browser QA passed on 2026-11-02. **All Phase 7 workstreams and final verification are complete.**

Phase 7 combines the next three improvements into one milestone:
1. Personal Bookshelf.
2. Library improvements.
3. Story presentation improvements.

Estimated effort: approximately **5–9 focused development days**, plus owner review and any revisions. This is an estimate, not a deadline.

## Original story development

- [x] Create and maintain the central story-planning brief at [Checks/Story-Projects/Untitled-RomCom-Light-Novel.md](Story-Projects/Untitled-RomCom-Light-Novel.md); finalized as the authoritative **After the Ordinary — Final Story Bible**.
- [x] Finalize the official title: **After the Ordinary**.
- [x] Fix the complete series length at **five volumes**, covering one Japanese school year from April through March, plus a short spring epilogue.
- [x] Consolidate the core premise, themes, tone, narrative style, setting, school calendar, protagonist, four central girls, sibling/family continuity, festival rumour, tutoring arrangement, and relationship progression.
- [x] Resolve the previously open story-planning decisions at the concept level, including the family mystery and reveal, living arrangement, Ayane's gradual drift from Itsuki, and the five-volume arc structure.
- [x] Develop a chapter-by-chapter outline for Volume 1.
- [ ] Complete the editorial and continuity revision of the English manuscript for Volume 1 before beginning translation work.

**Current Volume 1 work:** The complete English narrative is now formatted as the canonical reader page at `stories/After-the-Ordinary-Vol.1-English.html` on branch `writing/after-the-ordinary-vol1` (18 core chapters, Prologue, Epilogue, 9 interludes, 5 side scenes; approximately 30,653 words of prose). The Markdown working manuscript remains at `Checks/Story-Projects/After-the-Ordinary-Vol.1-Manuscript.md` as the editorial source. The HTML conversion has passed source-structure checks; final editorial and continuity revision remains pending. The festival-timeline conflict is resolved: the owner confirmed late June on 2026-11-03, and the Story Bible now records late June as canon. Volume 1 remains April–June. The owner explicitly directed publication of Volume 1 on 2026-11-03. The canonical English page is published at `/book/After-the-Ordinary-Vol.1/`. GitHub Pages build and deployment succeeded for merge commit `7a024568df2e3e8e012ec3ce40d0c13699d8971d` (workflow run [#521](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41662407519)). The separate editorial and continuity revision remains outstanding and has not been marked complete. No translations have been created.

## After the Ordinary — Volume 2

- [x] Create the canonical English HTML reader page at `stories/After-the-Ordinary-Vol.2-English.html` on branch `writing/after-the-ordinary-vol2`, with the canonical route `/book/After-the-Ordinary-Vol.2/`.
- [ ] Complete editorial and continuity revision of the Volume 2 manuscript before translation work. Confirm the July–September timeline, Volume 1 continuity, chapter-to-chapter transitions, and the balance of the ensemble cast.
- [ ] Review the manuscript's final length and chapter development against the intended light-novel volume standard.
- [ ] After the English manuscript is reviewed and approved, plan any requested translations in two-chapter batches. No Volume 2 translations have been created.

**Current Volume 2 draft:** The HTML manuscript contains a Prologue, 18 chapters, 3 interludes, and an Epilogue. It follows the approved outline and begins on July 1 immediately after Volume 1's late-June ending. Itsuki remains the primary viewpoint; Nanami and Itsuki are written strictly as siblings. The draft is a first manuscript, not yet editorially approved or translated.

## After the Ordinary — Volumes 3–5 and series navigation

- [x] Add the canonical English Volume 3, **The Things We Didn't Say**, at `/book/After-the-Ordinary-Vol.3/` (Prologue, 21 chapters, 4 interludes, Epilogue).
- [x] Add the canonical English Volume 4, **The Distance Between Yesterday and Tomorrow**, at `/book/After-the-Ordinary-Vol.4/` (Prologue, 20 chapters, 4 interludes, Epilogue); merged through PR [#88](https://github.com/GamerCr4cked/Tidewritten/pull/88).
- [x] Add the canonical English Volume 5, **Before the Ordinary Ends**, at `/book/After-the-Ordinary-Vol.5/` (Prologue, 18 chapters, 3 interludes, spring Epilogue); merged through PR [#89](https://github.com/GamerCr4cked/Tidewritten/pull/89).
- [x] Verify that all five canonical English volumes use the same `series: "After the Ordinary"` metadata and sequential `volume: 1`–`5` values, with matching canonical routes.
- [x] Confirm that the shared `_layouts/light-novel.html` automatically renders compact Previous/Next volume-navigation controls based on canonical series metadata.
- [x] Add the reader-facing end-of-volume continuation line to Volumes 1–4, matching the established text-link style used by other light novels and pointing to the next volume's canonical route. Volume 5 is the final volume and has no continuation link.
- [ ] Complete the separately tracked editorial and continuity revisions for Volumes 1 and 2 before any translation work.

**Volume 5 source review:** 18 sequential chapter IDs, 3 sequential interlude IDs, Prologue and spring Epilogue present; IDs are unique; paragraph opening/closing counts balance; no broken local anchors were found. The manuscript continues from Volume 4's February 28 epilogue and retains the canonical Volume 5 route. Source-level checks do not replace rendered-browser QA.

## Active roadmap

## Phase 7 — Personal Reading Experience

**Goal:** Make Tidewritten more useful as a personal reading destination by connecting a lightweight bookshelf, better Library discovery, and a more polished story-reading presentation.

### 7.1 — Personal Bookshelf

- [x] Add per-volume **Want to Read**, **Currently Reading**, and **Completed** statuses.
- [x] Add an independent **Favorite** toggle; favoriting must not replace the reading status.
- [x] Persist bookshelf records locally in the browser using a dedicated, versioned storage key.
- [x] Treat English, Hinglish, and Banglish editions of one volume as the same canonical book.
- [x] Surface status/favorite information in appropriate Library, volume, and reader views without creating duplicate cards.
- [x] Add clear empty states, accessible controls, and a concise explanation that bookshelf data is browser-local and not synced across devices.
- [x] Ensure bookshelf actions and migrations never clear reading progress, statistics, history, language, theme, text size, or appearance preferences.

**Acceptance checks**
- [x] A status and favorite remain after reload in the same browser profile (local storage harness).
- [x] Changing edition does not create a second record by design: all editions use the canonical English volume path.
- [x] A volume can be favorited while retaining any of the three reading statuses (independent record fields).
- [x] Missing and malformed/unsupported local data fails safely; raw unsupported data is preserved.
- [x] Owner-reported browser QA: Reading statuses, Favorites, Library integration, Volume controls, Translation independence, Persistence, Responsive usability, and Data safety all passed (2026-11-01; owner-reported, not independently performed).

**Implementation status:** Complete. Core implementation, local storage harness checks, dedicated Bookshelf page/navigation, homepage overflow fix, reading-record interaction fixes, and theme synchronization are complete. The owner confirmed on 2026-11-01 that all remaining 7.1 follow-up browser checks also pass. This is owner-reported QA, not an independently performed browser session.


### 7.1 follow-up — Dedicated Bookshelf and homepage overflow

- [x] Add a Bookshelf tab to the shared top navigation.
- [x] Add a dedicated `/bookshelf/` page listing saved canonical volumes.
- [x] Add All saved, Currently Reading, Want to Read, Completed, and Favorites views, with search and sorting.
- [x] Link available saved volumes directly to their canonical volume pages; retain unavailable records without broken links.
- [x] Keep Favorite independent of reading status and update the page when bookshelf records change.
- [x] Add homepage width containment without changing browser zoom or scaling the design.
- [x] Owner-confirmed browser QA (2026-11-01): no horizontal page scroll at 100% zoom; Bookshelf navigation, saved-volume links, filters, and empty states verified at desktop/mobile widths and both themes.

### 7.1 follow-up — Reading-record hover interaction

- [x] Remove the primary-hover media-query gate from pointer listeners.
- [x] Add CSS `:hover` expansion as a fallback alongside pointer-state expansion.
- [x] Keep keyboard focus expansion and touch-first tap-to-expand behavior.
- [x] Remove the touch-device click interceptor so Continue reading navigates on its first activation.
- [x] Owner-confirmed browser QA (2026-11-01): desktop hover expansion, one-click Continue reading navigation, keyboard activation, and one-tap touch navigation verified.

### Theme consistency fix — Library and Reading Statistics

- [x] Replace fixed dark surfaces and text colors on Library cards, tools, filters, volume chooser, and bookshelf controls with shared theme tokens.
- [x] Make Reading Statistics cards, activity, milestones, history, and privacy panels follow shared theme tokens.
- [x] Preserve decorative series-cover artwork while making surrounding UI theme-aware.
- [x] Owner-confirmed browser QA (2026-11-01): Library and Reading Statistics verified in Dark and Light themes, including cards, controls, volume chooser, text contrast, and page backgrounds.

### 7.2 — Library improvements

- [x] Audit and refine Library search plus genre, publication-status, and available-edition filters; search now indexes canonical series/volume titles and descriptive metadata rather than interface text or saved bookshelf summaries.
- [x] Add deterministic, English-locale A–Z and Z–A series-title sorting, with stable tie-breaks for volume-count and recency sorting.
- [x] Preserve and verify bookshelf-status and favorite filters; each matches a series when at least one canonical volume matches.
- [x] Refine per-series reading summaries to count volume statuses and favorites independently, and hide the summary when nothing is saved.
- [x] Preserve one Library card per canonical series, the multi-volume chooser, and direct opening for single-volume series.
- [x] Preserve keyboard volume selection, dialog semantics, focus movement/restoration, and narrow-screen layout rules in source.
- [x] Keep Recently Updated disabled because no canonical volume currently supplies trustworthy `content_updated` metadata; do not invent dates or popularity rankings.
- [x] Correct publication-status classification: only explicitly identified single-volume standalone works receive **Standalone**; **Completed** requires final-volume metadata or an identity-defined complete volume count. Unknown remains **Status not set**.

**Acceptance checks**
- [x] Owner-confirmed rendered-browser QA (2026-11-02): search, filters, sorting, and bookshelf filters work together.
- [x] Translations remain editions of canonical volumes, not separate series/cards (10 canonical series, 17 English volumes, and 17 matching editions in each translation language).
- [x] Series with mixed volume statuses are represented as per-volume counts; publication status is not inferred from an incomplete catalogue count.
- [x] Existing genre vocabulary and exact English/translation genre metadata matches, publication-status rules, canonical routes, and volume navigation pass source/metadata inspection.
- [x] Owner-confirmed rendered-browser QA (2026-11-02): desktop, tablet, and mobile layouts, both themes, keyboard operation, and volume-chooser focus behaviour passed.

**Implementation status:** Complete. Source changes, catalogue metadata audit, static source assertions, and the GitHub Pages Jekyll build/deployment succeeded for merge commit `28ed0be5659be13df3b3b20ea77953d060fe310a`. The owner confirmed rendered-browser QA passed on 2026-11-02. This is owner-reported QA, not an independently performed browser session.

**Owner browser QA — passed (2026-11-02; owner-reported, not independently performed)**
- [x] Search by series name, volume title, and synopsis; unrelated card labels do not produce matches.
- [x] Combined genre, publication status, available edition, reading status, favorites, search, and sorting.
- [x] A–Z/Z–A ordering and volume-count sorting.
- [x] Mixed per-volume status/favorite summaries update immediately after changing a volume in the chooser.
- [x] Prismat displays **Status not set**, standalone novels remain **Standalone**, and the completed trilogy/final-volume series remain **Completed**.
- [x] Library checked at desktop, tablet, and mobile widths in both themes; keyboard operation and focus return for the volume chooser passed.

### 7.3 — Story presentation improvements

- [x] Refine the existing shared reader presentation; no parallel reader was introduced.
- [x] Audit and preserve all 10 existing series descriptions and 17 volume synopses; refine the introduction hierarchy, typography, and reading order.
- [x] Keep story text primary and preserve the established light-novel reading experience.
- [x] Keep illustration support optional; no illustration assets were supplied or invented, so no gallery content was added.
- [x] Preserve strict illustration path checks and exact chapter-ID placement validation, with supplementary-gallery fallback for unmatched placements.
- [x] Resolve canonical English presentation metadata for all editions and retain CSS cover/text fallbacks for missing or failed assets.
- [x] Prefer localized metadata when present and use canonical English metadata as fallback, including direct translation-page visits.
- [x] Preserve story prose, original chapter titles, IDs, translation mappings, canonical URLs, reading position, progress, statistics, and reader preferences.

**Acceptance checks**
- [x] Existing volumes without optional metadata render correctly (owner-confirmed rendered QA passed).
- [x] No broken-image icons or blank cover regions appear with cover fallback; no author notes or unapproved artwork were added (owner-confirmed rendered QA passed).
- [x] Reader hierarchy and canonical metadata fallback are consistent across English, Hinglish, and Banglish (owner-confirmed rendered QA passed).
- [x] Existing reading controls and story markup are preserved; reader controls do not obstruct story text (owner-confirmed rendered QA passed).
- [x] Both themes, responsive layouts, keyboard/touch operation, reduced motion, and navigation passed owner-reported rendered-browser QA.

**Owner browser QA — passed (2026-11-02; owner-reported, not independently performed)**
- [x] Open Volume 1, Volume 2, and Volume 3 in multi-volume series; confirm the series description stays consistent and the volume synopsis changes appropriately.
- [x] Open English, Hinglish, and Banglish editions directly; confirm localized metadata takes priority and missing localized fields use the canonical English fallback.
- [x] Switch languages in place and confirm the current chapter, approximate scroll position, canonical URL, and reader preferences remain intact.
- [x] Check cover loading and fallback behaviour, including a blocked/missing cover; verify there is no broken-image icon or empty cover gap.
- [x] Check the information card and bookshelf controls at desktop, tablet, and mobile widths in both themes; ensure reader controls do not cover story text.
- [x] Test keyboard and touch operation, reduced motion, previous/next navigation, and the existing reader controls.
- [x] Confirm volumes without optional illustrations or author notes render without empty sections or blank spacing.

**Implementation status:** Complete, merged, and deployed. The catalogue audit confirmed all 10 series descriptions and all 17 canonical volume synopses already exist; those authored fields were preserved. The reader now reuses the canonical series description across all volumes, resolves localized metadata first and canonical English metadata as fallback (including direct translation-page visits), and places volume information before bookshelf actions and story content. No story files, translations, author notes, or unapproved illustrations were changed or added. Static source assertions passed. GitHub Pages build and deployment succeeded for merge commit `0a5c05ca1c356a04891f99f599ae265a1d549222` in [workflow run #509](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41412730078). The owner confirmed all listed rendered-browser acceptance checks passed on 2026-11-02. This is owner-reported QA, not an independently performed browser session.

### Phase 7 final verification

- [x] Review the complete diff for unintended story, translation, route, or preference changes.
- [x] Test bookshelf persistence, canonical volume identity, and safe failure/migration behaviour.
- [x] Test Library search, filters, sorting, series grouping, and volume chooser together.
- [x] Test reader presentation and all optional-asset fallbacks.
- [x] Owner-confirmed rendered-browser QA on desktop/mobile layouts and light/dark themes; device and viewport details were not recorded.
- [x] Run relevant automated checks and confirm the GitHub Pages workflow result.
- [x] Record source inspection, automated checks, build/deployment, and browser QA as separate evidence.
- [x] Mark Phase 7 complete after all three workstreams and their acceptance checks passed.

## Completed project history

1. Established the Tidewritten cyan/aquatic visual identity and professional editorial tone.
2. Replaced generic promotional copy across public-facing pages with concise, informative text.
3. Organized the Library around canonical series and volumes, not translations.
4. Implemented series search and genre, status, and available-edition filters.
5. Added accessible volume selection for multi-volume series and direct opening for single-volume series.
6. Built the shared light-novel reader with traditional long-form story presentation.
7. Implemented in-place English, Hinglish, and Banglish switching without changing canonical URLs.
8. Added independent per-volume language preferences and safe translation fallbacks.
9. Implemented reading progress, position saving/restoration, and resume support.
10. Added reader themes, text sizing, and persistent appearance customization.
11. Added reading statistics for active time, completed chapters/volumes, and local activity history.
12. Tightened chapter-completion rules to prevent fast scrolling from counting as reading.
13. Consolidated project overview, creator information, reading guide, editorial principles, and credits into About.
14. Added legacy About-page redirects, custom 404, navigation/footer refinements, and design-system documentation.
15. Audited all 51 published English and translated story pages for HTML/paragraph structure.
16. Completed and audited the published Hinglish and Banglish editions while preserving original chapter titles and story structure.
17. Standardized all 51 story filenames and preserved canonical routes and translation mappings.
18. Added optional series descriptions, volume synopses, localized author notes, cover integration, and illustration metadata support.
19. Audited repository references and archived verified obsolete files during the earlier explicitly requested cleanup; retained uncertain/required files.
20. Established project notes, QA records, and a maintained roadmap.
21. Completed Phase 5 story presentation: 17 canonical volume covers are present and assigned; shared reader/Library fallbacks and localized metadata are integrated.
22. Completed source/build and owner-reported presentation checks. The owner confirmed on 2026-11-01 that all 17 covers and the complete presentation work on the live site.

## Verification record

- **Catalogue:** 10 canonical series, 17 English volumes, 17 Hinglish editions, and 17 Banglish editions.
- **Cover assets:** 17 WebP covers under `assets/images/covers/`; each canonical English volume references its corresponding asset. The seven additional Vol.2/Vol.3 covers are also mapped to the corresponding translations with localized alt text.
- **Build/deployment:** GitHub Pages workflow [#495](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41292003337) completed successfully for commit `6a3b9185c5afa5ba9d3cb252fdf3b5046f5960a1`.
- **Browser QA:** owner-reported live checks passed; the owner confirmed all covers and the complete presentation work on 2026-11-01. Browser/device/viewport details were not recorded. This is not an independently performed browser session.
- **Outstanding existing limitations:** Recently Updated sorting remains disabled until reliable `content_updated` metadata is supplied. Optional illustration assets are not currently published.

## Roadmap maintenance

- Keep this file as the concise active roadmap and completion record; detailed technical conventions belong in Notes.md.
- Mark work complete only after its deliverables and relevant verification have happened.
- Preserve story prose, chapter titles, IDs, canonical routes, translation behaviour, and reader functionality during future maintenance.
