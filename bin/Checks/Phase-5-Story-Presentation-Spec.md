# Phase 5 — Story Presentation Specification

_Status: Architecture decision approved for implementation planning; no reader or Library feature is implemented by this document._

This specification extends the existing CSS-built series artwork and shared light-novel reader. It does not replace the Library, change canonical routes, or alter story prose.

## 1. Visual system

### Cover artwork

- **Purpose:** Give each volume a distinct light-novel release identity while retaining a recognizable series-wide visual language.
- **Canvas:** Portrait 2:3 ratio; source target 1200 × 1800 px.
- **Format:** WebP for published cover artwork. Keep source/editable originals outside the public site unless the owner explicitly wants them published.
- **Optimization target:** Aim for 300 KB or less per cover where visual quality permits. Do not degrade typography or important detail to meet a hard byte limit.
- **Composition:** Keep important visual subjects inside a central safe area so the art can be cropped in Library cards and smaller responsive placements.
- **Text treatment:** Prefer artwork without baked-in title, volume number, or author lettering. Render titles and volume labels as real HTML text for accessibility, localization, and responsive control. If a commissioned/generated design intentionally includes lettering, it must match the canonical title exactly and must not replace semantic HTML text.
- **Identity:** Volumes in one series should share a palette, motif, or compositional language; each volume may vary its scene, lighting, symbol, or focal subject. Different series must remain visually distinguishable.
- **Fallback:** Missing cover metadata or a missing asset must fall back to the existing CSS-built series artwork. A missing image must never create a broken-image icon or empty cover region.

### Library and reader placement

- Library remains series-based and continues to show one card per canonical series, never one card per translation.
- The Library card uses the first available canonical volume cover as its series-card artwork. The series name and description remain semantic HTML outside the decorative image.
- A multi-volume series keeps its existing volume chooser. Each volume option may show its own cover thumbnail and volume number/title; one-volume series still opens directly.
- Individual reader pages may show the current volume's cover and synopsis in a compact volume-introduction area above the chapter content. The cover must not displace or obscure the existing series / volume / book-title hierarchy.
- Keep the reading column and story typography primary. Cover art, synopsis, notes, and illustrations are supporting content.
- Images must be responsive, preserve intrinsic aspect ratio, and reserve layout space to avoid content shift. Use lazy loading for below-the-fold illustrations; do not lazy-load a prominent above-the-fold cover if it causes a visible blank state.

## 2. Asset paths and naming

Use these public asset directories:

- `assets/images/covers/` — volume cover artwork.
- `assets/images/illustrations/` — optional in-story or supplementary illustrations.

Use lowercase kebab-case filenames with a stable series slug and volume number:

- `{series-slug}-vol-{number}.webp`
- Example: `meet-again-trilogy-vol-1.webp`
- Example illustration: `meet-again-trilogy-vol-1-platform.webp`

Reference assets with root-relative Jekyll paths, for example:

```yaml
cover_image: /assets/images/covers/meet-again-trilogy-vol-1.webp
```

Do not use external hotlinked images for canonical covers. Keep filenames stable after publication; update all references deliberately if an asset must be renamed.

## 3. Front-matter schema

All fields are optional so existing pages remain valid while content is populated gradually.

| Field | Scope | Meaning |
|---|---|---|
| `cover_image` | Per volume, shared by editions | Root-relative path to the canonical volume cover. |
| `cover_alt` | Per edition | Concise description of meaningful visual content; use an empty string only when the image is purely decorative and hidden from assistive technology. |
| `series_description` | Canonical series entry (normally Volume 1); localizable in translations | Short factual introduction to the series, approximately 1–3 sentences. Do not use generic promotional slogans. |
| `synopsis` | Per volume and edition | Spoiler-conscious description of that volume, approximately 2–4 sentences. Distinct from the existing short `tagline`. |
| `author_note` | Per edition | Optional author-provided note, preserved as authored. Render as escaped plain text with paragraph breaks; do not interpret arbitrary front-matter HTML. |
| `illustrations` | Per edition | Optional ordered list of illustration records, described below. |

