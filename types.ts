type GamePlatform = 'android' | 'ios'

export interface GameEntry {
  name: string
  slug: string
}
export interface GameMeta {
  name: string
  developer?: string
  platform?: Record<GamePlatform, string>
  website?: string
}
