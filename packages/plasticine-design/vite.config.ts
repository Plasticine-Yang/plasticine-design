import { defineConfig } from 'vite'

import { resolve } from 'path'

import { PROJECT_ROOT } from '@plasticine-design/shared'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@plasticine-design\/(.*)$/,
        replacement: resolve(PROJECT_ROOT, 'packages/$1/src/index.ts'),
      },
    ],
  },

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'PlasticineDesign',
      fileName: 'plasticine-design',
      formats: ['cjs', 'es'],
    },

    rollupOptions: {
      external: ['react/jsx-runtime'],
    },
  },
})
