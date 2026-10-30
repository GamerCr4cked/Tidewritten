# Tidewritten — TODO

_Last reviewed: 2026-10-30_

This file tracks **work that is still outstanding**. Completed work is summarized briefly below; detailed audit evidence remains in the linked reports and Git history. Do not treat historical checklist items as unfinished when a later completion record supersedes them.

## Current project status

- **Content and translation priorities 1–4:** completed for the 17 published English volumes and their 34 published translations (51 HTML pages total). See the audit records and the dedicated Vol.2 report.
- **Reader and site polish:** implemented. The site owner reported that the Priority 5 live checks passed, including navigation, Library/volume navigation, reader controls, translation switching, themes, responsive behaviour, and accessibility. This is owner-reported browser QA, not an independent browser test.
- **Filename standardization:** implemented in PR #29; the owner confirmed the site works correctly after merging.
- **Legacy layout cleanup:** _layouts/story.html was archived as bin/_layouts/story.html in PR #30. It was archived, not permanently deleted.
- **Council Vol.1 translation rewrite:** completed in both languages using six two-chapter batches, plus separate work on the additional sections. The old in-progress checklist is superseded by the completion record below.

## Active TODO

No outstanding tasks are currently recorded.

## Completed work summary

### Story content, formatting, and translation QA

- [x] Audited 17 English story pages, 17 Hinglish translations, and 17 Banglish translations (51 published HTML pages).
- [x] Checked translation mappings, chapter/section heading sequences, chapter IDs, scene-break structure, paragraph markup, and relevant end matter.
- [x] Added semantic paragraph markup to the 26 pages that previously had no paragraph tags; reviewed the remaining 25 pages for structural issues.
- [x] Fixed the unclosed final epilogue paragraph in Before the Feelings Fade Vol.1.
- [x] Corrected mixed-script fragments in the audited Banglish files.
- [x] Restored the missing Council Vol.2 chapter-end separators in both translations.
- [x] Compared source/translation structure and documented legitimate paragraph-grouping differences rather than mechanically changing translated pacing.
- [x] Rewrote Council Vol.1 Hinglish and Banglish in six two-chapter batches (Chapters 1–12), then separately handled the Prologue, Interlude, Epilogue, and Afterword. Verified section coverage, IDs, scene breaks, front matter, and continuation links.
- [x] Audited Before the Feelings Fade Vol.2 using the two-chapter-per-batch method; no missing chapter, scene, or complete passage was identified.

### Reader, navigation, and site polish

- [x] Implemented the shared light-novel reader, reading progress and resume, text-size controls, theme handling, edge fades, and volume navigation.
- [x] Implemented in-place translation switching, per-story/volume language preference, and canonical English URLs.
- [x] Implemented the favicon reference to /icon.png and the selected Home navigation state.
- [x] Completed the resume-widget hover-animation follow-up in PR #28; the owner confirmed the live animation works.
- [x] Owner-reported Priority 5 live QA passed. Detailed checklist and source inventory: [Priority 5 Reader QA](PRIORITY-5-READER-QA.md).
- [x] Confirmed the five semantic emphasis passages in Little Bird Chronicles Vol.3 English render with the intended italic/highlight treatment in the deployed reader (owner-confirmed).
- [x] Completed the end-to-end translation-switching pass across all 17 series/volume entries, including available language choices and preservation of canonical English URLs (owner-confirmed).
- [x] Verified all 17 homepage random-story destinations match published canonical story routes. The Priority 5 live QA report also records the owner-tested random-story cards opening the intended canonical pages.

### Repository maintenance, build, and deployment

- [x] Completed the remaining repository cleanup audit of active public pages, assets, scripts, and stylesheets; retained files whose purpose or references remained valid.
- [x] Checked cleanup candidates against active references, front matter, navigation, scripts, stylesheets, configuration, build rules, and deployment implications before archiving.
- [x] Archived verified obsolete files under bin/ while preserving their relative paths; no archived files were permanently deleted.
- [x] Ran the Jekyll/GitHub Pages build and deployment checks after cleanup; the owner confirmed these checks completed successfully.
- [x] Reviewed the deployed site after cleanup; the owner confirmed the post-cleanup site review was completed.
- [x] Standardized all 17 English source filenames and 34 translation filenames to shared series/volume bases with language suffixes.
- [x] Updated edition matching while preserving story/translation content and canonical story URLs. PR #29 was merged; the owner confirmed the site works afterward.
- [x] Archived the unused legacy layout as bin/_layouts/story.html through PR #30.
- [x] Confirmed coming-soon.html is a standalone placeholder and retained it.
- [x] Retained both homepage sources: index.html redirects the root URL to /home/; index.md generates the homepage.

## Audit reports and historical references

- [Priority 5 Reader QA](PRIORITY-5-READER-QA.md) — reader source inventory and owner-reported live QA results.
- [Before the Feelings Fade Vol.2 translation audit](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md) — detailed source/translation comparison.

Historical phase-by-phase file inventories and commit-level evidence remain available in Git history. This TODO intentionally avoids repeating every completed file path.

## Definition of done

Use these criteria when closing a future task; they are standards, not open TODO checkboxes.

- Paragraphs render distinctly and dialogue remains readable by speaker.
- Chapter headings, IDs, anchors, scene breaks, inline formatting, and end matter remain intact.
- No malformed/nested paragraph markup or duplicate IDs are introduced.
- Story wording is unchanged unless content editing was requested.
- Matching source/translation structure and navigation are checked where applicable.
- Responsive layouts, light/dark themes, keyboard/touch controls, and reduced-motion behaviour are checked when affected.
- The relevant build/deployment workflow is inspected; rendered-browser QA is reported separately.
- No item is marked complete until the corresponding change and required verification have actually happened.

For project rules and implementation conventions, see [Notes.md](Notes.md).
