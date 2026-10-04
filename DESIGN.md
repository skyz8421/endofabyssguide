---
name: "End of Abyss Guide"
description: "Scene-edit directory with practical reading fields and local player tools."
colors:
  bg: "#0a1719"
  surface: "#122326"
  text: "#ecf1ee"
  muted: "#b6c6c5"
  line: "#3f5557"
  control-border: "#759093"
  accent: "#a8d8d6"
  link-hover: "#ffffff"
  focus: "#efab74"
  surface-hover: "#213638"
  placeholder: "#a8baba"
  nav-icon: "#dfb18c"
  quiet-text: "#d1e2de"
  answer-text: "#d3e4df"
  table-head: "#213638"
  success: "#b5ddc6"
  warning: "#edbd8f"
  consent-bg: "#172b2e"
  consent-border: "#759093"
  directory: "#081619"
  directory-text: "#f2f2ed"
  directory-muted: "#c1d0d0"
  directory-rule: "#354447"
  selection: "#d18448"
  selection-ink: "#131d1a"
  reading: "#f7f7f2"
  reading-ink: "#122123"
  reading-muted: "#4b5b5e"
  reading-rule: "#b7c5c4"
  reading-action: "#3d6262"
  light-bg: "#f7f7f2"
  light-surface: "#ffffff"
  light-text: "#08465b"
  light-muted: "#506063"
  light-line: "#bbc9c7"
  light-control-border: "#748d8d"
  light-accent: "#934514"
  light-link-hover: "#123f44"
  light-focus: "#934313"
  light-surface-hover: "#e6efea"
  light-placeholder: "#53696a"
  light-nav-icon: "#795336"
  light-quiet-text: "#28545a"
  light-answer-text: "#29494c"
  light-table-head: "#e6efea"
  light-success: "#256241"
  light-warning: "#80400e"
  light-consent-bg: "#f7f7f2"
  light-consent-border: "#748d8d"
  light-directory: "#eaf0ed"
  light-directory-text: "#11282b"
  light-directory-muted: "#455e61"
  light-directory-rule: "#b6c8c6"
  reading-link: "#28595c"
  reading-link-hover: "#163f42"
  reading-control-border: "#7e9594"
  reading-surface-hover: "#e5eeea"
  reading-focus: "#934313"
  reading-action-hover: "#294b4d"
typography:
  display:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "72px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: ".04em"
  headline:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "clamp(42px,4.45vw,68px)"
    fontWeight: 650
    lineHeight: 1.12
    letterSpacing: "-.015em"
  section:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "36px"
    fontWeight: 650
    lineHeight: 1.12
  guide-title:
    fontFamily: "Big Shoulders, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.08
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  answer:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.7
  notebook-action:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "18px"
    fontWeight: 650
    lineHeight: 1.35
rounded:
  flat: "0"
  control: "2px"
  switch: "24px"
spacing:
  page-gutter: "clamp(24px,4.72vw,88px)"
  mobile-gutter: "24px"
  compact-gutter: "20px"
  body-measure: "70ch"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.quiet-text}"
    rounded: "{rounded.control}"
    padding: "9px 16px"
  button-quiet-hover:
    backgroundColor: "{colors.surface-hover}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  guide-row:
    backgroundColor: "{colors.directory}"
    textColor: "{colors.directory-text}"
    rounded: "{rounded.flat}"
  guide-row-selected:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.selection-ink}"
  notebook-action:
    backgroundColor: "{colors.reading-action}"
    textColor: "#ffffff"
    typography: "{typography.notebook-action}"
    rounded: "{rounded.flat}"
    padding: "10px 12px"
  notebook-action-hover:
    backgroundColor: "{colors.reading-action-hover}"
  nav-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.flat}"
    padding: "10px"
    width: "280px"
  checklist-row:
    textColor: "{colors.text}"
    padding: "12px 0"
---

# Design System: End of Abyss Guide

## Overview

**Creative North Star: "Scene-edit directory"**

The scene-edit directory combines actual facility imagery with a continuous reference surface. Blue-black grounds the atmosphere; a broad orange selection establishes the next action; a warm pale reading field lets players compare requirements and keep a return objective.

Tall condensed headlines identify the game and its problems, while familiar system text carries explanations and form data. This is an independent player guide: visual atmosphere supports legible answers, semantic navigation and private tools. The light theme changes the shell and reading-page palette without removing the shared selected-row or pale helper language.

**Key Characteristics:**

- Sourced facility imagery, edited as shallow scenes.
- Continuous rows and crisp rules, with minimal corner rounding.
- Condensed display type paired with readable system prose.
- Visible keyboard focus and restrained, reduced-motion-aware transitions.

## Colors

The palette joins the cold facility atmosphere to warm selection and pale task-focused reading. The frontmatter owns the exact values; `light-*` records the values assigned to matching semantic properties when the root has `data-theme=light`.

### Primary

