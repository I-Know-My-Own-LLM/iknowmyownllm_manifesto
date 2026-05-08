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
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gaId: GA_ID,
    },
  },

  // Support GitHub Pages deployment with base URL
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'I Know My Own LLM — Community Manifesto for Evaluating AI Platforms',
      script: gaScripts,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A community-driven manifesto with 8 actionable principles for evaluating AI platforms. Evidence over promises, transparency over hype. Sign and join the movement.' },
        { name: 'keywords', content: 'AI manifesto, evaluate AI platforms, AI due diligence, AI red flags, trustworthy AI principles, AI fraud prevention, AI transparency, AI accountability' },
        { name: 'author', content: 'I Know My Own LLM' },
        { property: 'og:site_name', content: 'I Know My Own LLM' },
        { property: 'og:title', content: 'Community Manifesto for Evaluating AI Platforms' },
        { property: 'og:description', content: '8 actionable principles to protect yourself from AI fraud. Evidence over promises, transparency over hype. Join the community.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://iknowmyllm.com/' },
        { property: 'og:image', content: 'https://iknowmyllm.com/hero_banner.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@iknowmyllm' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'canonical', href: 'https://iknowmyllm.com/' },
      ],
    },
  },

  css: ['@/assets/css/main.css'],

  ssr: true,
})
