# Waku Project Overview

## What is Waku?

Waku (わく) is a **minimal React framework** designed for React 19+ with full support for:
- React Server Components (RSC)
- Server Actions
- File-based routing (pages router)
- Static Site Generation (SSG)
- Server-Side Rendering (SSR)

**Target use cases:** Marketing sites, headless commerce, web apps. For large enterprise applications, heavier frameworks may be preferred.

## Repository Structure

This is a **monorepo** managed with pnpm workspaces.

### Main Packages

- `packages/waku` - Core framework package (npm: `waku`)
- `packages/create-waku` - CLI for scaffolding new Waku projects
- `packages/website` - Official documentation website (waku.gg)

### Other Directories

- `examples/` - 30+ example projects demonstrating various features
- `e2e/` - End-to-end tests using Playwright
- `docs/` - Documentation files

## Current Version

- Version: 1.0.0-alpha.1
- Node.js requirement: `^24.0.0 || ^22.12.0 || ^20.19.0`

## Key Features

1. **File-based Routing** - Pages in `./src/pages/` directory
2. **Layouts** - `_layout.tsx` files for shared UI
3. **API Routes** - `./src/pages/_api/` for backend endpoints
4. **Slices** - Reusable components with configurable rendering (`_slices/`)
5. **Rendering Options** - `'static'` (SSG) or `'dynamic'` (SSR)
6. **Metadata** - Automatic head hoisting for title/meta/link tags
7. **Environment Variables** - `WAKU_PUBLIC_` prefix for client-accessible vars

## Core Dependencies

- React 19.2.3
- Vite 7.2.0
- Hono (server framework)
- @vitejs/plugin-rsc

## Deployment Targets

- Node.js (default)
- Vercel
- Netlify
- Cloudflare Workers
- Deno Deploy (experimental)
- AWS Lambda (experimental)