- **Warm selected route** (`selection`, `selection-ink`): the broad directory highlight and its high-contrast ink. This pair stays shared between themes.
- **Cool action accent** (`accent`): dark-theme links, primary form actions and checkbox accents. The light theme uses `light-accent` instead.
- **Reading action** (`reading-action`, `reading-action-hover`): the filled return-notebook entry on the pale helper field. Reading links use their own `reading-link` pair.

### Neutral

- **Facility ground** (`bg`, `surface`, `surface-hover`): shell, fields and navigation; theme variants apply to the same roles.
- **Directory ground** (`directory`, `directory-text`, `directory-muted`, `directory-rule`): the uninterrupted guide index, prose and separators.
- **Reading paper** (`reading`, `reading-ink`, `reading-muted`, `reading-rule`): the pale helper field in either theme, with its local control and focus assignments.
- **Reference ink** (`text`, `muted`, `quiet-text`, `answer-text`, `placeholder`): heading, prose, supportive text and field placeholders.
- **Rules and controls** (`line`, `control-border`, `table-head`, `consent-bg`, `consent-border`): separators, operable edges, tabular headings and the consent surface.

The functional `focus`, `success` and `warning` tokens distinguish keyboard focus and named tool readiness; navigation icons use `nav-icon`.

**The Selection Rule.** Orange identifies the selected directory entry; keep readable dark text on that fill. When another entry is hovered or focused, the initial highlight yields to it.

## Typography

**Display Font:** self-hosted Big Shoulders, with sans-serif fallback. The variable font file is served from `/fonts/big-shoulders.woff2`, supports weights 100–900, and uses `font-display: swap`.

**Body Font:** system-ui, with Apple, BlinkMacSystemFont, Segoe UI and sans-serif fallbacks.

**Character:** Tall condensed headings give the directory a recognisable editorial rhythm. Body text prioritizes quick reading and precise requirements; there is no distinct monospace role.

### Hierarchy

- **Display:** the homepage identity uses the `display` role. Its responsive sizes become 64px at 1000px, 56px at 680px and 49px at 360px; mobile tracking becomes .1em.
- **Headline:** reading-page h1 uses `headline`; it becomes 44px at 680px.
- **Section:** general h2 uses `section`, becoming 32px at 680px. General h3 uses Big Shoulders (28px, weight 650, line height 1.12).
- **Guide title:** `guide-title` becomes 27px at 1200px and 25px at 360px. At 680px its line height becomes 1.12.
- **Body:** `body` carries general prose with a maximum reading measure supplied by `body-measure` where the content container applies it.
- **Answer:** `answer` introduces the practical answer, at up to 64ch; mobile size is 18px.
- **Label:** `label` identifies fields; support captions use 12–14px depending on the component. These are functional labels, not decorative heading preambles.
- **Notebook action:** `notebook-action` reduces to 16px at 680px. The helper heading uses 44px / 42px / 39px / 36px at its observed desktop, 1200px, 680px and 360px states.

**The Two Voices Rule.** Use Big Shoulders for identity and heading hierarchy. Use the system stack for descriptions, answers, navigation and controls.

## Layout

Use the shared fluid page gutter, switching to the mobile and compact gutters at 680px and 360px. Homepage scene and directory span the viewport. Reading pages use a centered maximum width of 1365px; the general narrow layout is at most 1000px. The article grid pairs flexible content with a 214px sticky contents rail and a 70px gap. At 1200px the rail is 190px and the gap is 42px. At 1000px the rail gives way to an in-flow contents disclosure.

The desktop directory places title, description and arrow across each ruled row; the first row includes a far-right image preview. In the 1001–1400px range, rows receive 12px vertical padding to accommodate wrapping. At 1000px the preview disappears and entries use a 43% title column, flexible description and 32px arrow. At 680px the description falls below the title; the arrow spans both lines and every row has a 106px minimum height with 19px vertical padding.

The pale helper field uses a flexible main column and a notebook aside. Desktop proportions are 2.4:1 with a 280px minimum aside; at 1200px they become 2.25:1. The later 1001–1400px override takes precedence with a 2:1 grid, 320px minimum aside and 30px gap. At 1000px the helper and notebook stack, with the aside separated by a top rule. At 680px the notebook action fills its available column.

Forms use two equal columns with a 22px gap, switching to a single column and 18px gap at 680px. Tables scroll within their own wrapper. Breadcrumb home link and separator do not shrink; the final title can truncate. Diagram layouts vary with their information: three-column comparisons, two-column category groupings or ruled rows. Mobile diagrams become single-column.

The shell has a compact 63px desktop header and a menu-led stacked navigation at 1000px. The consent surface stays fixed above the safe-area inset and switches to stacked content at 1000px. Extra footer clearance accounts for this surface.

## Elevation & Depth

Depth comes mainly from full-bleed imagery, continuous color fields and fine rules. Reading tools remain transparent within the page. The desktop navigation panel alone uses a soft ambient shadow; mobile navigation removes it. Hero text shadows maintain separation from the photo rather than lifting a content container.

### Shadow Vocabulary

