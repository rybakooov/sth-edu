<template>
  <div ref="container" :class="$style.container">
    <div :class="$style.content" :style="contentStyle" ref="content">
      <slot />
    </div>
    <resize-observer @notify="onresize"/>
  </div>
</template>

<script>
  import { clamp } from '@/utils/math'

  export default {
    name: 'ScrollSticky',
    data() {
      return {
        containerRect: null,
        offset: 0,
        percent: 0,
        topPercent: 0,
        bottomPercent: 0
      }
    },
    computed: {
      contentStyle() {
        return {}
      }
    },
    methods: {
      scrollTop (scrollData) {
        if (!this.$refs.container) {
          return undefined
        }
        this.containerRect = this.$refs.container.getBoundingClientRect()

        const windowHeight = window.innerHeight
        const max = 0
        const min = -(this.containerRect.height - this.$refs.content.clientHeight)
        const offset = this.containerRect.top
        this.percent = Math.max(offset, min) * 100 / min
        this.topPercent = clamp(0, 100, offset * 100 / windowHeight)
        this.bottomPercent = clamp(0, 100, 100 * ((offset - (min - windowHeight)) / (min - (min - windowHeight))))

        this.offset = clamp(min, max, offset)

        this.$emit('update', {
          progress: (this.percent < 0 ? -this.topPercent : this.percent) / 100,
          deltaY: scrollData.deltaY
        })
      },
      onresize () {}
    },
    mounted () {
      this.$scroll.on('tick', this.scrollTop)
    },
    beforeDestroy () {
      this.$scroll.off('tick', this.scrollTop)
    }
  }
</script>

<style lang="scss" module>
  .container {}
  .content {
    position: sticky;
    top: 0;
    display: flex;
  }
</style>
