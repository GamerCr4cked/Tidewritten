# Tidewritten — TODO

_Last reviewed: 2026-11-01_

This is the current roadmap and concise completion record. Detailed technical conventions live in [Notes.md](Notes.md), and the root [Instructions.txt](../Instructions.txt) defines the project workflow.

## Current status

**Status:** Phases 1–6 are complete. Phase 7 — Personal Reading Experience is in progress. **Phase 7.1 — Personal Bookshelf is complete**, including its follow-up work. The owner confirmed all 7.1 functionality and browser-QA items on 2026-11-01. Phase 7.2 and 7.3 remain upcoming.

Phase 7 combines the next three improvements into one milestone:
1. Personal Bookshelf.
2. Library improvements.
3. Story presentation improvements.

Estimated effort: approximately **5–9 focused development days**, plus owner review and any revisions. This is an estimate, not a deadline.

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

- [ ] Inspect and refine the existing Library search and genre, publication-status, and available-edition filters; preserve their current correct behaviour.
- [ ] Add useful deterministic title sorting (A–Z and Z–A).
- [ ] Add bookshelf-status and favorite discovery/filtering where it fits the existing Library layout.
- [ ] Show concise reading-state information on series cards without misrepresenting series containing volumes with different statuses.
- [ ] Keep one Library card per canonical series, with the existing volume chooser for multi-volume series and direct opening for single-volume series.
- [ ] Preserve accessible volume selection, keyboard operation, focus handling, and responsive layouts.
- [ ] Keep Recently Updated disabled until trustworthy content_updated metadata exists. Do not invent dates or popularity rankings.

**Acceptance checks**
- Search, filters, sorting, and bookshelf filters work together without conflicting results.
- Translations never appear as separate series/cards.
- Series with mixed volume statuses are represented accurately.
- Existing genre vocabulary, publication-status rules, canonical routes, and volume navigation remain intact.
- Desktop, tablet, and mobile layouts remain clear and keyboard accessible.

### 7.3 — Story presentation improvements

- [ ] Review and refine the existing shared reader presentation rather than creating a second reader.
- [ ] Improve the hierarchy and presentation of series descriptions, volume introductions/synopses, cover art, and optional metadata.
- [ ] Keep story text primary and preserve the established light-novel reading experience.
- [ ] Add optional chapter illustrations or a supplementary gallery only when approved assets, accurate alt text, and captions are available.
- [ ] Validate every image path and any chapter-relative placement against real chapter IDs; use a supplementary gallery if placement cannot be verified.
- [ ] Ensure missing metadata and failed optional images fall back cleanly to existing CSS artwork/text-only presentation.
- [ ] Localize presentation metadata when translated copy exists, with the established English fallback otherwise.
- [ ] Preserve story prose, original chapter titles, IDs, translation mappings, canonical URLs, reading position, progress, statistics, and reader preferences.

**Acceptance checks**
- Existing volumes without optional metadata render correctly.
- No broken-image icons, blank cover regions, invented author notes, or unapproved artwork.
- Reader hierarchy remains consistent across English, Hinglish, and Banglish.
- Reading controls do not obstruct story text.
- Both themes, responsive layouts, keyboard/touch operation, reduced motion, and navigation are checked.

### Phase 7 final verification

- [ ] Review the complete diff for unintended story, translation, route, or preference changes.
- [ ] Test bookshelf persistence, canonical volume identity, and safe failure/migration behaviour.
- [ ] Test Library search, filters, sorting, series grouping, and volume chooser together.
- [ ] Test reader presentation and all optional-asset fallbacks.
- [ ] Perform rendered-browser QA on desktop and mobile, in light and dark themes; record the actual devices/viewports checked.
- [ ] Run relevant automated checks and confirm the GitHub Pages workflow result.
- [ ] Record source inspection, automated checks, build/deployment, and browser QA as separate evidence.
- [ ] Mark Phase 7 complete only after all three workstreams and their acceptance checks pass.

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
