<template>
  <b-table
    :data="table"
    :show-header="false"
    detailed
    ref="bTable"
    :show-detail-icon="false"
  >
    <b-table-column v-slot="props" field="key" label="项">
      <a
        @click="showDetails(props, props.row, false)"
        v-if="tableDocs[props.row.key]"
        aria-label="expand entry details"
        :aria-pressed="props.row.showComment === false"
        tabindex="0"
      >
        {{ props.row.label }}
      </a>
      <template v-else>{{ props.row.label }}</template>
    </b-table-column>

    <b-table-column
      cell-class="tableColumn"
      v-slot="props"
      field="value"
      label="值"
      centered
    >
      <div
        class="tableColoredCell"
        :class="{
          [`table-${props.row.value}`]: true,
          clickable: props.row.comment,
        }"
        :aria-pressed="props.row.showComment === true"
        aria-label="expand comments"
        :tabindex="props.row.comment && 0"
        @click="props.row.comment && showDetails(props, props.row, true)"
      >
        <div>
          <template v-if="props.row.nonQVL"> {{ props.row.value }}</template>
          <template v-else><KvTableUnit :value="props.row.value" /></template
          ><template v-if="props.row.comment">*</template>
        </div>
      </div>
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

<style lang="scss">
.tableColumn {
  position: relative;

  @media screen and (min-width: 770px) {
    width: 65px;
  }
}

.b-table td::before {
  visibility: hidden;
}
</style>

<style lang="scss" scoped>
.tableColoredCell {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 770px) {
    width: 65px;
  }

  &.clickable:hover {
    cursor: pointer;
  }

  &.table-t {
    background-color: #d4eddb;
  }

  &.table-f {
    background-color: #d3d2e8;
  }

  &.table-p {
    background-color: #daf0fb;
  }

  &.table-u {
    background-color: #ddd;
  }
}
</style>
