type GamePlatform = 'android' | 'ios'

export interface GameMeta {
  name: string
  developer?: string
  platform?: Record<GamePlatform, string>
  website?: string
}
