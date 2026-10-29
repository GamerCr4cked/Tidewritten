# Tidewritten Website — Project Notes & Working Rules

Last updated: 2026-10-29

These notes capture the project rules and preferences that should guide future Tidewritten website work. If a task-specific request from the site owner explicitly changes a rule, follow the newer request for that task.

## 1. Scope and protected folders

- **Never use `bin/` as a source for story audits, formatting fixes, translations, or new website content.**
- Do not inspect, edit, rename, move, delete, or otherwise touch `bin/` unless the owner explicitly asks for that work.
- Treat `bin/` as out of scope, even if it contains files with similar story names or older content.
- A future rename from `bin/` to `.bin/` may be considered to signal that it is internal/ignored, but **do not rename it automatically**. First check references, scripts, links, build configuration, and deployment behaviour, then ask for approval. Renaming a directory can break paths.
- Work only with the public website sources and relevant site files, including `stories/`, `translation/banglish/`, `translation/hinglish/`, and relevant layout, stylesheet, script, configuration, and asset files outside `bin/`.
- Keep work limited to the files relevant to the request. Do not make unrelated cleanups.

## 2. Story text and paragraph formatting

- The site uses HTML story files. **Plain newlines and blank lines in HTML do not reliably create visible paragraph breaks.** Use semantic HTML paragraphs (`<p>...</p>`) for prose.
- Keep each narrative paragraph distinct. Do not turn an entire chapter into one giant paragraph.
- Keep dialogue readable: generally one speaker's utterance per paragraph, with action beats attached only when they belong together.
- Preserve intentional blank-space scene breaks. If a scene break is represented by a marker or dedicated element, retain its meaning and style it consistently.
- Preserve chapter titles, subheadings, epigraphs, italics, bold, emphasis, inline links, and any other meaningful HTML.
- Do not wrap text already inside paragraph elements a second time. Avoid invalid nested `<p>` elements.
- Do not run a blind global replacement over an entire story. Review the HTML structure and make small, content-preserving edits.
- **Do not rewrite, paraphrase, translate, delete, or invent story prose when the task is only formatting.** Text changes require an explicit request.
- Preserve punctuation, spelling, language, names, and the author's wording unless the owner specifically requests copy-editing.
- Watch for existing tags, chapter headings, scene markers, and inline formatting so automated paragraph wrapping does not damage markup.
- Review both the source file and rendered reader after changes; source markup alone cannot prove the visual result is correct.

## 3. Language and translation rules

- Main published story files are under `stories/`.
- Banglish translation files are under `translation/banglish/`.
- Hinglish translation files are under `translation/hinglish/`.
- Do not assume every story has every language. Only work with translations that actually exist in the public folders.
- Keep the correct language and transliteration style of each translation. Do not convert Banglish into Hinglish or vice versa.
- When formatting a translation, apply the same paragraph/dialogue/scene-break structure as appropriate, without changing its translated wording.
- Where a corresponding source exists, check chapter order and scene structure for consistency, but do not fabricate missing chapters or translations.
- Check language-switch links and filenames carefully. Similar story titles do not always imply that two files are matching translations.
- Keep translations' formatting consistent with the main reader design while allowing the actual text and language to differ.

## 4. Reader layout and website design

- The shared light-novel layout is `_layouts/light-novel.html`; check it when the same rendering problem affects multiple published story pages.
- The layout renders story content inside the story-content article. Content inserted as raw HTML must contain the markup needed for visible paragraph and structural formatting.
- Do not duplicate a story title if the layout already displays it.
- Keep the story text as the main focus, with the floating reader controls positioned to the left on desktop and the circular theme toggle at the top-right as previously requested.
- The desktop floating controls panel should remain at the previously requested reduced size (about three-quarters of its former panel size) **without scaling down the controls inside it**; keep the inner controls centered.
- The `TIDEWRITTEN` brand styling uses Cinzel and an aqua gradient underline as previously requested.
- Preserve the established visual identity, responsive behaviour, theme toggle, navigation, and reader controls unless the task explicitly asks to change them.
- Check the layout at both desktop and mobile sizes, and in light and dark themes where available.
- Avoid introducing an unrelated redesign while fixing a text-formatting issue.

## 5. Chapter titles and navigation

- Chapter titles should be accurate and consistent with the owner's requested wording.
- For the Meet Again Trilogy, the final chapter title in each of the three volumes should be **Meet Again**, not a `Phir Milenge...` variant.
- Keep chapter IDs, anchors, navigation links, and table-of-contents entries in sync when chapter headings change.
- Do not alter story titles or chapter names elsewhere just to make naming more uniform unless requested.

## 6. Editing and Git workflow

- Inspect the current version of each file before editing; never assume a stale copy is still current.
- Make the smallest safe change that fulfils the request.
- Keep unrelated files and existing user work untouched.
- Use clear commit messages that describe the actual changes.
- When updating the same file more than once, fetch its latest version/SHA before the next write.
- Prefer grouping related documentation or formatting edits into a single coherent commit where the available workflow supports it.
- Do not claim that a change is deployed just because it was committed or pushed.
- Check the relevant GitHub Actions workflow and its conclusion. Report whether it succeeded, failed, or is still running.
- If the workflow is still running, say that deployment has not yet been confirmed.
- Never invent commit hashes, workflow results, links, or file contents.

## 7. TODO and QA process

- Use `Checks/TODO.md` to track file-level formatting and review tasks.
- Mark a task complete only after the corresponding edit has actually been made and checked.
- For each formatting fix, check:
  - [ ] Paragraphs render separately.
  - [ ] Dialogue stays separated by speaker.
  - [ ] Scene breaks and headings remain intact.
  - [ ] No nested or malformed paragraph tags were introduced.
  - [ ] Chapter navigation and table of contents still work.
  - [ ] Story wording has not changed unintentionally.
  - [ ] The page remains readable on desktop and mobile.
  - [ ] Relevant build/deployment checks have been reviewed.
- A file having at least one `<p>` tag does not prove all of its paragraphs are correct. The audit list is a starting point, not a substitute for visual review.
- Keep counts explicit about what was measured. “Zero paragraph tags” is a narrower claim than “the whole story is broken.”

## 8. Asset, link, and accessibility care

- Do not remove or rename assets just because they appear unused without checking references.
- Preserve valid relative paths and internal links.
- Use meaningful headings in logical order and keep interactive controls understandable.
- Avoid unnecessary decorative changes that make reading harder or reduce contrast.
- Test links affected by a change where practical.

## 9. Communication and reporting

- Be precise about what was inspected, edited, committed, and verified.
- Clearly distinguish an audit finding from a completed fix.
- Summarize changed file paths and the purpose of each change.
- Mention important limitations or checks that remain unfinished.
- Do not touch `bin/` as part of an ordinary story or translation task.
