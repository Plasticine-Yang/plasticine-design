const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es2021: true,
    browser: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.tsx', '.js', '.mjs', '.cjs', '.jsx'],
      },
    },
  },

  overrides: [
    // 允许在 js, cjs, mjs, jsx 中使用 require
    {
      files: ['*.{js,cjs,mjs,jsx}'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],

  rules: {
    // eslint-plugin-import
    'import/no-unresolved': 'off',

    // TypeScript
    '@typescript-eslint/no-empty-function': 'off',
  },
})
