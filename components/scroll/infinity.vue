<template>
  <div :class="$style.container">
    <transition name="fade">
      <div :class="$style.content" v-if="loading">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ScrollInfinity',
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      offsetTop: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      loaded () {
        this.loading = false
      },
      updateScrollTop () {
        if (!this.loading && !this.disabled) {
          const rect = this.$el.getBoundingClientRect()
          if (rect.top - window.innerHeight - this.offsetTop < 0) {
            this.loading = true
            this.$emit('loading')
          }
        }
      }
    },
    mounted () {
      this.$scroll.on('scroll', this.updateScrollTop)
    },
    beforeDestroy () {
      this.$scroll.off('scroll', this.updateScrollTop)
    }
  }
</script>

<style lang="scss" module>
  .container {}
  .content {}
</style>
