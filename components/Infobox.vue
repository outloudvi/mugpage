<template>
  <aside id="aside">
    <IBBasicInfo :meta="meta" />
    <IBMapPolicy v-if="meta.mapPolicy" :meta="meta.mapPolicy" />
    <IBScorePolicy v-if="meta.scorePolicy" :meta="meta.scorePolicy" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { GameMeta } from '@/types'

import IBBasicInfo from './IBBasicInfo.vue'
import IBMapPolicy from './IBMapPolicy.vue'
import IBScorePolicy from './IBScorePolicy.vue'

@Component({
  components: {
    IBBasicInfo,
    IBMapPolicy,
    IBScorePolicy,
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
  clear: right;
  width: 23vw;
}
</style>
