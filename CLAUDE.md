# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a **pnpm monorepo** with a fullstack TypeScript application consisting of:

- **[apps/client](apps/client/)** - React frontend with Vite, TanStack Router, and Tailwind CSS
- **[apps/server](apps/server/)** - Express.js backend API server
- **[apps/database](apps/database/)** - Drizzle ORM database layer with PostgreSQL
- **[packages/fe-be-utils](packages/fe-be-utils/)** - Shared utilities between frontend and backend

### Workspace Dependencies

Workspace packages reference each other using `workspace:*` protocol in package.json. The monorepo uses pnpm workspaces configured in [pnpm-workspace.yaml](pnpm-workspace.yaml).

## Common Commands

### Root Level Commands

```bash
# Install all dependencies
pnpm install

# Lint entire monorepo (excludes client, which has its own config)
pnpm lint
```

## Development Workflow

### TypeScript Configuration

All packages use strict TypeScript with:

- `strict: true`
- `noUncheckedIndexedAccess: true`
- Node.js module resolution (`NodeNext`)
- ESM output (`module: "NodeNext"`)

The server and database packages generate declaration files for type sharing.

### ESLint Configuration

- **Root**: Shared ESLint config exported from [eslint.config.js](eslint.config.js) using typescript-eslint flat config
- **Rules**: Enforces `no-console: error` and `no-debugger: error` across TypeScript files
- **Client**: Has its own ESLint config (excluded from root linting)
- **Database/Server**: Include eslint-plugin-drizzle for ORM-specific linting

### Git Hooks

Pre-commit hook ([.husky/pre-commit](.husky/pre-commit)) runs **gitleaks** to scan staged files for secrets before allowing commits.

## Your identity

- You are a super senior software engineer.
- You are an expert at:
  - TypeScript/JavaScript
  - React
  - Vite
  - CSS/Tailwind CSS
  - shadcn
  - Drizzle ORM
  - Postgres SQL database
  - Express
  - LLMs - OpenAI, Anthropic, Gemini
- You always follow coding best practices.
- You do not over engineer.
- You write straight forward code to solve problem at hand.
