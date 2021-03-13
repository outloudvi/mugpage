<template>
  <aside id="aside">
    <IBBasicInfo :meta="meta" />
    <IBMapPolicy v-if="meta.mapPolicy" :meta="meta.mapPolicy" />
    <IBScorePolicy v-if="meta.scorePolicy" :meta="meta.scorePolicy" />
    <IBSocialPolicy v-if="meta.socialPolicy" :meta="meta.socialPolicy" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { GameMeta } from '@/types'

import IBBasicInfo from './IBBasicInfo.vue'
import IBMapPolicy from './IBMapPolicy.vue'
import IBScorePolicy from './IBScorePolicy.vue'
import IBSocialPolicy from './IBSocialPolicy.vue'

@Component({
  components: {
    IBBasicInfo,
    IBMapPolicy,
    IBScorePolicy,
    IBSocialPolicy,
  },
})
export default class Infobox extends Vue {
  @Prop()
  meta!: GameMeta
}
</script>

<style lang="scss" scoped>
#aside {
  margin-bottom: 20px;
  @media screen and (min-width: 769px) {
    float: right;
    clear: right;
    width: 23vw;
    margin-left: 10px;
  }
}
</style>

