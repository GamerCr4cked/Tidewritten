# Tidewritten — Visual Identity & Design System

_Last reviewed: 2026-10-31_

This document records the shared visual language currently used by Tidewritten. It is a maintenance reference, not a proposal to replace existing page-specific designs.

## Brand direction

- **Identity:** independent light-novel reading project.
- **Visual character:** aquatic, cyan-led, calm, precise, and reading-first.
- **Interface tone:** concise, informative, and welcoming. Avoid generic sentimental slogans, filler copy, and exaggerated promotional language.
- **Composition:** clear hierarchy, restrained gradients and glow, balanced whitespace, and responsive layouts.
- **Story presentation:** traditional long-form reading; no chat bubbles or character-detail cards.

## Core site color tokens

The shared site stylesheet is `assets/css/style.css`. The current core tokens are:

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

Use these CSS custom properties rather than hard-coding a second palette in new shared components. Reader pages have their own reader-specific theme tokens in `_layouts/light-novel.html`; keep those coordinated with, but separate from, the site shell.

## Typography

The site shell currently imports DM Sans, Manrope, Inter, Playfair Display, and JetBrains Mono. The shared light-novel reader uses Cinzel for the Tidewritten wordmark, DM Sans for controls, and Literata for story text, with Georgia/system-serif alternatives available to readers.

- Use a readable sans-serif for navigation, controls, labels, and supporting UI.
- Use the selected serif face for long-form story text.
- Use display typography sparingly for page titles and editorial hierarchy.
- Keep body copy comfortable on narrow screens; avoid overly small text and long unbroken line lengths.

## Layout, spacing, and shape

- Use a centered content column with a clear maximum width and responsive side padding.
- Use spacing consistently: compact gaps for related controls, larger gaps between sections.
- Prefer restrained corner radii and thin borders over heavy shadows or stacked decorative panels.
- Keep interactive targets comfortably sized, with 44px as the practical minimum for primary touch controls.
- On mobile, collapse multi-column layouts to a readable single column and prevent horizontal overflow.

## Components and interaction states

- Cards and panels use the shared background, border, and text tokens.
- Primary actions use the accent color with sufficient contrast; secondary actions remain visually quieter.
- Hover states should be visible but restrained. Keyboard focus must remain clearly visible and must not rely on color alone.
- Provide active/selected states for navigation, filters, language choices, and settings.
- Respect `prefers-reduced-motion`; transitions and decorative movement must not be required to understand or use the interface.
- Use semantic landmarks, ordered heading levels, descriptive link text, and accessible names for icon-only controls.

## Responsive and theme requirements

- Verify both dark and light themes.
- Test desktop, tablet-width, and narrow mobile layouts.
- Check keyboard navigation and touch interaction for menus, dialogs, and controls.
- Keep story content readable and unobstructed by floating controls.
- Treat rendered-browser QA as separate from source inspection and automated builds.

## Maintenance rule

When introducing a reusable visual component, use existing tokens and interaction conventions first. Update this document when a lasting design-system decision changes; do not document an unverified visual state as tested.
