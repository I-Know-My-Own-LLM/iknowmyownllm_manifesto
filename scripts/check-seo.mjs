import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
const routes = [...sitemap.matchAll(/<loc>https:\/\/iknowmyllm\.com([^<]*)<\/loc>/g)].map(match => match[1] || '/')
const failures = []

for (const route of routes) {
  const file = route === '/' ? join(root, '.output/public/index.html') : join(root, `.output/public${route}/index.html`)
  if (!existsSync(file)) { failures.push(`${route}: generated HTML missing`); continue }
  const html = readFileSync(file, 'utf8')
  const count = pattern => (html.match(pattern) || []).length
  if (count(/<h1(?:\s|>)/g) !== 1) failures.push(`${route}: expected exactly one H1`)
  if (count(/<meta[^>]+name="description"/g) !== 1) failures.push(`${route}: expected one meta description`)
  if (count(/<link[^>]+rel="canonical"/g) !== 1) failures.push(`${route}: expected one canonical link`)
  if (!html.includes('property="og:image"') || !html.includes('/social-banner.jpg')) failures.push(`${route}: social image missing`)
  if (!html.includes('application/ld+json')) failures.push(`${route}: structured data missing`)
}

if (!existsSync(join(root, '.output/public/social-banner.jpg'))) failures.push('social-banner.jpg missing from generated site')
const home = readFileSync(join(root, '.output/public/index.html'), 'utf8')
if (!home.includes('The &quot;Combined Experience&quot; Math')) failures.push('/: red-flag CSV content is not server rendered')
if (!home.includes('Alex Castro')) failures.push('/: signature CSV content is not server rendered')
const redFlagsPage = readFileSync(join(root, '.output/public/redflags/index.html'), 'utf8')
if (!redFlagsPage.includes('The 2-Minute Miracle')) failures.push('/redflags: CSV content is not server rendered')
if (failures.length) { console.error(failures.join('\n')); process.exit(1) }
console.log(`SEO checks passed for ${routes.length} routes.`)
