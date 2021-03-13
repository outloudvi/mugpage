<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">分数计算特性</p>
    </header>
    <div class="card-content">
      <KvTable :table="cnContent" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { ScorePolicy, ScorePolicyKeys } from '@/types'
import { analyzeQVL } from '@/utils/tr'

import KvTable from './KvTable.vue'

@Component({
  components: { KvTable },
})
export default class Infobox extends Vue {
  @Prop()
  meta!: ScorePolicy

  policyNames: Record<ScorePolicyKeys, string> = {
    comboDependent: '与连击强相关',
    nonPlayerDependent: '与非游玩结果因素相关',
  }

  get cnContent() {
    return Object.entries(this.meta).map(([key, val], _) => (({
      key: this.policyNames[key as ScorePolicyKeys],
      value: analyzeQVL(val),
    })))
  }
}
</script>

