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
    const meta = await $content(`${slug}/meta`).fetch()
    const text = await $content(`${slug}/index`).fetch()
    return { meta, text }
  },
  data() {
    return {
      meta: {},
    }
  },
})
</script>
