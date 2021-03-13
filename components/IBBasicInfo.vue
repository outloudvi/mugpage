<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ meta.name }}</p>
          <p class="subtitle is-6">{{ meta.developer }}</p>
        </div>
      </div>

      <div class="content">
        <blockquote v-if="meta.tagline">{{ meta.tagline }}</blockquote>
        <div id="appStoreLinks">
          <a
            v-if="meta.platform.android"
            :href="`https://play.google.com/store/apps/details?id=${meta.platform.android}`"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'google-play']" />Android</a
          >
          <a v-if="meta.platform.ios" :href="meta.platform.ios" target="_blank"
            ><font-awesome-icon :icon="['fab', 'app-store-ios']" />iOS</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import type { GameMeta } from '@/types'

@Component
export default class Infobox extends Vue {
  @Prop()
  meta!: GameMeta
}
</script>

<style lang="scss" scoped>
#appStoreLinks {
  display: flex;
  flex-wrap: wrap;
  svg {
    margin-right: 7px;
  }
  a {
    text-align: center;
    flex-grow: 1;
    min-width: 100px;
  }
}
</style>
