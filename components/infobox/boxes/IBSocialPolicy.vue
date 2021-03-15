<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import type { SocialPolicy } from '@/types'

import IBPolicyBase from '../IBPolicyBase.vue'

@Component
export default class Infobox extends mixins<IBPolicyBase<SocialPolicy>>(IBPolicyBase) {
  title = "社交特性"

  policyNames = {
    hasSocial: "包含社交功能",
    hasMultiPlay: "包含多人游戏功能",
    hasRateSystem: "包含能力点数系统",
    hasFriendRanking: "包含曲目好友排名",
    hasGlobalRanking: "包含曲目全域排名",
    hasEventRanking: "包含活动排名",
  }

  policyDocs = {
    hasEventRanking: '游戏中存在定期或不定期举行的活动，活动中的参与行为会给予玩家活动专用的点数，并会显示玩家的点数排名。'
  }
}
</script>
