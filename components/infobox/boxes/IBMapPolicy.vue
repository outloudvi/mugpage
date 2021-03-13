<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import type { MapPolicy } from '@/types'

import IBPolicyBase from '../IBPolicyBase.vue'

@Component
export default class Infobox extends mixins<IBPolicyBase<MapPolicy>>(IBPolicyBase) {
  title = "谱面特性"

  tooltip = "关于谱面获取方式的特性"

  policyNames = {
    hasPaidMap: '包含付费谱面',
    hasFreeWorkMap: '包含需要任务解锁的谱面',
    hasLimitedPurchaseMap: '包含限定时间内购买的谱面',
    hasLimitedExpiringMap: '包含限定时间内游玩的谱面',
    hasLimitedFreeMap: '包含限定时间内免费游玩/持有的谱面',
    difficultiesRequireSeperateUnlock: '不同难度谱面需要独立解锁',
  }

  policyDocs = {
    hasLimitedPurchaseMap: '指存在部分谱面需要在特定时期购买才能够游玩，之后则不再可以购买和/或游玩。',
    hasLimitedExpiringMap: '指存在部分谱面会在某一个时间点起无法游玩。由于突发情况删除的不在此限。'
  }
}
</script>
