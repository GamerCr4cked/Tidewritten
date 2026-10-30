# Tidewritten Website — TODO & Audit

> Last full source audit: 2026-10-30  
> Audited branch: `main`  
> Scope: published story pages, translation pages, shared reader, Library, site navigation, and relevant assets/configuration.  
> Protected scope: never inspect, edit, move, rename, delete, or otherwise use anything under `bin/`. See [Notes.md](Notes.md) before every related task.

## Current status

- [x] **Phase 1 — Translation completion:** The Council Vol.3 is complete in both Hinglish and Banglish, including Prologue, Chapters 1–7, and Epilogue.
- [x] **Phase 2 — Chapter-title restoration:** Current audit covers all 34 published translation HTML files (17 Banglish + 17 Hinglish). Chapter-heading sequences were checked against the corresponding English story files; the previously corrected original English titles remain in place.
- [ ] **Phase 3 — Story formatting and content QA:** Main outstanding work. Fix missing paragraph markup, correct mixed-script Banglish typos, and perform structural/rendered-reader QA.
- [x] **Phase 4 — Reading experience implementation:** Shared reader contains reading progress, reading-position save/restore, text-size controls, theme control, translation switching, and responsive controls. Manual browser QA is still pending under Priority 5.
- [x] **Phase 5 — Site polish implementation:** Favicon references `/icon.png`; the shared navigation marks Home selected for `/home/`. Manual responsive/theme QA is still pending under Priority 5.

## Audit summary — 2026-10-30

### Published content inventory

- [x] Confirmed 17 English story source files under `stories/`.
- [x] Confirmed 17 Banglish translation files under `translation/banglish/`.
- [x] Confirmed 17 Hinglish translation files under `translation/hinglish/`.
- [x] Audited 51 published story/translation HTML files in total.
- [x] Confirmed every translation file has a `translation_of` mapping to its canonical English story URL.
- [x] Confirmed translation pages are excluded from independent Library entries by the `translation_of == nil` filter.
- [x] Confirmed chapter heading sequences and chapter IDs are present and unique in the audited files; no duplicate HTML IDs were found.
- [x] Confirmed the current translation filenames use the `-RomanizedBangla` and `-RomanizedHindi` suffix conventions.
- [x] Confirmed `bin/` was not opened or used as a source.

### Paragraph markup findings

The current source audit found **26 files with zero opening `<p>` tags**: 10 English stories, 8 Banglish translations, and 8 Hinglish translations. A further **25 files contain paragraph markup** (7 English stories, 9 Banglish translations, and 9 Hinglish translations) and still require structural review. These are source-markup counts, not a substitute for checking the rendered reader.

### Additional findings

- [ ] **Mixed-script Banglish:** 8 Banglish files contain Bengali-script characters inside otherwise Romanized Banglish prose. Find and correct each accidental mixed-script word while preserving the intended Romanized Bangla wording:
  - `translation/banglish/Before-the-Feelings-Fade-Vol.1-RomanizedBangla.html`
  - `translation/banglish/Meet-Again_Trilogy-Vol.1-RomanizedBangla.html`
  - `translation/banglish/Prismat-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Little-Bird-Chronicles-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Little-Bird-Chronicles-Vol.3-RomanizedBangla.html`
  - `translation/banglish/The-Other-Side-of-Us-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedBangla.html`
- [ ] **Paragraph-count discrepancy requiring comparison:** Before the Feelings Fade Vol.2 has 298 source paragraphs versus 280 in each translation. Council Vol.1 has 1,183 source paragraphs versus 504 Banglish and 501 Hinglish paragraphs. These differences may reflect intentional paragraph grouping, but must be compared chapter-by-chapter before any formatting edits.
- [x] The latest recorded Pages workflow for the Phase 2 audit commit completed successfully: [workflow run 41001971301](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41001971301). This confirms that commit's Pages build/deployment workflow, not the visual correctness of every page.

---

## Priority 1 — Add semantic paragraph markup to files with zero paragraphs

Do not rewrite or paraphrase prose. Preserve every word, punctuation mark, heading, chapter ID, inline tag, scene break, and order. Do not blindly wrap existing markup or create nested paragraphs.

### English story sources — 10

