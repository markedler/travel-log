import antfu from "@antfu/eslint-config";

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(antfu({
  type: "app",
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: ["package.json", "**/migrations/*", ".pnpm-store/**"],
}, {
  rules: {
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
    "unused-imports/no-unused-imports": ["warn"],
  },
}));
