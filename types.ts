type GamePlatform = 'android' | 'ios'

export type QVLResponse = 't' | 'f' | 'p' | 'u'
export type QVLTruey = true | 't'
export type QVLFalsy = false | 'f'
export type QVLPartial = 'partial' | 'p'
export type QVLUnknown = 'unknown' | null | undefined | 'u'

export type QuadValueTF = QVLTruey | QVLFalsy | QVLUnknown
export type QuadValuedLogic = QVLTruey | QVLFalsy | QVLPartial | QVLUnknown
export interface GameEntry {
  name: string
  slug: string
}

export interface ScorePolicy {
  comboDependent: QuadValueTF
  nonPlayerDependent: QuadValueTF
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

export interface SocialPolicy {
  hasSocial: QuadValueTF
  hasMultiPlay: QuadValueTF
  hasFriendRanking: QuadValueTF
  hasGlobalRanking: QuadValueTF
  hasEventRanking: QuadValueTF
}

export interface GameMeta {
  name: string
  developer?: string
  tagline?: string
  aka?: string[]
  platform?: Record<GamePlatform, string>
  website?: string
  mapPolicy?: MapPolicy
  scorePolicy?: ScorePolicy
  socialPolicy?: SocialPolicy
}
