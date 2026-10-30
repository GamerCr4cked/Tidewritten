# Tidewritten — Priority 5 Repository Audit & Live QA Tasks

**Audit date:** 2026-10-30  
**Repository:** `GamerCr4cked/Tidewritten`  
**Audited base revision:** `aedae2bd2fd30c8833e8be697b06d4cd5c76e7bd`  
**Working branch for the resume-hover fix:** `fix/reading-resume-hover-animation`

## Scope and method

This is a source-level audit of the public website files, layouts, stylesheet, configuration, published story/translation inventory, and the existing project QA notes. It records what the repository indicates and separates that from checks that only the site owner can perform in a real browser. A successful build is not proof of correct visual behaviour.

The protected `bin/` folder was not opened, read, edited, or used as a source. No story prose was intentionally rewritten during this reader-widget fix.

## Repository inventory

- **Configuration and site identity:** `_config.yml`, `CNAME`, `icon.png`.
- **Shared layouts:** `_layouts/default.html`, `_layouts/light-novel.html`, `_layouts/story.html`.
- **Global styling:** `assets/css/style.css`; the light-novel reader also has layout-local CSS.
- **Main site pages:** homepage source (`index.html` / `index.md`), `library.html`, `about.html`, `creator.html`, `reading-guide.html`, and `coming-soon.html`.
- **Published English stories:** 17 files under `stories/`.
- **Published translations:** 17 Banglish files under `translation/banglish/` and 17 Hinglish files under `translation/hinglish/`.
- **Published story/translation total:** 51 HTML files.
- **Project QA documentation:** `Checks/TODO.md`, `Checks/Notes.md`.

## Current implementation findings

### Reader and translations

- The shared light-novel layout contains the Translate menu, available-language discovery, in-place translation fetching, per-story/volume language preference, theme toggle, text-size controls, reading percentage, edge fades, and previous/next volume navigation.
- The reader saves scroll position and the active chapter in `tidewritten-reading-progress-v1`, and writes recent-reading entries to `readingHistory`.
- The resume link uses `?resume=1` to request restoration; normal story visits do not automatically jump to the saved position.
- Translation pages are filtered out of the Library's canonical story entries by the `translation_of` metadata.
- The favicon is referenced as `/icon.png` by both shared layouts.
- The source already contains the Home selected-state condition for the homepage route.
- Previous source audits documented chapter-heading/ID consistency and completed the paragraph-markup and mixed-script checks. Those source checks do not replace visual reading tests.

### Resume hover animation issue

The previous design changed the card's width, padding, shape, and CTA placement together while relying on the hover state that those geometry changes could interrupt. Its internal content also appeared/disappeared abruptly, and the action link was positioned independently of the copy.

**Redesign prepared on the working branch:**
- The collapsed state is a compact circular launcher anchored at the bottom-right.
- Hovering morphs the circle into a rounded reading card using coordinated width, height, and border-radius transitions with a smooth easing curve.
- The internal hierarchy is now structured as a top utility row (reading-thread label and dismiss control), a story-information block (prompt, story title, chapter), and a dedicated Continue reading action.
- The inner sections fade and slide into place after the outer shape begins expanding, avoiding an abrupt content pop-in.
- Pointer enter/leave uses an explicit `.is-hover-expanded` state and a short delayed collapse to reduce hover flicker.
- Keyboard focus expansion remains supported; touch devices retain a tap-to-expand interaction.
- Reduced-motion preferences disable the transitions.
- This is a source-level redesign and still needs live browser verification.

## Live QA results — 2026-10-30

The site owner completed the following checks on the deployed site and reported that all tested behavior works correctly:

- [x] Circular resume-widget animation and interaction.
- [x] Reading progress, saved position, and resume restoration.
- [x] Homepage, global navigation, Home selected state, and favicon.
- [x] Library series grouping and volume navigation.
- [x] Reader layout and controls.
- [x] Translation switcher.
- [x] Dark/light themes, responsive behavior, and accessibility checks.

These are owner-reported live-browser results; no independent browser session or screenshots were available to this audit. No failure was reported.

## Remaining audit notes

- The owner-reported Priority 5 live QA is complete with all seven task areas passing.
- The existing `Checks/TODO.md` records a separate editorial paragraph-count discrepancy in Before the Feelings Fade Vol.2 (298 source paragraphs vs. 280 in each translation); it is not part of this reader QA.
- The existing TODO also records Council Vol.1 translation rewrite completion. Do not infer content completeness beyond the recorded checks without a fresh content audit.
- The existing `Checks/TODO.md` records a separate editorial paragraph-count discrepancy in Before the Feelings Fade Vol.2 (298 source paragraphs vs. 280 in each translation); it is not part of this animation fix.
- The existing TODO also records Council Vol.1 translation rewrite completion. Do not infer content completeness beyond the recorded checks without a fresh content audit.

## Owner verification tasks

Use the live site: **https://tidewritten.gc.run.place**

### Task 1 — Circular resume-widget redesign (highest priority)

