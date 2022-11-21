import { defineConfig } from 'islandjs'

import { resolve } from 'path'

import { PROJECT_ROOT } from '@plasticine-design/shared'

export default defineConfig({
  lang: 'en-US',
  vite: {
    server: {
      fs: {
        allow: [PROJECT_ROOT],
      },
    },
    resolve: {
      alias: {
        '@plasticine-design/components': resolve(
          PROJECT_ROOT,
          'packages/components/src/index.ts',
        ),
      },
    },
  },
  themeConfig: {
    locales: {
      '/zh-CN/': {
        lang: 'zh-CN',
        label: '简体中文',
        title: 'Plasticine Design',
        description: 'A React Component Library',
        outlineTitle: '目录',
        nav: [{ text: '组件', link: '/zh-CN/components/button' }],
        sidebar: {
          '/zh-CN/': [
            {
              text: 'Basic 基础组件',
              items: [
                { text: 'Button 按钮', link: '/zh-CN/components/button' },
              ],
            },
          ],
        },
      },

      '/en-US/': {
        lang: 'en-US',
        label: 'English',
        title: 'Plasticine Design',
        description: '一个 React 组件库',
      },
    },
  },
})
