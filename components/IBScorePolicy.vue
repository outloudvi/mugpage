<template>
  <Card title="分数计算特性">
    <KvTable :table="cnContent" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { ScorePolicy, ScorePolicyKeys } from '@/types'
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

