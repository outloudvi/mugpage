<template>
  <b-table
    :data="table"
    :show-header="false"
    detailed
    :show-detail-icon="false"
  >
    <b-table-column v-slot="props" field="key">
      <a
        @click="props.toggleDetails(props.row)"
        v-if="tableDocs[props.row.key]"
      >
        {{ props.row.label }}
      </a>
      <span v-else>{{ props.row.label }}</span>
    </b-table-column>

    <b-table-column v-slot="props" field="value" centered>
      <template v-if="props.row.nonQVL">
        {{ props.row.value }}
      </template>
      <template v-else>
        <div v-if="props.row.value == 't'" class="tableUnit colorYes">是</div>
        <div v-else-if="props.row.value == 'f'" class="tableUnit colorNo">
          否
        </div>
        <div v-else-if="props.row.value == 'p'" class="tableUnit colorPartial">
          部分
        </div>
        <div v-else class="tableUnit colorUnknown">未知</div>
      </template>
    </b-table-column>

    <template #detail="props">
      <article>
        <strong>{{ props.row.label }} </strong>
        <p>
          {{ tableDocs[props.row.key] }}
        </p>
      </article>
    </template>
  </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Infobox extends Vue {
  @Prop()
  table!: { key: string, label: string, value: string, nonQVL?: boolean }[]

  @Prop({ default: () => ({}) })
  tableDocs!: Record<string, string>
}
</script>

<style lang="scss" scoped>
.colorYes {
  background-color: #d4eddb;
}

.colorNo {
  background-color: #d3d2e8;
}

.colorPartial {
  background-color: #daf0fb;
}

.colorUnknown {
  background-color: #ddd;
}
</style>
