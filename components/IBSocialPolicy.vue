<template>
  <Card title="社交特性">
    <KvTable :table="cnContent" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { SocialPolicy, SocialPolicyKeys } from '@/types'
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
  meta!: SocialPolicy

  policyNames: Record<SocialPolicyKeys, string> = {
    hasSocial: "包含社交功能",
    hasMultiPlay: "包含多人游戏功能",
    hasFriendRanking: "包含曲目好友排名",
    hasGlobalRanking: "包含曲目全域排名",
    hasEventRanking: "包含活动排名",
  }

  get cnContent() {
    return Object.entries(this.meta).map(([key, val], _) => (({
      key: this.policyNames[key as SocialPolicyKeys],
      value: analyzeQVL(val),
    })))
  }
}
</script>

