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

The desktop resume card previously relied directly on CSS `:hover` while animating its own width, padding, shape, and child-link geometry. The compact launcher and expanded card also switch child visibility and link dimensions during the same hover state. This combination can cause unstable hover transitions in some pointer positions.

**Fix prepared on the working branch:**
- CSS now uses an explicit `.is-hover-expanded` state for the compact/expanded desktop selectors instead of making the card's size transition depend directly on `:hover`.
- The default layout adds pointer-enter/pointer-leave handling for hover-capable desktop screens and delays collapse briefly, reducing state flicker while the card is animating.
- Keyboard focus styling/expansion through `:focus-within` remains supported.
- The touch-sized expand/collapse behaviour is kept separate.
- This is a code-level mitigation. It still needs to be confirmed on the live website with the task list below.

## Known outstanding audit items

- Manual rendered-reader QA is not yet complete.
- Verify the resume hover animation after the working branch is merged and deployed.
- Test reading progress and resume restoration using a real browser; do not clear local storage during testing.
- Test all available translation choices and persistence on stories with translations, plus English-only stories.
- Check the Library and all volume-navigation links in the live site.
- Check dark/light theme contrast, mobile controls, and text/edge-fade layout.
- The existing `Checks/TODO.md` records a separate editorial paragraph-count discrepancy in Before the Feelings Fade Vol.2 (298 source paragraphs vs. 280 in each translation); it is not part of this animation fix.
- The existing TODO also records Council Vol.1 translation rewrite completion. Do not infer content completeness beyond the recorded checks without a fresh content audit.

## Owner verification tasks

Use the live site: **https://tidewritten.gc.run.place**

### Task 1 — Resume widget animation (highest priority)

1. Open a story and scroll to roughly 30–50% of the page.
2. Wait a few seconds so the reading position has time to save.
3. Return to the homepage. The resume widget should appear at the bottom-right.
4. Move the mouse onto the compact circular widget and keep it there while it expands.
5. Move the pointer slowly around the expanded card, including over the story title, chapter label, Continue reading button, and close button.
6. Move the pointer away, then back onto the widget several times.
7. Repeat with quick movements and slow movements. Watch for flicker, repeated collapsing/expanding, sudden jumps, or the pointer losing the hover state while it is still over the card.
8. Click **Continue reading** and confirm the same story opens near the saved position.

**Pass criteria:** expansion and collapse each happen once per entry/exit; the card does not flicker or rapidly resize; controls remain clickable; Continue reading restores the saved position.

### Task 2 — Reading progress and resume correctness

- [ ] Progress percentage changes while scrolling and stays within 0–100%.
- [ ] Saved record identifies the expected story and chapter.
- [ ] Homepage resume widget displays the correct story/chapter.
- [ ] Continue reading restores the expected position.
- [ ] Refreshing the story does not break restoration.
- [ ] The widget does not cover important page controls or block links.
- [ ] Dismiss closes the widget for the current page view.
- [ ] No local storage was cleared as part of testing.

### Task 3 — Homepage and global navigation

- [ ] Homepage loads without layout errors.
- [ ] Home remains visibly selected while on the homepage, not only on hover.
- [ ] Favicon displays `icon.png` (use Ctrl+Shift+R if the browser caches the old icon).
- [ ] Random-story cards open the intended canonical story pages.
- [ ] Library, About, Creator, and Reading Guide links work.
- [ ] Theme toggle works and the chosen theme remains consistent after navigation/refresh.

### Task 4 — Library and volume navigation

Test one multi-volume series and one single-volume story.

- [ ] Library groups stories by series, not by language edition.
- [ ] Hinglish and Banglish translations do not appear as separate Library entries.
- [ ] Multi-volume series opens the correct volume chooser.
- [ ] Single-volume series opens directly where intended.
- [ ] Titles and volume numbers are correct.
- [ ] Previous/Next links appear only when the adjacent volume exists.
- [ ] The final volume has no broken Next link.
- [ ] Every tested volume link opens the correct story.

### Task 5 — Reader layout and controls

Prefer **The Little Bird Chronicles — Vol. 1**.

- [ ] Paragraphs have clear separation; dialogue remains readable.
- [ ] Chapter headings, scene breaks, emphasis, and end matter look correct.
- [ ] Reading progress does not cover the top of the story text.
- [ ] Percentage indicator is visible and sensible.
- [ ] A+, A−, and Reset controls work and do not overlap.
- [ ] Theme toggle does not overlap story text or reader controls.
- [ ] Top/bottom edge fades are subtle and do not reduce readability.
- [ ] Previous/Next volume controls are correct.

### Task 6 — Translation switcher

On a story with all available editions:

- [ ] English (Original), Hinglish, and Banglish options appear when available.
- [ ] Selected language is visibly highlighted.
- [ ] Switching languages updates prose without changing the canonical URL.
- [ ] Switching back to English restores the original prose.
- [ ] Original story title, character names, and chapter titles remain correct.
- [ ] No duplicate headings, stale prose, or mixed-language fragments appear unexpectedly.
- [ ] Chapter and approximate scroll position are preserved after switching.
- [ ] Language preference persists after refresh and remains independent per story/volume.
- [ ] On an English-only story, English is selected and unavailable translations are not offered.

### Task 7 — Theme, responsive layout, and accessibility

- [ ] Dark theme is readable and all controls remain visible.
- [ ] Light theme is readable and all controls adapt to it.
- [ ] Switching theme does not reset chapter or reading position.
- [ ] Test at desktop width and a narrow mobile viewport (Chrome DevTools device mode is acceptable).
- [ ] No horizontal page scrolling on mobile.
- [ ] Mobile Reading controls and translation menu open/close correctly.
- [ ] Resume widget is usable on touch screens and does not cover essential controls.
- [ ] Keyboard focus can reach and operate the resume widget and reader controls.
- [ ] Reduced-motion preference does not introduce awkward animation.

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

**Status:** source-level audit recorded; manual live verification is still pending. Do not mark the tasks passed until they have been checked on the deployed site.
