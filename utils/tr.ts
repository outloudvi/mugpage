import type { QVAny, QVLResponse } from '@/types'

export function analyzeQVL(
  qv: QVAny
): { value: QVLResponse; comment?: string } {
  const text = Array.isArray(qv) ? qv[0] : qv
  const comment = Array.isArray(qv) ? qv[1] : undefined
  if (text === true || text === 't') return { value: 't', comment }
  if (text === false || text === 'f') return { value: 'f', comment }
  if (text === 'partial' || text === 'p') return { value: 'p', comment }
  return { value: 'u', comment }
}
