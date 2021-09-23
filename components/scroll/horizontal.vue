<template>
  <scroll-sticky @update="stickyUpdate">
    <div :class="$style.container">
      <div ref="content" :class="[$style.content, classContent]" :style="contentStyle">
        <slot />
      </div>
    </div>
    <slot name="outside" />
  </scroll-sticky>
</template>

<script>
  import ScrollSticky from './sticky'
  import { lerp, clamp } from '../../../utils/math'

  export default {
    name: 'ScrollHorizontal',
    components: {
      ScrollSticky
    },
    props: {
      offsetTop: {
        type: Number,
        default: 0
      },
      smooth: {
        type: Number,
        default: 0.2
      },
      classContent: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        deltaY: 0,
        progress: 0,
        width: 0,
        x: { previous: 0, current: 0 }
      }
    },
    computed: {
      contentStyle () {
        return {
          transform: `translate3d(-${this.x.previous}px, 0, 0)`
        }
      }
    },
    methods: {
      stickyUpdate ({ progress, deltaY }) {
        this.width = this.$refs.content.clientWidth - window.innerWidth
        this.deltaY = deltaY
        this.progress = clamp(0, 1, progress)
        this.x.current = this.width * this.progress
        this.x.previous = lerp(this.x.previous, this.x.current, this.smooth)

        this.$emit('tick', { progress, deltaY, x: this.x })
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    overflow: hidden;
    width: 100%;
  }
  .content {
    will-change: transform;
    height: vh(100);
    display: inline-flex;
  }
</style>
