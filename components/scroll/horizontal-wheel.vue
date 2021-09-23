<template>
  <div :class="classes" @mousedown="onmousedown">
    <div ref="content" :class="[$style.content, classContent]" :style="contentStyle">
      <slot v-for="(item, index) in slides" :item="item" :index="index" />
    </div>
    <resize-observer @notify="onResize" />
  </div>
</template>

<script>
  import tickMixin from '@/mixins/tick'
  import normalizeWheel from 'normalize-wheel'
  import { lerp, approximately } from '../../utils/math'

  export default {
    name: 'ScrollHorizontalWheel',
    mixins: [tickMixin()],
    props: {
      smooth: {
        type: Number,
        default: 0.03
      },
      holdSmooth: {
        type: Number,
        default: 0.5
      },
      classContent: {
        type: String,
        default: ''
      },
      slides: {
        type: Array,
        default: () => []
      },
      value: {
        type: Number,
        default: 0
      },
      changeTimeout: {
        type: Number,
        default: 1200
      },
      disableWheel: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        delta: { current: 0, abs: 0, direction: 0 },
        move: { active: false },
        hold: { active: false },
        lock: false,
        x: { previous: 0, current: 0, delta: 0 }
      }
    },
    computed: {
      classes () {
        return [
          this.$style.container,
          { [this.$style.hold]: this.hold.active },
          { [this.$style.move]: this.move.active }
        ]
      },
      slidesElement () {
        return [...this.$refs.content.children]
      },
      disabledNext () {
        return this.value + 1 >= this.slides.length
      },
      disabledPrev () {
        return this.value === 0
      },
      contentStyle () {
        return {
          transform: `translate3d(${-1 * this.x.previous}px, 0, 0)`
        }
      }
    },
    methods: {
      stickyUpdate ({ progress, deltaY }) {
        this.delta = deltaY
        this.$emit('tick', { progress, deltaY, x: this.x })
      },
      onWheel (e) {
        const normalized = normalizeWheel(e)
        this.setDelta(normalized.pixelY)
        if (this.delta.abs > 10 && !this.move.active && !this.disableWheel) {
          if (this.delta.direction > 0) {
            this.next()
          } else {
            this.prev()
          }
        }
      },
      setDelta (value) {
        this.delta.current = value
        this.delta.abs = Math.abs(value)
        this.delta.direction = value < 0 ? -1 : 1
      },
      next () {
        const newIndex = this.value + 1
        this.goToIndex(newIndex)
      },
      prev () {
        const newIndex = this.value - 1
        this.goToIndex(newIndex)
      },
      getItemDif (index) {
        const $el = this.slidesElement[index]
        const rect = $el.getBoundingClientRect()
        const screenCenter = window.innerWidth / 2
        const center = rect.left + rect.width / 2
        return center - this.x.delta - screenCenter
      },
      goToIndex (index) {
        const item = this.slidesElement[index]
        if (item) {
          const dif = this.getItemDif(index)
          this.scrollTo(this.x.current + dif)
          this.$emit('input', index)
        }
      },
      scrollTo (value) {
        if (!approximately(this.x.current, value, 1)) {
          this.move.active = true
          setTimeout(() => (this.move.active = false), this.changeTimeout)
        } else {
          this.move.active = false
        }
        this.x.current = value
      },
      tick () {
        const amt = this.hold.active ? this.holdSmooth : this.smooth
        this.x.previous = lerp(this.x.previous, this.x.current, amt)
        this.x.delta = this.x.current - this.x.previous

        if (approximately(this.x.previous, this.x.current, 0.1)) {
          this.x.previous = this.x.current
        }

        this.$emit('tick', {
          x: this.x,
          move: this.move,
          disabledPrev: this.disabledPrev,
          disabledNext: this.disabledNext
        })
      },
      onmousedown (e) {
        // if (!this.move.active) {}
        this.hold.cordX = e.clientX
        this.hold.x = this.x.previous
        this.hold.active = true
      },
      onmouseup () {
        if (this.hold.active) {
          this.hold.active = false
          this.checkPosition()
        }
      },
      onmousemove (e) {
        if (this.hold.active) {
          this.move.active = true
          this.x.current = this.hold.x + this.hold.cordX - e.clientX
        }
      },
      checkPosition () {
        const nearIndex = this.getNearIndex()
        const dif = this.getItemDif(nearIndex)
        this.$emit('input', nearIndex)
        this.scrollTo(this.x.current + dif)
      },
      getItemsSorted () {
        return this.slidesElement
          .map((item, index) => ({ index, dif: this.getItemDif(index) }))
          .sort((a, b) => Math.abs(a.dif) - Math.abs(b.dif))
      },
      getNearIndex () {
        const items = this.getItemsSorted()
        const minDif = window.innerWidth * 0.5
        return (items[0].index === this.value && Math.abs(items[1].dif) < minDif) ? items[1].index : items[0].index
      },
      onResize () {
        this.checkPosition()
      }
    },
    mounted () {
      document.scrollingElement.addEventListener('wheel', this.onWheel)
      document.documentElement.addEventListener('mouseup', this.onmouseup)
      document.documentElement.addEventListener('mousemove', this.onmousemove)

      this.runTick('ScrollHorizontalWheel')
    },
    beforeDestroy () {
      document.scrollingElement.removeEventListener('wheel', this.onWheel)
      document.documentElement.removeEventListener('mouseup', this.onmouseup)
      document.documentElement.removeEventListener('mousemove', this.onmousemove)
    }
  }
</script>

<style lang="scss" module>
  .container {
    overflow: hidden;
    width: 100%;
    cursor: grab;
  }
  .content {
    will-change: transform;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .move {
    .content {
      pointer-events: none;
    }
  }
  .hold {
    cursor: grabbing;
  }
</style>
