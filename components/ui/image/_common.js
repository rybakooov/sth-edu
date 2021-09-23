export default {
  props: {
    /**
     * Соотношение сторон высота/ширина
     */
    aspect: {
      type: [String, Number],
      default: 0.5625
    },
    formats: {
      type: Array,
      default: () => ['webp']
    },
    placeholder: {
      type: Boolean,
      default: true
    },
    /**
     * String: path
     * Object: require("@/assets/images/frame.jpg?{ sizes:[100,200,100,400], formats: ['avif', 'webp'], quality: 85, blur: 2 }")
     */
    src: {
      type: [String, Object],
      default: ''
    },
    /**
     * Сетка размеров
     * Формирует необходимые размеры для запросов
     */
    map: {
      type: Array,
      default: () => [360, 640, 960, 1280]
    },
    /**
     * Example: ['(max-width: 1920px) 100vw', '(min-width: 1921px) 2048px', '1920px']
     */
    sizes: {
      type: Array,
      default: () => ['100vw']
    },
    loading: {
      type: String,
      default: '',
      validate: v => ['auto', 'lazy', 'eager', ''].includes(v)
    },
    decoding: {
      type: String,
      default: 'async',
      validate: v => ['auto', 'sync', 'async'].includes(v)
    },
    blur: {
      type: [String, Number],
      default: 2
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    isSrcObject () {
      return typeof this.src === 'object'
    }
  }
}
