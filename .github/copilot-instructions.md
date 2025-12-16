# IHD Philippines Website - AI Coding Agent Instructions

## Project Overview
React + TypeScript SPA for IHD Philippines technology consultancy. Uses Vite, React Router, and Tailwind CSS with custom purple/dark theme (`#7B05BA` accent, `#1F1925` primary bg).

## Architecture Patterns

### Navigation & Routing
- **Multi-level routing**: Main routes (`/`, `/projects`, `/services`) + nested service routes (`/services/acoustics`, `/services/audio-visual`, etc.)
- Homepage uses hybrid routing: Routes + hash-based smooth scrolling for sections
- Navigation clicks check `location.pathname`:
  - Same-page: direct `scrollIntoView()`
  - Cross-page: `navigate('/', { state: { scrollTo: target } })` + `useEffect` in [Home.tsx](src/pages/Home.tsx#L9-L19)
- Mobile menu closes automatically via `useEffect` watching `location.pathname` ([Navbar.tsx](src/components/Navbar.tsx#L13-L15))
- Service routes defined in [App.tsx](src/App.tsx) with individual components in `src/pages/Services/`

### Content Management
- All text/data lives in [src/data/content.ts](src/data/content.ts) - edit this file, not components
- Current content uses placeholder arrays (`Array.from({ length: N })`) for team members, sponsors, projects
- Component props come from destructuring exported arrays/objects

### Animation System
- [Reveal.tsx](src/components/Reveal.tsx): Intersection Observer-based fade-in animations
- Usage: `<Reveal delay={120}>...</Reveal>` - delay in milliseconds for staggered reveals
- CSS in [index.css](src/index.css#L39-L51): `.reveal` → `.reveal.visible` transition
- Threshold set to `0.2` for early triggering

## Development Workflow

### Commands
```bash
npm run dev      # Start dev server (Vite default port 5173)
npm run build    # TypeScript check + production build
npm run preview  # Preview production build locally
```

### File Organization
- Pages: Full-screen route components in `src/pages/`
- Components: Reusable UI in `src/components/` (Navbar, Footer, Reveal)
- Styling: Tailwind utility classes + custom CSS in `index.css`

## Design System

### Tailwind Extensions ([tailwind.config.cjs](tailwind.config.cjs))
```javascript
colors: { primary: '#1F1925', secondary: '#3F3F3F', accent: '#7B05BA' }
fontFamily: { heading: 'Archivo Black', body: 'Inter' }
boxShadow: { glow: '0 10px 50px rgba(123, 5, 186, 0.2)' }
```

### Common Patterns
- **Section card**: `section-card` class (secondary bg, glow, rounded-3xl)
- **Accent buttons**: `bg-accent shadow-glow` with hover `shadow-[0_0_0_4px_rgba(123,5,186,0.25)]`
- **Page backgrounds**: `gradient-sheen` class (radial gradients on primary)
- **Typography hierarchy**: `font-heading` for titles, `text-gray-300` for body text

## Critical Dependencies
- `react-router-dom` v6: BrowserRouter wraps app in [main.tsx](src/main.tsx)
- Google Fonts: Archivo Black + Inter loaded via CSS import
- Logo: `/logo.png` served from `public/` directory
- Service icons: `/serviceslogos/*.png` (acoustics, audiovisual, electrical, elv, infotech, internet-of-things, management, security)

## SEO & Search Engine Configuration
- **Sitemap**: [public/sitemap.xml](public/sitemap.xml) - update `<lastmod>` dates when adding/modifying pages
- **Robots.txt**: [public/robots.txt](public/robots.txt) - configured to allow all crawlers
- **Meta tags**: [index.html](index.html) includes Open Graph, Twitter Cards, and Schema.org structured data
- **Important**: Update domain in sitemap/meta tags from placeholder `ihdphilippines.com` to actual domain before deployment

## Common Tasks
Import component at top of App.tsx
3. Add navigation logic to [Navbar.tsx](src/components/Navbar.tsx) if needed
4. Use `gradient-sheen` + `mx-auto max-w-6xl` for consistent page containers
5. Add new route to [public/sitemap.xml](public/sitemap.xml) with appropriate priority

### Adding New Service Pages
1. Create component in `src/pages/Services/` directory - export as named export
2. Add service logo to `public/serviceslogos/` directory
3. Update services array in [Services.tsx](src/pages/Services.tsx) with name, route, logo path, description
4. Import and add route in [App.tsx](src/App.tsx)
5. Add URL to sitemap with priority `0.7`
1. Edit arrays in [content.ts](src/data/content.ts) - replace placeholder generators with real data objects
2. Update TypeScript types if adding new properties (currently minimal typing)

### Creating New Routes
1. Add `<Route>` in [App.tsx](src/App.tsx) Routes block
2. Add navigation logic to [Navbar.tsx](src/components/Navbar.tsx) if needed
3. Use `gradient-sheen` + `mx-auto max-w-6xl` for consistent page containers

### Styling New Components
- Prefer Tailwind utilities over custom CSS
- Use `section-card`, `font-heading`, `text-accent` for consistency
- Wrap animated sections with `<Reveal>`, stagger delays by 80-140ms
