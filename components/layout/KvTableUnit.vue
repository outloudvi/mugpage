<template>
  <span v-if="value == 't'" class="tableUnit colorYes">是</span>
  <span v-else-if="value == 'f'" class="tableUnit colorNo">否</span>
  <span v-else-if="value == 'p'" class="tableUnit colorPartial">部分</span>
  <span v-else class="tableUnit colorUnknown">未知</span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { QVLResponse } from '~/types'

@Component
export default class KvTableUnit extends Vue {
  @Prop()
  value!: QVLResponse
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
