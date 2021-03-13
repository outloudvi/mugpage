<template>
  <section class="section">
    <h2 class="title is-3">MUG Page</h2>
    <article class="content">
      <nuxt-content :document="text" />
    </article>
  </section>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: 'Home',
    }
  },
  async asyncData({ $content }) {
    return { text: await $content(`index`).fetch() }
  },
}
</script>
