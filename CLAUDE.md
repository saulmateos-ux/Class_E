# Claude Code Instructions for class-E Website

## Project Overview

This is the **class-E** marketing website - a contractor and workforce management platform for specialty contractors in the construction industry.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (CSS-based configuration)
- **Language**: TypeScript
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Inter font & metadata
│   ├── page.tsx        # Homepage (assembles all sections)
│   └── globals.css     # Tailwind v4 design system config
├── components/
│   ├── layout/         # Header, Footer, Container
│   ├── sections/       # 9 homepage sections
│   └── ui/             # Reusable UI components
└── lib/
    └── utils.ts        # cn() class merge utility
```

## Design System

### Colors (defined in globals.css)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1E3A5F` | Deep blue - headings, buttons, footer |
| `accent` | `#E87722` | Orange - CTAs, highlights |
| `success` | `#22C55E` | Green - positive states |
| `warning` | `#F59E0B` | Amber - alerts |
| `error` | `#EF4444` | Red - errors |
| `neutral-50` to `neutral-900` | Grayscale | Text, backgrounds |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, text-primary
- **Body**: Regular, text-neutral-600

### Shadows

- `--shadow-card`: Subtle card shadow
- `--shadow-card-hover`: Elevated hover state
- `--shadow-elevated`: Strong elevation

### Border Radius

- `rounded-xl`: 12px
- `rounded-2xl`: 16px
- `rounded-3xl`: 24px

## Key Components

### UI Components (`src/components/ui/`)

| Component | Purpose |
|-----------|---------|
| `Button` | Primary, secondary, outline, ghost variants |
| `Card` | Default, elevated, bordered variants |
| `Badge` | Status indicators |
| `SectionHeader` | Eyebrow + title + subtitle |
| `FloatingShape` | Decorative background elements |

### Section Components (`src/components/sections/`)

| Section | Description |
|---------|-------------|
| `Hero` | Main headline, CTAs, dashboard mockup |
| `ProblemStatement` | 4 pain point cards |
| `SolutionOverview` | 6 solution pillars |
| `KeyDifferentiator` | Competitor comparison |
| `FeatureHighlights` | 6 alternating feature blocks |
| `TargetAudience` | 4 audience cards |
| `UserPersonas` | 4 role-based cards |
| `Integrations` | Integration grid + platforms |
| `FinalCTA` | Closing call-to-action |

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Content Source

Original content specification: `/Users/saulmateos/Documents/strategIQ/Projects/Class_E/Website/WEBSITE_CONTENT.md`

## Naming Convention

- Components: PascalCase (`Button.tsx`, `Hero.tsx`)
- Utilities: camelCase (`utils.ts`)
- CSS variables: kebab-case (`--color-primary`)

## Adding New Sections

1. Create component in `src/components/sections/`
2. Import and use `Container`, `SectionHeader`, and UI components
3. Add to `src/app/page.tsx` in the desired order
4. Follow existing patterns for responsive design

## Important Notes

- Brand name is **class-E** (not SRCG Tool)
- Email: sales@class-e.com
- Backed by Davis Family Office (DFO)
- Target audience: Specialty contractors with 20-500 workers, $2M-$50M revenue
