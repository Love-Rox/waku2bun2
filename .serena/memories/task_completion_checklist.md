# Task Completion Checklist

When completing a task in the Waku codebase, ensure the following:

## Before Committing

### 1. Code Quality
- [ ] Run linting: `pnpm run test:lint`
- [ ] Check formatting: `prettier -c .`
- [ ] Fix formatting if needed: `prettier -w .`
- [ ] TypeScript compiles: `tsc -b`

### 2. Testing
- [ ] Run unit tests: `pnpm run test:unit`
- [ ] Run E2E tests if relevant: `pnpm run e2e`
- [ ] Add tests for new functionality

### 3. Build Verification
- [ ] Compile waku package: `pnpm run compile`
- [ ] Test affected examples if applicable

## Quick Commands

```bash
# Full test suite
pnpm run test

# Just lint and type check
pnpm run test:lint

# Unit tests only
pnpm run test:unit

# E2E tests
pnpm run e2e
```

## Checklist by Change Type

### Modifying `packages/waku`
1. `pnpm run compile` - Rebuild the package
2. `pnpm -F waku test` - Run unit tests
3. `pnpm run test:lint` - Check linting
4. Test with an example project

### Adding New Example
1. Create in `examples/` directory
2. Add to `tsconfig.json` references if needed
3. Run `pnpm run tsc-examples` to verify TypeScript

### Modifying Website
1. `pnpm run website:dev` - Test locally
2. `pnpm run website:build` - Verify build

### E2E Test Changes
1. `pnpm run e2e-dev` - Run in dev mode
2. `pnpm run e2e-prd` - Run in production mode

## Notes

- Always rebuild `waku` package (`pnpm run compile`) before testing examples
- The monorepo uses workspace protocol (`workspace:*`) for internal dependencies
- Playwright tests require compiled waku package
