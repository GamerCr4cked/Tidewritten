# Tidewritten — TODO

_Last reviewed: 2026-10-31_

This file is the current roadmap and completion record for Tidewritten. Active work is listed first. Previous priorities and maintenance phases are retained below as completed historical summaries so their scope and decisions are not lost. Detailed audit evidence remains in the linked reports and Git history.

## Current project status

- **Previous implementation and maintenance roadmap:** completed. The historical phases below summarize the original Priorities 1–6, translation/content work, reader QA, filename standardization, and repository cleanup.
- **Published content inventory at the last full audit:** 17 canonical English volumes, 17 Hinglish translations, and 17 Banglish translations — 51 published HTML pages.
- **Library genre taxonomy:** merged in PR #44. Genre metadata is standardized across all 17 canonical English volumes and 34 published translations; the Library filter compares complete genre labels. JavaScript syntax and source metadata checks passed; Jekyll build and rendered-browser verification were not run.
- **Reader and site polish:** implemented. The site owner reported that the Priority 5 live checks passed, including navigation, Library/volume navigation, reader controls, translation switching, themes, responsive behaviour, and accessibility. This is owner-reported browser QA, not an independent browser test.
- **New roadmap:** six future phases have been added. They are proposals awaiting implementation, not features already present.

---

# Active roadmap — next development cycle

These are the next planned phases. Keep them as separate, reviewable milestones; do not implement all six as one large redesign. Preserve the existing Tidewritten cyan/aquatic identity and the light-novel reading-first experience.

## Phase 1 — Professional editorial copy and site-wide tone

<badge>Completed — 2026-10-31</badge>

**Goal:** Replace overly dramatic, sentimental, or slogan-like interface copy with concise, polished, professional writing that reflects a credible reading platform. This applies to the website's interface and promotional microcopy, not to the creative prose of the stories themselves.

**Completion record (2026-10-31):** Public-facing interface copy was reviewed across Home, Library, About, Creator, Reading Guide, Coming Soon, and the shared site shell. The Home featured-story descriptions and closing callout, About, Creator, and reading-history guidance were refined in the earlier editorial-copy work. The current Library and shared-layout copy was checked for clear, functional language and consistent terminology. The owner confirmed that the rendered desktop and mobile layouts display correctly.

- [x] Audit public-facing pages and shared layouts for promotional sentences, taglines, headings, captions, helper text, empty states, notices, and other microcopy.
- [x] Identify wording that relies on melodramatic emotional phrasing or generic sentimental slogans, including the examples listed in this phase.
- [x] Rewrite identified interface copy in a professional, editorial, confident, and welcoming voice.
- [x] Make copy informative and purposeful: explain what a page, feature, collection, or action offers instead of using emotional language to manufacture atmosphere.
- [x] Keep headings concise and descriptive; use clear labels for navigation, buttons, controls, notices, and calls to action.
- [x] Maintain a consistent editorial voice across Home, Library, series/volume pages, About, reading guidance, and other public-facing pages.
- [x] Remove repetitive filler, vague claims, excessive adjectives, forced poetic phrasing, and generic AI-sounding marketing text identified in the audit.
- [x] Preserve Tidewritten's identity and warmth through restrained, deliberate wording; professional does not mean cold, corporate, or unnecessarily formal.
- [x] Leave story narration, dialogue, chapter titles, author notes, and other creative content untouched.
- [x] Preserve the meaning and functionality of notices, accessibility instructions, attribution, and legal/credit text while improving clarity.
- [x] Review revised copy in context on desktop and mobile. **Owner-reported browser QA:** the owner confirmed that both layouts render well.
- [x] Complete the final scan for the targeted dramatic/placeholder wording in the reviewed active public interface.

**Representative copy direction:** Replace vague promotional wording with explicit descriptions of what readers can browse or do. For example, the Library now explains that readers can browse English editions by series and select a standalone volume or choose from available volumes. The Home featured card uses an action-oriented volume-selection label when a series has multiple volumes.

**Editorial standard:** Professional publishing-platform language; concise, specific, readable, and restrained. Use emotional or poetic language only when it is intentional story content, not as filler in the site's interface.

**Verification distinction:** Source review is recorded separately from visual QA. Desktop/mobile rendering was confirmed by the site owner; it was not independently browser-tested by the assistant.
## Phase 2 — Reader personalization

