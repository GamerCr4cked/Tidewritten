# Tidewritten Website — TODO & Audit

> Last full source audit: 2026-10-30  
> Audited branch: `main`  
> Scope: published story pages, translation pages, shared reader, Library, site navigation, and relevant assets/configuration.  
> Scope note: `bin/` is off-limits during ordinary development. During an explicitly requested cleanup, it may be used only as an archive destination for verified obsolete files; do not permanently delete archived files. See [Notes.md](Notes.md).

## Current status

- [x] **Phase 1 — Translation completion:** The Council Vol.3 is complete in both Hinglish and Banglish, including Prologue, Chapters 1–7, and Epilogue.
- [x] **Phase 2 — Chapter-title restoration:** Current audit covers all 34 published translation HTML files (17 Banglish + 17 Hinglish). Chapter-heading sequences were checked against the corresponding English story files; the previously corrected original English titles remain in place.
- [x] **Phase 3 — Story formatting and content QA:** Priorities 1–4 and Priority 5 rendered-reader QA have been completed; see the Priority 5 live QA report.
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

The baseline audit found **26 files with zero opening `<p>` tags**: 10 English stories, 8 Banglish translations, and 8 Hinglish translations. **Priority 1 has now added semantic paragraph markup to all 26 files.** All 51 published story/translation HTML files now contain paragraph markup. The other **25 files** (7 English stories, 9 Banglish translations, and 9 Hinglish translations) already had paragraph markup before this work and remain on the structural-review list. Source-markup counts do not replace checking the rendered reader.

### Additional findings


### Priority 1 completion — 2026-10-30

- [x] Added semantic `<p>` elements to all 26 files that previously had zero paragraph tags (10 English, 8 Banglish, 8 Hinglish).
- [x] Kept chapter headings, existing scene-break markers, front matter, and story wording unchanged.
- [x] Wrapped standalone volume-continuation anchors in `<p class="volume-continuation">` where present.
- [x] Verified all 26 edited files have balanced opening and closing paragraph tags, no nested paragraph tags, and no duplicate chapter IDs.
- [x] Verified all 51 published story/translation files now contain at least one paragraph tag.
- [x] Jekyll build and GitHub Pages deployment succeeded for the Priority 1 formatting changes: [workflow run 41004873527](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41004873527).
- [x] Rendered-reader visual review completed by the site owner; all seven Priority 5 areas were reported working.

A pre-existing markup issue in `stories/Before-the-Feelings-Fade-Vol.1-English.html` (89 opening paragraph tags versus 88 closing tags) was investigated and fixed during Priority 3. The final italicized epilogue paragraph was missing its closing `</p>` before the Volume Two continuation link.


- [x] **Mixed-script Banglish audit:** Rechecked all 8 listed Banglish files. Four files required corrections; the other four had no Bengali Unicode in their prose during the final audit.
  - `translation/banglish/Before-the-Feelings-Fade-Vol.1-RomanizedBangla.html`
  - `translation/banglish/Meet-Again-Trilogy-Vol.1-RomanizedBangla.html`
  - `translation/banglish/Prismat-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Little-Bird-Chronicles-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Little-Bird-Chronicles-Vol.3-RomanizedBangla.html`
  - `translation/banglish/The-Other-Side-of-Us-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`
  - `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedBangla.html`
- [x] **Before the Feelings Fade Vol.2 translation audit:** Compared all 10 chapters in English, Hinglish, and Banglish using the two-chapter-per-batch strategy. The 298-versus-280 paragraph-count difference is explained by paragraph grouping; both translations contain the reviewed narrative sequence, with no missing chapter, scene, or complete passage identified. No story text was changed. See [the full audit report](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md).
- [x] **Council Vol.1 paragraph-count discrepancy resolved by a full translation rewrite:** the English source has 1,183 paragraphs; the rewritten Hinglish edition has 1,186 and the rewritten Banglish edition has 1,192. Chapter structure and scene-break counts match; the small paragraph-count differences are translation-specific segmentation, not the earlier 501/504-paragraph compressed drafts.
- [x] The latest recorded Pages workflow for the Phase 2 audit commit completed successfully: [workflow run 41001971301](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41001971301). This confirms that commit's Pages build/deployment workflow, not the visual correctness of every page.

---

## Priority 1 — Add semantic paragraph markup to files with zero paragraphs

Do not rewrite or paraphrase prose. Preserve every word, punctuation mark, heading, chapter ID, inline tag, scene break, and order. Do not blindly wrap existing markup or create nested paragraphs.

### English story sources — 10

