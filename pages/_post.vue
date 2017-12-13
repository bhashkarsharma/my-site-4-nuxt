<template lang="pug">
ContentContainer
  div.post-lead(slot="lead")
    h1.post-title {{ post.title }}

  section.post-body(slot="content" :style="overrideMargin")
    div(v-html="post.body")
    ShareWidgets(:post="post")

  div.post-closer(slot="closer")
    img.post-image(v-if="post.image" :src="`/img/posts/${post.image}`")
    p(v-if="post.quote").post-quote {{ post.quote }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    post: await app.$content('/posts').get(route.path)
  }),

  computed: {
    overrideMargin () {
      if (this.post.title.length < 30) return { 'margin-left': '-1rem' }
    }
  },

  head () {
    return {
      title: 'Alid Castano | ' + this.post.title
    }
  },

  components: {
    ContentContainer,
    ShareWidgets: () => import('~/components/ShareWidgets')
  }
}
</script>

<style lang="sass">
@import "../assets/sass/util"

.post-lead
  margin: 1rem auto 1.75rem auto
.post-title
  font-size: 2rem
  margin-top: 0
  color: #45606e
  @media (min-width: $bp-tablet)
    font-size: 2.75rem
.post-body
  margin-top: -.6rem
.post-closer
  margin-bottom: 3rem
.post-image
  margin: .5rem auto 1rem auto
.post-quote
  max-width: 85%
  margin: 0 auto
  color: #737373
  font-style: italic
</style>
