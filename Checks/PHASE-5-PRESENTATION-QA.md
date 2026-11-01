# Phase 5 — Story Presentation Status & QA

_Last updated: 2026-11-01_

## Current status

Phase 5 is **partially implemented, not complete**. The shared reader and Library presentation architecture are merged, story-grounded presentation metadata is populated for the complete canonical catalogue, and all 17 approved WebP volume covers are present on `main`. The seven additional volume covers are now connected to their English, Hinglish, and Banglish editions on the `feature/volume-specific-cover-metadata` branch. Optional illustrations remain optional and no illustration assets are currently published. Final build and rendered-browser QA are outstanding.

## Canonical catalogue metadata

Series descriptions are stored on each series' first canonical English volume. A volume synopsis is present on every canonical English volume. Translation pages use the shared reader's English fallback when they do not supply localized presentation metadata.

| Canonical series | Volumes | Metadata status |
|---|---:|---|
| Before the Feelings Fade | 2 | Description + 2 synopses |
| Meet Again Trilogy | 3 | Description + 3 synopses |
| Prismat | 1 | Description + synopsis |
| Teaching Me How to Live | 1 | Description + synopsis |
| The Account That Never Came Back | 1 | Description + synopsis |
| The Little Bird Chronicles | 3 | Description + 3 synopses |
| The Other Side of Us | 1 | Description + synopsis |
| The Student Council President Hates Everyone—Except, Apparently, Me | 3 | Description + 3 synopses |
| The Words We Never Sent | 1 | Description + synopsis |
| When Everyone Went Offline | 1 | Description + synopsis |
| **Total** | **17** | **10 descriptions + 17 synopses** |

The 17 canonical volumes have matching Hinglish and Banglish editions in the repository. Presentation metadata is optional and falls back to the canonical English values when a translation does not provide localized copy.

## Implementation reviewed

- `_layouts/light-novel.html` renders optional cover art, series description, volume synopsis, author note, and illustrations.
- Reader metadata is escaped before display. Missing cover images are hidden and the introduction layout falls back to its text-only form.
- Translation switching updates localized presentation fields when supplied and otherwise retains the English fallback.
- Illustration paths are restricted to `/assets/images/illustrations/`, traversal and external paths are rejected, and each record requires an alt-text string. Exact chapter-ID placement is validated; unsupported placement is routed to the supplementary gallery.
- `library.html` remains series-based. It uses the first available canonical volume cover for the series card and carries each volume's cover and synopsis into the volume chooser. A failed series-card image reveals the existing CSS-built series artwork; volume chooser thumbnails now use a CSS-built fallback when an image is missing or fails.
- Cover presentation uses a 2:3 aspect ratio and semantic HTML for title text. The existing CSS-built series art remains the fallback.
- Feature implementation is recorded in merged PRs #50, #51, and #52.

## Metadata changes in this branch

- Adds `cover_image` and localized `cover_alt` to the seven additional canonical English volume pages and their 14 matching translations (21 edition files total).
- Every edition of a volume points to the same root-relative canonical cover path; alt text is edition-specific.
- Story bodies after YAML front matter are retained byte-for-byte by front-matter-only edits.
- Existing synopsis, genre, translation mapping, route, and navigation metadata are retained.

## Asset inventory

- `assets/images/covers/` contains all 17 approved WebP covers: 10 initial Volume 1 covers and seven volume-specific Vol.2/Vol.3 covers. The seven new paths are `before-the-feelings-fade-vol-2.webp`, `meet-again-trilogy-vol-2.webp`, `meet-again-trilogy-vol-3.webp`, `the-little-bird-chronicles-vol-2.webp`, `the-little-bird-chronicles-vol-3.webp`, `the-student-council-president-hates-everyone-except-apparently-me-vol-2.webp`, and `the-student-council-president-hates-everyone-except-apparently-me-vol-3.webp`.
- The 10 canonical English Volume 1 pages now reference their matching cover asset through `cover_image`; localized `cover_alt` text is supplied. In-place language switching retains the canonical cover and uses the English alt text when a translation does not provide its own localized cover metadata.
- All 17 canonical volumes now have a matching cover path in English metadata. The seven new covers are also assigned in the corresponding Hinglish and Banglish pages with localized alternative text.
- `assets/images/illustrations/` remains optional and no illustration assets are currently published.
- The documented target remains portrait 2:3, 1200 × 1800 px, WebP, with an optimization goal near 300 KB where quality permits.
- Illustrations are optional and should only be added when they contribute meaningful story context.

## Verification performed

- Inspected the Phase 5 specification, current project notes, TODO, shared reader, and Library implementation.
- Confirmed all 17 expected WebP filenames exist in `assets/images/covers/` on `main`.
- Confirmed the seven added covers have 2:3 filenames and are below approximately 300 KB based on Git tree byte sizes; pixel dimensions and visual crop quality still require image-level QA.
- Added the seven volume-specific cover paths and localized alt text to 21 edition pages (7 English, 7 Hinglish, 7 Banglish) on the feature branch.
- Shared reader and Library already consume `cover_image`, `cover_alt`, and synopsis metadata; no duplicate cover-rendering implementation was added.
- Added `cover_image` and `cover_alt` to the 10 canonical English Volume 1 pages; confirmed all paths match the published asset filenames.
- Added reader, Library volume-chooser, and existing series-card image-error fallbacks so missing assets do not leave broken-image icons or blank cover areas.
- Enumerated all 17 canonical English story files and the corresponding 17 Hinglish and 17 Banglish translation files.
- Verified the new metadata front matter is validly delimited and includes the expected fields.
- Compared the story bodies of all 12 files changed in this branch against `main`; no story prose, chapter markup, links, or end matter changed.
- Confirmed series descriptions are placed only on the first volume of each multi-volume series.
- Reviewed source-level cover fallback, metadata fallback, illustration path validation, and supplementary-gallery behaviour.

## Outstanding before Phase 5 can be closed

1. Independently inspect all 17 cover images for pixel dimensions, crop safety, readability at Library-card size, title accuracy, and visual artifacts; confirm localized alt text describes the actual artwork.
2. Run the Jekyll/GitHub Pages build and record the actual workflow/build result.
3. Perform rendered-browser QA on desktop and mobile, light and dark themes, and keyboard/touch input. Verify Library grouping, volume chooser thumbnails, single-volume direct-open behaviour, canonical routes, translation switching, image fallback, and no layout shift.
4. Record browser QA separately from source inspection and build status. Do not mark Phase 5 complete until these checks pass.

## Explicit limitations

No rendered-browser session or Jekyll build result is claimed for this pass. The 17 cover image files were already present on `main`; this branch changes only front matter and project QA documentation, not image binaries.
