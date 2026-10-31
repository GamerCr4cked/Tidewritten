# Tidewritten — TODO

_Last reviewed: 2026-10-31_

This is the concise project roadmap. **Only the tasks under FINAL WORK are active.** Completed implementation and maintenance work is summarized below; detailed evidence remains in the linked QA reports and Git history.

## Current project status

- **Published catalogue:** 17 canonical English volumes, 17 Hinglish editions, and 17 Banglish editions (51 story HTML pages).
- **Core platform:** The Library, shared light-novel reader, translation switching, reader personalization, reading statistics, About page, navigation, and responsive layouts are implemented.
- **Completed work:** Phases 1–4 and 6 are complete. Phase 5's reader/Library support and metadata groundwork are implemented; its remaining deliverables have been moved into **FINAL WORK** below.
- **QA distinction:** Browser checks described as owner-reported were confirmed by the site owner. They are not independent browser tests by the assistant.
- **Deferred Library metadata:** Recently Updated sorting is implemented but remains unavailable until reliable story-content update dates are supplied. No dates will be inferred from bulk commits or maintenance activity.

---

# FINAL WORK

**Goal:** Complete the visual presentation of Tidewritten's series and volumes with consistent, optimized cover artwork, then verify the finished presentation across the site.

- [ ] Create custom cover art for every series.
- [ ] Create volume-specific cover designs where appropriate.
- [ ] Establish consistent cover dimensions, image optimization, alt text, and responsive behaviour.
- [ ] Create and optimize approved cover assets using the documented 2:3 portrait / 1200 × 1800 px / WebP specification.
- [ ] Verify missing-image fallbacks, canonical routes, translation switching, accessibility, desktop/mobile layouts, and rendered browser behaviour.

**Implementation already in place:** The shared reader and Library support optional series descriptions, volume synopses, localized author notes, canonical volume covers, and optional illustrations. Story-grounded descriptions and synopses are populated for all 10 series and 17 canonical English volumes. Cover artwork files have not yet been populated.

**Specification:** [Phase 5 Story Presentation Specification](Phase-5-Story-Presentation-Spec.md). This documents cover standards, asset paths, optional metadata, localization/fallback behaviour, illustration records, accessibility, and implementation order.

**QA record:** [Phase 5 status and QA](PHASE-5-PRESENTATION-QA.md).

---

# Completed roadmap

## Phase 1 — Professional editorial copy and site-wide tone

**Complete (2026-10-31).** Public-facing interface copy was reviewed and refined across the Home, Library, About, shared layouts, and supporting pages. Generic sentimental/promotional wording was replaced with concise, informative editorial copy. Story narration, dialogue, chapter titles, and creative author notes were left untouched. The owner confirmed desktop and mobile presentation.

## Phase 2 — Reader personalization

**Complete.** The reader supports Ocean, Midnight, and Pearl palettes; custom accents; story-font, line-spacing, and reading-width controls; persistent preferences; and reset behaviour. Existing theme, text-size, language, and reading-position settings remain separate. The owner confirmed mobile controls, touch/keyboard operation, palettes, and reduced-motion behaviour.

## Phase 3 — Library evolution

**Implementation and owner-reported browser QA complete.** The Library supports canonical series/volume search, genre, status, and available-edition filters; series-specific CSS artwork; volume selection; and keyboard/touch-accessible dialogs. Recently Updated sorting is wired to optional `content_updated` metadata but remains disabled until trustworthy content-update dates exist.

## Phase 4 — Reading statistics

**Complete.** The reader records qualified active reading time, completed chapters and volumes, local activity history, and non-competitive milestones. Statistics use a separate versioned local record and a dedicated clear action. Fast-scroll prevention, completion qualification, migration, and clearing were confirmed by the owner.

## Phase 5 — Story presentation groundwork

**Implementation groundwork complete; remaining deliverables are in FINAL WORK.** The shared reader and Library support series descriptions, volume synopses, optional localized author notes, canonical volume-cover integration, and optional illustrations. Accurate descriptions and synopses are populated for all 10 series and 17 canonical volumes. The remaining cover-art creation, cover standards/asset population, and final presentation QA are listed above.

## Phase 6 — Tidewritten identity

**Complete.** The About page consolidates the project overview, creator information, reading guide, editorial principles, and credits. Legacy routes redirect to About; the custom 404, navigation/footer, document titles, and design-system documentation are in place. The owner confirmed the relevant pages, redirects, navigation, themes, and responsive layouts.

---

# Earlier completed maintenance

The following work predates the six-phase roadmap and is retained here as a concise completion record:

- **Story structure:** Audited all 51 published story editions for paragraph and HTML structure; repaired missing paragraph markup, an unclosed epilogue paragraph, and missing Council Vol.2 translation scene separators while preserving story wording.
- **Translations:** Restored original chapter/section titles, completed Council Vol.1–3 Hinglish and Banglish work, audited Before the Feelings Fade Vol.2, corrected identified mixed-script fragments, and preserved continuation links and original chapter naming.
- **Source/translation audit:** Compared all 17 English volumes with their 34 translations for mappings, headings, IDs, scene breaks, dialogue/paragraph structure, and end matter. No duplicate IDs or missing chapter-heading sequences were found in that audit.
- **Reader and navigation:** Implemented the shared reader, in-place translation switching, per-volume language preferences, progress/save-restore controls, themes, text sizing, resume widget, and volume navigation. The owner reported the end-to-end reader and translation checks passed.
- **Filename standardization:** Standardized all 17 English and 34 translated filenames while preserving story content, front matter, and canonical routes.
- **Repository cleanup:** Audited active references and build/deployment implications, archived verified obsolete files under `bin/` during the explicitly requested cleanup, retained uncertain or still-required files, and preserved both homepage sources.
- **Project governance:** Established and maintained the project notes, roadmap, design-system documentation, and focused QA/audit reports.

---

## QA and reference reports

- [Phase 5 Story Presentation Specification](Phase-5-Story-Presentation-Spec.md) — cover system, optional metadata, localization, illustrations, accessibility, and implementation sequence.
- [Phase 5 status and QA](PHASE-5-PRESENTATION-QA.md) — implementation status and outstanding verification.
- [Phases 2, 3, 4, and 6 QA](PHASES-2-3-4-6-QA.md) — source findings, workflow evidence, and owner-reported browser QA.
- [Priority 5 Reader QA](PRIORITY-5-READER-QA.md) — reader source inventory and owner-reported live checks.
- [Before the Feelings Fade Vol.2 translation audit](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md) — detailed source/translation comparison.
- Earlier implementation details remain available in the repository's Git history and merged pull requests.

## Definition of done

- Preserve story prose, chapter titles, IDs, canonical routes, and translation behaviour.
- Keep missing optional assets graceful; do not make cover art mandatory for a page to render.
- Check image dimensions, file optimization, meaningful alt text, responsive rendering, and accessible presentation.
- Verify affected routes, Library grouping, translation switching, keyboard/touch operation, themes, and desktop/mobile layouts.
- Inspect the relevant GitHub Pages workflow and report its actual result.
- Record rendered-browser QA separately from source inspection and automated build verification.
- Do not mark any task complete until its implementation and required verification have actually happened.

For project rules and implementation conventions, see [Notes.md](Notes.md).
