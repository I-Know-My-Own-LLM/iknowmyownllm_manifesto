<template>
  <div class="redflags-page">
    <!-- Header -->
    <section class="page-header">
      <div class="container">
        <span class="badge">Community Stories</span>
        <h1>🎪 Hall of Amusing Red Flags</h1>
        <p class="subtitle">
          Real patterns we've encountered (anonymized but unembellished). You couldn't make this stuff up.
        </p>
        <div class="header-stats">
          <span class="stat-pill">{{ redFlags.length }} Red Flag Stories</span>
        </div>
      </div>
    </section>

    <!-- Red Flags Grid -->
    <section class="section">
      <div class="container">
        <div class="flags-grid">
          <div v-for="flag in redFlags" :key="flag.title" class="flag-card">
            <div class="flag-icon">{{ flag.icon }}</div>
            <h2>{{ flag.title }}</h2>
            <div class="flag-claim">{{ flag.claim }}</div>
            <div class="flag-reality">
              {{ flag.reality }}
              <em v-if="flag.example">{{ flag.example }}</em>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <!-- Reminder -->
        <div class="flags-reminder">
          <p>
            <strong>Remember:</strong> These patterns seem obvious in isolation.
            They're far less obvious wrapped in professional websites and urgent "limited time" offers.
          </p>
        </div>

        <!-- Back link -->
        <div class="back-section">
          <NuxtLink to="/#red-flags" class="btn btn-secondary">
            ← Back to Manifesto
          </NuxtLink>
          <NuxtLink to="/resources" class="btn btn-secondary">
            📚 Research Tools →
          </NuxtLink>
          <a
            href="https://github.com/I-Know-My-Own-LLM/iknowmyownllm_manifesto/issues/new?template=signature-and-redflag-request.md"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Submit Your Story →
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: redFlags } = await useFetch('/api/red-flags', {
  default: () => []
})

usePageSeo({
  title: '🎪 Hall of Red Flags — AI Vendor Warning Signs | I Know My Own LLM',
  description: 'Real red flag stories from AI platform evaluations. Spot fake credentials, hype jargon, and pressure tactics before they cost you. Community-submitted, anonymized, unembellished.',
  path: '/redflags'
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'AI Vendor Red Flags and Warning Signs',
      itemListElement: redFlags.value.map((flag, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: flag.title
      }))
    })
  }, {
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Manifesto', item: 'https://iknowmyllm.com/' },
        { '@type': 'ListItem', position: 2, name: 'AI Vendor Red Flags', item: 'https://iknowmyllm.com/redflags' }
      ]
    })
  }]
})

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

</script>

<style scoped>
.redflags-page {
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

.flags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.flag-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color var(--transition), transform var(--transition);
}

.flag-card:hover {
  border-color: rgba(138, 180, 248, 0.3);
  transform: translateY(-2px);
}

.flag-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.flag-card h2 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.flag-claim {
  font-size: 0.95rem;
  color: var(--text-secondary);
  padding: 0.75rem;
  background: rgba(245, 158, 11, 0.1);
  border-left: 3px solid var(--clown-magenta);
  border-radius: 0 8px 8px 0;
  margin-bottom: 0.75rem;
}

.flag-reality {
  font-size: 0.9rem;
  color: var(--accent-2);
  line-height: 1.5;
}

.flag-reality em {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
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

.flags-reminder {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
  margin: 2rem 0;
}

.flags-reminder p {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.flags-reminder strong {
  color: var(--accent);
}

.back-section {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
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

.btn-primary {
  background: linear-gradient(120deg, var(--accent), var(--accent-2));
  color: #fff;
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

@media (max-width: 768px) {
  .flags-grid {
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

  .back-section {
    flex-direction: column;
    align-items: center;
  }
}
</style>
