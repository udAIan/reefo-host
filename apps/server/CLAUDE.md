# CLAUDE.md - Server

This file provides guidance to Claude Code when working with the **apps/server** package.

## Overview

Express.js backend API server built with TypeScript. Uses ESM modules and runs on Node.js.

## Package Structure

- **[src/index.ts](src/index.ts)** - Main server entry point with Express app configuration
- **[src/exported-types.ts](src/exported-types.ts)** - Types exported for use by other packages
- **[dist/](dist/)** - Compiled JavaScript output (gitignored)

## Dependencies

- **express** (v5) - Web framework
- **dotenv** - Environment variable management
- **database** (workspace) - Drizzle ORM database layer
- **fe-be-utils** (workspace) - Shared utilities

## Common Commands

```bash
# Development with hot reload
pnpm dev

# Build (runs lint + TypeScript compilation)
pnpm build

# Start production server
pnpm start

# Lint only
pnpm lint
```

## Development

### Running the Server

The dev server runs on `http://localhost:3000` by default (configurable via PORT constant in [src/index.ts](src/index.ts#L6)).

```bash
pnpm dev
```

Uses `nodemon` with `tsx` for TypeScript execution and auto-reload on file changes.

### Environment Variables

Loads environment variables from `.env` file via `dotenv/config` import at the top of [src/index.ts](src/index.ts#L1).

### Database Access

Import database instance and schemas from the `database` workspace package:

```typescript
import { db, _dummy } from "database";
```

### Type Exports

Types exported in [src/exported-types.ts](src/exported-types.ts) are compiled to `dist/exported-types.d.ts` for consumption by other packages.

## TypeScript Configuration

- **Module System**: ESM (`module: "NodeNext"`)
- **Target**: ES2022
- **Strict Mode**: Enabled with `noUncheckedIndexedAccess`
- **Output**: `dist/` directory with source maps and declaration files
- **Root**: `src/` directory

## ESLint Configuration

Inherits from root workspace ESLint config with additional Drizzle ORM linting rules via `eslint-plugin-drizzle`.

## Production Build

The build process:
1. Runs ESLint to check for errors
2. Cleans the `dist/` directory
3. Compiles TypeScript to JavaScript

Built files are ready for Node.js execution via `node dist/index.js`.