- **Navigation float:** `0 12px 32px #00000030`, for the desktop dropdown panel.
- **Scene title separation:** `0 2px 18px #00000080`, for the identity over imagery.
- **Scene subtitle separation:** `0 2px 8px #000000`, for supporting text over imagery.

**The Ruled Surface Rule.** Separate reading tools and reference groups with fine rules and spacing. Reserve the soft floating shadow for desktop navigation, rather than adding lifted cards to each content item.

## Shapes

The recurring surface language is square: directory rows, tools, tables, image crops and the notebook link use flat edges. Inputs and ordinary buttons have only the control rounding from the frontmatter. The theme-switch track uses the switch rounding; the video play affordance is circular. These functional exceptions are established parts of the system, not permission to round every container.

Thin solid rules define content divisions and operable field edges. Custom navigation, arrow, theme and notebook symbols use inline SVG. Image frames preserve intentional crops; desktop hero positioning is centered at 51%, the bridge preview at 82%, and the mobile hero at 58% horizontally.

## Components

### Buttons

Practical controls have a 44px minimum height, the control radius and 9px 16px padding. Primary form actions use the active accent against the background color, weight 650, and brighten on hover. Quiet controls are transparent, using quiet ink and a visible control edge; hover fills them with the surface-hover tone. Keyboard focus uses the shared 3px outline, offset 4px. The notebook link is a square filled reading action with a 50px minimum height, text and SVG arrow, and the responsive typography described above.

### Inputs / Fields

Fields use the active surface and control border, 12px 14px padding and 50px minimum height. Labels precede controls; placeholder text remains fully opaque. Checkboxes retain native semantics and a 20px square target inside an at-least-48px label row. Caret and checkbox accents follow the local active accent. No generic error or disabled visual variant has been established.

### Navigation

The condensed wordmark anchors grouped disclosure navigation. Summaries and desktop panel links provide at least 44px targets; mobile summaries provide 48px. Only one disclosure stays open, and current links receive the surface-hover tone. The current group uses a subtle orange underline. Desktop panels have 280px width and the navigation float shadow; mobile panels become static, full width and unshadowed. The separate theme switch remains a functional rounded track.

### Continuous Guide Directory

Directory entries are links containing a heading, problem description and SVG arrow. The first route is highlighted at rest; pointer hover or keyboard focus moves the broad selection treatment. Fill expansion uses a .32s cubic-bezier(.16,1,.3,1) transition. The initial highlight leaves the image preview uncovered on desktop. The row focus outline is drawn inward with dark selection ink. Reduced-motion preferences remove this transition.

### Reference Tables and Diagrams

Tables use collapsed borders, tabular numerals, a tonal header and individual horizontal rules. Cells use 16px padding, reducing to 13px 12px at 680px. Diagrams use condensed titles, supportive body text and top rules; their layout follows the actual categories instead of wrapping each item in a decorative card. The Windows requirements page carries its own requirements content rather than the three-platform diagram. Its memory comparison reuses the table's minimum and recommended values in two equal columns, separated by a 28px gap. Each value receives a 5px proportional bar, using surface-hover as the track and accent as the fill; the largest supplied value defines the full width. The comparison has thin top and bottom rules and 14px vertical padding, rather than new elevation or decorative thresholds.

### Local Checklist and Return Notebook

The checklist, lookup and notebook use transparent ruled sections with 30px vertical padding, reducing to 24px on mobile. Completed checklist labels and notes use a strike-through plus muted ink. Named-tools readiness uses success or warning text, with explicit wording alongside the color. Notes use ruled list rows, with a separate remove control and an undo action when applicable. Preserve the components' empty, no-results, saved, copied and storage-unavailable states without inventing visual success states.

### Motion and Focus

The disclosure chevron rotates over .18s ease; the directory fill uses the selection transition above. Other hover states change color without introducing unobserved travel or card lifts. Document scrolling is smooth normally and becomes automatic with reduced-motion preference; transitions and animations are then disabled. Full component snippets and extension values are held in `.impeccable/design.json`.

## Do's and Don'ts

### Do:

- Do reuse the semantic colors from the active theme, and preserve the local pale reading-field overrides.
- Do use real facility imagery with intentional responsive crops and semantic text layered separately.
- Do keep directory entries continuous, with title, description and a real SVG arrow.
- Do preserve visible focus, 44px button targets, 50px text fields and reduced-motion behavior.
- Do let the content determine the diagram or table layout; a platform comparison belongs with platform information.
- Do keep notes and checklist state on the current device, and explain actual tool states in readable prose.

### Don't:

- Don't turn every guide or tool into a rounded floating card.
- Don't replace custom navigation SVGs with text glyphs or icon-font characters.
- Don't use the system body stack as the identity display face.
- Don't hide essential text or crop headings to force the desktop composition onto a phone.
- Don't manufacture guide facts, map imagery, testimonials or award claims to supply visual decoration.
- Don't treat this source-derived document as proof of live visual QA or automated hero-gate approval.
