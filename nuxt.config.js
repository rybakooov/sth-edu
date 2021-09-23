const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isStage = process.env.NODE_ENV === 'staging'
const envFilename = isStage ? '.env.stage' : isDev ? '.env.dev' : '.env.prod'
require('dotenv').config({ path: envFilename })

export default {
  ssr: true,
  globalName: 'app',
  components: false,
  loading: false,

  head: require('./configs/head.js'),
  server: require('./configs/server.js').default,
  i18n: require('./configs/i18n.js').default,
  router: require('./configs/router.js').default,
  imgine: require('./configs/imgine.js').default,
  auth: require('./configs/auth.js').default,

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/global.scss'
  ],

  styleResources: {
    scss: ['assets/styles/prepend.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/resize.js' },
    { src: '~/plugins/api.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/device.js', mode: 'client' },
    { src: '~/plugins/router.js', mode: 'client' },
    { src: '~/plugins/raf.js', mode: 'client' },
    { src: '~/plugins/observe-visibility.js', mode: 'client' },
    { src: '~/plugins/view-height.js', mode: 'client' }
    // { src: '~/plugins/loader.js', mode: 'client' }
  ],

  serverMiddleware: [
    '~/middleware/server-trailing-slash.js'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/eslint-module',
    // 'auth',
    'imgine',
    'scroll'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'nuxt-i18n',
    'nuxt-custom-headers'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    publicPath: process.env.PUBLIC_PATH,
    extractCSS: process.env.EXTRACTCSS === '1',
    // analyze: true,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.i18n$/,
        loader: `@kazupon/vue-i18n-loader?${JSON.stringify({
          includePaths: [path.resolve(__dirname), 'node_modules']
        })}`
      })
      config.module.rules.push({
        test: /\.(glsl|frag|vert)$/,
        loader: 'raw-loader'
      })
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: isDev ? '[name]_[local]_[hash:base64:6]' : '[hash:base64:8]'
        }
      }
    }
  },
  env: {
    API_BASE_PATH: process.env.API_BASE_PATH
  }
}
