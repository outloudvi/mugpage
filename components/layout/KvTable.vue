<template>
  <b-table
    :data="table"
    :show-header="false"
    detailed
    ref="bTable"
    :show-detail-icon="false"
  >
    <b-table-column v-slot="props" field="key" label="key">
      <a
        @click="showDetails(props, props.row, false)"
        v-if="tableDocs[props.row.key]"
      >
        {{ props.row.label }}
      </a>
      <template v-else>{{ props.row.label }}</template>
    </b-table-column>

    <b-table-column v-slot="props" field="value" label="value" centered>
      <a @click="showDetails(props, props.row, true)" v-if="props.row.comment">
        <template v-if="props.row.nonQVL"> {{ props.row.value }}*</template>
        <template v-else><KvTableUnit :value="props.row.value" />*</template>
      </a>
      <span v-else>
        <template v-if="props.row.nonQVL"> {{ props.row.value }}</template>
        <template v-else><KvTableUnit :value="props.row.value" /></template>
      </span>
    </b-table-column>

    <template #detail="props">
      <article>
        <b v-if="!props.row.showComment">{{ props.row.label }}</b>
        <p>
          <template v-if="props.row.showComment">
            {{ props.row.comment }}
          </template>
          <template v-else>
            {{ tableDocs[props.row.key] }}
          </template>
        </p>
      </article>
    </template>
  </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import KvTableUnit from './KvTableUnit.vue'

@Component({
  components: {
    KvTableUnit,
  }
})
export default class Infobox extends Vue {
  @Prop()
  table!: { key: string, label: string, value: string, comment?: string, nonQVL?: boolean }[]

  @Prop({ default: () => ({}) })
  tableDocs!: Record<string, string>

  showDetails(props: any, row: any, comment: boolean) {
    // ... any better ideas?

    (function () {
      // @ts-ignore
      const found = this.isVisibleDetailRow(row)

      if (found && (row.showComment !== comment)) {
        // @ts-ignore
        this.$set(row, 'showComment', comment)
      } else if (found) {
        // @ts-ignore
        this.closeDetailRow(row)
        // @ts-ignore
        this.$emit('details-close', row)
      } else {
        // @ts-ignore
        this.$set(row, 'showComment', comment)
        // @ts-ignore
        this.openDetailRow(row)
        // @ts-ignore
        this.$emit('details-open', row)
      }
      // @ts-ignore
      this.$emit('update:openedDetailed', props.visibleDetailRows)
    }).bind(this.$refs.bTable)()
  }
}
</script>
