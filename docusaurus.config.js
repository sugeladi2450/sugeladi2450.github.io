// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'sugeladi2450',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // 网站基础配置
  url: 'https://sugeladi2450.github.io',
  baseUrl: '/',
  organizationName: 'sugeladi2450', 
  projectName: 'sugeladi2450.github.io', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // 链接检查配置
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 🟢 语言配置：统一为 'en' 防止构建报错
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/sugeladi2450/sugeladi2450.github.io/edit/main/',
        },
        // 🟢 博客配置：恢复正常功能
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/sugeladi2450/sugeladi2450.github.io/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Sugeladi的空间',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '课程笔记',
          },
          // 🟢 导航栏：加回“技术博客”按钮
          {to: '/blog', label: '技术博客', position: 'left'},
          {
            href: 'https://github.com/sugeladi2450',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // 这里的 Docs 栏目已删除，防止死链报错
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sugeladi2450. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;