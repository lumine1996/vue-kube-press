import { defineUserConfig } from 'vuepress'
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'

const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'https://vuejs.org/images/logo.png' }]],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
        lang: 'en-US',
        title: 'Doc Center',
        description: 'The site is based on VuePress.',

    },
    '/zh/': {
        lang: 'zh-CN',
        title: '文档中心',
        description: '此站点基于VuePress构建',
    },
  },
  theme: defaultTheme({
    // logo: '/images/hero.png',
    repo: 'lumine1996/vue-kube-press',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
        selectLanguageName: 'English',
      },
      '/zh/': {
        // navbar
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '作者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '页面未找到',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
      },
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ]
})