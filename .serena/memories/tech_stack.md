# Waku Tech Stack

## Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| TypeScript | ^5.9.3 | Primary language |
| React | 19.2.3 | UI framework |
| React DOM | 19.2.3 | DOM rendering |
| react-server-dom-webpack | 19.2.3 | RSC support |
| Vite | ^7.2.0 | Build tool & dev server |
| Hono | ^4.10.0 | Server framework |

## Build & Development

| Tool | Purpose |
|------|---------|
| pnpm | Package manager (workspaces) |
| SWC | Fast TypeScript/JavaScript compiler |
| Vitest | Unit testing |
| Playwright | End-to-end testing |

## Code Quality

| Tool | Purpose |
|------|---------|
| ESLint | Linting |
| Prettier | Code formatting |
| TypeScript | Type checking |

## Key Vite Plugins

- `@vitejs/plugin-react` - React support
- `@vitejs/plugin-rsc` - React Server Components

## Server Runtime

- `@hono/node-server` - Node.js server adapter
- `hono` - Web framework (routing, middleware)

## Other Dependencies

- `dotenv` - Environment variable loading
- `magic-string` - String manipulation
- `picocolors` - Terminal colors
- `rsc-html-stream` - RSC HTML streaming

## Supported Runtimes

1. **Node.js** (primary) - ^24.0.0 || ^22.12.0 || ^20.19.0
2. **Cloudflare Workers** - Via adapter
3. **Deno** - Via adapter (experimental)
4. **AWS Lambda** - Via adapter (experimental)
5. **Vercel** - Native support
6. **Netlify** - Via adapter
