import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
  },
  {
    text: '了解更多',
    children: [
      {
        text: 'Kubernetes',
        children: [
          {
            text: '官方文档',
            link: 'https://kubernetes.io/zh-cn/docs/home/',
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
            text: '官方文档',
            link: 'https://docs.docker.com/',
          },
          {
            text: '中文教程',
            link: 'https://www.runoob.com/docker/docker-tutorial.html',
          },
          {
            text: 'Docker Hub',
            link: 'https://hub.docker.com/',
          },
        ],
      },
      {
        text: '其他资源',
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
            link: 'https://element.eleme.cn/#/zh-CN',
          }
        ],
      },
    ],
  },
]
