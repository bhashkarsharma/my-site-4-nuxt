<template lang="pug">
ContentContainer.post-archives
  ul(slot="content")
    li.post-group(v-for="[date, posts] in postsByDate")
      h3.group-label {{ date }}
      ul.post-list
        li.post-preview(v-for="post in posts")
          nuxt-link(:to="post.path") {{ post.title }}
</template>

<script>
import ContentContainer from '~/components/ContentContainer'

export default {
  asyncData: async ({ app, route }) => ({
    posts: await app.$content('/posts').getAll()
  }),

  computed: {
    postsByDate () {
      const posts = new Map()
      this.posts
      .forEach(post => {
        const [year] = post.date.split('-')
        if (!posts.has(year)) posts.set(year, [post])
        else posts.get(year).push(post)
      })
      return [...posts].sort(([date1], [date2]) => date2 - date1)
    }
  },

  components: {
    ContentContainer
  }
}
</script>

<style lang="sass">
.post-group
  list-style-type: none
</style>
