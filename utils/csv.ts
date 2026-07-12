export type CsvRow = Record<string, string>

export function parseCsvLine(line: string) {
  const fields: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i]
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
    } else if (char === ',' && !inQuotes) {
      fields.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  fields.push(current.trim())
  return fields
}

export function parseCsvRows(csv: string): CsvRow[] {
  const lines = csv.replace(/\r/g, '').trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseCsvLine(lines[0])
  return lines.slice(1).flatMap((source) => {
    const line = source.trim()
    if (!line || line.startsWith('#')) return []
    const values = parseCsvLine(line)
    return [Object.fromEntries(headers.map((header, index) => [header, values[index] || '']))]
  })
}

export function parseRedFlags(csv: string) {
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

export function parseSignatures(csv: string) {
  return parseCsvRows(csv).filter(row => row.name)
}
