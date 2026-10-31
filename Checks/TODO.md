# Tidewritten — TODO

_Last reviewed: 2026-10-31_

This file is the current roadmap. The **History** section is a compact record of completed work; only the five tasks under **FINAL WORK** remain active. Detailed implementation rules and acceptance criteria are in [Notes.md](Notes.md) and the linked specifications.

## History — completed work

1. Established the Tidewritten cyan/aquatic visual identity and professional editorial tone.
2. Replaced generic promotional copy across the public-facing pages with concise, informative text.
3. Organized the Library around canonical series and volumes, not translations.
4. Implemented series search and genre, status, and available-edition filters.
5. Added accessible volume selection for multi-volume series and direct opening for single-volume series.
6. Built the shared light-novel reader with traditional long-form story presentation.
7. Implemented in-place English, Hinglish, and Banglish switching without changing canonical URLs.
8. Added independent per-volume language preferences and safe translation fallbacks.
9. Implemented reading progress, position saving/restoration, and resume support.
10. Added reader themes, text sizing, and persistent appearance customization.
11. Added reading statistics for active time, completed chapters/volumes, and local activity history.
12. Tightened chapter-completion rules to prevent fast scrolling from counting as reading.
13. Consolidated project overview, creator information, reading guide, editorial principles, and credits into About.
14. Added legacy About-page redirects, custom 404, navigation/footer refinements, and design-system documentation.
15. Audited all 51 published English and translated story pages for HTML/paragraph structure.
16. Completed and audited the published Hinglish and Banglish editions while preserving original chapter titles and story structure.
17. Standardized all 51 story filenames and preserved canonical routes and translation mappings.
18. Added optional series descriptions, volume synopses, localized author notes, cover integration, and illustration metadata support.
19. Audited repository references and archived verified obsolete files during the explicitly requested cleanup; retained uncertain/required files.
20. Established project notes, QA reports, and a maintained roadmap; owner-reported browser checks confirmed the completed phases.

---

# FINAL WORK

**Goal:** Finish Tidewritten's visual story presentation with approved, consistent cover artwork and verify the complete experience without disrupting existing stories, translations, or reader behaviour.

## 1. Create custom cover art for every series

Create a distinct visual identity for each of the 10 canonical series.

- Review each series' actual story content, setting, genre, tone, and established metadata before planning its artwork.
- Develop a recognizable visual concept for each series; avoid generic or interchangeable covers.
- Keep the series' volumes visually related through a shared palette, motif, or composition while allowing each volume to have its own scene or focal detail.
- Use owner-approved concepts and do not invent story events, characters, or settings that are not supported by the source.
- Keep important subjects within a central safe area so artwork remains legible when cropped into Library cards and smaller placements.
- Prefer artwork without baked-in title, volume number, or author lettering. Keep those elements as semantic HTML.
- Confirm the final series concepts and assets before treating this task as complete.

## 2. Create volume-specific cover designs where appropriate

Give each canonical volume its own release identity while retaining the visual language of its series.

- Review the actual contents and synopsis of each of the 17 canonical English volumes before deciding whether a distinct volume scene or motif is appropriate.
- Make volume differences meaningful: vary the scene, lighting, symbol, season, or focal subject only when supported by that volume.
- Ensure the volume remains recognizable as part of its series; do not make related volumes look like unrelated titles.
- Do not create separate cover records or Library entries for Hinglish and Banglish editions. All editions of a volume use the same canonical cover asset.
- Check that the cover does not reveal major plot twists or important surprises.
- Keep volume titles and numbering as real page text, not as the only information embedded in artwork.

## 3. Establish and apply consistent cover standards

Prepare all cover files and metadata for reliable display across the Library and reader.

- Use portrait 2:3 artwork with a source target of 1200 × 1800 px.
- Publish covers as WebP; aim for approximately 300 KB or less where quality permits, without damaging important detail or typography.
- Use stable lowercase kebab-case filenames: `{series-slug}-vol-{number}.webp`.
- Store canonical covers in `assets/images/covers/`; do not hotlink external artwork.
- Keep source/editable originals outside the public site unless publication is explicitly requested.
- Set accurate, concise `cover_alt` text for meaningful images; use empty alt text only for genuinely decorative artwork.
- Keep all artwork responsive, preserve intrinsic aspect ratio, reserve layout space, and avoid content shift.
- Use the existing CSS-built series artwork whenever cover metadata or an image file is missing; never show a broken-image icon or blank cover region.
- Ensure the Library remains series-based and uses the first available canonical volume cover for each series card.

## 4. Populate and optimize the approved cover assets

Create, review, and add the final artwork to the repository.

- Confirm the series and volume concepts against the source stories and the approved visual direction before producing final assets.
- Generate or create the approved artwork at the specified dimensions and export it as WebP.
- Inspect each exported image for correct series/volume identity, crop safety, visual quality, and unintended text or artifacts.
- Optimize file size without visibly degrading the artwork; record exceptions when a cover cannot reasonably meet the target.
- Add assets under `assets/images/covers/` using the canonical filenames and stable paths.
- Populate `cover_image` and edition-appropriate `cover_alt` metadata on the canonical volume pages and their translations, preserving the same cover path across editions.
- Check for missing files, duplicate filenames, invalid paths, inconsistent dimensions, and unreferenced assets.
- Keep optional artwork genuinely optional; do not make existing story pages dependent on every cover being present.

## 5. Verify the finished story presentation

Complete source, build, accessibility, and rendered-browser QA after the artwork and metadata are populated.

- Verify every series card and volume cover, including crop behaviour and missing-image fallbacks.
- Verify individual volume introductions, synopsis/description presentation, and optional author-note or illustration areas where populated.
- Confirm canonical `/book/...` routes, series grouping, single-volume direct opening, multi-volume chooser links, and previous/next volume navigation.
- Test English, Hinglish, and Banglish switching on volumes with available editions; confirm canonical URLs, reading position, and reader settings remain intact.
- Check desktop and mobile layouts, light and dark themes, keyboard navigation, touch targets, visible focus, alt text, and reduced-motion behaviour.
- Check image dimensions, file sizes, paths, metadata validity, and responsive image rendering.
- Run the relevant site build and inspect the GitHub Pages workflow result.
- Perform rendered-browser checks; record them separately from source inspection and automated build results.
- Do not mark this task complete until all five work areas are verified and unresolved issues are documented.

---

## Reference documents

- [Story Presentation Specification](Phase-5-Story-Presentation-Spec.md) — cover design, dimensions, paths, metadata, localization, illustrations, accessibility, and implementation sequence.
- [Phase 5 status and QA](PHASE-5-PRESENTATION-QA.md) — existing implementation status and outstanding verification.
- [Phases 2, 3, 4, and 6 QA](PHASES-2-3-4-6-QA.md) — source findings, workflow evidence, and owner-reported browser QA.
- [Priority 5 Reader QA](PRIORITY-5-READER-QA.md) — reader source inventory and owner-reported live checks.
- [Before the Feelings Fade Vol.2 translation audit](BEFORE-THE-FEELINGS-FADE-VOL2-TRANSLATION-AUDIT.md) — detailed source/translation comparison.

## Completion standard

Only mark a FINAL WORK task complete after its deliverables and relevant checks are finished. Preserve story prose, chapter titles, IDs, canonical routes, translation behaviour, and existing reader functionality. Missing optional assets must continue to fall back gracefully. Record browser QA separately from source inspection and automated build verification. See [Notes.md](Notes.md) for the full project rules.
