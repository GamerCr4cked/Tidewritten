# Tidewritten — Project Notes & Working Rules

_Last updated: 2026-11-01_

This is the reference for maintaining Tidewritten. A newer, explicit task-specific instruction from the site owner takes precedence for that task. The current action list lives in [TODO.md](TODO.md); detailed QA evidence belongs in the dedicated reports.

## 1. Project overview and source-of-truth paths

| Path | Purpose |
|---|---|
| stories/ | Canonical English story and volume pages |
| translation/hinglish/ | Hinglish editions |
| translation/banglish/ | Banglish editions |
| _layouts/default.html | Shared site shell and navigation |
| _layouts/light-novel.html | Shared light-novel reader |
| assets/ | Stylesheets, scripts, images, and other public assets |
| Checks/ | TODO, working notes, and audit reports |
| bin/ | Archive destination only under the explicit cleanup exception below |

The Library is series-based. It lists canonical English series/volume entries, not separate translation entries. Multi-volume series expose volume navigation; a single-volume story opens directly.

The shared reader is _layouts/light-novel.html. When a problem affects multiple story pages, inspect the shared layout and its assets before editing individual story files.

## 2. Protected folders and cleanup/archive policy

- During ordinary development, do not inspect, edit, rename, move, delete, or otherwise use anything under bin/.
- During an explicitly requested repository-cleanup task, bin/ may be used **only as an archive destination** for files verified to be obsolete or unused.
- Before archiving, inspect active references and relevant front matter, navigation, scripts, stylesheets, configuration, build rules, and deployment implications.
- Preserve the original relative path under bin/ where practical; for example, _layouts/legacy.html becomes bin/_layouts/legacy.html.
- Never permanently delete archived files unless the owner separately and explicitly requests permanent deletion.
- If a candidate's purpose or references are uncertain, leave it in place and document the uncertainty.
- Archived files are not a source of truth for active story prose, translation audits, or new website content.

## 3. Story content and HTML formatting

- Preserve story wording, punctuation, spelling, names, language, chapter titles, and authorial intent unless the owner explicitly requests a content edit or translation.
- A formatting-only task must not paraphrase, shorten, invent, or delete story prose.
- Use semantic HTML paragraphs (<p>...</p>) for prose. Plain newlines and blank lines in HTML do not reliably create visible paragraph spacing.
- Keep narrative paragraphs distinct. Dialogue should generally use one speaker's utterance per paragraph; attach action beats only where they belong together.
- Preserve intentional scene breaks, headings, subheadings, epigraphs, blockquotes, inline emphasis, links, anchors, and end matter.
- Do not create nested paragraphs or place block-level elements inside paragraphs.
- Avoid blind whole-file replacements. Inspect the structure and make small, reviewed changes.
- Do not force translated paragraph counts to match the English source mechanically. Compare scene sequence, dialogue turns, and meaning; language-specific paragraph grouping may be legitimate.
- After formatting changes, inspect both source markup and the rendered reader. Source inspection alone does not establish visual correctness.

## 4. Translation language, workflow, and naming

### Language and translation style

- Work only with translations that actually exist in the public translation folders; do not assume every volume has every language.
- Keep Banglish and Hinglish distinct. Do not convert one transliteration style into the other.
- Use natural, modern conversational Hinglish and Banglish rather than overly formal transliteration.
- Do not change story titles, character names, or original chapter/section titles when translating, unless explicitly requested.
- When translating substantial content, use the owner's requested **two-chapter-per-batch** workflow. After chapter batches, separately check any Prologue, Interlude, Epilogue, Afterword, or other additional sections.
- Compare against the matching English source. Check completeness, names/pronouns, dialogue turns, scene order, IDs, headings, and continuation links; do not rely on paragraph counts alone.

### Canonical filename pattern

Use a shared series-and-volume filename base across the three editions:

- English: Series-Vol.N-English.html
- Hinglish: Series-Vol.N-RomanizedHindi.html
- Banglish: Series-Vol.N-RomanizedBangla.html

