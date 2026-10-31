# Phases 2, 3, 4, and 6 — Source Audit & QA Follow-up

_Audit date: 2026-10-31_
_Base: main at 87f75226bd280632cee84a9b51d4697796bc4a84_
_Work branch: fix/phase-4-reading-statistics-threshold_

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

### Still requires owner/browser QA
- Open Customize on a narrow mobile viewport and verify all controls can be reached without clipping or being hidden behind the menu.
- Test touch selection for every control and confirm menus close predictably.
- Test keyboard navigation, focus visibility, Escape, and outside-click dismissal on desktop and mobile.
- Test Ocean, Midnight, and Pearl in both base themes, including custom accent contrast.
- Confirm reduced-motion removes nonessential motion without hiding state changes.
- Confirm settings persist after refresh and remain independent from language, theme, text size, and reading position.

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

### Still requires owner/browser QA
- Test search, genre, status, and edition filters in combination and confirm the live result count and empty state.
- Test the volume chooser with keyboard only, including Escape, close button, backdrop, focus entry, and focus return.
- Test one single-volume title and one multi-volume series.
- Test at narrow mobile widths, both themes, and with touch.
- Verify there is no horizontal overflow or clipped dialog content.

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

### Still requires owner/browser QA
- Use a short chapter and a longer chapter to confirm their thresholds differ when the calculated estimate exceeds the 15-second floor.
- Fast-scroll through a chapter and reach its end without enough active time; it must not be marked complete.
- Spend the required active time in a chapter and reach its end; it should qualify.
- Verify the final chapter also requires reaching the story end.
- Test a v1 record: total time and daily activity must survive migration while old completion counts are requalified.
- Test refresh, navigation, translation switching, and the Statistics dashboard.
- Confirm clearing statistics does not clear reading position, recent history, language, theme, text size, or appearance settings.

## Phase 6 — Tidewritten identity

### Source checks
- `/about/` consolidates the project overview, creator/maintainer information, reading guide, editorial principles, and credits.
- `/creator/`, `/reading-guide/`, and `/editorial/` remain lightweight redirects to `/about/`, with a fallback link.
- Shared navigation and footer expose the consolidated About page.
- The custom 404 page provides routes to the Library and Home.
- The shared layout appends the site name once to page titles.
- The site-wide fallback description has been changed from generic sentimental wording to a concise factual description.

### Still requires owner/browser QA
- Visit About and each legacy route; confirm the redirects land on the correct About page and anchor content is reachable.
- Open a genuinely missing URL and confirm GitHub Pages serves the custom 404 page.
- Verify Home, Library, Statistics, and About selected navigation states.
- Check title and description metadata, keyboard navigation, dark/light themes, and responsive layouts.

## Build and deployment evidence

- Base `main` commit: `87f75226bd280632cee84a9b51d4697796bc4a84`.
- The latest GitHub Pages workflow for that base commit completed successfully: [workflow run 41189517974](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41189517974).
- That workflow ran before the changes on this branch. A new successful workflow is required for this branch/PR before its build status can be called verified.
- No local Jekyll build or independent rendered-browser test is claimed.

## Files changed on the follow-up branch

- `_layouts/light-novel.html` — correct statistics regular expressions and strengthen reduced-motion handling.
- `_config.yml` — replace the generic sentimental fallback description with factual site metadata.
- `Checks/TODO.md` — correct stale Phase 3/6 branch-status wording and link this audit.

## Acceptance status

Implementation/source corrections are prepared. Phases 2, 3, 4, and 6 must remain open until the owner/browser checks above are completed and the branch has a successful Pages build. Phase 3 update dates remain intentionally unavailable pending reliable owner-supplied data.
