import type { QuadValuedLogic, QVLResponse } from '@/types'

export function analyzeQVL(text: QuadValuedLogic): QVLResponse {
  if (text === true || text === '+') return 't'
  if (text === false || text === '-') return 'f'
  if (text === 'partial' || text === '*') return 'p'
  return 'u'
}