- [x] `stories/Meet-Again-Trilogy-Vol.1-English.html`
- [x] `stories/Meet-Again-Trilogy-Vol.2-English.html`
- [x] `stories/Meet-Again-Trilogy-Vol.3-English.html`
- [x] `stories/Prismat-Vol.1-English.html`
- [x] `stories/Teaching-Me-How-to-Live-Vol.1-English.html`
- [x] `stories/The-Account-That-Never-Came-Back-Vol.1-English.html`
- [x] `stories/The-Little-Bird-Chronicles-Vol.2-English.html`
- [x] `stories/The-Little-Bird-Chronicles-Vol.3-English.html`
- [x] `stories/The-Other-Side-of-Us-Vol.1-English.html`
- [x] `stories/When-Everyone-Went-Offline-Vol.1-English.html`

### Banglish translations — 8

- [x] `translation/banglish/Meet-Again-Trilogy-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/Meet-Again-Trilogy-Vol.2-RomanizedBangla.html`
- [x] `translation/banglish/Meet-Again-Trilogy-Vol.3-RomanizedBangla.html`
- [x] `translation/banglish/Prismat-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/Teaching-Me-How-to-Live-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/The-Account-That-Never-Came-Back-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/The-Other-Side-of-Us-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/When-Everyone-Went-Offline-Vol.1-RomanizedBangla.html`

### Hinglish translations — 8

- [x] `translation/hinglish/Meet-Again-Trilogy-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/Meet-Again-Trilogy-Vol.2-RomanizedHindi.html`
- [x] `translation/hinglish/Meet-Again-Trilogy-Vol.3-RomanizedHindi.html`
- [x] `translation/hinglish/Prismat-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/Teaching-Me-How-to-Live-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/The-Account-That-Never-Came-Back-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/The-Other-Side-of-Us-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/When-Everyone-Went-Offline-Vol.1-RomanizedHindi.html`

## Priority 2 — Correct mixed-script Banglish

- [x] Inspected Bengali-script occurrences across all 8 listed files.
- [x] Replaced accidental mixed-script fragments with natural Romanized Bangla in the four affected files.
- [x] Kept the existing conversational Banglish wording and meaning; only the mixed-script fragments were transliterated.
- [x] Re-fetched and scanned all 8 listed files; no Bengali Unicode remains in their story prose.
- [x] Reviewed the corrected lines in context; replacements retain the intended Romanized Bangla wording.

### Priority 2 completion — 2026-10-30

- [x] Corrected mixed-script Banglish in `translation/banglish/The-Little-Bird-Chronicles-Vol.3-RomanizedBangla.html` (`rakhলাম` → `rakhlam`).
- [x] Corrected mixed-script Banglish in `translation/banglish/The-Other-Side-of-Us-Vol.1-RomanizedBangla.html` (`khোঁj` → `khoj`).
- [x] Corrected mixed-script Banglish in `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html` (`bolলেন` → `bollen`; `korলেন` → `korlen`).
- [x] Corrected mixed-script Banglish in `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedBangla.html` (`duটো` → `duto`; `Taratarি` → `Taratari`; `bolলেন` → `bollen`; `katাও` → `katao`; `bhabলো` → `bhablo`).
- [x] Final Unicode scan of all 8 Priority 2 files found zero Bengali-script characters in the story prose.

## Priority 3 — Structural review of files that already contain paragraphs

Review paragraph boundaries, dialogue, scene breaks, headings, inline markup, and chapter structure. Do not change prose just to make formatting uniform.

### Initial structural validation — 2026-10-30

- [x] Checked all 25 listed files for paragraph-tag balance, nesting depth, and duplicate HTML IDs. All 25 now have balanced paragraph tags, maximum paragraph nesting depth of 1, and no duplicate IDs.
- [x] Fixed the missing `</p>` in the final epilogue paragraph of `stories/Before-the-Feelings-Fade-Vol.1-English.html`; its Banglish and Hinglish counterparts already had the correct closure.
- [x] Completed the semantic structural pass across all 25 files: reviewed chapter/part heading order, paragraph grouping and dialogue boundaries, blockquotes, inline emphasis/strong markup, scene-break placement, end matter, and continuation links where present. The mechanical checks also found no empty paragraphs, block-level elements nested inside paragraphs, or paragraph-tag imbalance.
- [x] Compared Council Vol.2 chapter-end separators against English; restored the 11 missing `<hr>` chapter separators in each of the Banglish and Hinglish translations. Both translations now have 24 separators, matching the 24 in English.

### English story sources — 7

