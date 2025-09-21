# GitHub Copilot Instructions

## Project Overview

This is a **Nuxt 4** travel log application built with Vue 3, TypeScript, and Tailwind CSS with daisyUI components.

## Key Technologies

- **Nuxt 4** (NOT Nuxt 3) - Latest version with new features and improvements
- Vue 3 with Composition API
- TypeScript
- Tailwind CSS v4
- daisyUI v5.1 for UI components
- **pnpm as package manager** (NOT npm, yarn, or bun)

## Project Structure

- `app/` - Main application directory (Nuxt 4 structure)
  - `app.vue` - Root application component
  - `pages/` - File-based routing
  - `layouts/` - Layout components
  - `components/` - Reusable Vue components
  - `assets/css/` - Stylesheets

## Package Management

- **ALWAYS use pnpm** for all package management operations
- Use `pnpm install`, `pnpm add`, `pnpm remove`, etc.
- Never suggest npm, yarn, or bun commands
- This project uses pnpm workspaces (see `pnpm-workspace.yaml`)

## Code Generation Guidelines

### Use Nuxt 4 Syntax and Features

- Always use Nuxt 4 APIs and conventions
- Leverage new Nuxt 4 features when available
- Use the `app/` directory structure (not `src/`)

### Vue 3 Composition API

- Use `<script setup>` syntax
- Prefer Composition API over Options API
- Use Nuxt 4 composables like `useHead()`, `useFetch()`, `useRoute()`, etc.

### Styling

- Use Tailwind CSS v4 utility classes
- Utilize daisyUI v5.1 components (hero, btn, card, etc.)
- Maintain consistent theming with light/dark mode support
- CSS imports use `@import "tailwindcss";` for v4

### TypeScript

- All new files should use TypeScript
- Provide proper type definitions
- Use Nuxt 4's built-in TypeScript support

## Important Notes

- This project uses **Nuxt 4**, not Nuxt 3
- File structure follows Nuxt 4 conventions
- **Package manager is pnpm** - do not suggest other package managers
- Always check Nuxt 4 documentation for latest features and breaking changes
