# Waku Codebase Structure

## Repository Root

```
waku/
├── packages/           # Main packages (monorepo)
│   ├── waku/          # Core framework
│   ├── create-waku/   # CLI scaffolding tool
│   └── website/       # Documentation site
├── examples/          # Example projects (30+)
├── e2e/               # End-to-end tests (Playwright)
├── docs/              # Documentation
├── .github/           # GitHub Actions workflows
└── [config files]     # eslint, prettier, tsconfig, etc.
```

## Core Package: packages/waku

```
packages/waku/
├── src/
│   ├── main.ts                 # Main exports
│   ├── main.react-server.ts    # React Server exports
│   ├── cli.ts                  # CLI implementation
│   ├── client.ts               # Client-side exports
│   ├── server.ts               # Server-side exports (getEnv, etc.)
│   ├── config.ts               # Configuration types
│   ├── internals.ts            # Internal APIs
│   ├── vite-plugins.ts         # Vite plugin exports
│   ├── adapters/               # Deployment adapters
│   │   ├── vercel.ts
│   │   ├── netlify.ts
│   │   ├── cloudflare.ts
│   │   ├── deno.ts
│   │   ├── aws-lambda.ts
│   │   └── edge.ts
│   ├── router/                 # Router implementation
│   │   ├── client.ts
│   │   └── server.ts
│   ├── minimal/                # Minimal API
│   │   ├── client.ts
│   │   └── server.ts
│   └── lib/                    # Internal libraries
├── tests/                      # Unit tests (Vitest)
├── cli.js                      # CLI entry point
└── package.json
```

## Export Paths (waku package)

- `waku` - Main exports (Link, Slice)
- `waku/config` - defineConfig
- `waku/client` - Client utilities
- `waku/server` - Server utilities (getEnv, fsRouter)
- `waku/router` - Router types (PageProps)
- `waku/router/client` - Client router (useRouter)
- `waku/router/server` - Server router
- `waku/adapters/*` - Deployment adapters
- `waku/minimal/*` - Minimal API

## Waku Application Structure (User Projects)

```
my-waku-app/
├── src/
│   ├── pages/                  # File-based routing
│   │   ├── _layout.tsx         # Root layout
│   │   ├── _root.tsx           # HTML root customization
│   │   ├── index.tsx           # Home page (/)
│   │   ├── about.tsx           # /about
│   │   ├── [slug].tsx          # Dynamic route
│   │   ├── [...catchAll].tsx   # Catch-all route
│   │   ├── (group)/            # Route groups
│   │   ├── _api/               # API routes
│   │   ├── _slices/            # Slice components
│   │   ├── _components/        # Ignored (not routed)
│   │   └── _hooks/             # Ignored (not routed)
│   ├── components/             # Shared components
│   ├── actions/                # Server actions
│   └── styles.css              # Global styles
├── public/                     # Static assets
├── private/                    # Server-only files
├── waku.config.ts              # Waku configuration
└── package.json
```
