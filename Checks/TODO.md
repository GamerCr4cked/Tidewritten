# Tidewritten — TODO

_Last reviewed: 2026-10-30_

This is the **current action list**, not a full history of completed work. Completed audits and detailed evidence remain in the linked reports and Git history.

## Current status

- Translation completion, chapter-title restoration, paragraph-formatting priorities, source/translation structure review, and reader feature implementation are recorded as completed.
- The owner reported that all seven Priority 5 live-reader QA areas passed on the deployed site. See [Priority 5 Reader QA](PRIORITY-5-READER-QA.md).
- Story filename standardization was merged in PR #29; the owner confirmed the site works correctly afterward.
- The unused legacy layout was archived (not deleted) in PR #30.
- No story prose or translation content is being changed as part of the current repository cleanup.

## Active work

### Repository cleanup

- [x] Archive the unused legacy layout: `_layouts/story.html` → `bin/_layouts/story.html` (PR #30 merged).
- [x] Keep `coming-soon.html`; it remains a standalone placeholder page and has not been proven obsolete.
- [x] Keep both homepage sources: `index.html` redirects the root URL to `/home/`; `index.md` generates the homepage.
- [ ] Audit remaining public pages, assets, scripts, and stylesheets for verified obsolete or duplicate files.
- [ ] For each candidate, verify active references and build implications before archiving it under `bin/`.
- [ ] Run a Jekyll/GitHub Pages build after the cleanup batch and inspect the actual workflow conclusion.
- [ ] Review the deployed site after the cleanup batch; report separately if independent browser testing is unavailable.

### Outstanding visual follow-up

- [ ] Confirm the Little Bird Chronicles Vol.3 English emphasis treatment renders as intended in the deployed reader, if it has not already been visually checked since the semantic `<em>` fix.

## Completed work — concise record

### Content and translation QA
- [x] 17 English story pages, 17 Hinglish translations, and 17 Banglish translations were audited (51 HTML pages total).
- [x] Translation mappings, chapter-heading sequences, chapter IDs, and filename suffix conventions were checked.
- [x] Added semantic paragraph markup to the 26 pages that previously had no paragraph tags.
- [x] Completed structural review of the remaining 25 pages; fixed the unclosed epilogue paragraph in Before the Feelings Fade Vol.1.
- [x] Corrected mixed-script fragments in the audited Banglish files.
- [x] Compared source/translation structure, including the Council Vol.2 chapter separators and the documented paragraph-grouping differences.
- [x] Rewrote Council Vol.1 Hinglish and Banglish in six two-chapter batches, with separate checks of its additional sections. See Git history and the translation audit notes.
- [x] Audited Before the Feelings Fade Vol.2 using the two-chapter-per-batch strategy. No missing chapter, scene, or complete passage was identified; paragraph-count differences were attributed to grouping. See [Vol.2 audit report](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md).

### Reader and site
- [x] Implemented the shared light-novel reader controls, reading progress/resume, theme handling, text sizing, edge fades, and volume navigation.
- [x] Implemented in-place language switching with per-story/volume preferences and canonical English URLs.
- [x] Implemented the favicon and Home selected state.
- [x] Completed the resume-widget redesign in PR #28; owner reported the live animation works.
- [x] Owner-reported live QA passed for navigation, Library/volumes, reader controls, translation switching, themes, responsive behaviour, and accessibility. See [Priority 5 Reader QA](PRIORITY-5-READER-QA.md).

### Filename standardization
- [x] Standardized all 17 English source filenames and 34 translation filenames to shared series/volume bases with language suffixes.
- [x] Updated the reader's edition matching while preserving canonical story URLs and file content.
- [x] PR #29 merged; owner confirmed the resulting site works correctly.

## Historical reports

- [Priority 5 Reader QA](PRIORITY-5-READER-QA.md) — source inventory and owner-reported live test results.
- [Before the Feelings Fade Vol.2 translation audit](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md) — detailed comparison notes.

## Working rules

See [Notes.md](Notes.md) for the authoritative project structure, archive policy, content-preservation rules, translation architecture, reader behaviour, Git workflow, and QA acceptance criteria.
