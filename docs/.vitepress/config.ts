import mathjax3 from 'markdown-it-mathjax3';
import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'

const customElements = ['mjx-container'];

export default defineConfig({
  base: '/Demo/',
  title: 'Demo',
  description: 'Demo',
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: '', src: "//finicounter.eu.org/finicounter.js" }]
  ],
  vite: {
    plugins: [
      Unocss()
    ]
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
  themeConfig: {
    siteTitle: 'Demo Note',
    logo: 'img/logo.png',
    outline: false,
    sidebar: [
      {
        text: 'Game',
        items: [
          {
            text: 'minesweeper',
            link: '/Game/minesweeper.md'
          },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Casper Huang.'
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/howcasperwhat/Demo" }
    ]
  },
})