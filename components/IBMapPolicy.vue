<template>
  <Card title="谱面特性">
    <KvTable :table="cnContent" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { MapPolicy, MapPolicyKeys } from '@/types'
import { analyzeQVL } from '@/utils/tr'

import Card from './Card.vue'
import KvTable from './KvTable.vue'

@Component({
  components: {
    Card,
    KvTable,
  },
})
export default class Infobox extends Vue {
  @Prop()
  meta!: MapPolicy

  policyNames: Record<MapPolicyKeys, string> = {
    hasGivenMap: '包含赠送谱面',
    hasPaidMap: '包含付费谱面',
    hasFreeWorkMap: '包含需要任务解锁的谱面',
    hasLimitedPurchaseMap: '包含限定时间内购买的谱面',
    hasLimitedExpiringMap: '包含限定时间内游玩的谱面',
    hasLimitedFreeMap: '包含限定时间内免费游玩/持有的谱面',
    difficultiesRequireSeperateUnlock: '不同难度谱面需要独立解锁',
  }

  get cnContent() {
    return Object.entries(this.meta).map(([key, val], _) => ({
      key: this.policyNames[key as MapPolicyKeys],
      value: analyzeQVL(val),
    }))
  }
}
</script>

<style lang="scss" scoped>
.tableUnit {
  position: relative;
}

.colorYes {
  background-color: #d4eddb;
}

.colorNo {
  background-color: #a5a4df;
}

.colorPartial {
  background-color: #daf0fb;
}

.colorUnknown {
  background-color: #ddd;
}
</style>