Example:
- stories/Meet-Again-Trilogy-Vol.1-English.html
- translation/hinglish/Meet-Again-Trilogy-Vol.1-RomanizedHindi.html
- translation/banglish/Meet-Again-Trilogy-Vol.1-RomanizedBangla.html

The reader associates editions by the common filename base, with translation_of as a fallback. Preserve translation front matter and canonical mapping when renaming or editing files.

### Translation switching and canonical URLs

- The English story URL remains the canonical browser URL for every language view.
- Switching languages must replace reader content in place without navigation, reload, or address-bar changes.
- Translation page URLs are internal fetch sources, not destinations for the language-switch action.
- Remember language preference independently per story/volume using localStorage. Default to English when no preference exists or a saved language is unavailable.
- Keep desktop and mobile selected-language indicators synchronized.
- Preserve the current chapter and approximate scroll position, theme, text size, controls, and canonical URL when switching.
- Update language-specific metadata where available (such as tagline, genre/volume note, closing note, and document language) without changing story identity or Library grouping.
- If a translation fetch fails, keep the currently displayed content and restore the previous selected-language indicator and preference. Never leave a blank reader.
- Direct visits to translation pages should normalize to the canonical English story URL while retaining the selected language view, as implemented.
- Only expose language choices that actually exist for the current story/volume.

## 5. Reader experience and visual design

- Preserve Tidewritten's cyan/aquatic visual identity and established design language.
- Keep story text as the primary focus; do not introduce chat-bubble presentation or character-detail cards.
- Preserve the existing reader controls and their intended placement: desktop floating controls to the left, the theme toggle at the top-right, and responsive mobile controls.
- Keep the desktop floating panel compact (about three-quarters of its former size) without scaling down the controls inside it; keep inner controls centered.
- Preserve the Cinzel-based TIDEWRITTEN brand treatment and aqua gradient underline.
- Keep the shared site shell footer useful and concise; include links to the Library and the consolidated About page.
- Keep one consolidated About page at `/about/` for the project overview, creator/maintainer information, reading guide, editorial principles, and credits/acknowledgements. Do not split these topics into separate public pages.
- Preserve `/creator/`, `/reading-guide/`, and `/editorial/` as lightweight redirects to `/about/` so existing bookmarks and inbound links continue to work.
- The current shared site color tokens and typography inventory are recorded in Section 13 below. Update this section when lasting design-system decisions change.
- Maintain reading progress, save/restore, text-size controls, theme controls, edge fades, and previous/next volume navigation unless the owner requests a change.
- Check desktop and mobile layouts, both themes, and touch interaction when a change can affect presentation.
- Use meaningful heading order, accessible names, visible focus states, sufficient contrast, and reduced-motion support.
- Avoid decorative changes that make reading harder or obscure text.

- Reader personalization is implemented in the shared `_layouts/light-novel.html` reader. Its **Customize** dropdown is available in the desktop floating panel and mobile reader-controls menu, using the same trigger treatment and chevron interaction as Translate.
- Personalization options include the Ocean, Midnight, and Pearl reader palettes; a custom accent color; Literata, Georgia, or system-serif story typography; four line-spacing presets; and four reading-width presets.
- Store these settings together under the versioned `tidewritten-reader-preferences-v1` localStorage key. Keep the existing light/dark mode key (`theme`), text-size key (`tidewritten-reader-size`), language preference key, reading-progress record, and reading history separate.
- The Reset appearance action restores the reader-palette, accent, font, line-spacing, and width defaults. It does not clear reading progress, reading history, language preference, base light/dark mode, or the separate text-size setting.
- Keep text-size controls (A+, A−, and Reset) inside the Customize dropdown on both desktop and mobile. They remain a separate preference from Reset appearance, and their existing `tidewritten-reader-size` persistence key and behaviour must remain unchanged.
- Desktop and mobile Customize dropdowns close when a click occurs outside the open menu; Escape also closes the menu and returns focus to its trigger. Closing a menu does not change saved reader preferences.
- Interactive controls inside the Translate and Customize dropdowns provide visible hover feedback using the active reader accent, including language choices, appearance selectors, the accent-color control, and Reset appearance.
- Default accent colors are selected for contrast in each reader palette and light/dark mode. A user-selected custom accent persists when switching palette or mode.

