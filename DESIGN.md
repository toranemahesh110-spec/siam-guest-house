# Design Brief: Siam Guest House Pattaya

**Aesthetic:** Luxury hospitality showcase inspired by Elyse Residence. Cinematic hero imagery, minimal text, generous whitespace, editorial elegance.

**Tone:** Premium, refined, aspirational — every pixel conveys luxury and restraint.

**Differentiation:** Glassmorphism navbar with backdrop blur; room cards with 1.05x hover zoom and soft shadows; scroll-triggered fade-in animations; warm gold accents for interactive elements.

## Color Palette (OKLCH)

| Token | Light | Dark | Role |
|-------|-------|------|------|
| background | 0.98 0 0 | 0.15 0 0 | Page background, maximizes imagery |
| foreground | 0.15 0.02 260 | 0.92 0.01 85 | Primary text, high contrast |
| card | 0.93 0.04 85 | 0.18 0 0 | Section backgrounds, soft beige |
| accent | 0.72 0.12 70 | 0.75 0.12 70 | Gold highlights, CTAs, borders |
| muted | 0.95 0.02 85 | 0.22 0 0 | Secondary backgrounds, borders |
| border | 0.93 0.01 85 | 0.25 0 0 | Subtle dividers, minimal visual weight |

## Typography

| Layer | Font | Weight | Size | Use |
|-------|------|--------|------|-----|
| Display | Fraunces (serif) | 400–700 | 32–64px | H1–H3, luxury headings |
| Body | General Sans (sans) | 400–600 | 16px | Body text, form inputs |
| Mono | Geist Mono | 400 | 12–14px | Code, technical details |

## Elevation & Depth

- **Navbar**: Glass effect — `backdrop-blur-md`, `bg-white/80`, `border-b border-border/20`
- **Cards**: Soft shadow `shadow-md`, rounded `rounded-lg`, hover lifts with `scale-105` and `shadow-lg`
- **Buttons**: Rounded `rounded-lg`, accent gold background, smooth press feedback via `active:scale-95`
- **Layers**: Hero with overlay gradient, section cards alternate between white and soft beige, footer on dark card

## Structural Zones

| Zone | Background | Border | Intent |
|------|-----------|--------|--------|
| Hero | Image + overlay | None | Immersive entry, minimal text |
| Navbar | Glass nav | Bottom subtle | Sticky, non-intrusive, elegant |
| Sections | Alternating white/card | Top/bottom subtle | Content rhythm, breathing room |
| Cards | Card token | Top accent line | Feature highlighting, hover feedback |
| Footer | Muted/dark | Top subtle | Grounded closure, minimal |

## Spacing & Rhythm

- **Core padding**: `px-8 py-24` for major sections — luxury whitespace
- **Card internal**: `p-6` for balanced density
- **Gap between items**: `gap-6` (24px) for breathing room
- **Type scale**: 14px (caption), 16px (body), 20px (h4), 28px (h3), 40px (h2), 64px (h1)

## Component Patterns

- **Luxury Button**: `.luxury-button` — accent background, rounded corners, scale press
- **Room Card**: `.card-hover` — image, title, description, `scale-105` on hover with shadow lift
- **Accent Line**: `.accent-line` — 4px gold bar above headings or cards
- **Glass Nav**: `.glass-nav` — backdrop blur, semi-transparent background

## Motion & Animation

- **Fade-in**: Scroll-triggered via Intersection Observer, 0.6s ease-out, 10px translateY
- **Hover zoom**: `hover:scale-105` with `transition-smooth` (0.3s cubic-bezier)
- **Float**: Subtle 3s infinite up/down for decorative elements
- **Press**: `active:scale-95` for button feedback

## Constraints

- No generic shadows — use contextual elevation only
- No vibrant gradients — gold accents only for interactive elements
- Minimal decorative clutter — focus on imagery
- Mobile: stacked layout, generous touch targets (44px min)

## Signature Detail

Gold accent line above section headings combined with serif typography creates a "luxury editorial" feel — like a high-end real estate or hotel publication. Every room card zoom on hover reinforces interactivity without visual noise.
