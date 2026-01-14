# Waku Development Commands

## Initial Setup

```bash
# Enable corepack for pnpm
corepack enable

# Install dependencies
pnpm install

# Build waku package (required before running examples)
pnpm run compile
```

## Development

```bash
# Watch mode for waku package
pnpm run dev

# Run specific example in dev mode
pnpm -F 01_template dev

# Build specific example
pnpm -F 01_template build

# Start specific example (production)
pnpm -F 01_template start
```

## Testing

```bash
# Run all tests (lint + unit + e2e)
pnpm run test

# Lint only
pnpm run test:lint

# Unit tests only
pnpm run test:unit

# E2E tests (all projects)
pnpm run e2e

# E2E tests - development mode only
pnpm run e2e-dev

# E2E tests - production mode only
pnpm run e2e-prd

# Watch mode for unit tests (in waku package)
pnpm -F waku test:watch
```

## Linting & Formatting

```bash
# Check formatting
prettier -c .

# Fix formatting
prettier -w .

# Run ESLint
eslint .

# Type checking
tsc -b
```

## Website (Documentation)

```bash
# Dev server for website
pnpm run website:dev

# Build website
pnpm run website:build

# Build and start production website
pnpm run website:prd

# Vercel deployment build
pnpm run website:vercel
```

## Package-Specific Commands

### waku package
```bash
cd packages/waku

# Development (watch mode)
pnpm run dev

# Build
pnpm run compile

# Run unit tests
pnpm run test
```

## Filtering by Package

Use `-F` or `--filter` to target specific packages:
```bash
pnpm -F waku <command>           # Core package
pnpm -F create-waku <command>    # CLI tool
pnpm -F waku-website <command>   # Website
pnpm -F 01_template <command>    # Example project
```

## Common Darwin (macOS) Commands

```bash
# File operations
ls -la                    # List files
find . -name "*.ts"       # Find files
grep -r "pattern" .       # Search in files

# Process management
lsof -i :3000             # Check port usage
kill -9 <pid>             # Kill process

# Git
git status
git diff
git log --oneline -10
```
