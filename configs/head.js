// Global page headers (https://go.nuxtjs.dev/config-head)

const script = []

const meta = [
  { charset: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'theme-color', content: '#191919' },
  { name: 'mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-capable', content: 'yes' },
  { name: 'apple-mobile-web-app-status-bar-style', content: 'yes' },
  { name: 'og:type', content: 'website' },
  // { hid: 'og:image', name: 'og:image', content: share },
  { hid: 'og:image:width', name: 'og:image:width', content: '640' },
  { hid: 'og:image:height', name: 'og:image:height', content: '640' },
  { hid: 'og:title', name: 'og:title', content: '' },
  { hid: 'og:description', name: 'og:description', content: '' },
  { hid: 'description', name: 'description', content: '' },
]
const link = []

module.exports = { meta, link, script }
