export default function () {
  return {
    head () {
      return {
        htmlAttrs: {
          lang: 'ru'
        },
        title: this.title ? this.title + ' | StartTheHistory' : 'StartTheHistory',
        meta: [
          { hid: 'og:title', name: 'og:title', content: this.title ? this.title + ' | StartTheHistory' : 'StartTheHistory' },
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'og:description', name: 'og:description', content: this.description },
          { hid: 'og:image', name: 'og:image', content: this.image },
          { hid: 'og:image:width', name: 'og:image:width', content: this.imageWidth },
          { hid: 'og:image:height', name: 'og:image:height', content: this.imageHeight }
        ],
        link: this.links
      }
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    httpHeaders: () => ({
      'Cache-Control': `max-age=10, public`
    }),
    computed: {
      title () {
        return ''
      },
      image () {
        return require('~/assets/images/share.jpg')
      },
      imageHeight () {
        return 640
      },
      imageWidth () {
        return 640
      },
      links () {
        const result = [
          { rel: 'apple-touch-icon', sizes: '57x57', href: require('~/static/favicon/apple-icon-57x57.png') },
          { rel: 'apple-touch-icon', sizes: '60x60', href: require('~/static/favicon/apple-icon-60x60.png') },
          { rel: 'apple-touch-icon', sizes: '72x72', href: require('~/static/favicon/apple-icon-72x72.png') },
          { rel: 'apple-touch-icon', sizes: '76x76', href: require('~/static/favicon/apple-icon-76x76.png') },
          { rel: 'apple-touch-icon', sizes: '114x114', href: require('~/static/favicon/apple-icon-114x114.png') },
          { rel: 'apple-touch-icon', sizes: '120x120', href: require('~/static/favicon/apple-icon-120x120.png') },
          { rel: 'apple-touch-icon', sizes: '144x144', href: require('~/static/favicon/apple-icon-144x144.png') },
          { rel: 'apple-touch-icon', sizes: '152x152', href: require('~/static/favicon/apple-icon-152x152.png') },
          { rel: 'apple-touch-icon', sizes: '180x180', href: require('~/static/favicon/apple-icon-180x180.png') },
          { rel: 'icon', type: 'image/png', sizes: '192x192',  href: require('~/static/favicon/android-icon-192x192.png') },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('~/static/favicon/favicon-32x32.png') },
          { rel: 'icon', type: 'image/png', sizes: '96x96', href: require('~/static/favicon/favicon-96x96.png') },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('~/static/favicon/favicon-16x16.png') }
        ]
        return result
      },
      description () {
        return ''
      }
    },
    mounted () {}
  }
}
