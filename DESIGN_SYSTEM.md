# Mohamed El Khalfi Portfolio Design System

Reference status: the supplied reference URLs are placeholders, so direct inspection was not possible. The system below is locked from the product brief: premium, technical, editorial, modern, clean, and developer-studio oriented.

## Mood

Developer studio, editorial portfolio, precise engineering, warm human polish.

## Colors

- `ink`: #090b0f
- `panel`: #10151d
- `panel-soft`: #151c26
- `cream`: #f4efe4
- `muted`: #9ea7b6
- `line`: rgba(244, 239, 228, 0.12)
- `teal`: #51d6c7
- `copper`: #d9895b
- `violet`: #8f8cff
- `lime`: #c4ef6a

## Typography

- Sans: Inter-style system stack for crisp UI and readable body copy.
- Display: Georgia-style serif for editorial contrast in large headings.
- Mono: SFMono/JetBrains-style stack for technical metadata.
- Hero: clamp(4rem, 12vw, 11.5rem)
- H2: clamp(2.7rem, 6vw, 6.5rem)
- Body: 1rem to 1.15rem with 1.7 line height.

## Layout

- Max width: 1440px shell, 1180px content.
- Grid: 12 columns on desktop, stacked on mobile.
- Section spacing: 120px desktop, 82px tablet, 64px mobile.
- Rhythm: dense editorial labels, generous headline spacing, compact UI surfaces.

## Components

- Buttons: pill command buttons with clear focus states and hover lift.
- Cards: 18px radius, 1px hairline border, dark translucent panels, no nested cards.
- Project cards: mockup preview top, content bottom, hover transform and border glow.
- Timeline: sticky index with progress rail on desktop, compact list on mobile.
- Navigation: glass top bar, small command-style links, primary contact action.

## Motion

- Default ease: `power3.out` for GSAP, spring for Framer Motion.
- Reveal: opacity + 28px translate, staggered for readable sequencing.
- Scroll patterns: pinned-scrub, sticky-stack, horizontal-on-vertical, split-text-reveal, parallax-depth, reveal-on-scroll, magnetic-cards, scroll-progress-cards, masked-image-reveal.
- Motion must clarify hierarchy, never distract from reading.

## Imagery

- Custom code-window, product-preview, and system-map visuals built in CSS/HTML.
- Subtle grid and cursor light effect on capable devices.
- No stock imagery or fake testimonials.
