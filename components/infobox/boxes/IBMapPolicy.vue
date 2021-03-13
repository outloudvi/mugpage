<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import type { MapPolicy } from '@/types'

import IBPolicyBase from '../IBPolicyBase.vue'

@Component
export default class Infobox extends mixins<IBPolicyBase<MapPolicy>>(IBPolicyBase) {
  title = "谱面特性"

  policyNames = {
    hasGivenMap: '包含赠送谱面',
    hasPaidMap: '包含付费谱面',
    hasFreeWorkMap: '包含需要任务解锁的谱面',
    hasLimitedPurchaseMap: '包含限定时间内购买的谱面',
    hasLimitedExpiringMap: '包含限定时间内游玩的谱面',
    hasLimitedFreeMap: '包含限定时间内免费游玩/持有的谱面',
    difficultiesRequireSeperateUnlock: '不同难度谱面需要独立解锁',
  }
}
</script>
