import { defineConfig } from 'islandjs'

export default defineConfig({
  lang: 'en-US',
  themeConfig: {
    locales: {
      '/zh-CN/': {
        lang: 'zh-CN',
        label: '简体中文',
        title: 'Plasticine Design',
        description: 'A React Component Library',
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
