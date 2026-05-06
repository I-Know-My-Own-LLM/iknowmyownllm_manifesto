<template>
  <div class="manifesto-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="hero-badge">Community Manifesto</span>
          <h1>I Know My Own LLM — Thanks!</h1>
          <p class="lead">8 principles for evaluating AI platforms without the hype. Evidence over promises, transparency over buzzwords, community wisdom over blind trust.</p>
          <p class="lead-sub">We're building the checklist we wish we'd had before the demos, NDAs, and "limited-time" offers.</p>
          <div class="hero-actions">
            <a href="#sign" class="btn btn-primary">Sign the Manifesto</a>
          </div>
          <div class="hero-meta">
            <div class="meta-card">
              <span class="meta-label">Signatories</span>
              <span class="meta-value">{{ signatoryCount }}</span>
            </div>
            <div class="meta-card">
              <span class="meta-label">Red Flags</span>
              <span class="meta-value">{{ redFlagCount }}</span>
            </div>
            <div class="meta-card">
              <span class="meta-label">Community</span>
              <span class="meta-value">Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section id="principles" class="section principles">
      <div class="container">
        <h2>8 Principles</h2>
        <p class="section-intro">Actionable guidelines to protect yourself from AI fraud. These principles are open for community refinement via GitHub.</p>

        <div class="principles-compact">
          <div v-for="(principle, index) in principles" :key="principle.title" :id="'principle-' + (index + 1)" class="principle-row">
            <span class="p-num">{{ index + 1 }}</span>
            <div class="p-content">
              <strong>{{ principle.title }}</strong>
              <span>{{ principle.summary }}</span>
              <em v-if="principle.example" class="principle-example">🎪 {{ principle.example }}</em>
            </div>
          </div>
        </div>

        <div class="github-cta">
          <p>
            <strong>Help improve these principles.</strong>
            <a href="https://github.com/I-Know-My-Own-LLM/iknowmyownllm_manifesto" target="_blank" rel="noopener">
              Edit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- Hall of Red Flags -->
    <section id="red-flags" class="section red-flags">
      <div class="container">
        <h2>🎪 Hall of Amusing Red Flags</h2>
        <p class="section-intro">
          Real patterns we've encountered (anonymized but unembellished). You couldn't make this stuff up.
        </p>

        <div class="flags-grid">
          <div v-for="flag in topRedFlags" :key="flag.title" class="flag-card">
            <div class="flag-icon">{{ flag.icon }}</div>
            <h4>{{ flag.title }}</h4>
            <div class="flag-claim">{{ flag.claim }}</div>
            <div class="flag-reality">
              {{ flag.reality }}
              <em v-if="flag.example">{{ flag.example }}</em>
            </div>
          </div>
        </div>

        <div class="view-all-section">
          <NuxtLink to="/redflags" class="btn btn-secondary">
            View All Red Flags →
          </NuxtLink>
        </div>

        <div class="flags-reminder">
          <p>
            <strong>Remember:</strong> These patterns seem obvious in isolation.
            They're far less obvious wrapped in professional websites and urgent "limited time" offers.
          </p>
        </div>
      </div>
    </section>

    <!-- Sign Section -->
    <section id="sign" class="section sign-section">
      <div class="container">
        <h2>Sign the Manifesto</h2>
        <p class="section-intro">
          Add your name to the growing community committed to trustworthy AI evaluation.
        </p>

        <div class="sign-grid">
          <div class="sign-card">
            <div class="form-header">
              <h3>Sign in 60 seconds</h3>
              <p>Choose the fastest path. Both options feed our review queue.</p>
            </div>
            <div class="sign-actions">
              <a class="btn btn-primary sign-btn" href="https://forms.gle/3xKuRVxmhV6pUiL76" target="_blank" rel="noopener">
                <span class="btn-icon">✨</span>
                Google Form
              </a>
              <a class="btn btn-secondary sign-btn" href="https://github.com/I-Know-My-Own-LLM/iknowmyownllm_manifesto/issues/new?template=signature-and-redflag-request.md" target="_blank" rel="noopener">
                <span class="btn-icon">🐙</span>
                GitHub Issue
              </a>
            </div>
            <div class="sign-note">
              CSV format: <code>name,title,email,comment</code>
            </div>
            <p class="form-note">
              Privacy options and examples live in
              <a href="https://github.com/I-Know-My-Own-LLM/iknowmyownllm_manifesto/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener">CONTRIBUTING.md</a>.
            </p>
          </div>

          <div class="sign-info">
            <div class="steps-card">
              <h4>How it works</h4>
              <ol class="steps-list">
                <li>Your signature is stored in a public CSV.</li>
                <li>We review for basic verification and formatting.</li>
                <li>The site auto-updates once merged.</li>
              </ol>
              <NuxtLink class="steps-link" to="/signatures">See the signature list →</NuxtLink>
            </div>

            <div class="stats-card">
              <div class="stat">
                <span class="stat-number">{{ signatoryCount }}</span>
                <span class="stat-label">Signatures</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ redFlagCount }}</span>
                <span class="stat-label">Red Flags</span>
              </div>
            </div>

            <div class="share-section">
              <h4>Share the Manifesto</h4>
              <div class="share-buttons">
                <a :href="twitterShareUrl" target="_blank" rel="noopener" class="share-btn twitter">
                  𝕏 Share
                </a>
                <a :href="linkedinShareUrl" target="_blank" rel="noopener" class="share-btn linkedin">
                  in Share
                </a>
                <button @click="copyLink" class="share-btn copy">
                  {{ copied ? '✓ Copied!' : '🔗 Copy Link' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Signatures Hall -->
    <section id="signatures" class="section signatures-hall">
      <div class="container">
        <h2>Signatures Hall</h2>
        <p class="section-intro">
          The community members who have signed the manifesto.
        </p>

        <div class="signatures-grid">
          <div
            v-for="signature in topSignatures"
            :key="signature.name + signature.timestamp"
            class="signature-card"
          >
            <div class="signature-header">
              <span class="signature-name">{{ signature.name }}</span>
              <span v-if="signature.title" class="signature-title">{{ signature.title }}</span>
            </div>
            <p v-if="signature.comment" class="signature-comment">"{{ signature.comment }}"</p>
            <span class="signature-date">{{ formatDate(signature.timestamp) }}</span>
          </div>
        </div>

        <div v-if="signatures.length > 6" class="view-all-section">
          <NuxtLink to="/signatures" class="btn btn-secondary">
            View All Signatures →
          </NuxtLink>
        </div>

        <p class="signatures-total">
          Total signatures: <strong>{{ signatoryCount }}</strong>
        </p>
      </div>
    </section>

    <!-- Resources CTA -->
    <section class="section resources-cta">
      <div class="container">
        <div class="cta-box">
          <h3>Need More Research Tools?</h3>
          <p>
            Verification databases, regulatory resources, red flag checklists,
            and global AI ethics frameworks.
          </p>
          <NuxtLink to="/resources" class="btn btn-secondary">
            View Research Resources →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import principlesMarkdown from '~/PRINCIPLES.md?raw'

// SEO
useHead({
  title: 'I Know My Own LLM — 8 Principles for Evaluating AI Platforms',
  meta: [
    { name: 'description', content: '8 actionable principles for evaluating AI platforms. Spot red flags, verify credentials, demand proof. A community manifesto — sign and join.' },
    { name: 'keywords', content: 'evaluate AI platforms, AI red flags, AI due diligence, AI manifesto, trustworthy AI, AI fraud prevention, AI vendor evaluation' },
    { property: 'og:title', content: 'I Know My Own LLM — 8 Principles for Evaluating AI Platforms' },
    { property: 'og:description', content: 'Spot the hype, verify the claims, protect your org. A community manifesto with teeth. Sign and share.' },
    { property: 'og:image', content: 'https://iknowmyllm.com/hero_banner.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: 'https://iknowmyllm.com/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'I Know My Own LLM — 8 Principles for Evaluating AI Platforms' },
    { name: 'twitter:description', content: 'Evidence over promises, transparency over hype. The community checklist for AI vendor evaluation.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://iknowmyllm.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'I Know My Own LLM',
        url: 'https://iknowmyllm.com',
        description: '8 actionable principles for evaluating AI platforms. A community manifesto.',
        potentialAction: {
          '@type': 'ReadAction',
          target: 'https://iknowmyllm.com/'
        }
      })
    }
  ]
})

// Data
const principles = ref(parsePrinciplesMarkdown(principlesMarkdown))
const redFlags = ref([])
const signatoryCount = ref(0)
const redFlagCount = ref(0)
const copied = ref(false)
const signatures = ref([])

// Top 6 for homepage preview
const topRedFlags = computed(() => redFlags.value.slice(0, 9))
const topSignatures = computed(() => signatures.value.slice(0, 6))

function formatDate(timestamp) {
  if (!timestamp) return ''
  try {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return timestamp
  }
}

// Share URLs
const siteUrl = 'https://iknowmyllm.com'
const shareText = 'I signed the I Know My Own LLM manifesto. Evidence over promises, transparency over hype.'

const twitterShareUrl = computed(() =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`
)

const linkedinShareUrl = computed(() =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`
)

// Content helpers
function sanitizeText(text) {
  return text.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, '')
}

