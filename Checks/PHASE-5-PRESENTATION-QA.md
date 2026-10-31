# Phase 5 — Story Presentation Status & QA

_Last updated: 2026-10-31_

## Current status

Phase 5 is **partially implemented, not complete**. The shared reader and Library presentation architecture are merged, and story-grounded presentation metadata is populated for the complete canonical catalogue. Canonical cover artwork has not yet been added. Optional illustrations remain optional and no illustration assets are currently published. Final build and rendered-browser QA are outstanding.

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
- `library.html` remains series-based. It uses the first available canonical volume cover for the series card and carries each volume's cover and synopsis into the volume chooser.
- Cover presentation uses a 2:3 aspect ratio and semantic HTML for title text. The existing CSS-built series art remains the fallback.
- Feature implementation is recorded in merged PRs #50, #51, and #52.

## Metadata changes in this branch

- Adds the remaining eight series descriptions and 12 volume synopses.
- Updates `Checks/TODO.md` to distinguish merged implementation from outstanding asset and QA work.
- Story bodies after YAML front matter were compared against `main` for all 12 story files changed by this branch; all were byte-for-byte unchanged.
- The previously merged Meet Again Trilogy metadata (PR #54) and Before the Feelings Fade metadata (PR #55) are retained.

## Asset inventory

- `assets/images/covers/` does not currently exist on `main`.
- `assets/images/illustrations/` does not currently exist on `main`.
- No canonical cover or illustration assets are currently published.
- No `cover_image` references have been added. This avoids introducing broken image paths.
- Cover artwork is still required for the series cards and volume-specific presentation. The documented target remains portrait 2:3, 1200 × 1800 px, WebP, with an optimization goal near 300 KB where quality permits.
- Illustrations are optional and should only be added when they contribute meaningful story context.

## Verification performed

- Inspected the Phase 5 specification, current project notes, TODO, shared reader, and Library implementation.
- Enumerated all 17 canonical English story files and the corresponding 17 Hinglish and 17 Banglish translation files.
- Verified the new metadata front matter is validly delimited and includes the expected fields.
- Compared the story bodies of all 12 files changed in this branch against `main`; no story prose, chapter markup, links, or end matter changed.
- Confirmed series descriptions are placed only on the first volume of each multi-volume series.
- Reviewed source-level cover fallback, metadata fallback, illustration path validation, and supplementary-gallery behaviour.

## Outstanding before Phase 5 can be closed

1. Create and approve the canonical cover artwork, then publish optimized WebP files under `assets/images/covers/` and add accurate `cover_image` and `cover_alt` metadata. Multi-volume series need visually related but distinguishable volume designs.
2. Check all generated assets for dimensions, file size, readability at card size, correct paths, and useful alt text.
3. Run the Jekyll/GitHub Pages build and record the actual workflow/build result. The repository's `.github/workflows/` directory was not available through the repository contents endpoint during this audit, and a local clone/build could not be run because the execution environment could not resolve github.com.
4. Perform rendered-browser QA on desktop and mobile, light and dark themes, and keyboard/touch input. Verify Library grouping, volume chooser thumbnails, single-volume direct-open behaviour, canonical routes, translation switching, image fallback, and no layout shift.
5. Record browser QA separately from source inspection and build status. Do not mark Phase 5 complete until these checks pass.

## Explicit limitations

No rendered-browser session was available for this pass. No Jekyll build result is claimed. No cover or illustration image files were created or published in this branch.
