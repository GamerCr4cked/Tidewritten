# Tidewritten — TODO

_Last reviewed: 2026-11-01_

This is the current roadmap and concise completion record. Detailed rules and technical conventions live in [Notes.md](Notes.md). The root [Instructions.txt](../Instructions.txt) defines how project work must be handled.

## Current status

<badge>All current planned phases complete</badge>

The six established project phases have been implemented and the owner has reported the relevant live-site checks as passing. No currently confirmed blocker remains in the established roadmap. New work should be added here only when the owner requests or approves it.

## Completed project history

1. Established the Tidewritten cyan/aquatic visual identity and professional editorial tone.
2. Replaced generic promotional copy across public-facing pages with concise, informative text.
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
19. Audited repository references and archived verified obsolete files during the earlier explicitly requested cleanup; retained uncertain/required files.
20. Established project notes, QA records, and a maintained roadmap.
21. Completed Phase 5 story presentation: 17 canonical volume covers are present and assigned; shared reader/Library fallbacks and localized metadata are integrated.
22. Completed source/build and owner-reported presentation checks. The owner confirmed on 2026-11-01 that all 17 covers and the complete presentation work on the live site.

## Verification record

- **Catalogue:** 10 canonical series, 17 English volumes, 17 Hinglish editions, and 17 Banglish editions.
- **Cover assets:** 17 WebP covers under `assets/images/covers/`; each canonical English volume references its corresponding asset. The seven additional Vol.2/Vol.3 covers are also mapped to the corresponding translations with localized alt text.
- **Build/deployment:** GitHub Pages workflow [#495](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41292003337) completed successfully for commit `6a3b9185c5afa5ba9d3cb252fdf3b5046f5960a1`.
- **Browser QA:** owner-reported live checks passed; the owner confirmed all covers and the complete presentation work on 2026-11-01. Browser/device/viewport details were not recorded. This is not an independently performed browser session.
- **Outstanding known limitation:** Recently updated sorting remains disabled until reliable `content_updated` metadata is supplied. Optional illustration assets are not currently published.

## Roadmap maintenance

- Add a task only when a new requirement, defect, or owner-approved improvement is identified.
- Mark work complete only after its deliverables and relevant verification have happened.
- Keep detailed technical rules in Notes.md, not duplicated here.
- Preserve story prose, chapter titles, IDs, canonical routes, translation behaviour, and reader functionality during future maintenance.