- [x] `stories/Before-the-Feelings-Fade-Vol.1-English.html` — corrected the unclosed final epilogue paragraph; verified balanced paragraph nesting.
- [x] `stories/Before-the-Feelings-Fade-Vol.2-English.html`
- [x] `stories/The-Little-Bird-Chronicles-Vol.1-English.html`
- [x] `stories/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-English.html`
- [x] `stories/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-English.html`
- [x] `stories/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3-English.html`
- [x] `stories/The-Words-We-Never-Sent-Vol.1-English.html`

### Banglish translations — 9

- [x] `translation/banglish/Before-the-Feelings-Fade-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/Before-the-Feelings-Fade-Vol.2-RomanizedBangla.html`
- [x] `translation/banglish/The-Little-Bird-Chronicles-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/The-Little-Bird-Chronicles-Vol.2-RomanizedBangla.html`
- [x] `translation/banglish/The-Little-Bird-Chronicles-Vol.3-RomanizedBangla.html`
- [x] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`
- [x] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedBangla.html`
- [x] `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3-RomanizedBangla.html`
- [x] `translation/banglish/The-Words-We-Never-Sent-Vol.1-RomanizedBangla.html`

### Hinglish translations — 9

- [x] `translation/hinglish/Before-the-Feelings-Fade-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/Before-the-Feelings-Fade-Vol.2-RomanizedHindi.html`
- [x] `translation/hinglish/The-Little-Bird-Chronicles-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/The-Little-Bird-Chronicles-Vol.2-RomanizedHindi.html`
- [x] `translation/hinglish/The-Little-Bird-Chronicles-Vol.3-RomanizedHindi.html`
- [x] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedHindi.html`
- [x] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.2-RomanizedHindi.html`
- [x] `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3-RomanizedHindi.html`
- [x] `translation/hinglish/The-Words-We-Never-Sent-Vol.1-RomanizedHindi.html`

## Priority 4 — Compare source and translation structure

- [x] Confirm all 34 translation files map to the intended canonical English story URL.
- [x] Check chapter heading sequences across the published source/translation sets; the audited sequences correspond.
- [x] Check chapter IDs for duplicates; none were found in the audited files.
- [x] Compared all 17 English story sources against their 34 published translations (17 Banglish + 17 Hinglish), chapter by chapter. All 17 pairs have matching chapter-heading counts and corresponding heading text; Before the Feelings Fade Vol.1 differs only in `CHAPTER` capitalization in translation headings.
- [x] Compared per-chapter paragraph counts, scene-break (`<hr>`) counts, and blockquote/epigraph counts across all 17 pairs. Scene-break and blockquote counts match throughout; Council Vol.2 now has 24 chapter separators in all three editions.
- [x] Reviewed paragraph grouping and dialogue separation in the two largest discrepancy cases. Before the Feelings Fade Vol.2 translations group some adjacent source paragraphs (298 English vs 280 in each translation). Council Vol.1 translations use more consolidated narrative paragraphs (1,183 English vs 504 Banglish and 501 Hinglish); inspected representative chapter passages and confirmed dialogue turns remain separated by speaker. These are structural/pacing differences, not evidence by themselves of missing chapters or text.
- [x] Recorded the remaining small paragraph-count differences for editorial awareness: Meet Again Vol.2 (77/76/76), Prismat Vol.1 (119/117/117), Little Bird Vol.2 (168/167/167), and Council Vol.2 (1,959/1,954/1,956; differences are limited to a few paragraphs across Chapters 12, 14, 16, 18, and 21). The remaining 11 source/translation sets have matching total paragraph counts.
- [x] Compared the other 11 source/translation sets: Before the Feelings Fade Vol.1 (89/89/89), Meet Again Vol.1 (127/127/127), Meet Again Vol.3 (111/111/111), Teaching Me How to Live (116/116/116), The Account That Never Came Back (65/65/65), Little Bird Vol.1 (187/187/187), Little Bird Vol.3 (207/207/207), The Other Side of Us (97/97/97), Council Vol.3 (489/489/489), The Words We Never Sent (90/90/90), and When Everyone Went Offline (77/77/77). (Council Vol.1 and Vol.2 and Before the Feelings Fade Vol.2 are recorded separately above.)
- [x] Rechecked Council Vol.2/Vol.3 structure and endings in English, Banglish, and Hinglish. Vol.2 has the same final chapter heading and continuation link to `/book/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.3/` in all three editions; Vol.3 ends with its epilogue and `END OF VOLUME THREE`, with no Volume Four link.
- [x] Rechecked the Meet Again trilogy's final chapter heading is exactly `Meet Again` in all three English volumes and their Hinglish/Banglish translations.
- [x] Confirmed the Meet Again Vol.1 and Vol.2 continuation links point to Vol.2 and Vol.3 respectively in all three languages; Vol.3 has no next-volume link.
- [x] No prose or paragraph boundaries were changed during Priority 4. Where translated paragraph grouping differs, it was retained rather than mechanically split; any decision to enforce source-level pacing should be a separate editorial request.

