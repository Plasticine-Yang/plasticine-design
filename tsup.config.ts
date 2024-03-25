import { defineConfig } from 'tsup'

import { sassPlugin } from 'esbuild-sass-plugin'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  shims: true,
  sourcemap: true,
  esbuildPlugins: [sassPlugin({})],
})