function parsePrinciplesMarkdown(markdown) {
  const clean = sanitizeText(markdown)
  const sections = clean.split(/^##\s+/m).slice(1)
  return sections
    .map(section => {
      const [headingLine, ...rest] = section.split('\n')
      const title = headingLine.replace(/^\d+\.\s*/, '').trim()
      const body = rest.join('\n')
      const summaryMatch = body.match(/\*\*(.+?)\*\*/s)
      const summary = summaryMatch ? summaryMatch[1].replace(/\s+/g, ' ').trim() : ''
      const exampleMatch = body.match(/(?:Red flag example:|Red Flag Example:|🎪\s*\*?Red Flag Example\*?:|🎪\s*Red flag example:)\s*([^\n]+)/i)
      const example = exampleMatch ? exampleMatch[1].replace(/\s+/g, ' ').trim() : ''
      return { title, summary, example }
    })
    .filter(principle => principle.title)
}

function parseCsvLine(line) {
  const fields = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }
    if (char === ',' && !inQuotes) {
      fields.push(current.trim())
      current = ''
      continue
    }
    current += char
  }
  fields.push(current.trim())
  return fields
}

function parseCsvRows(csv) {
  const lines = csv.replace(/\r/g, '').trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseCsvLine(lines[0])
  const rows = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || line.startsWith('#')) continue
    const values = parseCsvLine(line)
    const row = {}
    headers.forEach((header, index) => {
      row[header] = values[index] || ''
    })
    rows.push(row)
  }

  return rows
}

