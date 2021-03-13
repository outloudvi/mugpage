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
    hasFriendRanking: "包含曲目好友排名",
    hasGlobalRanking: "包含曲目全域排名",
    hasEventRanking: "包含活动排名",
  }
}
</script>