## 6. Library discovery controls

- Use a controlled genre vocabulary across canonical English volumes and their translations: **Romance**, **Romantic Comedy**, **Drama**, **Mystery**, **Science Fiction**, **Slice of Life**, and **Coming-of-Age**.
- Genre metadata must contain only established genre/subgenre classifications from that vocabulary. Treat settings (for example, school, college, workplace, or online), character dynamics (roommates), plot devices (second chances), and mood descriptors (bittersweet, healing, heartbreak) as descriptive metadata, not separate genres.
- Use the same genre labels and capitalization everywhere; separate multiple genres with the middle dot (·). Keep each volume's classifications specific to its actual story.
- Translation editions must mirror the matching English volume's genre metadata exactly; translations do not define separate Library genres.
- The Library genre filter must compare complete normalized genre labels, not substring matches, so one genre cannot accidentally match part of another.
- Use one CSS-built cover artwork per canonical series card; do not create cover entries for translation editions. Each series should have a distinct visual treatment, while the series title remains available as normal text outside the decorative artwork.
- `content_updated` is optional canonical-volume front matter in ISO `YYYY-MM-DD` format. Set it only when the story content itself is meaningfully updated. Do not infer it from filename changes, bulk commits, translation metadata, genre edits, formatting-only maintenance, or build/deployment dates. The Library's Recently updated sort must remain disabled until at least one trustworthy date exists; for a series, use the newest dated volume. Never fabricate update dates.
- Library multi-volume cards must remain keyboard-operable as buttons (Enter/Space), announce their dialog relationship and expanded state, move focus into the volume chooser, and return focus to the invoking card when the chooser closes. Keep tap targets at least 44px where practical and preserve responsive single-column layouts on narrow screens.

- Keep the catalogue series-based; translations must not become independent Library cards or volumes.
- Build the Library search and filters from canonical English series/volume metadata.
- Derive available edition filters from translation pages mapped through `translation_of`; do not assume an edition exists.
- Show a completed status only when the source metadata identifies a final volume or the series identity explicitly defines its complete volume count. Use “Status not set” when publication status is unknown; do not label unknown series as ongoing.
- Do not expose “recently updated” sorting based on the bulk filename-standardization commit timestamp. Add explicit, maintained content-update metadata before presenting update recency to readers.

## 7. Page titles, navigation, chapter titles, and links

- Browser document titles use the format `Page Name | Tidewritten` across standard pages and story-reader pages.
- Keep page front-matter titles as the page name only; the shared layout appends the site name exactly once.
- The homepage document title is `Home | Tidewritten`. Do not use `Tidewritten | Tidewritten` or include the site name in a page's own title.
- When changing the story-reader title suffix, update reading-history title cleanup so saved titles do not retain the site suffix.

- Keep chapter headings, IDs, anchors, table-of-contents entries, and navigation links synchronized when a heading changes.
- Do not alter titles or chapter names merely to make naming uniform.
- For the Meet Again Trilogy, the final chapter title in each of the three English volumes and their translations is **Meet Again**, not a Phir Milenge... variant.
- Preserve canonical /book/... story routes and verify internal links affected by a change.
- The root redirect and generated homepage are separate responsibilities: index.html redirects / to /home/, while index.md generates /home/. Do not remove either without proving its role is replaced.

## 8. GitHub and implementation workflow

