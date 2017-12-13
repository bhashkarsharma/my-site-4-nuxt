module.exports = {
  content: [
    // 'now',
    ['posts', {
      page: '/_post',
      permalink: ':year/:slug'
    }],
    // ['projects', {
    //   page: '/projects/_project',
    //   isPost: false
    // }]
  ],
  api: {
    baseURL: process.env.NODE_ENV === 'production'
      ? 'https://www.bhashkar.me'
      : 'http://localhost:3000'
  }
}
