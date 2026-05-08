// Sends a GA4 page_view on every client-side route change.
// The gtag.js loader + initial config live in nuxt.config.ts head.script.
export default defineNuxtPlugin(() => {
  const { gaId } = useRuntimeConfig().public
  if (!gaId) return

  const router = useRouter()
  router.afterEach((to) => {
    // gtag is defined globally by the loader script in <head>
    // @ts-expect-error - gtag is injected at runtime
    if (typeof gtag === 'function') {
      // @ts-expect-error - gtag is injected at runtime
      gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.href,
        page_title: document.title,
      })
    }
  })
})
