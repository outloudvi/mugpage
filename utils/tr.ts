import type { QuadValuedLogic, QVLResponse } from '@/types'

export function analyzeQVL(text: QuadValuedLogic): QVLResponse {
  if (text === true || text === 't') return 't'
  if (text === false || text === 'f') return 'f'
  if (text === 'partial' || text === 'p') return 'p'
  return 'u'
}
