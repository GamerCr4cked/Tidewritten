# Phases 2, 3, 4, and 6 — Source Audit & QA Follow-up

_Audit date: 2026-10-31_
_Base at audit: `87f75226bd280632cee84a9b51d4697796bc4a84`_
_Merged PR: [#62](https://github.com/GamerCr4cked/Tidewritten/pull/62), merge commit `a428916e043a8855f9284c0a9061d858e9182725`_

## Scope and limitations

This pass reviewed the current shared reader, Library, reading-statistics dashboard, About page, legacy-route redirects, 404 page, shared site shell, site configuration, TODO, and Notes. The protected `bin/` tree was not inspected or used.

This is a source-level audit. The latest successful GitHub Pages workflow on the base `main` commit is recorded below, but the branch changes require their own build. No independent rendered-browser session was available in this pass. Do not interpret source inspection as proof of visual, keyboard, touch, or storage behaviour in a real browser.

## Phase 2 — Reader personalization

### Source checks
- Customize controls exist in both desktop and mobile reader-control structures.
- Supported palettes, accent color, story font, line spacing, and reading width are applied through the shared reader preference object.
- Preferences use the separate versioned `tidewritten-reader-preferences-v1` key.
- Reader text size, base light/dark mode, translation choice, reading progress, and reading history retain separate storage keys.
- Reset appearance resets only the appearance preference object; text size and reading/progress data remain separate.
- Customize menus close on outside click and Escape; Escape returns focus to the summary trigger.
- Mobile controls are placed inside the responsive Reading controls menu.
- The reduced-motion rule has been strengthened on this branch to suppress reader animations and transitions as well as smooth scrolling.

### Owner-reported browser QA — passed
The owner tested the mobile Customize controls, touch interaction, keyboard operation, palettes, and reduced-motion behaviour and confirmed they work. The source-level checks above were merged in PR #62. This is owner-reported browser QA, not an independent browser session.

## Phase 3 — Library evolution

### Source checks
- The Library catalogue is built from canonical light-novel pages where `translation_of` is absent; translations are not independent series cards.
- Series and volume data are derived from canonical routes and per-volume metadata.
- Genre filtering normalizes and compares complete labels rather than substring matches.
- Available language filters are derived from actual edition mappings in each volume's embedded data.
- Publication status uses the explicit known values and does not infer an unknown series is ongoing.
- The Recently updated option is disabled when no canonical volume has a `content_updated` date. No dates were invented.
- Multi-volume cards expose a keyboard-operable dialog trigger; Enter and Space open the chooser, focus moves to the first volume link, and closing the dialog returns focus to the invoking card.
- Responsive CSS includes narrow filter, card, and dialog layouts and a reduced-motion rule.

### Owner-reported browser QA — passed
The owner tested the mobile Library filters, volume chooser, and keyboard focus behaviour and confirmed they work. This is owner-reported browser QA, not an independent browser session.

### Deliberately not completed
- Checked front matter on all 17 canonical English volume files: 0 currently define `content_updated`. Dates remain unpopulated because reliable last-content-update dates are not available. The Recently updated sort remains disabled until the owner supplies trustworthy dates.

## Phase 4 — Reading statistics

### Source checks
- Statistics are isolated under `tidewritten-reading-stats-v1`; they are not mixed with appearance, theme, language, reading position, or recent history.
- The v1-to-v2 migration preserves aggregate reading time and daily activity while discarding old completion records that used the weaker end-position-only rule.
- Active time is checkpointed at 15-second intervals, capped per checkpoint, and counted only while the page is visible, focused, and recent user activity is within 60 seconds.
- Chapter completion requires both reaching the chapter boundary and satisfying a minimum active-time threshold. Volume completion requires all detected chapter IDs to qualify.
- Translation editions use the canonical English volume path, preventing duplicate edition statistics.
- The dashboard explains the qualification and migration rules and its clear action is scoped to the statistics key.

### Bug found and fixed on this branch
Three regular expressions in the reader were double-escaped:
- The chapter word counter did not recognize normal words, causing every chapter to use the 15-second minimum instead of the intended word-count-based threshold.
- Chapter-title whitespace normalization did not collapse normal whitespace.
- Volume-title cleanup did not correctly remove the ` | Tidewritten` suffix.

The expressions now use the intended JavaScript regex escapes. A direct JavaScript behaviour check showed the old word-count regex matched 0 words in a normal sample, while the corrected regex matched 11; the corrected title expressions also normalized whitespace and removed the site suffix as intended.

### Owner-reported browser QA — passed
The owner tested fast-scroll prevention, genuine chapter completion, migration, and clearing statistics and confirmed they work. This is owner-reported browser QA, not an independent browser session.

## Phase 6 — Tidewritten identity

### Source checks
- `/about/` consolidates the project overview, creator/maintainer information, reading guide, editorial principles, and credits.
- `/creator/`, `/reading-guide/`, and `/editorial/` remain lightweight redirects to `/about/`, with a fallback link.
- Shared navigation and footer expose the consolidated About page.
- The custom 404 page provides routes to the Library and Home.
- The shared layout appends the site name once to page titles.
- The site-wide fallback description has been changed from generic sentimental wording to a concise factual description.

### Owner-reported browser QA — passed
The owner tested the About page, legacy redirects, custom 404, navigation states, themes, and responsive layouts and confirmed they work. This is owner-reported browser QA, not an independent browser session.

## Build and deployment evidence

- Base `main` commit: `87f75226bd280632cee84a9b51d4697796bc4a84`.
- The pre-merge base workflow succeeded: [workflow run 41189517974](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41189517974).
- PR #62 was merged into `main` at `a428916e043a8855f9284c0a9061d858e9182725`.
- The Pages workflow for the merge commit completed successfully: [workflow run 41192642899](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41192642899).
- The owner-reported rendered-browser checks above passed. No independent rendered-browser test or local Jekyll build is claimed.

## Files changed on the follow-up branch

- `_layouts/light-novel.html` — correct statistics regular expressions and strengthen reduced-motion handling.
- `_config.yml` — replace the generic sentimental fallback description with factual site metadata.
- `Checks/TODO.md` — correct stale Phase 3/6 branch-status wording and link this audit.

## Acceptance status

The owner has completed and confirmed the requested browser QA for Phases 2, 3, 4, and 6. PR #62 is merged, and the Pages workflow for its merge commit succeeded. Phase 3 Recently updated dates remain intentionally unavailable until reliable content-update dates are supplied.
