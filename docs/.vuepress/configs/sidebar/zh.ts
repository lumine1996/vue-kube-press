import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
      ],
    },
  ],
  '/zh/api/': [
    {
      text: '接口文档',
      children: [
        '/zh/api/README.md',
      ],
    },
  ],
  '/zh/design/': [
    {
      text: '技术设计',
      children: [
        '/zh/design/README.md',
      ],
    },
  ],
}