## Priority 5 — Reader, navigation, and deployment QA

### Resume widget hover-animation follow-up — 2026-10-30

- [x] Audited the resume widget's desktop hover selectors and found that the card's changing geometry and child-link dimensions were tied directly to `:hover`, a plausible source of hover-state flicker.
- [x] Redesigned the resume widget on branch `fix/reading-resume-hover-animation`: circular launcher morphs into a rounded card; inner content is restructured into a top utility row, story-information block, and dedicated Continue reading action.
- [x] Added sequenced content reveal, explicit pointer state with delayed collapse, keyboard focus support, touch expansion, and reduced-motion handling.
- [x] Preserved keyboard `:focus-within` expansion and the separate touch-sized interaction.
- [x] Added the full source-level inventory and owner-facing live QA checklist in [`Checks/PRIORITY-5-READER-QA.md`](PRIORITY-5-READER-QA.md).
- [x] PR #28 merged and deployed; the site owner confirmed the circular resume animation works in the live site.
- [x] Site owner completed all remaining live QA tasks in `Checks/PRIORITY-5-READER-QA.md` and reported that all areas work correctly.

### Static QA pass — 2026-10-30

- [x] Re-read `Checks/Notes.md` and this TODO before making changes.
- [x] Confirmed the latest Council Vol.1 translation-content workflow and its subsequent documentation workflows completed successfully.
- [x] Static-inspected the shared light-novel layout, default layout, global stylesheet, home page, Library source, favicon references, language-switching code, reading-progress logic, resume widget, and volume-navigation logic. This is source-level inspection, not rendered-browser verification.
- [x] Fixed a confirmed JavaScript fallback bug in `_layouts/light-novel.html`: `currentChapter()` referenced an undefined `chapterHeadings` identifier when no chapter heading had yet crossed the 170px threshold. It now uses the local list returned by `getChapterHeadings()`, so the saved reading-progress record can correctly fall back to the first chapter.
- [x] Confirmed the source includes the favicon reference to `/icon.png`, the Home selected-state condition for `/home/`, and a random-story list with canonical `/book/...` routes.
- [x] Confirmed the resume widget has a fixed bottom-right position on desktop and a compact expandable affordance on touch-sized screens in the stylesheet.
- [x] Manual rendered-reader QA was completed by the site owner on the deployed site. The owner confirmed the resume widget, progress/resume, homepage/navigation, Library/volumes, reader controls, translation switcher, themes, responsiveness, and accessibility all work. This is owner-reported testing, not independently captured browser evidence.
- [ ] After the layout fix, verify the GitHub Pages workflow succeeds before considering the code fix deployed.


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
- [x] Site owner confirmed save/restore prompt and reading position work in the deployed site.
- [x] Site owner confirmed reader controls, edge fades, responsive behavior, and both themes work.
- [x] Site owner confirmed Library and volume navigation work.

### Site navigation and assets

- [x] `_layouts/default.html` and `_layouts/light-novel.html` reference `/icon.png` as the favicon.
- [x] Shared site navigation sets `aria-current="page"` for Home when the page URL is `/home/`.
- [x] Library filters out translation pages and groups English editions by series and volume.
- [x] Site owner confirmed Home selected state and global navigation work.
- [x] Site owner confirmed Library grouping and volume navigation work.
- [ ] Confirm the homepage's random-story links all resolve to existing canonical story pages.

### Build and deployment

- [x] Latest recorded Pages workflow for commit `c9672dbfdd16eb7f9467c3a2f5ca5bf05fed703f` succeeded.
- [x] Run the Jekyll build and inspect the complete GitHub Actions result for the Priority 1 formatting changes: [workflow run 41004873527](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41004873527).
- [ ] After the remaining Phase 3 content changes, run the Jekyll build again and inspect the complete GitHub Actions result.
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


### Little Bird Chronicles Vol.3 — English emphasis fix (2026-10-30)

