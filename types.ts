type GamePlatform = 'android' | 'ios'

export type QVLResponse = 't' | 'f' | 'p' | 'u'
export type QVLTruey = true | '+'
export type QVLFalsy = false | '-'
export type QVLPartial = 'partial' | '*'
export type QVLUnknown = 'unknown' | null | undefined | '?'

export type QuadValuedLogic = QVLTruey | QVLFalsy | QVLPartial | QVLUnknown
export interface GameEntry {
  name: string
  slug: string
}

export interface MapPolicy {
  hasGivenMap: QuadValuedLogic
  hasPaidMap: QuadValuedLogic
  hasFreeWorkMap: QuadValuedLogic
  hasLimitedPurchaseMap: QuadValuedLogic
  hasLimitedExpiringMap: QuadValuedLogic
  hasLimitedFreeMap: QuadValuedLogic
  difficultiesRequireSeperateUnlock: QuadValuedLogic
}

export type MapPolicyKeys = keyof MapPolicy

export interface GameMeta {
  name: string
  developer?: string
  tagline?: string
  platform?: Record<GamePlatform, string>
  website?: string
  mapPolicy?: MapPolicy
}
