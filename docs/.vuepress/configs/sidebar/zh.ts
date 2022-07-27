import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/guide/': [
    {
      text: '指南',
      children: [
        '/zh/guide/README.md',
        '/zh/guide/getting-started.md',
        '/zh/guide/dashboard.md',
        '/zh/guide/application.md',
        '/zh/guide/account.md',
        '/zh/guide/quota.md',
        '/zh/guide/catalog.md',
        '/zh/guide/file.md',
        '/zh/guide/system.md',
      ],
    },
  ],
}