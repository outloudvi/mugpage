<template>
  <Card :title="title">
    <KvTable :table="cnContent" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { analyzeQVL } from '@/utils/tr'

import Card from './Card.vue'
import KvTable from './KvTable.vue'
import { QuadValuedLogic } from '~/types'

@Component({
  components: {
    Card,
    KvTable,
  },
})
export default class IBPolicyBase<T> extends Vue {
  @Prop()
  meta!: T

  title!: string

  policyNames!: Record<keyof T, string>

  get cnContent() {
    return Object.entries(this.meta).map(([key, val], _) => (({
      key: this.policyNames[key as keyof T],
      value: analyzeQVL(val as QuadValuedLogic),
    })))
  }
}
</script>