- [x] Replaced the five literal Markdown-style `*...*` wrappers in the English source with semantic HTML `<em>...</em>` markup.
- [x] Confirmed the corresponding five passages already use `<em>` in both Hinglish and Banglish translations; their text and formatting were left unchanged.
- [x] Preserved all English wording, paragraph boundaries, chapter structure, and IDs. No files under `bin/` were accessed.
- [ ] Confirm the English edition renders with the same italic/highlight treatment as both translations in the deployed reader.


## Council Vol.1 translation rewrite — in progress

- [ ] Rewrite the Hinglish and Banglish editions directly against the English source, using a strict two-chapter-per-batch workflow.
- [x] Batch 1: Chapters 1–2 rewritten in both languages; original English chapter headings and IDs retained.
- [x] Removed duplicate/incorrect `book_title` front-matter entries from both translation files; retained the canonical volume title, `One Can of Coffee and a Broken Pen`.
- [ ] Continue with each remaining pair of chapters, then separately audit the Prologue, Epilogue, and Afterword against the English source.
- [ ] Final audit: verify no omitted passages, correct names/pronouns, natural modern Hinglish/Banglish, paragraph/dialogue structure, matching chapter IDs and scene breaks, and valid Vol.2 continuation link.
- [ ] Verify the Jekyll build and deployment after the rewrite is complete.

**Batch 1 files:**
- `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedHindi.html`
- `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`


## Council Vol.1 translation rewrite — completed 2026-10-30

- [x] Rewrote both published translations directly against the English source, using six two-chapter batches: Chapters 1–2, 3–4, 5–6, 7–8, 9–10, and 11–12.
- [x] Separately retranslated and checked the Prologue, Interlude, Epilogue, and Afterword in both languages.
- [x] Preserved the original English chapter/section titles, heading IDs, chapter order, scene breaks, character names, and the Volume Two continuation link.
- [x] Corrected duplicate/incorrect `book_title` front-matter entries in both translations; the canonical volume title is now `One Can of Coffee and a Broken Pen`.
- [x] Verified all expected sections are present in both translations: Prologue, Chapters 1–12, Interlude, Epilogue, and Afterword.
- [x] Verified paragraph tags are balanced: Hinglish 1,186 opening/closing pairs; Banglish 1,192 opening/closing pairs. English source: 1,183 pairs.
- [x] Verified all 15 scene-break separators are present in each edition, all HTML IDs are unique, and no Bengali Unicode remains in Banglish prose or Devanagari Unicode in Hinglish prose.
- [x] Verified both translation front matters contain exactly one `book_title`, correct Volume One metadata, correct `translation_of` mapping, and the correct language labels.
- [x] Verified both editions retain the Volume Two continuation link to `The Things We Never Said`.
- [x] No files under `bin/` were inspected or modified.
- [x] Confirmed the Pages workflow for the final translation-content commit succeeded: [workflow run 41012224919](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41012224919). The subsequent TODO-only documentation commit has its own workflow run pending at the time of this note.

**Rewritten files:**
- `translation/hinglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedHindi.html`
- `translation/banglish/The-Student-Council-President-Hates-Everyone-Except-Apparently-Me-Vol.1-RomanizedBangla.html`


## Priority 6 — Standardize story source filenames

- [x] Renamed all 17 English story source files to the shared `Series-Vol.N-English.html` pattern.
- [x] Normalized the six Meet Again Trilogy translation filenames to the same hyphenated series base; all 34 translations now match the English filename base and language suffix.
- [x] Updated the shared reader to associate editions by the common source filename base, with a `translation_of` fallback.
- [x] Preserved all story/translation HTML blobs, front matter, prose, and existing canonical `/book/...` URLs during the file moves.
- [ ] Verify all 51 pages are discovered by Jekyll, all 17 story groups expose the expected available languages, and GitHub Pages build/deployment succeeds.
- [ ] Verify in the live reader that English/Hinglish/Banglish switching remains in place, keeps the canonical URL, and works for every available volume.


## Repository cleanup — 2026-10-30

- [x] Archived the unused legacy `_layouts/story.html` as `bin/_layouts/story.html` through PR #30; original file content was preserved.
- [x] Verified the current published reader uses `_layouts/light-novel.html`; no active `layout: story` declarations were found in the current published story sources.
- [x] Kept `coming-soon.html`: it is a standalone placeholder page and has not been proven obsolete.
- [x] Kept both homepage sources: `index.html` redirects `/` to `/home/`, while `index.md` generates `/home/`.
- [ ] Continue auditing remaining pages, assets, scripts, and styles for safe archive candidates.
- [ ] Run a Jekyll build and review the GitHub Pages deployment after the cleanup batch.

No story prose or translation text was changed during this cleanup.