**Goal:** Let readers adjust the reading environment to their preferences without compromising readability or the existing reader controls.

**Current progress (2026-10-31):** The shared reader personalization controls are merged in PR #42. The owner reports that 12 of 13 checks passed, including desktop controls, all palettes, light/dark compatibility, custom accent, typography, spacing, width, persistence, reset, and existing reader controls. Mobile controls/rendering are explicitly deferred by the owner. Keep the mobile check open; this phase is not closed yet.

- [x] Add selectable reader themes (Ocean, Midnight, and Pearl palettes).
- [x] Add customizable accent colors with theme- and mode-aware default contrast.
- [x] Add font-family selection for story text (Literata, Georgia, and system serif).
- [x] Add adjustable line spacing.
- [x] Add adjustable paragraph/content width.
- [x] Save reader preferences per device using a dedicated versioned localStorage key.
- [x] Define sensible defaults and a reset-to-default option.
- [x] Keep preferences independent from site-wide navigation and existing reader controls.
- [x] Keep preferences independent from each story's saved reading position and language preference.
- [ ] Test desktop, mobile, keyboard/touch controls, both base themes and reader palettes, and reduced-motion/accessibility behaviour.
- [ ] Run the repository's relevant build/check workflow and review the resulting diff before closing the phase.

**Implementation notes:** The light/dark mode toggle and text-size controls remain separate and retain their existing storage keys. Reset appearance changes only the reader palette, accent, story font, line spacing, and reading width; it does not clear reading progress, reading history, or language preference.
## Phase 3 — Library evolution

**Goal:** Make the Library easier to explore as the catalogue grows.

**Current progress (2026-10-31):** Initial Library discovery controls were merged in PR #43, and the genre taxonomy cleanup was merged in PR #44. Phase 3 completion work is on branch `feature/library-phase3-completion`: the series artwork now has a distinct CSS-built cover for every canonical series, the volume chooser has improved keyboard focus management, mobile layouts have been tightened, and the Recently updated sort is wired to optional `content_updated` metadata. The sort is intentionally disabled until reliable dates are recorded; repository history only exposes bulk filename/metadata commits and cannot establish story-content update dates. Publication status remains conservative and uses “Status not set” where completion cannot be established.

- [x] Add search across canonical series and volume metadata.
- [x] Add filters for genre.
- [x] Add filters for publication/completion status.
- [x] Add filters for available language editions.
- [x] Implement a Recently updated sort driven by optional `content_updated` volume metadata; keep it disabled until trustworthy story-content update dates are recorded. No dates were fabricated because the available Git history contains only bulk filename/metadata commits.
- [ ] Populate `content_updated` dates only when the owner has reliable last-content-update dates; no trustworthy per-volume dates are currently available.
- [x] Add clear series completion indicators where the current story metadata explicitly identifies a final volume; use “Status not set” when completion cannot be established.
- [x] Improve the CSS-built cover artwork with distinct series-specific designs and title treatments; keep one cover per canonical series, with translations represented only as editions.
- [x] Preserve series-based grouping; translations must never appear as separate series or volumes.
- [x] Implement narrow-screen filter/card/dialog layouts, visible keyboard focus, a 44px dialog-close target, Enter/Space activation, dialog focus entry/return, and live result announcements.
- [ ] Complete rendered mobile and keyboard browser QA at narrow viewport sizes; source-level responsive and interaction checks are complete, but no rendered browser session or Jekyll build is available in this environment.
- [x] Audit all 17 canonical English volume routes for uniqueness and verify each series/volume selection is built from its canonical `permalink`; verify translation mapping remains tied to those canonical routes.

**Implementation note:** Language availability is derived from each translation page's `translation_of` mapping, so the Library filter reflects published editions rather than assumed support. Status labels currently use explicit final-volume notes and the named Meet Again Trilogy; unconfirmed series are not labelled “Ongoing” without owner-supplied publication status.

