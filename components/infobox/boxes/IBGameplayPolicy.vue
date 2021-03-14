<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import type { GameplayPolicy } from '@/types'

import IBPolicyBase from '../IBPolicyBase.vue'

@Component
export default class Infobox extends mixins<IBPolicyBase<GameplayPolicy>>(IBPolicyBase) {
  title = "游戏特性"

  tooltip = "关于游戏模式的特性"

  nonQVLList = [
    'gameDimension',
    'trackCount',
  ]

  policyNames = {
    hasFail: "游玩可能失败",
    gameDimension: "谱面维度",
    trackCount: "轨道数量",
    linearTrack: "线性轨道",
    hasFlick: "包含滑键",
  }
}
</script>
