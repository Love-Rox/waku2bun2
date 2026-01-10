import { writeFileSync } from 'node:fs';
import path from 'node:path';

export type BuildOptions = { distDir: string };

async function postBuild({ distDir }: BuildOptions) {
  const SERVE_JS = 'serve-bun.js';
  const serveCode = `
const { INTERNAL_runFetch, unstable_serverEntry } = await import('./server/index.js');

const host = process.env.HOST || Bun.env.HOST;
const port = process.env.PORT || Bun.env.PORT;
const env = { ...Bun.env };

Bun.serve({
  fetch: (req, ...args) => INTERNAL_runFetch(env, req, ...args),
  ...(host ? { hostname: host } : {}),
  ...(port ? { port: parseInt(port, 10) } : {}),
});
`;
  writeFileSync(path.resolve(distDir, SERVE_JS), serveCode);
}

export default async function buildEnhancer(
  build: (utils: unknown, options: BuildOptions) => Promise<void>,
): Promise<typeof build> {
  return async (utils: unknown, options: BuildOptions) => {
    await build(utils, options);
    await postBuild(options);
  };
}
