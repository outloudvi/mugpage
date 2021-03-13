<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">谱面特性</p>
    </header>
    <div class="card-content">
      <b-table :data="cnContent" :show-header="false">
        <b-table-column v-slot="props" field="key" label="ID">
          {{ props.row.key }}
        </b-table-column>

        <b-table-column v-slot="props" field="value" label="Date" centered>
          <div v-if="props.row.value == 't'" class="tableUnit colorYes">是</div>
          <div v-else-if="props.row.value == 'f'" class="tableUnit colorNo">
            否
          </div>
          <div
            v-else-if="props.row.value == 'p'"
            class="tableUnit colorPartial"
          >
            部分
          </div>
          <div v-else class="tableUnit colorUnknown">未知</div>
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { MapPolicy, MapPolicyKeys } from '@/types'
import { analyzeQVL } from '@/utils/tr'

@Component
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
    return Object.entries(this.meta).map(([key, val], _) => (({
      key: this.policyNames[key as MapPolicyKeys],
      value: analyzeQVL(val),
    })))
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
