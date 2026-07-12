<template>
  <div class="site">
    <a class="skip-link" href="#main">Skip to content</a>
    <!-- Navigation -->
    <header class="nav">
      <div class="container nav-inner">
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="I Know My Own LLM" class="logo-img" width="30" height="36" decoding="async" />
          <span class="logo-text">I Know My Own LLM — Thanks!</span>
        </NuxtLink>
        <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="nav-links" :class="{ open: menuOpen }">
          <NuxtLink to="/" @click="menuOpen = false">Manifesto</NuxtLink>
          <NuxtLink to="/#principles" @click="menuOpen = false">Principles</NuxtLink>
          <NuxtLink to="/redflags" @click="menuOpen = false">Red Flags</NuxtLink>
          <NuxtLink to="/signatures" @click="menuOpen = false">Signatories</NuxtLink>
          <NuxtLink to="/resources" @click="menuOpen = false">Research Tools</NuxtLink>
          <a href="/#sign" class="nav-cta" @click="menuOpen = false">Sign the Manifesto</a>
        </nav>
      </div>
    </header>

    <!-- Main -->
    <main id="main"><slot /></main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-grid">
          <div class="footer-section">
            <div class="footer-brand">
              <img src="/logo.png" alt="Trustworthy AI Manifesto" class="footer-logo" width="47" height="56" loading="lazy" decoding="async" />
              <h4>About</h4>
            </div>
            <p>A community-driven initiative promoting transparency, accountability, and ethical practices in AI platforms.</p>
          </div>
          <div class="footer-section">
            <h4>Navigate</h4>
            <nav class="footer-nav">
              <NuxtLink to="/">Manifesto</NuxtLink>
              <NuxtLink to="/resources">Research Tools</NuxtLink>
              <NuxtLink to="/methodology">Editorial Standards</NuxtLink>
              <a href="/#sign">Sign</a>
            </nav>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <nav class="footer-nav">
              <a href="https://github.com/I-Know-My-Own-LLM" target="_blank" rel="noopener">GitHub</a>
              <a href="https://x.com/iknowmyllm" target="_blank" rel="noopener">#IKnowMyOwnLLM</a>
            </nav>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="disclaimer-text">Educational guidance only. Not legal advice. Do your own research.</p>
          <p class="copyright">© {{ new Date().getFullYear() }} I Know My Own LLM - Thanks!</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const { trackLink } = useAnalytics()

function trackDocumentClick(event: MouseEvent) {
  const link = (event.target as HTMLElement)?.closest('a')
  if (!link) return
  const href = link.href
  const placement = link.dataset.analyticsPlacement
    || (link.closest('header') ? 'navigation' : link.closest('footer') ? 'footer' : 'content')

  if (href.includes('issues/new') && href.includes('signature')) {
    trackLink('sign_issue_click', placement, href)
  } else if (href.includes('twitter.com/intent') || href.includes('linkedin.com/sharing')) {
    trackLink('share_click', placement, href)
  } else if (link.dataset.guideDownload) {
    trackLink('guide_download', placement, href)
  } else if (href.includes('github.com')) {
    trackLink('outbound_github', placement, href)
  } else if (link.target === '_blank') {
    trackLink('resource_click', placement, href)
  }
}

onMounted(() => document.addEventListener('click', trackDocumentClick))
onBeforeUnmount(() => document.removeEventListener('click', trackDocumentClick))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'I Know My Own LLM',
        url: 'https://iknowmyllm.com',
        logo: 'https://iknowmyllm.com/logo.png',
        sameAs: [
          'https://github.com/I-Know-My-Own-LLM',
          'https://x.com/iknowmyllm'
        ],
        description: 'A community-driven manifesto with 8 actionable principles for evaluating AI platforms.'
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'I Know My Own LLM',
        url: 'https://iknowmyllm.com/',
        description: 'A community-driven manifesto with 8 actionable principles for evaluating AI platforms.'
      })
    }
  ]
})
</script>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.skip-link {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-120%);
  background: var(--accent);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0 0 12px 0;
  font-size: 0.85rem;
  z-index: 200;
}

.skip-link:focus {
  transform: translateY(0);
}

/* Nav */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

main {
  flex: 1;
  padding-top: 70px;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.logo-img {
  height: 36px;
  width: auto;
  border-radius: 4px;
}

.logo-text {
  display: block;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent);
}

.nav-cta {
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  color: #fff !important;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  font-weight: 600;
}

.nav-cta:hover {
  opacity: 0.9;
}

/* Footer */
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-brand h4 {
  margin-bottom: 0;
}

.footer-logo {
  height: 56px;
  width: auto;
  border-radius: 4px;
}

.footer-section p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: var(--accent);
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  text-align: center;
}

.disclaimer-text {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.copyright {
  color: var(--text-muted);
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  main {
    padding-top: 60px;
  }

  .nav-toggle {
    display: flex;
  }

  .logo-text {
    display: none;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--page-bg);
    flex-direction: column;
    justify-content: flex-start;
    padding: 1.5rem;
    gap: 0.5rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    border-bottom: 1px solid var(--border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .nav-links.open {
    max-height: 500px;
    opacity: 1;
    padding: 1.5rem;
  }

  .nav-links a {
    font-size: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    display: block;
    width: 100%;
  }

  .nav-links a:last-child {
    border-bottom: none;
  }

  .nav-cta {
    text-align: center;
    margin-top: 0.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
