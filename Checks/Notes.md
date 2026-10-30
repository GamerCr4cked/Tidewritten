# Tidewritten — Project Notes

_Last updated: 2026-10-30_

This document is the working reference for maintaining the Tidewritten website. Task-specific instructions from the owner take precedence over general guidance here.

## 1. Project structure

| Path | Purpose |
|---|---|
| `stories/` | Canonical English story and volume pages |
| `translation/hinglish/` | Hinglish editions |
| `translation/banglish/` | Banglish editions |
| `_layouts/default.html` | Shared site shell, navigation, global assets |
| `_layouts/light-novel.html` | Shared light-novel reader |
| `assets/` | Stylesheets, scripts, images, and other public assets |
| `Checks/` | Current TODO, audit reports, and project notes |
| `bin/` | Cleanup archive destination; not a source for active story/site work |

The Library is series-based: it lists canonical English story/volume entries, not separate language editions. Multi-volume series use volume navigation; single-volume stories open directly.

## 2. Folder and archive policy

- During ordinary development, do not inspect, edit, rename, move, delete, or otherwise use anything under `bin/`.
- During an explicitly requested repository-cleanup task, `bin/` may be used as an **archive destination** for files proven obsolete or unused.
- Before archiving a file, inspect active references, front matter, navigation, scripts, stylesheets, configuration, build rules, and deployment implications as relevant.
- Preserve the original relative path under `bin/` where practical (for example, `_layouts/legacy.html` becomes `bin/_layouts/legacy.html`).
- Never permanently delete archived files unless the owner separately and explicitly requests permanent deletion.
- Do not archive uncertain files. Keep them in place and explain what remains unknown.
- Never use archived files as the source of truth for active story prose, translations, or new website content.

## 3. Story and translation content

- Preserve story wording, punctuation, names, language, chapter titles, and authorial intent unless the owner explicitly requests a content or translation change.
- Do not paraphrase, shorten, invent, or delete story prose during formatting or technical cleanup.
- Use semantic HTML paragraphs (`<p>...</p>`) for prose. Plain newlines in HTML do not reliably create visible paragraph spacing.
- Keep dialogue readable, generally one speaker's utterance per paragraph. Preserve intentional scene breaks, headings, epigraphs, blockquotes, inline emphasis, links, and end matter.
- Do not create nested paragraphs or place block-level elements inside paragraphs. Avoid blind whole-file replacements; make small, reviewed changes.
- For translation work, use the matching English source as reference. Do not assume every story has every language.
- Keep Banglish and Hinglish distinct and natural; do not convert one transliteration style into the other.
- When checking completeness, compare chapter/section order, scenes, dialogue turns, and meaning—not paragraph counts alone. Different languages may legitimately segment paragraphs differently.
- Use the requested two-chapter-per-batch workflow for substantial translation rewrites, then separately check prologue/interlude/epilogue/afterword where present.

## 4. Filename and translation architecture

Use one shared series-and-volume filename base across editions:

- English: `Series-Vol.N-English.html`
- Hinglish: `Series-Vol.N-RomanizedHindi.html`
- Banglish: `Series-Vol.N-RomanizedBangla.html`

Example:
- `stories/Meet-Again-Trilogy-Vol.1-English.html`
- `translation/hinglish/Meet-Again-Trilogy-Vol.1-RomanizedHindi.html`
- `translation/banglish/Meet-Again-Trilogy-Vol.1-RomanizedBangla.html`

The shared reader groups editions by their common filename base, with `translation_of` as a fallback association. Preserve each translation's front matter and canonical mapping.

## 5. Reader and language-switching behaviour

- Keep the English story URL as the canonical browser URL for all language views.
- Language switching should fetch and replace reader content in place, without navigation, reload, or address-bar changes.
- Store language preference independently per story/volume. Default to English when no preference exists or a saved language is unavailable.
- Keep desktop and mobile selected-language indicators synchronized.
- Preserve chapter, approximate scroll position, theme, text size, and reader controls when switching languages.
- Update language-specific metadata where available without changing story identity or Library grouping.
- If a translation fetch fails, retain the currently displayed content and restore the previous selected-language indicator/preference; never leave a blank reader.
- Direct translation-page visits should resolve to the canonical English story URL while retaining the selected language view, as implemented.
- Keep reading progress/resume, text-size controls, theme controls, edge fades, volume navigation, and responsive behaviour intact unless the owner requests a change.

## 6. Visual and accessibility conventions

- Preserve Tidewritten's cyan/aquatic identity and established visual language.
- The shared light-novel reader is `_layouts/light-novel.html`; investigate there first for issues affecting multiple story pages.
- Keep story text as the primary focus. Preserve the desktop reader-control placement, compact control panel, top-right theme toggle, and responsive mobile controls.
- Keep the Cinzel-based `TIDEWRITTEN` brand treatment and aqua gradient underline.
- Use meaningful heading order, accessible names, visible focus states, sufficient contrast, and reduced-motion support.
- Check desktop and mobile layouts and both themes when a change can affect presentation. Source inspection alone is not visual QA.

## 7. Git and verification workflow

1. Fetch the latest target-branch version of every file before editing.
2. Make the smallest coherent change; keep unrelated files untouched.
3. Work on a dedicated branch and open a pull request for review.
4. For repeated edits to one file, fetch its latest content/SHA before the next write.
5. Preserve story/translation blobs and canonical URLs during file moves unless a URL migration is explicitly requested.
6. Check the relevant GitHub Actions workflow and report its actual conclusion. A commit or merged PR alone does not prove deployment.
7. Distinguish source-level checks, automated build results, owner-reported browser checks, and independently performed browser tests.
8. Never claim visual verification unless a real browser check was completed.

## 8. QA acceptance criteria

For story/translation formatting:
- Paragraphs and dialogue render distinctly.
- Chapter headings, IDs, anchors, scene breaks, and end matter remain correct.
- No malformed/nested paragraph markup or duplicate IDs are introduced.
- Story wording remains unchanged unless content editing was requested.
- Matching source/translation structure is checked where applicable.
- Desktop/mobile and light/dark presentation are checked.
- Relevant build/deployment workflow succeeds.

For reader or site changes:
- Navigation, canonical URLs, language switching, reading position, and volume links continue to work.
- Controls remain usable with keyboard, touch, and reduced-motion settings.
- A successful build is not a substitute for rendered-browser QA.

## 9. Reporting

Every task report should state:
- Files inspected and changed.
- What was archived versus retained, if cleanup was requested.
- What was verified and how (source, automated build, owner-reported browser QA, or independent browser QA).
- Any unresolved risks or checks.
- Relevant PR/workflow links when available.

Do not mark an item complete until the corresponding change and required verification have actually happened.
