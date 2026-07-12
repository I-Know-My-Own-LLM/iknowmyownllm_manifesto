import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parseRedFlags } from '../../utils/csv'

export default defineEventHandler(async () => {
  const csv = await readFile(join(process.cwd(), 'public/red_flag_stories.csv'), 'utf8')
  return parseRedFlags(csv)
})
