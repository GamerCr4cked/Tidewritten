# Tidewritten Website — TODO

> Scope: published story pages and their translation pages only. Do not inspect, edit, reformat, move, or use anything under `bin/` for this work. See [Notes.md](Notes.md) for project rules.

## Priority 1 — Fix collapsed story paragraphs

These files were audited on 2026-10-29 and had no HTML `<p>` tags in their story content. Their source uses blank-line-separated text, but HTML collapses ordinary newlines, causing the reading view to look like a wall of text.

### Main stories — 10 files

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

### Banglish translations — 8 files

- [ ] `translation/banglish/prismat-fragments-of-the-fallen-sky.html`
- [ ] `translation/banglish/somewhere-between-friends-and-love.html`
- [ ] `translation/banglish/teaching-me-how-to-live.html`
- [ ] `translation/banglish/the-account-that-never-came-back.html`
- [ ] `translation/banglish/the-other-side-of-us.html`
- [ ] `translation/banglish/the-silence-between-us.html`
- [ ] `translation/banglish/when-everyone-went-offline.html`
- [ ] `translation/banglish/when-we-meet-again.html`

### Hinglish translations — 8 files

- [ ] `translation/hinglish/prismat-fragments-of-the-fallen-sky.html`
- [ ] `translation/hinglish/somewhere-between-friends-and-love.html`
- [ ] `translation/hinglish/teaching-me-how-to-live.html`
- [ ] `translation/hinglish/the-account-that-never-came-back.html`
- [ ] `translation/hinglish/the-other-side-of-us.html`
- [ ] `translation/hinglish/the-silence-between-us.html`
- [ ] `translation/hinglish/when-everyone-went-offline.html`
- [ ] `translation/hinglish/when-we-meet-again.html`

## Priority 2 — Review files that already have paragraph markup

These files were not classified as missing all paragraph tags. They still need a visual/structural review for inconsistent spacing, dialogue, chapter headings, and scene breaks. Do not rewrite prose just to change formatting.

### Main stories

- [ ] `stories/before-the-feelings-fade-vol-1.html`
- [ ] `stories/before-the-feelings-fade-vol-2.html`
- [ ] `stories/the-little-bird-chronicles-vol-1.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-1.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-2.html`
- [ ] `stories/the-student-council-president-hates-everyone-except-apparently-me-vol-3.html`
- [ ] `stories/the-words-we-never-sent.html`

### Banglish translations

- [ ] `translation/banglish/the-face-i-never-forgot.html`
- [ ] `translation/banglish/the-girl-by-the-school-gate.html`
- [ ] `translation/banglish/the-little-bird-returns.html`
- [ ] `translation/banglish/the-messages-we-mistook.html`
- [ ] `translation/banglish/the-student-council-president-hates-everyone-vol-1.html`
- [ ] `translation/banglish/the-student-council-president-hates-everyone-vol-2.html`
- [ ] `translation/banglish/the-words-we-never-sent.html`
- [ ] `translation/banglish/where-our-story-begins.html`

### Hinglish translations

- [ ] `translation/hinglish/the-face-i-never-forgot.html`
- [ ] `translation/hinglish/the-girl-by-the-school-gate.html`
- [ ] `translation/hinglish/the-little-bird-returns.html`
- [ ] `translation/hinglish/the-messages-we-mistook.html`
- [ ] `translation/hinglish/the-student-council-president-hates-everyone-vol-1.html`
- [ ] `translation/hinglish/the-student-council-president-hates-everyone-vol-2.html`
- [ ] `translation/hinglish/the-words-we-never-sent.html`
- [ ] `translation/hinglish/where-our-story-begins.html`

## Priority 3 — Reader and formatting QA

- [ ] Check every listed story and translation in the actual reader after formatting.
- [ ] Ensure paragraphs have clear separation and readable line length.
- [ ] Preserve dialogue as distinct paragraphs; do not merge separate speakers into one paragraph.
- [ ] Preserve intentional scene breaks, chapter titles, subheadings, italics, bold, and other meaningful inline markup.
- [ ] Check that chapter navigation and the table of contents still work after edits.
- [ ] Check that all translations retain the same chapter order and intended story structure as their source where applicable.
- [ ] Confirm the language switcher links to the correct translation file, and do not invent translations that do not exist.
- [ ] Check desktop and mobile layouts, light/dark themes, and the floating reader controls.
- [ ] Run the site's available checks/build and inspect the GitHub Actions result before calling a change deployed.

## Priority 4 — Meet Again trilogy chapter titles

The last chapter titles in all three volumes were requested to be `Meet Again` rather than `Phir Milenge...`. The title edits were committed on 2026-10-29:

- [x] `stories/meet-again-trilogy-vol-1.html` — final chapter title set to `Meet Again`
- [x] `stories/meet-again-trilogy-vol-2.html` — final chapter title set to `Meet Again`
- [x] `stories/meet-again-trilogy-vol-3.html` — final chapter title set to `Meet Again`

These are recorded as committed edits; verify the latest deployment workflow separately before considering them live.

## Counting note

The paragraph-markup audit identified **26 files with zero paragraph tags**: 10 main stories, 8 Banglish translations, and 8 Hinglish translations. A separate set of **23 files** already had paragraph tags and was placed in the review list above. This is a markup audit, not a guarantee that every listed or unlisted page is otherwise flawless.


## Priority 5 — Translation filename migration

Use series-and-volume-based filenames for every existing translation source. Preserve each file's front matter, generated permalink, translation content, chapter IDs, and `translation_of` mapping.

- [x] Confirm the exact series slug convention, including the owner's example `Meet-Again_Trilogy`.
- [x] Rename all existing Hinglish translation files with the `-RomanizedHindi.html` suffix.
- [x] Rename all existing Banglish translation files with the `-RomanizedBangla.html` suffix.
- [x] Verify each renamed file still maps to the correct English story and volume using its preserved `translation_of`, `series`, and `volume` front matter.
- [x] Verify no translation appears as an independent Library entry; `library.html` filters out pages with `translation_of` set.
- [x] Verify no translation content or front matter was lost during the rename; all 32 renamed paths reuse their original Git blob contents.

## Priority 6 — In-place translation switching and language memory

- [x] Add the in-place translation-loading architecture to the shared `_layouts/light-novel.html` reader.
- [x] Add per-story/volume localStorage preference handling to the shared reader.
- [x] Add language-option metadata for English, Hinglish, and Banglish in the desktop and mobile menus.
- [ ] Verify switching languages leaves the canonical story URL unchanged.
- [ ] Verify each story/volume remembers its own language independently across navigation and refreshes.
- [ ] Verify direct visits to legacy translation URLs normalize to the canonical English story URL.
- [ ] Verify chapter position, scroll position, theme, text size, and reader controls remain stable after switching.
- [ ] Verify missing/unavailable translations safely fall back to English.
- [ ] Test translation loading failures without losing the currently displayed story.
- [ ] Test all available translations on desktop and mobile.
- [ ] Run the Jekyll build and inspect the GitHub Actions deployment result.

## Translation completion note

- [x] The Council Volume 2 Hinglish translation is complete.
- [x] The Council Volume 2 Banglish translation is complete.

The translation filename migration and reader-switching QA above are separate from translation prose completion.
