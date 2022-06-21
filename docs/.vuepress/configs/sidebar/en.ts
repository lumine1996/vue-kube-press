import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/getting-started.md'
      ],
    },
  ],
  '/api/': [
    {
      text: 'Api Doc',
      children: [
        '/api/README.md',
      ],
    },
  ],
  '/design/': [
    {
      text: 'Program Design',
      children: [
        '/design/README.md',
      ],
    },
  ],
}