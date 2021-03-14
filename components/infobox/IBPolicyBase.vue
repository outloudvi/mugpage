<template>
  <Card :title="title" :tooltip="tooltip" :hidden="true">
    <KvTable :table="cnContent" :tableDocs="policyDocs" />
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { analyzeQVL } from '@/utils/tr'

import Card from '../layout/Card.vue'
import KvTable from '@/components/layout/KvTable.vue'
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

  tooltip: string = ""

  policyNames!: Record<keyof T, string>

  policyDocs: Partial<Record<keyof T, string>> = {}

  nonQVLList: string[] = []

  get cnContent() {
    return Object.entries(this.meta).map(([key, val], _) => {
      const qvResponse = analyzeQVL(val as QuadValuedLogic)
      return {
        key,
        label: this.policyNames[key as keyof T],
        value: qvResponse.value,
        comment: qvResponse.comment,
        nonQVL: this.nonQVLList.includes(key)
      }
    })
  }
}
</script>