1. Fetch the latest target-branch version of every file before editing; do not rely on stale copies.
2. Make the smallest coherent change and leave unrelated user work untouched.
3. Use a dedicated branch and a clear commit message. Open a pull request for review rather than assuming a push is a merge.
4. When editing a file more than once, fetch its latest content and SHA before the next write.
5. Preserve story/translation content and canonical URLs during file moves unless a migration is explicitly requested.
6. Inspect the relevant GitHub Actions workflow and report its actual conclusion.
7. A commit, open PR, merged PR, successful build, and deployed website are different states. Never describe one as another.
8. A successful build does not prove visual correctness. Distinguish source-level inspection, automated build, owner-reported browser QA, and independently performed browser QA.
9. Do not invent commit hashes, PR status, workflow results, or test outcomes.

## 9. QA acceptance criteria

### Story and translation changes

- Paragraph tags are balanced and not nested.
- No block-level elements are placed inside paragraphs.
- No duplicate IDs are introduced; chapter IDs and anchors remain valid.
- Chapter/section order, headings, scene breaks, dialogue turns, and end matter remain intact.
- Story wording is unchanged unless content editing was requested.
- Matching translation mappings and continuation links are checked where applicable.

### Reader and site changes

- Navigation, Library grouping, volume links, and canonical URLs remain correct.
- Available language choices match the editions that exist for that volume.
- Language switching preserves reading position and reader settings and fails safely.
- Controls work with keyboard and touch; reduced-motion behaviour remains respected.
- Responsive layout and light/dark themes are checked where affected.
- Relevant Jekyll/GitHub Pages workflow is successful and its result is recorded.
- Rendered-browser QA is recorded separately from source inspection and build status.

## 10. TODO maintenance and reporting

- Checks/TODO.md is the current action list, not a chronological transcript of every task.
- Keep completed work in a concise completion summary or a dedicated audit report; remove stale unchecked items when a later verified completion supersedes them.
- Mark an item complete only after the change and its required verification have happened.
- Keep detailed inventories and evidence in dedicated reports rather than duplicating them in the TODO.
- Every task report should identify files inspected/changed, what was archived or retained if cleanup was requested, verification performed, unresolved checks, and relevant PR/workflow links.
- State explicitly when browser testing was owner-reported or unavailable.

## 11. Reading statistics (Phase 4)

- Store statistics separately under `tidewritten-reading-stats-v1`; do not mix them with reader appearance, theme, language, reading-position, or recent-history keys.
- Statistics record version 2 contains aggregate active reading milliseconds, local-calendar-day activity totals, completed chapter records grouped by canonical volume path, completed-volume records, and per-chapter active reading milliseconds.
- Translation editions share the English canonical volume path, so switching editions does not create duplicate volume statistics.
- Only headings with IDs beginning `chapter-` are treated as chapters. Reaching a chapter boundary is necessary but not sufficient for completion: the reader must also accumulate a minimum amount of active time while positioned in that chapter. The threshold is estimated as 25% of a 220-words-per-minute reading estimate, with a 15-second minimum and a 90-second cap. The final chapter uses the same qualification and must also reach the story end.
- Active reading time is checkpointed every 15 seconds and is counted only while the document is visible, focused, and the reader has interacted within the previous 60 seconds. Each checkpoint is capped at 15 seconds to avoid adding large idle gaps. Chapter dwell time is attributed to the chapter at the reader's current position.
- A volume is recorded only after every detected chapter has passed both the end-position and active-time checks.
- Version 1 completion records are discarded during migration because the previous end-position-only rule could count fast-scrolling as reading. Aggregate reading time and daily activity are preserved. Version 2 completion records are then accumulated under the stricter rule.
- Statistics remain in browser localStorage. Clearing statistics must not clear the separate reading position, recent history, language choice, theme, text size, or appearance preferences.
- The statistics dashboard explains these rules and provides a dedicated clear action. Do not present this as cross-device or account-synced data.


## 12. Story presentation (Phase 5)

