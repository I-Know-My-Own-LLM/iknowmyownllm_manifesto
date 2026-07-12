import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parseSignatures } from '../../utils/csv'

export default defineEventHandler(async () => {
  const csv = await readFile(join(process.cwd(), 'public/signatures.csv'), 'utf8')
  return parseSignatures(csv)
})
