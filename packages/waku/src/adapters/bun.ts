import path from 'node:path';
import { Hono } from 'hono';
import type { MiddlewareHandler } from 'hono';
import {
  unstable_constants as constants,
  unstable_createServerEntryAdapter as createServerEntryAdapter,
  unstable_honoMiddleware as honoMiddleware,
} from 'waku/internals';
import type { BuildOptions } from './bun-build-enhancer.js';

const { DIST_PUBLIC } = constants;
const { contextMiddleware, rscMiddleware, middlewareRunner } = honoMiddleware;

// Check if running in Bun runtime
const isBunRuntime = typeof (globalThis as any).Bun !== 'undefined';

// Import serveStatic from hono/bun only in Bun runtime
// This will be tree-shaken in Node.js builds
let serveStaticFn: typeof import('hono/bun').serveStatic | null = null;
if (isBunRuntime) {
  try {
    // Use dynamic import to avoid bundling issues in Node.js
    const honoBun = await import('hono/bun');
    serveStaticFn = honoBun.serveStatic;
  } catch {
    // Ignore if hono/bun is not available
  }
}

export default createServerEntryAdapter(
  (
    { processRequest, processBuild, config, isBuild, notFoundHtml },
    options?: {
      middlewareFns?: (() => MiddlewareHandler)[];
      middlewareModules?: Record<string, () => Promise<unknown>>;
    },
  ) => {
    const { middlewareFns = [], middlewareModules = {} } = options || {};
    const app = new Hono();
    app.notFound((c) => {
      if (notFoundHtml) {
        return c.html(notFoundHtml, 404);
      }
      return c.text('404 Not Found', 404);
    });
    if (isBuild && serveStaticFn) {
      app.use(
        `${config.basePath}*`,
        serveStaticFn({
          root: path.join(config.distDir, DIST_PUBLIC),
          rewriteRequestPath: (p: string) => p.slice(config.basePath.length - 1),
        }),
      );
    }
    app.use(contextMiddleware());
    for (const middlewareFn of middlewareFns) {
      app.use(middlewareFn());
    }
    app.use(middlewareRunner(middlewareModules as never));
    app.use(rscMiddleware({ processRequest }));
    const buildOptions: BuildOptions = {
      distDir: config.distDir,
    };
    return {
      fetch: app.fetch,
      build: processBuild,
      buildOptions,
      buildEnhancers: ['waku/adapters/bun-build-enhancer'],
    };
  },
);
