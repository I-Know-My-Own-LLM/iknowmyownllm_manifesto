import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const siteUrl = 'https://iknowmyllm.com'

function lastModified(path) {
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', path], { cwd: root, encoding: 'utf8' }).trim()
      || new Date().toISOString().slice(0, 10)
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

const routes = [
  { path: '/', source: 'pages/index.vue' },
  { path: '/redflags', source: 'public/red_flag_stories.csv' },
  { path: '/resources', source: 'pages/resources.vue' },
  { path: '/signatures', source: 'public/signatures.csv' },
  { path: '/methodology', source: 'pages/methodology.vue' }
]

const urls = routes.map(route => `  <url>\n    <loc>${siteUrl}${route.path}</loc>\n    <lastmod>${lastModified(route.source)}</lastmod>\n  </url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
writeFileSync(join(root, 'public/sitemap.xml'), xml)
console.log(`Generated sitemap with ${routes.length} URLs.`)
