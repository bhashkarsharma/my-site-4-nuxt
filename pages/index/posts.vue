<template lang="pug">
PreviewContainer(
  title="What I've been thinking about"
  :seeAll="{ path: '/archives/posts', label: 'See all posts' }"
)
  ul.posts-container
    li.post-item(v-for="post in posts")
      nuxt-link(:to="post.path") {{ post.title }}
</template>

<script>
import PreviewContainer from '~/components/PreviewContainer'

export default {
  asyncData: async ({ app }) => ({
    posts: await app.$content('/posts')
    .query({ exclude: 'body' })
    .getOnly(0, 4)
  }),
  components: {
    PreviewContainer
  }
}
</script>
