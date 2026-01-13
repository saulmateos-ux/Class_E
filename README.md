# class-E Website

A modern marketing website for **class-E** - a contractor and workforce management platform built for specialty contractors in the construction industry.

## Features

- Responsive design (mobile-first)
- Modern SaaS aesthetic with clean white backgrounds
- Custom design system with deep blue and orange accent colors
- 9 fully-designed homepage sections
- Reusable component library

## Tech Stack

- **Next.js 16** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/class-e-website.git
cd class-e-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Tailwind configuration and design tokens
│
├── components/
│   ├── layout/
│   │   ├── Container.tsx   # Max-width wrapper
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section with CTAs
│   │   ├── ProblemStatement.tsx  # Pain points section
│   │   ├── SolutionOverview.tsx  # Solution pillars
│   │   ├── KeyDifferentiator.tsx # Competitor comparison
│   │   ├── FeatureHighlights.tsx # Feature details
│   │   ├── TargetAudience.tsx    # Audience cards
│   │   ├── UserPersonas.tsx      # Role-based cards
│   │   ├── Integrations.tsx      # Integration grid
│   │   └── FinalCTA.tsx          # Closing CTA
│   │
│   └── ui/
│       ├── Button.tsx        # Button component
│       ├── Card.tsx          # Card component
│       ├── Badge.tsx         # Badge component
│       ├── SectionHeader.tsx # Section titles
│       └── FloatingShape.tsx # Decorative elements
│
└── lib/
    └── utils.ts              # Utility functions (cn)
```

## Design System

### Colors

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Primary (Deep Blue) | `#1E3A5F` | `--color-primary` |
| Accent (Orange) | `#E87722` | `--color-accent` |
| Success (Green) | `#22C55E` | `--color-success` |
| Warning (Amber) | `#F59E0B` | `--color-warning` |
| Error (Red) | `#EF4444` | `--color-error` |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weight, primary color
- **Body**: Regular weight, neutral-600

### Spacing & Radius

- Border radius: 12px (xl), 16px (2xl), 24px (3xl)
- Section padding: py-20 to py-28
- Container max-width: 7xl (1280px)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Homepage Sections

1. **Hero** - Main headline, value proposition, CTAs, and dashboard mockup
2. **Problem Statement** - 4 cards highlighting pain points specialty contractors face
3. **Solution Overview** - 6 pillars showing platform capabilities
4. **Key Differentiator** - Comparison showing what competitors miss vs. class-E delivers
5. **Feature Highlights** - 6 detailed feature blocks with alternating layouts
6. **Target Audience** - 4 audience segments (Trade, Facilities, Retail, Specialty)
7. **User Personas** - 4 role cards (Owner, Ops Manager, Office Manager, Field Supervisor)
8. **Integrations** - Integration logos and platform compatibility
9. **Final CTA** - Strong closing call-to-action

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - All rights reserved.

## Contact

- **Email**: sales@class-e.com
- **Website**: [class-e.com](https://class-e.com)

---

Built with Next.js and Tailwind CSS