function parseSignatures(csv) {
  return parseCsvRows(csv).filter(row => row.name)
}

function parseRedFlagsCsv(csv) {
  return parseCsvRows(csv)
    .map(row => ({
      icon: row.icon || '🎪',
      title: row.title || '',
      claim: row.claim || '',
      reality: row.reality || '',
      example: row.example || ''
    }))
    .filter(flag => flag.title)
}

// Methods
function copyLink() {
  navigator.clipboard.writeText(siteUrl)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}


onMounted(async () => {
  // Load red flags from CSV
  try {
    const flagsResponse = await fetch('/red_flag_stories.csv')
    if (flagsResponse.ok) {
      const flagsCsv = await flagsResponse.text()
      redFlags.value = parseRedFlagsCsv(flagsCsv)
      redFlagCount.value = redFlags.value.length
    }
  } catch (error) {
    console.log('Could not load red flags:', error)
  }

  // Load signatures from CSV
  try {
    const response = await fetch('/signatures.csv')
    if (response.ok) {
      const csv = await response.text()
        signatures.value = parseSignatures(csv)
      signatoryCount.value = signatures.value.length
    }
  } catch (error) {
    console.log('Could not load signatures:', error)
  }
})
</script>

<style scoped>
/* Base */
.manifesto-page {
  min-height: 100vh;
}

