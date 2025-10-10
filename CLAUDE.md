# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IdeasCollab is a React + TypeScript application built with Vite, featuring a collaborative ideas platform with internationalization support, theme management, and a sophisticated landing page with GSAP animations.

## Common Commands

### Development
```bash
npm run dev          # Start development server with HMR
npm run build        # Type-check with tsc and build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on the codebase
```

## Architecture

### Routing Structure

The app uses React Router v7 with a user onboarding flow:
- **First-time users** → `/landing` (animated landing page with GSAP)
- **Returning users** → `/hero` (main application)
- Onboarding state tracked via `localStorage.getItem("userOnboarded")`

Main routes defined in `src/main.tsx`:
- `/` - Auto-redirects based on onboarding status
- `/landing` - Landing page with intro animations
- `/hero`, `/products`, `/solutions`, `/resources`, `/pricing` - Hero page
- `/login`, `/signup` - Authentication pages
- `/contact`, `/privacy`, `/terms` - Legal/contact pages

### State Management

**Zustand** is used for all global state:

1. **Theme Store** (`src/store/themeStore.ts`)
   - Manages light/dark theme with system preference detection
   - Persisted to localStorage via `zustand/middleware/persist`
   - Updates `data-theme` attribute on `document.documentElement`

2. **i18n Store** (`src/stores/i18n.ts`)
   - Manages locale state (`en_us` | `es_mx`)
   - Auto-detects browser language on first load
   - Provides `t(key, params)` function for translations with nested key support (e.g., `"navbar.dashboard"`)
   - Translation files: `src/i18n/en_us.json` and `src/i18n/es_mx.json`

### Component System

The project follows a modular component architecture documented in `COMPONENT_SYSTEM.md`. Key patterns:

**Base UI Components** (`src/components/ui/`)
- All components use `React.forwardRef` for ref forwarding
- Props extend native HTML element props
- CSS variables from `src/styles/variables.css` for consistent styling
- Variants and sizes controlled via BEM-style class composition

**Key Components:**
- `Button` - Variants: `primary`, `secondary`, `outline`; Sizes: `sm`, `md`, `lg`
- `Text` - Polymorphic component (`as` prop) with typography system
- `Container` - Responsive containers with size options
- `Frame`, `ScrollContainer` - Animation/layout components for landing page

**Layout Components** (`src/components/layout/`)
- `Layout` - Main application wrapper with Navbar, Sidebar, and Footer
- `Navbar` - Top navigation with theme toggle and language selector
- `Sidebar` - Collapsible sidebar navigation
- `Footer` - Application footer

**Sections** (`src/components/sections/`)
- `IntroSection` - Landing page intro with animations
- `MainContent` - Landing page main content section

### Styling System

CSS architecture uses CSS custom properties for theming:

```css
/* All styles import from globals.css which imports: */
@import './variables.css';  /* Design tokens */
@import './theme.css';      /* Theme-specific overrides */
```

**Key CSS Variables** (from `src/styles/variables.css`):
- Colors: `--text-color`, `--dark-background`, `--light-background`, `--text-rgb`
- Typography: `--font-primary`, `--font-mono`, `--text-{size}`
- Spacing: `--space-{1-20}`
- Effects: `--radius-{size}`, `--shadow-{size}`, `--transition-{speed}`

Theme switching updates `data-theme` attribute which CSS uses to swap color values.

### Animation with GSAP

The landing page (`src/pages/LandingPage.tsx`) uses extensive GSAP animations:
- **Plugins registered**: `ScrollTrigger`, `TextPlugin`
- Complex scroll-triggered animations for intro sequence
- Timeline-based animations for logo and text reveals
- `useLayoutEffect` ensures animations run before paint

### TypeScript Configuration

Project uses TypeScript 5.8 with project references:
- `tsconfig.json` - Root configuration (references app and node configs)
- `tsconfig.app.json` - Application code configuration
- `tsconfig.node.json` - Vite/Node tooling configuration

### Build Tool

Using **Rolldown** (Vite fork) via `rolldown-vite@7.1.12`:
- Configured with `@vitejs/plugin-react-swc` for fast refresh
- Standard Vite configuration in `vite.config.ts`

## Development Guidelines

### Adding New Components

1. Create component in appropriate directory:
   - Reusable UI → `src/components/ui/`
   - Layout components → `src/components/layout/`
   - Page sections → `src/components/sections/`

2. Follow established patterns:
   ```tsx
   export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
     variant?: 'default' | 'special';
   }

   export const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
     ({ variant = 'default', className = '', ...props }, ref) => {
       const classes = ['new-component', `new-component--${variant}`, className]
         .filter(Boolean).join(' ');
       return <div ref={ref} className={classes} {...props} />;
     }
   );

   NewComponent.displayName = 'NewComponent';
   ```

3. Create corresponding CSS file using CSS variables
4. Export from appropriate `index.ts` barrel file

### Adding Translations

Add keys to both `src/i18n/en_us.json` and `src/i18n/es_mx.json`:
```json
{
  "section": {
    "nested": {
      "key": "Translation value"
    }
  }
}
```

Access via: `t("section.nested.key")` or with params: `t("key", { param: "value" })`

### Adding Routes

1. Create page component in `src/pages/`
2. Add route configuration in `src/main.tsx` router
3. Update navigation components if needed (Navbar, Sidebar)

### Working with Themes

- Theme state managed by `useThemeStore()` hook
- Add theme-specific styles using `data-theme` attribute selector:
  ```css
  [data-theme="light"] { --bg: white; }
  [data-theme="dark"] { --bg: black; }
  ```
- Theme persists automatically via Zustand middleware

## Important Notes

- **LocalStorage keys**: `userOnboarded`, `onboardingDate`, `locale`, `theme-storage`
- **GSAP animations** should use `useLayoutEffect` to prevent flicker
- All UI components support `className` prop for extension
- CSS follows BEM-style naming: `.component`, `.component--variant`, `.component__element`
