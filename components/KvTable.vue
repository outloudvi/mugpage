<template>
  <b-table :data="table" :show-header="false">
    <b-table-column v-slot="props" field="key" label="ID">
      {{ props.row.key }}
    </b-table-column>

    <b-table-column v-slot="props" field="value" label="Date" centered>
      <div v-if="props.row.value == 't'" class="tableUnit colorYes">是</div>
      <div v-else-if="props.row.value == 'f'" class="tableUnit colorNo">否</div>
      <div v-else-if="props.row.value == 'p'" class="tableUnit colorPartial">
        部分
      </div>
      <div v-else class="tableUnit colorUnknown">未知</div>
    </b-table-column>
  </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Infobox extends Vue {
  @Prop()
  table!: { key: string, value: string }[]
}
</script>

<style lang="scss" scoped>
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
