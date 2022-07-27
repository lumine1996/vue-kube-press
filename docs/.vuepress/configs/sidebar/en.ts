import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      collapsible: true,
      children: [
        '/guide/README.md',
        '/guide/getting-started.md',
      ],
    },
  ],
}