- Follow the consolidated cover and illustration standards in Section 14 below for dimensions, asset paths, front matter, localization, accessibility, and verification.
- Extend the existing CSS-built Library series art as a graceful fallback; do not create a second Library or separate translation cards.
- Canonical covers use portrait 2:3 artwork, target 1200 × 1800 px, WebP, and an optimization goal near 300 KB where quality permits. Use semantic HTML for title and volume lettering.
- Store covers in `assets/images/covers/` and optional illustrations in `assets/images/illustrations/`; use stable lowercase kebab-case series/volume filenames.
- Optional front matter: `cover_image`, `cover_alt`, `series_description`, `synopsis`, `author_note`, and `illustrations`. All fields remain optional; pages without them must render exactly as a valid existing page.
- Put the canonical series description on the first canonical volume (normally Volume 1); localized translations may supply translated copy but must not create new Library entries.
- Keep volume synopsis separate from the existing tagline. Localize synopsis, series description, author note, alt text, and captions when a translation provides them; fall back to English metadata when it does not.
- Author notes are optional, authored content and must be escaped as plain text. Do not invent author notes or rewrite existing story content.
- Illustration records must include image and alt text; support captions and validated placement. If chapter-relative placement cannot be validated against real chapter IDs, use a separate supplementary gallery instead of guessing.
- Do not mark any Phase 5 feature complete until the shared rendering, fallback behaviour, asset checks, canonical navigation, language switching, accessibility, responsive layout, and required browser QA are verified.


## 13. Current design-system reference

The shared site stylesheet is `assets/css/style.css`. Use existing CSS custom properties rather than introducing competing palettes.

| Token | Dark theme | Light theme |
|---|---|---|
| `--bg-primary` | `#07131d` | `#f2fbfc` |
| `--bg-secondary` | `#0a1a25` | `#e5f4f6` |
| `--bg-card` | `#0c202b` | `#ffffff` |
| `--bg-card-hover` | `#102b38` | `#f6feff` |
| `--border` | `#173342` | `#d0e5e9` |
| `--border-light` | `#244958` | `#c2dce1` |
| `--text-primary` | `#e5f7fb` | `#102630` |
| `--text-secondary` | `#9ab7c4` | `#496672` |
| `--text-muted` | `#668493` | `#708b95` |
| `--accent` | `#36e4e8` | `#087f91` |

The site shell uses DM Sans, Manrope, Inter, Playfair Display, and JetBrains Mono. The reader uses Cinzel for the Tidewritten wordmark, DM Sans for controls, and Literata for story text, with Georgia/system-serif alternatives. Use sans-serif for interface elements and the selected serif for long-form prose. Keep display typography restrained.

Use centered content columns, responsive side padding, consistent spacing, restrained radii/borders, clear keyboard focus, semantic landmarks, accessible names, sufficient contrast, and reduced-motion support. Practical minimum touch-target size is 44px where possible. Verify desktop, tablet, narrow mobile, and both themes when affected. Keep story text unobstructed.

## 14. Story presentation and artwork standards