- [ ] `stories/meet-again-trilogy-vol-1.html`
- [ ] `stories/meet-again-trilogy-vol-2.html`
- [ ] `stories/meet-again-trilogy-vol-3.html`
- [ ] `stories/prismat-fragments-of-the-fallen-sky.html`
- [ ] `stories/teaching-me-how-to-live.html`
- [ ] `stories/the-account-that-never-came-back.html`
- [ ] `stories/the-little-bird-chronicles-vol-2.html`
- [ ] `stories/the-little-bird-chronicles-vol-3.html`
- [ ] `stories/the-other-side-of-us.html`
- [ ] `stories/when-everyone-went-offline.html`

### Banglish translations — 8

- [ ] `translation/banglish/Meet-Again_Trilogy-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/Meet-Again_Trilogy-Vol.2-RomanizedBangla.html`
- [ ] `translation/banglish/Meet-Again_Trilogy-Vol.3-RomanizedBangla.html`
- [ ] `translation/banglish/Prismat-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/Teaching-Me-How-to-Live-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/The-Account-That-Never-Came-Back-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/The-Other-Side-of-Us-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/When-Everyone-Went-Offline-Vol.1-RomanizedBangla.html`

### Hinglish translations — 8

- [ ] `translation/hinglish/Meet-Again_Trilogy-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/Meet-Again_Trilogy-Vol.2-RomanizedHindi.html`
- [ ] `translation/hinglish/Meet-Again_Trilogy-Vol.3-RomanizedHindi.html`
- [ ] `translation/hinglish/Prismat-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/Teaching-Me-How-to-Live-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Account-That-Never-Came-Back-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Other-Side-of-Us-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/When-Everyone-Went-Offline-Vol.1-RomanizedHindi.html`

## Priority 2 — Correct mixed-script Banglish

- [ ] Inspect every Bengali-script occurrence in the 8 files listed under “Mixed-script Banglish”.
- [ ] Replace accidental Bengali-script fragments with natural Romanized Bangla.
- [ ] Preserve modern, conversational Banglish; do not formalize the language or change story meaning.
- [ ] Confirm no Bengali Unicode remains in the Banglish story prose after corrections.
- [ ] Re-read the affected paragraphs in context to catch awkward transliteration introduced by correction.

## Priority 3 — Structural review of files that already contain paragraphs

Review paragraph boundaries, dialogue, scene breaks, headings, inline markup, and chapter structure. Do not change prose just to make formatting uniform.

### English story sources — 7

- [ ] `stories/before-the-feelings-fade-vol-1.html`
- [ ] `stories/before-the-feelings-fade-vol-2.html`
- [ ] `stories/the-little-bird-chronicles-vol-1.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-1.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-2.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-3.html`
- [ ] `stories/the-words-we-never-sent.html`

### Banglish translations — 9