.section {
  padding: 5.5rem 0;
  position: relative;
}

.section h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-bottom: 1rem;
}

.section-intro {
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 720px;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero */
.hero {
  position: relative;
  display: block;
  min-height: 70vh;
  padding: 6.5rem 0 5rem;
  overflow: hidden;
}

.hero::before,
.hero::after {
  content: '';
  position: absolute;
  border-radius: 999px;
  z-index: 0;
}

.hero::before {
  width: 420px;
  height: 420px;
  right: -120px;
  top: -120px;
  background: radial-gradient(circle at center, var(--section-glow-1), transparent 70%);
}

.hero::after {
  width: 320px;
  height: 320px;
  left: -140px;
  bottom: -140px;
  background: radial-gradient(circle at center, var(--section-glow-2), transparent 70%);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(13, 16, 22, 0.88), rgba(18, 18, 18, 0.78)),
    url('/hero_banner.png') center/cover no-repeat fixed;
  filter: saturate(0.9);
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 20%, rgba(138, 180, 248, 0.12), transparent 55%);
  opacity: 0.9;
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
}

.hero-copy {
  animation: fadeUp 700ms ease;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--accent-dim);
  color: var(--accent);
  border: 1px solid rgba(138, 180, 248, 0.35);
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 1.05;
  margin-bottom: 1.25rem;
}

.lead {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}

.meta-card {
  background: rgba(28, 28, 33, 0.88);
  border: 1px solid rgba(230, 225, 229, 0.18);
  border-radius: 14px;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 12px 30px rgba(8, 10, 15, 0.35);
  backdrop-filter: blur(10px);
}

.meta-label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.meta-value {
  display: block;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent);
}

.hero-panel {
  background: rgba(28, 28, 33, 0.92);
  border: 1px solid rgba(230, 225, 229, 0.2);
  border-radius: 22px;
  padding: 2.5rem;
  box-shadow: 0 28px 48px rgba(6, 10, 18, 0.45);
  backdrop-filter: blur(12px);
  animation: fadeUp 850ms ease 120ms both;
}

.panel-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.7rem;
  color: var(--accent-2);
  font-weight: 600;
}

.hero-panel h3 {
  font-size: 1.6rem;
  margin: 1rem 0 1.5rem;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  gap: 0.75rem;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-secondary);
}

.checklist li::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent-2);
  box-shadow: 0 0 0 4px rgba(79, 209, 197, 0.18);
}

.panel-footer {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.panel-tag {
  background: var(--accent-dim);
  color: var(--accent);
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
}

.anchor-strip {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.anchor-chip {
  background: var(--chip-bg);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.85rem;
  transition: transform var(--transition), color var(--transition), border-color var(--transition);
}

.anchor-chip:hover {
  color: var(--accent);
  border-color: rgba(138, 180, 248, 0.4);
  transform: translateY(-2px);
}

/* Principles */
.principles-compact {
  max-width: 860px;
  margin: 0 auto;
}

.principle-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.2rem;
  border-radius: 16px;
  transition: background var(--transition), transform var(--transition);
}

.principle-row:hover {
  background: var(--bg-card-hover);
  transform: translateX(6px);
}

.p-num {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
}

.p-content strong {
  display: block;
  margin-bottom: 0.25rem;
}

.p-content span {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.principle-example {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--accent-2);
  font-style: italic;
}

.github-cta {
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(120deg, rgba(138, 180, 248, 0.12), rgba(79, 209, 197, 0.12));
  border: 1px solid rgba(138, 180, 248, 0.25);
  border-radius: 18px;
  text-align: center;
}

.github-cta p {
  margin: 0;
  color: var(--text-secondary);
}

.github-cta a {
  color: var(--accent);
  font-weight: 600;
}

/* Red Flags */
.red-flags {
  background: linear-gradient(180deg, #121212 0%, #151820 100%);
}

.flags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
  margin-bottom: 3rem;
}

.flag-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2.25rem;
  transition: transform var(--transition), box-shadow var(--transition);
  position: relative;
  overflow: hidden;
}

