<template>
  <aside id="aside">
    <IBBasicInfo :meta="meta" />
    <IBMapPolicy v-if="meta.mapPolicy" :meta="meta.mapPolicy" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { GameMeta } from '@/types'

import IBBasicInfo from './IBBasicInfo.vue'
import IBMapPolicy from './IBMapPolicy.vue'

@Component({
  components: {
    IBBasicInfo,
    IBMapPolicy,
  },
})
export default class Infobox extends Vue {
  @Prop()
  meta!: GameMeta
}
</script>

<style lang="scss" scoped>
#aside {
  float: right;
  width: 23vw;
}
</style>