- The Library remains one card per canonical series. Its card uses the first available canonical volume cover; translations never become separate cards or volumes.
- Multi-volume series retain the volume chooser with per-volume thumbnails; single-volume series open directly.
- The reader may show the current volume's cover and synopsis above chapter content without displacing the series/volume/book-title hierarchy. Story text remains primary.
- Canonical cover art uses portrait 2:3 WebP. Source target: 1200 × 1800 px; current supplied covers may be 1024 × 1536 px where already approved. Aim for approximately 300 KB or less where quality permits; do not damage important detail to meet a byte target.
- Store canonical covers in `assets/images/covers/` and optional illustrations in `assets/images/illustrations/`. Use lowercase kebab-case names such as `{series-slug}-vol-{number}.webp`. Use root-relative paths. Do not hotlink covers.
- Keep title, volume number, and author lettering as semantic HTML rather than relying on text baked into artwork. Keep important subjects within a central crop-safe area.
- Volumes in one series should share a recognizable visual language while remaining distinguishable. Do not invent scenes, characters, settings, or plot events; avoid revealing major twists.
- Optional front matter: `cover_image`, `cover_alt`, `series_description`, `synopsis`, `author_note`, and `illustrations`. All remain optional and existing pages must continue to render when absent.
- Put the canonical series description on the first canonical volume (normally Vol.1). Localized translations may provide localized descriptions; they do not create new Library entries.
- Keep each volume synopsis separate from the existing tagline. Localize synopsis, series description, author note, cover alt text, and captions when supplied; otherwise use English metadata fallback.
- Author notes must be owner/author-supplied, escaped as plain text, and never invented.
- Illustration records require a root-relative image path and alt text; captions are optional. Initial placement may be `before-story`. Chapter-relative placement must match a real chapter ID exactly (for example `after-chapter:chapter-id`). If placement cannot be validated, use a separate supplementary gallery. Illustrations are optional and must not be added merely to fill space.
- Missing metadata or failed images must fall back to the existing CSS-built series artwork/text-only introduction. Never show a broken-image icon or blank cover region. Reserve image layout space and preserve intrinsic ratio.
- Meaningful images need accurate localized alt text; decorative images use empty alt text. Essential text must not exist only inside an image. Use semantic figure/figcaption where appropriate and lazy-load below-the-fold illustrations.
- Do not change canonical routes, chapter IDs, translation mappings, reading position, or reader preference keys when changing presentation.

## 15. Current repository and verified project status