- [ ] `translation/banglish/Before-the-Feelings-Fade-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/Before-the-Feelings-Fade-Vol.2-RomanizedBangla.html`
- [ ] `translation/banglish/The-Little-Bird-Chronicles-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/The-Little-Bird-Chronicles-Vol.2-RomanizedBangla.html`
- [ ] `translation/banglish/The-Little-Bird-Chronicles-Vol.3-RomanizedBangla.html`
- [ ] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`
- [ ] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedBangla.html`
- [ ] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3-RomanizedBangla.html`
- [ ] `translation/banglish/The-Words-We-Never-Sent-Vol.1-RomanizedBangla.html`

### Hinglish translations — 9

- [ ] `translation/hinglish/Before-the-Feelings-Fade-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/Before-the-Feelings-Fade-Vol.2-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Little-Bird-Chronicles-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Little-Bird-Chronicles-Vol.2-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Little-Bird-Chronicles-Vol.3-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3-RomanizedHindi.html`
- [ ] `translation/hinglish/The-Words-We-Never-Sent-Vol.1-RomanizedHindi.html`

## Priority 4 — Compare source and translation structure

- [x] Confirm all 34 translation files map to the intended canonical English story URL.
- [x] Check chapter heading sequences across the published source/translation sets; the audited sequences correspond.
- [x] Check chapter IDs for duplicates; none were found in the audited files.
- [ ] Compare Before the Feelings Fade Vol.2 paragraph boundaries chapter-by-chapter; resolve the 18-paragraph difference only where a real boundary is missing.
- [ ] Compare Council Vol.1 paragraph boundaries chapter-by-chapter; resolve the large source/translation paragraph-count difference without changing translated wording.
- [ ] Compare all remaining source/translation pairs for missing or merged paragraphs, dialogue separation, scene breaks, epigraphs, and closing notes.
- [ ] Recheck Council Vol.2 and Vol.3 structure and endings in all three language versions.
- [ ] Recheck the Meet Again trilogy's final chapter title remains exactly `Meet Again` in English, Hinglish, and Banglish.
- [ ] Verify The Council Vol.2 continuation text links to canonical Vol.3 in all three languages; verify the rendered link after build.

## Priority 5 — Reader, navigation, and deployment QA

### Shared reader and translation switching

- [x] Shared `_layouts/light-novel.html` includes English, Hinglish, and Banglish language options based on each story's available translation pages.
- [x] Language switching is implemented as an in-place fetch while retaining the canonical English URL.
- [x] Per-story/volume language preference storage is implemented.
- [x] Translation fetch failure retains the current reader content and offers navigation to the selected translation page as a fallback.
- [x] Direct translation-page visits are implemented to normalize to the canonical story URL.
- [ ] Test language switching on every story/volume with available translations.
- [ ] Test independent language preferences across different stories and volumes, including refresh and back/forward navigation.
- [ ] Test that chapter, scroll position, theme, text size, and controls remain stable after switching.
- [ ] Test failed fetch and missing translation behaviour without a blank reader or stale selected-language indicator.
- [ ] Verify direct translation URLs normalize correctly in the deployed site.

### Reading experience

- [x] Reading progress percentage and progress indicator are present.
- [x] Reading position save/restore logic is present.
- [x] Reader text-size controls and reset are present.
- [x] Theme toggle and edge fade elements are present.
- [x] Previous/next volume navigation is generated from the English series volumes.
- [ ] Test save/restore prompt and reading position in a real browser.
- [ ] Test controls and edge fades at desktop and mobile widths, in both themes.
- [ ] Verify volume navigation appears only where a previous/next volume exists and links to the correct volume.

### Site navigation and assets

- [x] `_layouts/default.html` and `_layouts/light-novel.html` reference `/icon.png` as the favicon.
- [x] Shared site navigation sets `aria-current="page"` for Home when the page URL is `/home/`.
- [x] Library filters out translation pages and groups English editions by series and volume.
- [ ] Test Home selected state and all navigation links on the deployed site.
- [ ] Test Library series grouping, single-volume direct opening, and multi-volume chooser on desktop/mobile.
- [ ] Confirm the homepage's random-story links all resolve to existing canonical story pages.

### Build and deployment

- [x] Latest recorded Pages workflow for commit `c9672dbfdd16eb7f9467c3a2f5ca5bf05fed703f` succeeded.
- [ ] After the formatting and romanization changes, run the Jekyll build and inspect the complete GitHub Actions result.
- [ ] Verify the deployed pages visually; a successful workflow alone does not complete reader QA.
- [ ] Recheck all changed story and translation pages after deployment.

## Completed historical work

- [x] Council Vol.2 Hinglish and Banglish translations completed.
- [x] Council Vol.3 Hinglish and Banglish translations completed.
- [x] Restored original English chapter titles in 16 translation files during Phase 2.
- [x] Meet Again Trilogy final chapter titles set to `Meet Again` in all three English volumes.
- [x] Migrated 32 translation files to the Romanized language suffix naming convention.
- [x] Translation pages excluded from independent Library entries.
- [x] Implemented canonical-URL in-place translation switching and per-story/volume language memory.
- [x] Implemented shared reader title stack and Council Vol.2 continuation link corrections.
- [x] Implemented reader progress, restore-reading support, text-size controls, theme behaviour, and edge fades.
- [x] Implemented the favicon and Home navigation selected state.

## Acceptance rules

A formatting task is complete only after:
- [ ] Paragraphs render separately and dialogue remains separated by speaker.
- [ ] Scene breaks, chapter headings, inline formatting, and chapter IDs remain intact.
- [ ] No nested/malformed paragraph markup or duplicate IDs are introduced.
- [ ] Story wording is unchanged unless an explicit prose-edit request exists.
- [ ] Source/translation structure has been checked where a matching translation exists.
- [ ] The reader has been checked at desktop and mobile sizes and in light/dark themes.
- [ ] The relevant build/deployment workflow has completed successfully.

Do not mark Phase 3 complete until all Phase 3 content fixes and acceptance checks are verified.
