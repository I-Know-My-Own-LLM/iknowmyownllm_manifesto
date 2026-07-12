// https://nuxt.com/docs/api/configuration/nuxt-config
const GA_ID = process.env.NUXT_PUBLIC_GA_ID || 'G-QJV29REJZC'
const gaScripts = GA_ID
  ? [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
      },
      {
        innerHTML: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
      },
    ]
  : []

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      gaId: GA_ID,
    },
  },

  // Support GitHub Pages deployment with base URL
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'I Know My Own LLM — Community Manifesto for Evaluating AI Platforms',
      script: gaScripts,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'I Know My Own LLM' },
        { name: 'twitter:site', content: '@iknowmyllm' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', as: 'image', href: '/hero_banner.jpg', fetchpriority: 'high' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@500;700;800&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap' },
      ],
    },
  },

  css: ['@/assets/css/main.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: []
    }
  },

  ssr: true,
})
