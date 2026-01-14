# waku2bun2

Bunネイティブ対応を目指した [Waku](https://github.com/wakujs/waku) のフォークです。

## このフォークについて

**waku2bun2** は、Wakuフレームワークを Bun ランタイムでネイティブ実行できるようにすることを目的としたフォークです。本家Wakuがメジャーリリースを完了した後、これらの変更をPRとして提案する予定です。

### 変更点

| 変更 | 説明 |
|------|------|
| Bunアダプター修正 | SSR・静的ファイル配信の問題を修正 |
| React複数インスタンス問題修正 | `resolve.dedupe` でReactの重複バンドルを防止 |
| Content-Type charset修正 | UTF-8（日本語・絵文字）の正しい表示 |
| HTML重複タグ防止 | SSR出力時のタグ重複を修正 |
| CLIフォールバック機能 | `bun waku start` で `serve-node.js` へ自動フォールバック |

### 推奨ワークフロー

```bash
# 開発・ビルド（Node.jsで安定動作）
node waku dev
node waku build

# 本番（Bunで高速実行）
bun waku start
```

### 制限事項

- `bun waku dev` / `bun waku build` は内部でNode.jsを使用します（Vite互換性のため）
- `bunx --bun waku build` はSSG段階でReactの `react-server` 条件解決に問題があります
- 本番サーバーの実行のみBunネイティブで動作します

## 本家との同期

```bash
# upstreamから最新を取得
git fetch upstream
git merge upstream/main

# コンフリクトを解決後
git push origin feature/bun-native-support
```

## インストール

このフォークを使用する場合：

```bash
git clone https://github.com/sasagar/waku.git
cd waku
pnpm install
pnpm run compile
```

プロジェクトで使用：

```json
{
  "dependencies": {
    "waku": "link:../path/to/waku/packages/waku"
  }
}
```

---

# Waku (Original README)

以下は本家Wakuの説明です。

---

## Waku

The minimal React framework

visit [waku.gg](https://waku.gg) or `npm create waku@latest`

[![Build Status](https://img.shields.io/github/actions/workflow/status/wakujs/waku/test.yml?branch=main&style=flat&colorA=000000&colorB=000000)](https://github.com/wakujs/waku/actions?query=workflow%3ATest)
[![Version](https://img.shields.io/npm/v/waku?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Downloads](https://img.shields.io/npm/dt/waku.svg?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/waku)
[![Discord Shield](https://img.shields.io/discord/627656437971288081?style=flat&colorA=000000&colorB=000000&label=discord&logo=discord&logoColor=ffffff)](https://discord.gg/MrQdmzd)

### Introduction

**Waku** _(wah-ku)_ or **わく** is the minimal React framework. It's lightweight and designed for a fun developer experience, yet supports all the latest React 19 features like server components and actions. Built for marketing sites, headless commerce, and web apps. For large enterprise applications, you may prefer a heavier framework.

> Please try Waku on non-production projects and report any issues you find. Contributors are welcome.

### Getting started

Start a new Waku project with the `create` command for your preferred package manager. It will scaffold a new project with our default [Waku starter](https://github.com/wakujs/waku/tree/main/examples/01_template).

```sh
npm create waku@latest
```

#### Commands

- `waku dev` to start the local development server
- `waku build` to generate a production build
- `waku start` to serve the production build locally

**Node.js version requirement:** `^24.0.0` or `^22.12.0` or `^20.19.0`

### Documentation

詳細なドキュメントは [waku.gg](https://waku.gg) または本家リポジトリを参照してください。

### Community

Please join our friendly [GitHub discussions](https://github.com/wakujs/waku/discussions) or [Discord server](https://discord.gg/MrQdmzd) to participate in the Waku community. Hope to see you there!

### License

MIT
