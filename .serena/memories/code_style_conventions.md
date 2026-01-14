# Waku Code Style & Conventions

## General Style

- **Language:** TypeScript (strict mode)
- **Module System:** ESM (`"type": "module"`)
- **Quotes:** Single quotes (Prettier config)
- **Semicolons:** Yes (default Prettier)
- **Trailing Commas:** Default Prettier behavior (jsonc: none)

## TypeScript Configuration

Key compiler options:
```json
{
  "strict": true,
  "target": "esnext",
  "module": "nodenext",
  "verbatimModuleSyntax": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noUncheckedIndexedAccess": true,
  "exactOptionalPropertyTypes": true,
  "jsx": "react-jsx"
}
```

## ESLint Rules

### Key Rules
- `@typescript-eslint/no-floating-promises: error` - Must handle promises
- `@typescript-eslint/no-explicit-any: off` - `any` is allowed
- `curly: ['error', 'all']` - Always use braces
- `unicorn/prefer-string-slice: error` - Use `slice()` over `substring()`

### Unused Variables
```typescript
// Prefix with underscore to ignore
const _unusedVar = 1;
function fn(_unusedParam: string) {}
```

### Import Order (Enforced)
1. `react` (first)
2. Built-in modules
3. External packages
4. Internal modules
5. Parent imports (`../`)
6. Sibling imports (`./`)
7. Index imports

Alphabetical within each group, no newlines between groups.

### React Types
```typescript
// ❌ Don't use React namespace
const Component: React.FC = ...

// ✅ Import directly
import { FC } from 'react';
const Component: FC = ...
```

## File Naming

- **Components:** PascalCase (e.g., `MyComponent.tsx`)
- **Utilities:** camelCase or kebab-case
- **Pages:** kebab-case (e.g., `about-us.tsx`)
- **Test files:** `*.test.ts` or in `tests/` directory

## Component Patterns

### Server Components (default)
```tsx
// No directive needed - server component by default
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

### Client Components
```tsx
'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
};
```

### Server Actions
```tsx
// Inline in server component
const action = async (formData: FormData) => {
  'use server';
  // ...
};

// Or in separate file with top-level directive
'use server';
export async function action() { ... }
```

### Page Configuration
```tsx
export const getConfig = async () => {
  return {
    render: 'static', // or 'dynamic'
    staticPaths: ['path1', 'path2'], // for segment routes
  } as const;
};
```

## Playwright Tests

- Use `playwright/flat/recommended` config
- Conditional skipping allowed
- Tests in `e2e/` directory
