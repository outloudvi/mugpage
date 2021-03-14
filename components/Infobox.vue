<template>
  <aside id="aside">
    <IBBasicInfo :meta="meta" />
    <IBGameplayPolicy v-if="meta.gameplayPolicy" :meta="meta.gameplayPolicy" />
    <IBMapPolicy v-if="meta.mapPolicy" :meta="meta.mapPolicy" />
    <IBScorePolicy v-if="meta.scorePolicy" :meta="meta.scorePolicy" />
    <IBSocialPolicy v-if="meta.socialPolicy" :meta="meta.socialPolicy" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { GameMeta } from '@/types'

import IBBasicInfo from './infobox/boxes/IBBasicInfo.vue'
import IBGameplayPolicy from './infobox/boxes/IBGameplayPolicy.vue'
import IBMapPolicy from './infobox/boxes/IBMapPolicy.vue'
import IBScorePolicy from './infobox/boxes/IBScorePolicy.vue'
import IBSocialPolicy from './infobox/boxes/IBSocialPolicy.vue'

@Component({
  components: {
    IBBasicInfo,
    IBGameplayPolicy,
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
    width: 40vw;
    margin-left: 10px;
  }
  @media screen and (min-width: 1216px) {
    width: 23vw;
  }
}
</style>