### Example volume front matter

```yaml
cover_image: /assets/images/covers/meet-again-trilogy-vol-1.webp
cover_alt: "A quiet railway platform beneath a warm evening sky."
series_description: >-
  A contemporary coming-of-age series following its characters through
  school life, changing friendships, and important personal decisions.
synopsis: >-
  A new school term brings an unexpected encounter that challenges the
  routines the protagonist has grown used to.
author_note: |
  Thank you for reading this volume.
illustrations:
  - image: /assets/images/illustrations/meet-again-trilogy-vol-1-platform.webp
    alt: "An empty railway platform in the late afternoon."
    caption: "The station after school."
    placement: before-story
```

The example text is illustrative only and must not be copied into actual story metadata unless the owner confirms it accurately describes that story.

### Series metadata rules

- Put `series_description` on the canonical English Volume 1 page so the Library has one predictable source.
- Translated Volume 1 pages may provide localized `series_description` values for the reader's in-place language switch; they must not create separate series cards.
- If a series has no Volume 1 or its first canonical volume differs, place the field on the lowest-numbered canonical volume and document that exception.
- Do not invent descriptions from titles or genre labels. Derive them from the actual story or obtain owner-supplied copy.
- `synopsis` and `author_note` may differ by edition language, but must preserve the author's meaning and must not add plot facts.
- `cover_image` identifies the same visual asset across English, Hinglish, and Banglish editions. Keep `cover_alt` localized where useful.

### Illustration record

Each item supports:

- `image` — required root-relative image path.
- `alt` — required meaningful alternative text; use empty only for decorative images.
- `caption` — optional concise caption.
- `placement` — optional placement token. Initial supported placement is `before-story`. Chapter-relative placements must use the exact existing chapter ID, in the form `after-chapter:chapter-id`, and must be validated against the page's actual headings before rendering.

Illustrations are optional and must not be inserted merely to fill space. Do not add, remove, or move story paragraphs to accommodate them. If chapter-relative insertion cannot be implemented accessibly and reliably, render the illustration in a clearly separated supplementary gallery rather than guessing its position.

## 4. Localization and translation switching

- Keep the canonical English page as the URL and Library identity for all editions.
- On in-place language switching, update localized `series_description`, `synopsis`, `author_note`, `cover_alt`, and any localized caption text when the selected edition supplies them.
- Keep the same canonical `cover_image` across editions; language switching must not cause duplicate or unrelated artwork.
- If a translated edition omits optional presentation metadata, retain the English fallback rather than blanking the section.
- Existing `tagline`, genre, reading note, closing note, chapter IDs, reading position, and reader settings must continue to work as they do now.
- Do not change story URLs, chapter anchors, translation mappings, or reading-statistics keys.

## 5. Accessibility, performance, and verification

- Meaningful cover art requires useful localized alt text. Decorative artwork must use empty alt text and be hidden from assistive technology where appropriate.
- Keep text contrast independent of image brightness; do not place essential text only inside the image.
- Use semantic headings, figure/figcaption for captioned illustrations, and descriptive accessible names for volume links.
- Respect reduced-motion preferences. Artwork should not animate in a way that distracts from reading.
- Check image dimensions, file size, missing paths, and duplicate filenames before marking assets ready.
- Verify Library grouping, direct-open behaviour for single-volume series, volume chooser links, canonical routes, language switching, and reader layout in both themes and on desktop/mobile.
- A source-level check or successful build does not replace rendered-browser QA.

## 6. Implementation sequence

1. Add optional front-matter fields and reusable rendering to the shared reader; preserve current layout when fields are absent.
2. Extend the existing Library series-card and volume-chooser presentation without changing grouping or navigation behaviour.
3. Add the optional author-note and illustration rendering paths with safe escaping and validated placement.
4. Add cover assets and accurate descriptions series by series, starting with owner-approved artwork and story-grounded copy.
5. Run asset, metadata, build, route, translation-switching, accessibility, responsive, and rendered-browser checks.