1. Open a story and scroll to roughly 30–50% of the page.
2. Wait a few seconds so the reading position has time to save.
3. Return to the homepage. The resume widget should appear at the bottom-right.
4. Move the mouse onto the compact circular widget and keep it there while it expands.
5. Move the pointer slowly around the expanded card, including over the story title, chapter label, Continue reading button, and close button.
6. Move the pointer away, then back onto the widget several times.
7. Repeat with quick movements and slow movements. Watch for flicker, repeated collapsing/expanding, sudden jumps, or the pointer losing the hover state while it is still over the card.
8. Click **Continue reading** and confirm the same story opens near the saved position.

**Pass criteria:** the circle expands smoothly into the complete card; the inner sections appear in a deliberate sequence; there is no flicker, clipping, abrupt content pop-in, or accidental collapse; all controls remain clickable; Continue reading restores the saved position.

### Task 2 — Reading progress and resume correctness

- [x] Progress percentage changes while scrolling and stays within 0–100%.
- [x] Saved record identifies the expected story and chapter.
- [x] Homepage resume widget displays the correct story/chapter.
- [x] Continue reading restores the expected position.
- [x] Refreshing the story does not break restoration.
- [x] The widget does not cover important page controls or block links.
- [x] Dismiss closes the widget for the current page view.
- [x] No local storage was cleared as part of testing.

### Task 3 — Homepage and global navigation

- [x] Homepage loads without layout errors.
- [x] Home remains visibly selected while on the homepage, not only on hover.
- [x] Favicon displays `icon.png`.
- [x] Random-story cards open the intended canonical story pages.
- [x] Library, About, Creator, and Reading Guide links work.
- [x] Theme toggle works and the chosen theme remains consistent after navigation/refresh.

### Task 4 — Library and volume navigation

Test one multi-volume series and one single-volume story.

- [x] Library groups stories by series, not by language edition.
- [x] Hinglish and Banglish translations do not appear as separate Library entries.
- [x] Multi-volume series opens the correct volume chooser.
- [x] Single-volume series opens directly where intended.
- [x] Titles and volume numbers are correct.
- [x] Previous/Next links appear only when the adjacent volume exists.
- [x] The final volume has no broken Next link.
- [x] Every tested volume link opens the correct story.

### Task 5 — Reader layout and controls

Prefer **The Little Bird Chronicles — Vol. 1**.

- [x] Paragraphs have clear separation; dialogue remains readable.
- [x] Chapter headings, scene breaks, emphasis, and end matter look correct.
- [x] Reading progress does not cover the top of the story text.
- [x] Percentage indicator is visible and sensible.
- [x] A+, A−, and Reset controls work and do not overlap.
- [x] Theme toggle does not overlap story text or reader controls.
- [x] Top/bottom edge fades are subtle and do not reduce readability.
- [x] Previous/Next volume controls are correct.

### Task 6 — Translation switcher

On a story with all available editions:

- [x] English (Original), Hinglish, and Banglish options appear when available.
- [x] Selected language is visibly highlighted.
- [x] Switching languages updates prose without changing the canonical URL.
- [x] Switching back to English restores the original prose.
- [x] Original story title, character names, and chapter titles remain correct.
- [x] No duplicate headings, stale prose, or mixed-language fragments appear unexpectedly.
- [x] Chapter and approximate scroll position are preserved after switching.
- [x] Language preference persists after refresh and remains independent per story/volume.
- [x] On an English-only story, English is selected and unavailable translations are not offered.

### Task 7 — Theme, responsive layout, and accessibility

- [x] Dark theme is readable and all controls remain visible.
- [x] Light theme is readable and all controls adapt to it.
- [x] Switching theme does not reset chapter or reading position.
- [x] Desktop width and a narrow mobile viewport tested.
- [x] No horizontal page scrolling on mobile.
- [x] Mobile Reading controls and translation menu open/close correctly.
- [x] Resume widget is usable on touch screens and does not cover essential controls.
- [x] Keyboard focus can reach and operate the resume widget and reader controls.
- [x] Reduced-motion preference does not introduce awkward animation.

## Report results back

Copy this and fill it in. Include screenshots for any failure, especially Task 1.

```text
TIDEWRITTEN — PRIORITY 5 LIVE QA

Task 1 — Resume hover animation: PASS / FAIL
- Expand/collapse flicker:
- Pointer position tested:
- Continue reading restore:

Task 2 — Progress and resume: PASS / FAIL
Task 3 — Homepage/navigation: PASS / FAIL
Task 4 — Library/volumes: PASS / FAIL
Task 5 — Reader layout/controls: PASS / FAIL
Task 6 — Translation switcher: PASS / FAIL
Task 7 — Theme/mobile/accessibility: PASS / FAIL

Browser/device:
Viewport size:
Theme:
Problems and reproduction steps:
Screenshot(s):
```

**Status:** all seven Priority 5 task areas were reported passing by the site owner on the deployed site on 2026-10-30. This report records owner-reported results, not independently captured browser evidence.
