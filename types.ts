type GamePlatform = 'android' | 'ios'

export type QVLResponse = 't' | 'f' | 'p' | 'u'
export type QVLTruey = true | 't'
export type QVLFalsy = false | 'f'
export type QVLPartial = 'partial' | 'p'
export type QVLUnknown = 'unknown' | null | undefined | 'u'

export type QuadValueWithOptionalComments<T> = [T, string] | T

export type QuadValueTF = QVLTruey | QVLFalsy | QVLUnknown

export type QuadValuedLogic = QVLTruey | QVLFalsy | QVLPartial | QVLUnknown

export type QVTF = QuadValueWithOptionalComments<QuadValueTF>
export type QVAny = QuadValueWithOptionalComments<QuadValuedLogic>

export interface GameEntry {
  name: string
  slug: string
}

export interface ScorePolicy {
  comboDependent: QVTF
  nonPlayerDependent: QVTF
}

export interface MapPolicy {
  hasPaidMap: QVAny
  hasFreeWorkMap: QVAny
  hasLimitedPurchaseMap: QVAny
  hasLimitedExpiringMap: QVAny
  hasLimitedFreeMap: QVAny
  difficultiesRequireSeperateUnlock: QVAny
}

export interface SocialPolicy {
  hasSocial: QVTF
  hasMultiPlay: QVTF
  hasFriendRanking: QVTF
  hasGlobalRanking: QVTF
  hasEventRanking: QVTF
}

export interface GameMeta {
  name: string
  originalName?: string
  developer?: string
  tagline?: string
  aka?: string[]
  platform?: Record<GamePlatform, string>
  website?: string
  mapPolicy?: MapPolicy
  scorePolicy?: ScorePolicy
  socialPolicy?: SocialPolicy
}
