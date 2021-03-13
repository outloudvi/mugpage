<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <b-tooltip :label="tooltip" position="is-right" v-if="tooltip !== ''">
          {{ title }}
        </b-tooltip>
        <template v-else>{{ title }}</template>
      </p>
      <div
        class="card-header-icon"
        aria-label="toggle column"
        @click="toggleHidden()"
      >
        <span class="icon">
          <font-awesome-icon
            v-if="currHidden"
            :icon="['fas', 'angle-down']"
            aria-hidden="true"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'angle-up']"
            aria-hidden="true"
          />
        </span>
      </div>
    </header>
    <div class="card-content" :class="{ hidden: currHidden }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Infobox extends Vue {
  @Prop()
  title!: string

  @Prop({ default: () => false })
  hidden!: boolean

  @Prop()
  tooltip!: string

  currHidden = false

  toggleHidden() {
    this.currHidden = !this.currHidden
  }

  mounted() {
    this.currHidden = this.hidden
  }
}
</script>

<style lang="scss" scoped>
.card-content {
  max-height: 9999px;
  transition: all 0.2s ease;
}

.hidden {
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
