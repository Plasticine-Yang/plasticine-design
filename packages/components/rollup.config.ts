import { defineConfig } from 'rollup'

import pluginTypeScript from '@rollup/plugin-typescript'
import pluginNodeResolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
  ],
  external: ['react/jsx-runtime'],
  plugins: [
    pluginNodeResolve(),
    pluginTypeScript({ tsconfig: './tsconfig.json' }),
  ],
})
