# CLAUDE.md - Client App

This file provides guidance to Claude Code when working with the React frontend application.

## Overview

This is a **React 19** frontend application built with:

- **[Vite](https://vite.dev/)** - Build tool and dev server
- **[TanStack Router](https://tanstack.com/router/latest)** - Type-safe file-based routing
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Customizable component library
- **TypeScript** - Strict type safety

## Project Structure

```
apps/client/
├── src/
│   ├── routes/           # TanStack Router file-based routes
│   │   ├── ~__root.tsx   # Root route layout
│   │   └── ~app/         # App routes with nested layouts
│   ├── shadcn/           # shadcn/ui components and utilities
│   │   ├── components/   # UI components (Button, Input, Sidebar, etc.)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions (cn, etc.)
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript project references
├── tsconfig.app.json     # App TypeScript config
├── tsconfig.node.json    # Node (Vite) TypeScript config
└── eslint.config.js      # ESLint flat config
```

## Development Commands

```bash
# Start dev server (http://localhost:5173)
pnpm dev

# Type check and build for production
pnpm build

# Run ESLint
pnpm lint

# Preview production build
pnpm preview
```

## Routing with TanStack Router

This app uses **file-based routing** with TanStack Router:

- Files prefixed with `~` in [src/routes/](src/routes/) become routes
- `~__root.tsx` - Root layout for the entire app
- `~_layout.tsx` - Layout routes (non-index routes that wrap children)
- Route tree is auto-generated in [src/routeTree.gen.ts](src/routeTree.gen.ts)
- Vite plugin configured with `autoCodeSplitting: true` for optimal bundle splitting

### Route Naming Convention

TanStack Router uses `~` prefix for route files (configured in [tsr.config.json](tsr.config.json)):
- `~__root.tsx` → root route
- `~app/~_layout.tsx` → layout at `/app`
- `~app/~_layout/~route1.tsx` → route at `/app/route1`

## Styling

### Tailwind CSS v4

- Uses **Tailwind CSS v4** with Vite plugin
- Global styles in [src/index.css](src/index.css)
- Includes [tw-animate-css](https://github.com/ben-rogerson/twin.macro) for animation utilities

### shadcn/ui Components

Pre-configured components in [src/shadcn/](src/shadcn/):
- **Components**: Avatar, Button, Input, Dropdown Menu, Sheet, Sidebar, Skeleton, Tooltip, Separator
- **Utilities**: `cn()` function from [src/shadcn/lib/utils.ts](src/shadcn/lib/utils.ts) for class merging
- **Hooks**: `useMobile()` from [src/shadcn/hooks/use-mobile.ts](src/shadcn/hooks/use-mobile.ts)
- Built with Radix UI primitives and styled with Tailwind
- Uses [class-variance-authority](https://cva.style/) for component variants

## TypeScript Configuration

**Strict mode enabled** with additional checks:

```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noFallthroughCasesInSwitch": true,
  "noUncheckedSideEffectImports": true
}
```

- Uses `bundler` module resolution (Vite-specific)
- Allows `.ts` extensions in imports (`allowImportingTsExtensions: true`)
- No emit (`noEmit: true`) - Vite handles bundling
- JSX configured as `react-jsx` (automatic runtime)

## ESLint Configuration

Custom flat config in [eslint.config.js](eslint.config.js):

- Uses `typescript-eslint` with recommended rules
- **React plugins**: `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **Custom rules**:
  - Unused vars with `^_` prefix ignored
  - React Refresh: warn on non-component exports (allows constant exports)
- Browser globals configured

## Vite Plugins

Three plugins configured in [vite.config.ts](vite.config.ts):

1. **@tanstack/router-plugin** - Auto-generates route tree with code splitting
2. **@vitejs/plugin-react** - Fast Refresh and JSX transform
3. **@tailwindcss/vite** - Tailwind CSS v4 integration

## Dependencies

### Core
- `react` & `react-dom` (v19)
- `@tanstack/react-router` - Type-safe routing
- `tailwindcss` v4 & `@tailwindcss/vite`

### UI Libraries
- `@radix-ui/*` - Unstyled, accessible component primitives
- `lucide-react` - Icon library
- `class-variance-authority` - Component variant utilities
- `clsx` & `tailwind-merge` - Class name utilities

### Workspace
- `fe-be-utils: workspace:*` - Shared utilities from monorepo

## Working with This App

### Adding New Routes

1. Create file in [src/routes/](src/routes/) with `~` prefix
2. Route tree auto-regenerates on save
3. Import and use in route component

### Adding shadcn/ui Components

Components are pre-installed in [src/shadcn/components/](src/shadcn/components/). To use:

```tsx
import { Button } from "~/shadcn/components/button"
```

### Using Workspace Utilities

Import shared utilities from `fe-be-utils`:

```tsx
import { someUtil } from "fe-be-utils"
```

### Icon Usage

Use Lucide icons:

```tsx
import { Menu, X } from "lucide-react"
```

## Important Notes

- This app has its **own ESLint config** (excluded from root monorepo linting)
- Dev server runs on port 5173 by default
- TanStack Router provides full type safety for routes and navigation
- All routes are automatically code-split for optimal performance
