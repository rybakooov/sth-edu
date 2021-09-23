<template>
  <component :is="tag" ref="container">
    <slot :progress="progress" />
  </component>
</template>

<script>
  import { clamp } from '@/utils/math'
  import { easeInOutCubic } from '@/utils/easings'

  export default {
    name: 'ScrollViewport',
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      offsetBottom: {
        type: Number,
        default: 50
      },
      easing: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'center',
        validator: v => ['center', 'top', 'bottom'].includes(v)
      },
      min: {
        type: Number,
        default: -1
      },
      max: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        containerRect: null,
        progress: 0
      }
    },
    computed: {
      easingFN () {
        return this.easing ? easeInOutCubic : undefined
      },
      rectOffset () {
        if (this.position === 'center') {
          return this.containerRect.height / 2
        } else if (this.position === 'top') {
          return 0
        } else if (this.position === 'bottom') {
          return this.containerRect.height
        } else {
          return 0
        }
      }
    },
    methods: {
      scrollTick () {
        this.containerRect = this.$el.getBoundingClientRect()

        const windowHeight = window.innerHeight
        const offset = windowHeight * this.offsetBottom / 100
        const max = windowHeight - offset
        const progressPx = this.containerRect.top - windowHeight + offset + this.rectOffset

        this.progress = clamp(this.min, this.max, progressPx / max, this.easingFN)
        this.$emit('progress', this.progress)
      }
    },
    mounted () {
      this.$scroll.on('scroll', this.scrollTick)
    },
    beforeDestroy () {
      this.$root.$off('scroll', this.scrollTick)
    }
  }
</script>
