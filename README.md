# waku2bun2

A fork of [Waku](https://github.com/wakujs/waku) focused on native Bun runtime support.

## About This Fork

**waku2bun2** is a fork of the Waku framework that enables native execution on the Bun runtime. These changes are intended to be proposed as a PR to the upstream repository after Waku's major release.

### Changes from Upstream

| Change | Description |
|--------|-------------|
| Bun Adapter Fixes | Fixed SSR and static file serving issues |
| React Multiple Instances Fix | Prevent duplicate React bundling with `resolve.dedupe` |
| Content-Type Charset Fix | Proper UTF-8 display for Japanese text and emoji |
| Duplicate HTML Tags Prevention | Fixed tag duplication in SSR output |
| CLI Fallback Feature | Auto-fallback to `serve-node.js` when running `bun waku start` |

### Current Status: Bun Native Support Blocked

⚠️ **Bun does not currently support React Server Components (RSC).**

Bun lacks support for React's `react-server` export condition, which is required for RSC processing. This affects all phases of Waku application execution:

| Phase | Bun Support | Reason |
|-------|-------------|--------|
| Build (`waku build`) | ❌ | `react-server` condition required for SSG |
| Dev Server (`waku dev`) | ❌ | `react-server` condition required |
| Production Server | ❌ | RSC requests require `react-server` at runtime |

### Error Example

When running with Bun, you may see:
```
Export named 'captureOwnerStack' not found in module 'react/index.js'
```

This is because Bun cannot resolve the `react-server` export condition.

### Recommended Workflow (Current)

Until Bun adds RSC support, use Node.js for all phases:

```bash
# Development
pnpm waku dev

# Build
pnpm waku build

# Production
node dist/serve-node.js
# or with port
PORT=3000 node dist/serve-node.js
```

### What This Fork Provides

While full Bun native support is blocked, this fork includes fixes that improve Waku stability:

| Fix | Description |
|-----|-------------|
| React Multiple Instances | Prevent duplicate React bundling with `resolve.dedupe` |
| Content-Type Charset | Proper UTF-8 display for Japanese text and emoji |
| Duplicate HTML Tags | Fixed tag duplication in SSR output |
| CLI Fallback | Auto-fallback to `serve-node.js` when `serve-bun.js` fails |

### Future: When Bun Supports RSC

Once Bun adds `react-server` export condition support, you can use:

```typescript
// waku.config.ts
import { defineConfig } from "waku/config";

export default defineConfig({
  unstable_adapter: "waku/adapters/bun",
});
```

```json
// package.json
{
  "scripts": {
    "start": "bun dist/serve-bun.js"
  }
}
```

### Tracking Bun RSC Support

- [Bun Issue: React Server Components support](https://github.com/oven-sh/bun/issues)

## Installation

### From GitHub Packages

This package is published to GitHub Packages and requires authentication.

#### 1. Create `.npmrc` in your project root:

```ini
@love-rox:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

#### 2. Set up GitHub authentication:

```bash
# Add read:packages scope to your GitHub CLI token
gh auth refresh -h github.com -s read:packages
```

#### 3. Install the package:

```bash
GITHUB_TOKEN=$(gh auth token) npm install @love-rox/waku
# or
GITHUB_TOKEN=$(gh auth token) pnpm add @love-rox/waku
```

#### 4. (Optional) Use as `waku` alias in `package.json`:

```json
{
  "dependencies": {
    "waku": "npm:@love-rox/waku@latest"
  }
}
```

### For Local Development

```bash
git clone https://github.com/Love-Rox/waku2bun2.git
cd waku2bun2
pnpm install
pnpm run compile
```

Link in your project:

```json
{
  "dependencies": {
    "waku": "link:../path/to/waku/packages/waku"
  }
}
```

## Branch Structure

```
main (upstream mirror)
  └── Synced with wakujs/waku main branch

waku2bun2 (default branch)
  └── Bun support changes + upstream merged
```

## Syncing with Upstream

```bash
# 1. Fetch latest from upstream
git fetch upstream

# 2. Update main to match upstream
git checkout main
git reset --hard upstream/main
git push origin main

# 3. Merge into waku2bun2
git checkout waku2bun2
git merge main
# Resolve conflicts if any
git push origin waku2bun2
```

---

# Waku (Original)

The following is the original Waku description.

---

## Waku

⛩️ The minimal React framework

Visit [waku.gg](https://waku.gg) or `npm create waku@latest`

[![Build Status](https://img.shields.io/github/actions/workflow/status/wakujs/waku/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/wakujs/waku/actions?query=workflow%3ATest)
[![Version](https://img.shields.io/npm/v/waku?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Downloads](https://img.shields.io/npm/dt/waku.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Discord Shield](https://img.shields.io/discord/627656437971288081?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/MrQdmzd)

### Introduction

**Waku** _(wah-ku)_ or **わく** is the minimal React framework. It's lightweight and designed for a fun developer experience, yet supports all the latest React 19 features like server components and actions.

### Getting Started

```sh
npm create waku@latest
```

#### Commands

- `waku dev` - Start the local development server
- `waku build` - Generate a production build
- `waku start` - Serve the production build locally

**Node.js version requirement:** `^24.0.0` or `^22.12.0` or `^20.19.0`

### Documentation

For detailed documentation, visit [waku.gg](https://waku.gg) or the [upstream repository](https://github.com/wakujs/waku).

### Community

Join our friendly [GitHub discussions](https://github.com/wakujs/waku/discussions) or [Discord server](https://discord.gg/MrQdmzd).

### License

MIT
