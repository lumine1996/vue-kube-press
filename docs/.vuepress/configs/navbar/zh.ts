import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/zh/guide/',
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