**Design inspiration supplied by the site owner:** [BookOrbit dashboard reference](https://images.openai.com/static-rsc-4/gkT3M4zz8uFmbAmUNdgcxjsv3gVyyM8dWx2m8C_Uc_wSYJEjsTl7C3oCvdarBGedcAFKaDBLJsyjyV7Oi_1q--xgTYaDU3c9JC_x6prI_V59pd11MZ-2F_LtUADNcCVimTCrq27522bw-vY7rbf7d--aYn7VcM9onyJ_Rq_x_dA?purpose=inline).

## Phase 4 — Reading statistics

**Goal:** Give readers a useful, private overview of their reading activity.

- [ ] Track total reading time using a clearly defined and conservative measurement method.
- [ ] Track chapters completed.
- [ ] Track volumes completed.
- [ ] Provide a reading history with recently opened stories and reading activity.
- [ ] Add personal reading milestones.
- [ ] Define how progress is calculated so opening a page is not incorrectly counted as completing a chapter or volume.
- [ ] Keep statistics local to the user's device unless a future, explicitly approved account/sync system is designed.
- [ ] Provide a way to clear/reset locally stored statistics.
- [ ] Avoid collecting unnecessary personal data; explain what is stored and where.
- [ ] Test storage behaviour, refresh/navigation persistence, and responsive presentation.

**Design inspiration supplied by the site owner:** [Japanese light-novel publication/listing reference](https://images.openai.com/static-rsc-4/fiGEAIk-K4mq6U33dQPa0gAQ41pezPzxOZcSjEQCHwMEWgzgb9cR5exbW4ym5LZWq3nKGUrDq2KjTh0nuaB1JIIRtMqsf45yIGIx2tQIqsIn8kStoywh6wBNBxyaRN8jS4EqeZr2Em9qrA75kVk1OqjVdtmyEXWJDpM6Fn340-g?purpose=inline).

## Phase 5 — Story presentation

**Goal:** Give every series a stronger identity and make each volume feel like a distinct light-novel release.

- [ ] Create custom cover art for every series.
- [ ] Create volume-specific cover designs where appropriate.
- [ ] Add a concise series introduction and description.
- [ ] Add volume-specific descriptions or synopses where useful.
- [ ] Provide a place for author notes.
- [ ] Support additional illustrations where they genuinely improve the reading experience.
- [ ] Establish consistent cover dimensions, image optimization, alt text, and responsive behaviour.
- [ ] Keep cover art and illustrations optional enhancements; story text remains the primary focus.
- [ ] Ensure cover links, series identity, volume numbering, and Library grouping remain correct.

**Design inspiration supplied by the site owner:** [Awwwards desktop design reference](https://images.openai.com/static-rsc-4/r9nA6rLDZS-UtAxthQ8akPSRLsaijppy4NfOGpmXtV6rjXXTE7R7wEQnNqA7TsqMzTp68gFYEndYglOs20wgwEMSUzNdLqIBNgDBcdP-N_wzcKrUCkTqMf4mhxU8hWmPdgi-vibsahV3OZAeIQ-pQFw2xjF0fVlPSCSgmEX78qw?purpose=inline).

## Phase 6 — Tidewritten identity

**Goal:** Complete the site's editorial identity and supporting pages.

- [ ] Create a proper About page explaining Tidewritten and the reading experience.
- [ ] Create a dedicated editorial/credits page.
- [ ] Establish and document a consistent visual identity and design system, including typography, colors, spacing, components, and interaction states.
- [ ] Create a polished custom 404 page that fits the Tidewritten visual identity and provides useful navigation back to the Library/Home.
- [ ] Review existing About/Creator/Reading Guide pages before adding or replacing pages; reuse or improve existing content instead of creating duplicates.
- [x] Standardize browser document titles as `Page Name | Tidewritten`, including `Home | Tidewritten`, and remove duplicate site-name suffixes.
- [ ] Check page titles, metadata, navigation state, accessibility, and responsive layouts.

## Roadmap-wide implementation rules

- Work phase by phase, using a dedicated branch and reviewable PR for each coherent milestone.
- Inspect current source files before editing; use the shared layout/assets when a feature affects multiple pages.
- Preserve story prose, chapter titles, IDs, canonical URLs, and existing translation behaviour unless a task explicitly requires a change.
- Keep reader settings, reading progress, reading history, and language preferences logically separate.
- Do not introduce account systems, remote analytics, or unnecessary personal-data collection as an assumed requirement.
- Do not mark tasks complete until implementation and the relevant verification have actually happened.
- Record build results separately from rendered-browser QA. Owner-reported QA must be labelled as such.
- Follow the project archive policy in Notes.md. During ordinary development, do not use bin/. During explicitly requested cleanup only, bin/ may be an archive destination for verified obsolete files; never permanently delete archived files without separate approval.

---

# Completed work — historical phases

The phases below are closed. They are retained as a concise record of what was done, not as active tasks.

## Priority 1 — Story paragraph formatting and structural repair

- [x] Audited the published English, Hinglish, and Banglish story pages for paragraph structure and HTML integrity.
- [x] Added semantic paragraph markup to the 26 pages that previously had no paragraph tags; reviewed the remaining 25 pages for structural issues.
- [x] Corrected the unclosed final epilogue paragraph in Before the Feelings Fade Vol.1 English.
- [x] Checked paragraph nesting/balance, empty paragraphs, block-level elements inside paragraphs, dialogue separation, headings, scene breaks, inline emphasis, blockquotes/epigraphs, and end matter.
- [x] Restored the missing Council Vol.2 chapter-end separators in both translations: 11 separators were restored in each language, bringing each edition to 24 to match English.
- [x] Preserved story wording and legitimate language-specific paragraph grouping; no mechanical paragraph splitting was applied merely to make counts identical.

## Priority 2 — Translation titles, naming, and edition consistency

- [x] Restored original English chapter/section titles in the 16 translation files covered by the historical Phase 2 task.
- [x] Preserved story titles, character names, and canonical volume identities while correcting translation headings.
- [x] Standardized the Meet Again Trilogy's final chapter title to exactly **Meet Again** across all three English volumes and their Hinglish/Banglish translations.
- [x] Corrected chapter-number/title presentation issues where recorded in the relevant story work.
- [x] Kept translation editions associated with their canonical English series/volume rather than presenting them as independent Library entries.

## Priority 3 — Translation content and editorial corrections

- [x] Completed the Council Vol.2 Hinglish and Banglish translations.
- [x] Completed the Council Vol.3 Hinglish and Banglish translations.
- [x] Rewrote Council Vol.1 Hinglish and Banglish directly against the English source in six two-chapter batches (Chapters 1–12), then separately handled the Prologue, Interlude, Epilogue, and Afterword.
- [x] Verified Council Vol.1 section coverage, chapter IDs, original headings, scene breaks, paragraph-tag balance, front matter, language-specific script use, and the Volume Two continuation link.
- [x] Audited Before the Feelings Fade Vol.2 using the two-chapter-per-batch method across all ten chapters. The 298-versus-280 paragraph-count difference was explained by legitimate paragraph grouping; no missing chapter, scene, or complete narrative passage was identified.
- [x] Corrected mixed-script fragments in the audited Banglish files.
- [x] Preserved original chapter and section titles during translation work, except where an explicit correction was requested.

## Priority 4 — Source/translation structure and completeness audit

- [x] Compared all 17 English story sources against their 34 published translations (17 Hinglish and 17 Banglish).
- [x] Checked translation mappings, chapter/section heading sequences, chapter IDs, scene-break counts, blockquotes/epigraphs, paragraph grouping, dialogue turns, and relevant end matter.
- [x] Confirmed the audited chapter-heading sequences correspond and no duplicate IDs were found.
- [x] Reviewed major paragraph-count differences as structural differences rather than assuming they meant missing prose. Documented the Before the Feelings Fade Vol.2 and Council Vol.1/Vol.2 cases.
- [x] Rechecked Council Vol.2/Vol.3 continuation links and endings across all three editions.
- [x] Rechecked Meet Again Trilogy continuation links and the final chapter title in all three editions.
- [x] Recorded the remaining small paragraph-count differences for editorial awareness without mechanically altering translated pacing.
- [x] Completed the dedicated Before the Feelings Fade Vol.2 audit: [audit report](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md).

## Priority 5 — Reader, navigation, and live QA

- [x] Implemented the shared light-novel reader and its reading progress, save/restore, text-size controls, theme handling, edge fades, and previous/next volume navigation.
- [x] Implemented in-place translation switching, per-story/volume language preference, available-language detection, and canonical English URLs.
- [x] Implemented the favicon reference to /icon.png and the selected Home navigation state.
- [x] Fixed the shared-reader chapter fallback bug in currentChapter().
- [x] Redesigned the resume widget as a circular launcher that expands into a reading card, with sequenced reveal, pointer-state handling, keyboard focus support, touch interaction, and reduced-motion handling.
- [x] Completed the resume-widget hover-animation follow-up in PR #28; the owner confirmed the live animation works.
- [x] Owner-reported live QA passed for resume/progress, homepage/navigation, Library/volumes, reader layout/controls, translation switching, themes, responsive behaviour, and accessibility.
- [x] Confirmed the five semantic emphasis passages in Little Bird Chronicles Vol.3 English render with the intended italic/highlight treatment in the deployed reader (owner-confirmed).
- [x] Completed the end-to-end translation-switching pass across all 17 series/volume entries, including available language choices and preservation of canonical English URLs (owner-confirmed).
- [x] Verified all 17 homepage random-story destinations match published canonical story routes.
- [x] Recorded the source inventory and owner-reported QA results in [Priority 5 Reader QA](PRIORITY-5-READER-QA.md). These results are owner-reported browser QA, not independent browser testing.

## Priority 6 — Story and translation filename standardization

- [x] Renamed all 17 English story source files to the shared Series-Vol.N-English.html pattern.
- [x] Standardized all 34 translation filenames to matching series/volume bases with RomanizedHindi and RomanizedBangla suffixes.
- [x] Updated the shared reader to associate editions by the common filename base, with translation_of as a fallback.
- [x] Preserved story/translation HTML content, front matter, prose, and existing canonical /book/... URLs during the file moves.
- [x] Confirmed the site continued working after PR #29 was merged (owner-confirmed).

## Repository cleanup, build, and deployment

- [x] Completed the repository cleanup audit of active public pages, assets, scripts, stylesheets, configuration, build rules, and deployment implications.
- [x] Archived verified obsolete files under bin/ while preserving their relative paths; no archived files were permanently deleted.
- [x] Archived the unused legacy layout as bin/_layouts/story.html through PR #30.
- [x] Confirmed coming-soon.html is a standalone placeholder and retained it.
- [x] Retained both homepage sources: index.html redirects / to /home/, while index.md generates /home/.
- [x] Ran the Jekyll/GitHub Pages build and deployment checks after cleanup; the owner confirmed these checks completed successfully.
- [x] Reviewed the deployed site after cleanup; the owner confirmed the post-cleanup site review was completed.
- [x] Marked all 17 homepage random-story destinations complete after verifying their canonical routes.
- [x] Kept uncertain or still-referenced files rather than archiving them speculatively.

## Documentation and project governance

- [x] Created and maintained Checks/Notes.md as the reference for project paths, archive policy, story formatting, translation workflow, reader design, navigation, GitHub workflow, QA, and reporting.
- [x] Rebuilt Checks/TODO.md to separate active work from completed work and detailed audit reports.
- [x] Preserved the explicit bin/ archive-only exception and the prohibition on permanent deletion without separate approval.
- [x] Merged PR #33 (TODO and project notes rebuild).
- [x] Merged PR #34 (homepage random-story destination completion).

---

## Audit reports and historical references

- [Priority 5 Reader QA](PRIORITY-5-READER-QA.md) — reader source inventory and owner-reported live QA results.
- [Before the Feelings Fade Vol.2 translation audit](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md) — detailed source/translation comparison.
- Git history and earlier task PRs retain the detailed file inventories, implementation diffs, and commit-level evidence for the completed phases.

## Definition of done

Use these criteria when closing a future task; they are standards, not open TODO checkboxes.

- Paragraphs render distinctly and dialogue remains readable by speaker.
- Chapter headings, IDs, anchors, scene breaks, inline formatting, and end matter remain intact.
- No malformed/nested paragraph markup or duplicate IDs are introduced.
- Story wording is unchanged unless content editing was requested.
- Matching source/translation structure and navigation are checked where applicable.
- Responsive layouts, light/dark themes, keyboard/touch controls, and reduced-motion behaviour are checked when affected.
- Relevant Jekyll/GitHub Pages build/deployment workflow is inspected; rendered-browser QA is reported separately.
- No item is marked complete until the corresponding change and required verification have actually happened.

For project rules and implementation conventions, see [Notes.md](Notes.md).
