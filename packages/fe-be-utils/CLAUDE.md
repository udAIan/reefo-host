# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the **fe-be-utils** package.

## Package Overview

This package contains shared TypeScript utilities used across both the frontend ([apps/client](../../apps/client/)) and backend ([apps/server](../../apps/server/)) applications in this monorepo.

## Development

### Build Commands

```bash
# Watch mode for development
pnpm dev

# Production build (lints, cleans, and compiles)
pnpm build

# Lint only
pnpm lint
```

### TypeScript Configuration

Uses strict TypeScript settings:

- **Module System**: ESM with `NodeNext` module resolution
- **Strictness**: Full strict mode with `noUncheckedIndexedAccess`
- **Output**: Compiles `src/` to `dist/` with declaration files and source maps
- **Target**: ES2022

### Package Structure

- **Source**: All code lives in [src/](src/)
- **Entry Point**: [src/index.ts](src/index.ts)
- **Output**: `dist/` directory (generated, not committed)
- **Exports**: Package exports types and compiled code via `dist/index.js` and `dist/index.d.ts`

### Usage in Other Packages

This package is consumed by other workspace packages using the `workspace:*` protocol:

```json
{
  "dependencies": {
    "fe-be-utils": "workspace:*"
  }
}
```

Import utilities as:

```typescript
import { FE_BE_UTILS } from "fe-be-utils";
```

## Guidelines

- Export all shared utilities from [src/index.ts](src/index.ts)
- Keep utilities framework-agnostic (no React/Express-specific code)
- All exports must work in both browser and Node.js environments
- Follow the monorepo's TypeScript and ESLint conventions
