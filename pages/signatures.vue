<template>
  <div class="signatures-page">
    <!-- Header -->
    <section class="page-header">
      <div class="container">
        <span class="badge">Community</span>
        <h1>Signatures Hall</h1>
        <p class="subtitle">
          The community members who have signed the manifesto, committed to trustworthy AI evaluation.
        </p>
        <div class="header-stats">
          <span class="stat-pill">{{ signatures.length }} Signatories</span>
        </div>
      </div>
    </section>

    <!-- Signatures Grid -->
    <section class="section">
      <div class="container">
        <div class="signatures-grid">
          <div
            v-for="signature in paginatedSignatures"
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

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="pagination-btn"
            :disabled="currentPage === 1"
            @click="goToPage(1)"
          >
            ««
          </button>
          <button
            class="pagination-btn"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            «
          </button>

          <div class="pagination-numbers">
            <button
              v-for="page in visiblePages"
              :key="page"
              class="pagination-num"
              :class="{ active: page === currentPage }"
              @click="goToPage(page)"
            >
              {{ page }}
            </button>
          </div>

          <button
            class="pagination-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            »
          </button>
          <button
            class="pagination-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(totalPages)"
          >
            »»
          </button>
        </div>

        <!-- Back link -->
        <div class="back-section">
          <NuxtLink to="/#sign" class="btn btn-secondary">
            ← Back to Manifesto
          </NuxtLink>
          <NuxtLink to="/redflags" class="btn btn-secondary">
            🎪 Red Flags →
          </NuxtLink>
          <NuxtLink to="/resources" class="btn btn-secondary">
            📚 Research Tools →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

useHead({
  title: 'Signatories — Who Signed the AI Evaluation Manifesto | I Know My Own LLM',
  meta: [
    { name: 'description', content: 'See who has signed the I Know My Own LLM manifesto. Join the growing community committed to evidence-based AI platform evaluation.' },
    { name: 'keywords', content: 'AI manifesto signatories, I Know My Own LLM community, sign AI manifesto, AI accountability community' },
    { property: 'og:title', content: 'Signatories — Who Signed the AI Evaluation Manifesto' },
    { property: 'og:description', content: 'The growing community of people who evaluate AI platforms with evidence, not hype.' },
    { property: 'og:url', content: 'https://iknowmyllm.com/signatures' },
    { property: 'og:image', content: 'https://iknowmyllm.com/hero_banner.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Who Signed the AI Evaluation Manifesto' },
    { name: 'twitter:description', content: 'Join the community. Evidence over promises, transparency over hype.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://iknowmyllm.com/signatures' }
  ]
})

const signatures = ref([])
const currentPage = ref(1)
const itemsPerPage = 12

const totalPages = computed(() => Math.max(1, Math.ceil(signatures.value.length / itemsPerPage)))

const paginatedSignatures = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return signatures.value.slice(start, end)
})

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})

function goToPage(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function formatDate(timestamp) {
  if (!timestamp) return ''
  try {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return timestamp
  }
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

onMounted(async () => {
  try {
    const response = await fetch('/signatures.csv')
    if (response.ok) {
      const csv = await response.text()
      signatures.value = parseCsvRows(csv).filter(row => row.name)
    }
  } catch (error) {
    console.log('Could not load signatures:', error)
  }
})
</script>

<style scoped>
.signatures-page {
  min-height: 100vh;
}

.page-header {
  padding: 4rem 0 3rem;
  text-align: center;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
}

.badge {
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: var(--accent-dim);
  color: var(--accent);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.page-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 0.75rem;
}

.subtitle {
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.header-stats {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.stat-pill {
  background: var(--bg-card-hover);
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.section {
  padding: 4rem 0;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.signatures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.signature-card {
  background: var(--bg-card);
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

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.pagination-btn,
.pagination-num {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all var(--transition);
}

.pagination-btn:hover:not(:disabled),
.pagination-num:hover {
  background: var(--accent-dim);
  border-color: var(--accent);
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 0.25rem;
}

.pagination-num.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #fff;
}

.back-section {
  text-align: center;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition);
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.btn-secondary {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: rgba(138, 180, 248, 0.4);
}

@media (max-width: 768px) {
  .signatures-grid {
    grid-template-columns: 1fr;
  }

  .pagination {
    gap: 0.35rem;
  }

  .pagination-btn,
  .pagination-num {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
}
</style>
