<template>
  <div :class="$style.collapse">
    <transition :name="$style.collapse" @enter="onEnter" @leave="onLeave" @after-enter="onEnterTo">
      <div :class="$style.content" ref="content" v-if="isOpen">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'UiCollapse',
    props: {
      value: {
        type: Boolean,
        default: undefined
      },
      opened: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        innerValue: false
      }
    },
    computed: {
      useModel () {
        return typeof this.value !== 'undefined'
      },
      isOpen () {
        return this.useModel ? this.value : this.innerValue
      }
    },
    methods: {
      init () {
        if (!this.useModel) {
          this.innerValue = !!this.opened
        }
      },
      onToggle () {
        let value

        if (this.useModel) {
          value = !this.value
        } else {
          this.innerValue = !this.innerValue
          value = this.innerValue
        }

        this.$emit('change', value)
        this.$emit('input', value)
      },
      onEnter () {
        this.$refs.content.style.height = this.$refs.content.scrollHeight + 'px'
      },
      onEnterTo () {
        this.$refs.content.style.height = null
      },
      onLeave () {
        this.$refs.content.style.height = this.$refs.content.scrollHeight + 'px'
      }
    },
    watch: {
      opened () {
        this.init()
      }
    },
    created () {
      this.init()
    }
  }
</script>

<style lang="scss" module>
  .collapse {
    transition: margin-top 0.4s ease;
    &:global(-leave-active),
    &:global(-enter-active) {
      transition: 0.4s opacity ease, 0.4s height ease;
      overflow: hidden;
    }
    &:global(-enter-active),
    &:global(-leave-to) {
      opacity: 0;
      height: 0;
    }
    &:global(-enter-to) {
      opacity: 1;
    }
    &:global(-leave-to) {
      height: 0 !important;
    }
  }
  .content {}
</style>