.flag-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(11, 75, 127, 0.08), transparent 45%);
  opacity: 0;
  transition: opacity var(--transition);
}

.flag-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 32px rgba(15, 23, 42, 0.12);
}

.flag-card:hover::after {
  opacity: 1;
}

.flag-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.flag-card h4 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--accent);
}

.flag-claim {
  background: var(--bg-card-hover);
  border-left: 4px solid var(--accent-3);
  padding: 1rem 1.2rem;
  margin-bottom: 1.2rem;
  font-style: italic;
  font-size: 1rem;
  color: var(--text-secondary);
}

.flag-reality {
  font-size: 0.98rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.flag-reality em {
  display: block;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed rgba(138, 180, 248, 0.4);
  color: var(--accent-2);
  font-size: 0.95rem;
  font-weight: 600;
}

.flags-reminder {
  background: var(--bg-card);
  border: 1px solid rgba(138, 180, 248, 0.25);
  border-radius: 18px;
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.flags-reminder p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.flags-reminder strong {
  color: var(--accent);
}

/* Sign Section */
.sign-section {
  background: var(--bg-card);
}

.sign-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: start;
}

.sign-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.5rem;
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.08);
}

.sign-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0 1rem;
}

.sign-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-icon {
  font-size: 1.1rem;
}

.sign-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.9rem;
  border-radius: 12px;
  background: var(--bg-card-hover);
  color: var(--text-secondary);
  font-size: 0.85rem;
}

.sign-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 2.5rem;
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.08);
}

.form-header h3 {
  margin-bottom: 0.5rem;
}

.form-header p {
  color: var(--text-secondary);
  margin: 0 0 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.form-group.full {
  grid-column: 1 / -1;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 0.9rem;
  background: var(--input-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(138, 180, 248, 0.6);
  box-shadow: 0 0 0 3px rgba(138, 180, 248, 0.18);
}

.form-actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.form-note {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 1rem;
}

.sign-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.steps-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
}

.steps-card h4 {
  margin-bottom: 0.75rem;
}

.steps-list {
  margin: 0 0 1rem 1.2rem;
  color: var(--text-secondary);
}

.steps-list li {
  margin-bottom: 0.5rem;
}

.steps-link {
  color: var(--accent);
  font-weight: 600;
}

.stats-card {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 18px;
  justify-content: space-around;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.share-section h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.share-btn {
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  border: none;
}

.share-btn.twitter {
  background: #111;
  color: #fff;
}

.share-btn.linkedin {
  background: #0077b5;
  color: #fff;
}

.share-btn.copy {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.share-btn:hover {
  transform: translateY(-2px);
}

/* Resources CTA */
.resources-cta {
  padding: 4rem 0 5rem;
}

.cta-box {
  padding: 2.5rem;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.cta-box h3 {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}

.cta-box p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition);
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  color: #fff;
  box-shadow: 0 12px 24px rgba(11, 75, 127, 0.22);
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: rgba(138, 180, 248, 0.4);
}

/* Responsive */
@media (max-width: 980px) {
  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-panel {
    order: 2;
  }

  .sign-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 3.5rem 0;
  }

  .value-pair {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0.5rem;
  }

  .value-vs {
    padding: 0.5rem 0;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .flags-grid {
    grid-template-columns: 1fr;
  }

  .stats-card {
    flex-direction: column;
    gap: 1rem;
  }
}

/* Signatures Hall */
.signatures-hall {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
}

.signatures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.signature-card {
  background: var(--page-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color var(--transition);
}

.signature-card:hover {
  border-color: rgba(138, 180, 248, 0.3);
}

.signature-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.signature-name {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-primary);
}

.signature-title {
  font-size: 0.85rem;
  color: var(--accent);
}

.signature-comment {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  line-height: 1.5;
  flex: 1;
}

.signature-date {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: auto;
}

/* View All Section */
.view-all-section {
  text-align: center;
  margin: 2rem 0;
}

.signatures-total {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .signatures-grid {
    grid-template-columns: 1fr;
  }
}
</style>
