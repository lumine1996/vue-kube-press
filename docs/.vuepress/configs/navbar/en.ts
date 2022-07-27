import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Learn More',
    children: [
      {
        text: 'Kubernetes',
        children: [
          {
            text: 'Offical Docs',
            link: 'https://kubernetes.io/docs/home/',
          },
          {
            text: 'GitHub',
            link: 'https://github.com/kubernetes/kubernetes',
          },
        ],
      },
      {
        text: 'Docker',
        children: [
          {
            text: 'Offical Docs',
            link: 'https://docs.docker.com/',
          },
          {
            text: 'Docker Hub',
            link: 'https://hub.docker.com/',
          },
        ],
      },
      {
        text: 'Resources',
        children: [
          {
            text: 'Awesome VuePress',
            link: 'https://github.com/vuepress/awesome-vuepress',
          },
          {
            text: 'Spring Framework',
            link: 'https://spring.io/projects/spring-framework',
          },
          {
            text: 'Element UI',
            link: 'https://element.eleme.cn/#/en-US',
          }
        ],
      },
    ],
  },
]