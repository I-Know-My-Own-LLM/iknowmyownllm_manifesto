type EventParams = Record<string, string | number | boolean | undefined>

export function useAnalytics() {
  function trackEvent(eventName: string, params: EventParams = {}) {
    if (!import.meta.client) return
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag
    gtag?.('event', eventName, params)
  }

  function trackLink(eventName: string, placement: string, destination: string) {
    trackEvent(eventName, {
      page_path: window.location.pathname,
      placement,
      destination
    })
  }

  return { trackEvent, trackLink }
}
