# CLAUDE.md - Database

This file provides guidance to Claude Code when working with the database layer.

## Overview

This is a **Drizzle ORM** database layer for PostgreSQL, built with:

- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM for SQL databases
- **[node-postgres (pg)](https://node-postgres.com/)** - PostgreSQL client for Node.js
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - CLI for schema migrations
- **TypeScript** - Strict type safety with declaration file generation

## Project Structure

```
apps/database/
├── src/
│   ├── index.ts          # Database client export and main entry
│   ├── schema/           # Drizzle schema definitions
│   │   ├── dummy.ts      # Example schema file
│   │   └── msEpoch.ts    # Timestamp utilities
│   └── utils/            # Database utility functions
├── drizzle/              # Generated migration files
├── drizzle.config.ts     # Drizzle Kit configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Package exports and scripts
```

## Development Commands

```bash
# Build package (lint + compile TypeScript)
pnpm build

# Generate migrations from schema changes
pnpm generate

# Run migrations against database
pnpm migrate

# Run ESLint
pnpm lint
```

## Database Configuration

### Environment Variables

Requires `DATABASE_URL` in `.env` file:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

Both [drizzle.config.ts](drizzle.config.ts) and [src/index.ts](src/index.ts) load environment variables using `dotenv/config`.

### Drizzle Kit Configuration

[drizzle.config.ts](drizzle.config.ts) configures:
- **Schema location**: `./src/schema` (all schema files in directory)
- **Migration output**: `./drizzle` directory
- **Dialect**: PostgreSQL
- **Credentials**: From `DATABASE_URL` environment variable

## Database Client

The database client is exported from [src/index.ts](src/index.ts):

```typescript
import { db } from "database"
```

### Client Setup

- Uses `node-postgres` Pool for connection pooling
- Drizzle instance created with `drizzle({ client: pool })`
- Connection string loaded from `process.env.DATABASE_URL`

## Schema Definitions

Schema files are located in [src/schema/](src/schema/):

### Creating Tables

Follow Drizzle ORM patterns:

```typescript
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})
```

### Schema Organization

- One file per table or related group of tables
- Export table definitions from individual files
- Re-export from [src/index.ts](src/index.ts) for package consumers

## Migrations

### Generating Migrations

After modifying schema files:

```bash
pnpm generate
```

This creates SQL migration files in [drizzle/](drizzle/) directory.

### Running Migrations

To apply migrations to database:

```bash
pnpm migrate
```

## TypeScript Configuration

**Strict mode with ESM output**:

```json
{
  "strict": true,
  "noUncheckedIndexedAccess": true,
  "module": "NodeNext",
  "moduleResolution": "NodeNext",
  "declaration": true,
  "declarationMap": true
}
```

- Generates `.d.ts` files for type sharing with other packages
- Uses Node.js ESM module resolution
- Source maps enabled for debugging
- Output directory: [dist/](dist/)

## Package Exports

Configured in [package.json](package.json):

```json
{
  "main": "dist/index.js",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  }
}
```

Other workspace packages import using:

```typescript
import { db, _dummy } from "database"
```

## ESLint Configuration

Uses root monorepo ESLint config with **eslint-plugin-drizzle** for ORM-specific linting rules:

- Enforces Drizzle best practices
- Catches common ORM mistakes
- TypeScript-aware linting

## Working with This Package

### Adding New Tables

1. Create new schema file in [src/schema/](src/schema/)
2. Define table using Drizzle ORM table builders
3. Export table from schema file
4. Re-export from [src/index.ts](src/index.ts) if needed
5. Run `pnpm generate` to create migration
6. Run `pnpm migrate` to apply migration

### Using in Other Packages

The database package is consumed by the server app:

```typescript
// In apps/server
import { db } from "database"

// Use Drizzle query builder
const users = await db.select().from(usersTable)
```

### Query Building

Use Drizzle ORM's type-safe query builder:

```typescript
import { db } from "database"
import { users } from "database"

// Select
await db.select().from(users).where(eq(users.id, 1))

// Insert
await db.insert(users).values({ name: "Alice" })

// Update
await db.update(users).set({ name: "Bob" }).where(eq(users.id, 1))

// Delete
await db.delete(users).where(eq(users.id, 1))
```

## Important Notes

- This package **generates declaration files** for type sharing
- Always run `pnpm generate` after schema changes
- Migration files in [drizzle/](drizzle/) should be committed to version control
- Uses connection pooling via `pg.Pool` for efficient database connections
- Includes **eslint-plugin-drizzle** for Drizzle-specific linting
