<template>
  <div :class="$style.container">
    <div :class="$style.content" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<script>
  import { clamp } from '@/utils/math'

  export default {
    name: 'ScrollParallax',
    props: {
      top: {
        type: Boolean,
        default: false
      },
      bottom: {
        type: Boolean,
        default: false
      },
      parallaxSpeed: {
        type: Number,
        default: 0,
        validator: (value) => {
          return value => 0 && value <= 1
        }
      }
    },
    data() {
      return {
        containerRect: null,
        originalOffset: 0,
        offset: 0
      }
    },
    computed: {
      contentStyle() {
        return {
          transform: `translateY(${-this.offset}px)`
        }
      },
      useParallax () {
        return this.parallaxSpeed > 0 && this.parallaxSpeed < 1
      }
    },
    methods: {
      scrollTop () {
        this.containerRect = this.$el.getBoundingClientRect()

        const windowHeight = window.innerHeight
        const max = this.top ? windowHeight : 0
        const min = this.bottom ? -windowHeight : 0
        const diff = this.containerRect.height - windowHeight
        const offset = this.containerRect.top + diff

        this.originalOffset = clamp(min, max, offset)

        if (this.useParallax) {
          this.offset = this.parallaxSpeed * (this.originalOffset - this.offset)
        } else {
          this.offset = this.originalOffset
        }
      }
    },
    mounted () {
      this.$scroll.on('scroll', this.scrollTop)
    },
    beforeDestroy () {
      this.$scroll.off('scroll', this.scrollTop)
    }
  }
</script>

<style lang="scss" module>
  .container {
    position: relative;
    z-index: 2;
    overflow: hidden;
    height: auto;
  }
  .content {}
</style>
