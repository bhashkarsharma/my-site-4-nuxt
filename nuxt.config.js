module.exports = {
  head: {
    titleTemplate: (val) => val ? `${val} - Bhashkar` : 'Bhashkar',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@bhashkarsharma' },
      { name: 'twitter:creator', content: '@bhashkarsharma' },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'Bhashkar Sharma' },
      { name: 'author', content: 'Bhashkar Sharma' },
      { hid: 'description', name: 'description', content: 'Personal Website.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxtent',
    // '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/google-analytics', { ua: 'UA-xxxxxx' }]
  ],
  css: [
    '@/assets/style.scss'
  ],
  loading: false
}