- Canonical English catalogue: 17 volumes across 10 series.
- Published editions: 17 English, 17 Hinglish, and 17 Banglish story files (51 story/edition pages total).
- Canonical cover assets: 17 WebP files in `assets/images/covers/`; all 17 canonical English volumes reference their matching cover. Seven additional Vol.2/Vol.3 covers also have matching paths and localized alt metadata in their Hinglish and Banglish editions.
- The seven supplied additional covers were 1024 × 1536 px and approximately 181–285 KB at initial inspection. The owner subsequently confirmed that all 17 covers and the complete presentation were checked on the live site and working (owner-reported browser QA, 2026-11-01). Specific browser/device/viewport details were not recorded.
- Phase 5 deployment evidence: GitHub Pages workflow run [#495](https://github.com/GamerCr4cked/Tidewritten/actions/runs/41292003337) completed successfully for commit `6a3b9185c5afa5ba9d3cb252fdf3b5046f5960a1`. The tree is identical to the merged cover-metadata PR #66 tree. A successful workflow is build/deployment evidence, not independent browser QA.
- Owner-reported browser QA for Phases 2, 3, 4, 5, and 6 is recorded as passing in the project history. Do not describe owner-reported checks as independently performed tests.
- Phase 3 Recently updated sorting remains intentionally unavailable until trustworthy `content_updated` metadata exists.
- Reading statistics are browser-local and are not account-synced or cross-device.
- Optional illustration assets are not currently published; illustration support remains optional.
- Detailed historical audit records are retained under `bin/Checks/` after the documentation consolidation. The only active Markdown files in `Checks/` are `TODO.md` and `Notes.md`.

## 16. Documentation and cleanup policy

- `Checks/Notes.md` is the authoritative current rules and technical reference. `Checks/TODO.md` is the concise active roadmap and completion summary.
- Keep only `Checks/TODO.md` and `Checks/Notes.md` as active Markdown documents directly inside `Checks/`. During an explicitly requested cleanup, archive other obsolete/superseded `.md` documents under `bin/Checks/`, preserving their relative paths.
- Do not archive a document until its durable rules, current status, and useful findings have been consolidated into Notes/TODO and its references have been checked. Preserve archived records; never permanently delete them.
- During normal development, do not inspect or use `bin/`. During an explicit cleanup only, it may be used as an archive destination. Never use it as a temporary workspace or source of truth.
- Keep `Instructions.txt` at repository root as the assistant's project entry instructions. It points back to Notes/TODO for current project truth; it must not become a competing technical specification.
- The repository is authoritative over conversation memory. Fetch latest files and branch state before editing; preserve owner changes; use a focused branch and PR.
- **Default PR policy:** create a PR for substantial changes, review the complete diff, run the relevant checks/build/workflow, and merge it once those checks pass. The owner has explicitly delegated routine PR merging; do not wait for a separate approval or ask whether to merge.
- Pause instead of merging only when the change is destructive/irreversible, materially ambiguous, has failing or unavailable required checks that cannot be responsibly assessed, or presents a security, privacy, or legal risk requiring owner direction.
## 17. Personal Reading Experience (Phase 7)

Phase 7 groups three owner-approved workstreams: Personal Bookshelf, Library improvements, and story presentation improvements.

### Personal Bookshelf

- Keep the first implementation account-free and browser-local. Do not add authentication, a server database, cloud sync, comments, social features, or external tracking as part of this phase.
- Provide per-volume reading statuses: **Want to Read**, **Currently Reading**, and **Completed**. Keep **Favorite** as an independent toggle so favoriting does not replace a reading status.
- Make saved status and favorites available from the Library and relevant volume/reader views where practical. The Library remains one card per canonical series; never create extra cards for status or language editions.
- Store bookshelf data under a dedicated, versioned localStorage key. Do not mix it with reading statistics, reading position, recent history, language, theme, text size, or appearance preferences.
- English, Hinglish, and Banglish views of the same volume must resolve to the same canonical English volume identity and share one bookshelf record.
- Handle unavailable or malformed local data safely. Provide clear empty states and accessible controls. Explain that records are local to the current browser/profile and are not synced across devices.
- Do not silently erase existing bookshelf records during migrations or reset unrelated reader data.

### Library improvements

- Improve discovery without changing the canonical series-based catalogue or creating duplicate cards for volumes/translations.
- Review the existing search, genre, publication-status, and available-edition filters before changing them; preserve their current semantics and accessibility.
- Add useful, deterministic sort options such as series title A–Z/Z–A. Only add recency or popularity sorting when reliable, explicitly maintained source metadata exists; never infer popularity or fabricate dates.
- Integrate bookshelf status/favorite controls and filters without making the Library crowded. A series card should summarize its volumes' reading state without misrepresenting a mixed-status series.
- Keep multi-volume selection, keyboard operation, focus management, responsive layouts, and existing canonical navigation intact.

### Story presentation improvements

- Refine the existing shared light-novel reader and current cover/synopsis/metadata support; do not build a parallel reader or duplicate presentation system.
- Improve volume introductions and metadata hierarchy where useful, keeping series, volume, book title, synopsis, and chapter content distinct. Story text remains the primary focus.
- Add optional chapter illustrations or supplementary galleries only when approved assets and accurate alt text/captions are supplied. Never invent illustrations, author notes, scenes, characters, or plot details.
- Validate illustration paths and chapter-relative placement against actual chapter IDs. Use the supplementary-gallery fallback when placement cannot be verified.
- Keep all optional presentation fields graceful: missing metadata or failed images must fall back to the existing CSS artwork/text-only presentation without broken-image icons, blank gaps, or layout shifts.
- Localize reader-facing metadata when matching translated copy exists; otherwise use the established English fallback. Do not alter story prose, chapter titles, IDs, translation mappings, canonical URLs, or reader preference keys as incidental presentation work.
- Preserve reading position, theme, language, text size, appearance preferences, progress, statistics, and previous/next navigation.

### Phase 7 completion gate

Do not mark Phase 7 complete until all three workstreams are implemented and reviewed. Verify local persistence and migration/failure behaviour, canonical volume identity across all editions, Library search/filter/sort and card grouping, optional-asset fallbacks, keyboard/touch accessibility, reduced motion, responsive layouts, both themes, canonical navigation, and the relevant GitHub Pages workflow. Record rendered-browser QA separately from source inspection and build results.
