import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'API文档',
    children: [
      {
        text: '编排',
        children: [
          'Deployment.md',
          'Deployment(站点).md',
          '实验.md',
          '命名空间,md',
          '节点.md',
          'Pod.md'
        ],
      },
      {
        text: '账户',
        children: [
          '用户.md',
          '组织.md',
          '角色.md',
          '权限.md',
          '资源申请.md',
        ],
      },
      {
        text: '资源目录',
        children: [
          '镜像.md',
          'helm.md',
          '文件.md'
        ],
      },
    ],
  },
  {
    text: '技术文档',
    children: [
      {
        text: '部署',
        children: [
          '前置工作.md',
          '部署.md',
        ],
      },
      {
        text: '设计',
        children: [
          '/zh/reference/bundler/vite.md',
          '/zh/reference/bundler/webpack.md',
        ],
      },
    ],
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