import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..', '..')

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^@plasticine-design\/(.*)$/,
        replacement: `${resolve(PROJECT_ROOT, 'packages')}/$1/src/index.ts`,
      },
    ],
  },

  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'PlasticineDesign',
      fileName: 'plasticine-design',
      formats: ['cjs', 'es', 'iife', 'umd'],
    },

    rollupOptions: {
      external: ['react/jsx-runtime'],
    },
  },
})
