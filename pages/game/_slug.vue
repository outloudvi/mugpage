<template>
  <section class="section">
    <Infobox :meta="meta" />
    <main>
      <h2 class="title is-3">
        {{ meta.name }}
      </h2>
      <article class="content">
        <nuxt-content :document="text" />
      </article>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Infobox from '@/components/Infobox.vue'

export default Vue.extend({
  components: { Infobox },
  async asyncData({ $content, params }) {
    const slug = params.slug
    const meta = await $content(`data/${slug}/meta`).fetch()
    const text = await $content(`data/${slug}/index`).fetch()
    return { meta, text }
  },
  head() {
    // @ts-ignore
    return { title: this.meta.name }
  },
  data() {
    return {
      meta: {},
    }
  },
})
</script>
