# simple-vue3-template-ts

A minimal Vue 3 starter powered by Vite, with TypeScript, Pinia, UnoCSS, Naive UI, and Vue Router 5 file-based routing.

## Features

- Vue 3 + TypeScript
- Vite
- Pinia
- UnoCSS
- Naive UI
- Vue Router 5
- Vitest

## Getting Started

```bash
pnpm install
pnpm dev
```

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm type-check
pnpm test:unit
```

## Routing

This project uses Vue Router 5 file-based routing.

- Pages live in `src/pages`
- `src/pages/index.vue` maps to `/`
- `src/pages/about.vue` maps to `/about`
- Typed routes are generated in `src/typed-router.d.ts`

To add a new route, create a new `.vue` file in `src/pages`.
