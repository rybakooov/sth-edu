<template>
  <div :class="$style.container" :style="style">
    <transition name="fade">
      <img v-if="showPlaceholder" :class="$style.placeholder" :src="placeholderSrc" alt="placeholder"/>
    </transition>
    <ui-image
      :class="$style.image"
      v-bind="$props"
      @load="onLoad"
      @error="onError"
      @preload="$emit('preload', $event)"
    />
  </div>
</template>

<script>
  import UiImage from './index'
  import common from './_common'

  export default {
    name: 'UiImageContainer',
    mixins: [common],
    components: {
      UiImage
    },
    data () {
      return {
        loaded: false,
        error: false
      }
    },
    computed: {
      style () {
        return {
          '--aspect': `${this.aspect * 100}%`
        }
      },
      placeholderSrc () {
        return this.isSrcObject
          ? this.src.placeholder.path
          : this.$imgine.format(this.src.toString(), { w: 20, b: this.blur, f: null })
      },
      showPlaceholder () {
        return this.placeholder && !this.loaded
      }
    },
    methods: {
      onLoad () {
        this.loaded = true
        this.$emit('load')
      },
      onError () {
        this.error = true
        this.$emit('error')
      }
    }
  }
</script>

<style lang="scss" module>
  .container {
    display: block;
    position: relative;
    &:before {
      content: '';
      display: block;
      padding-bottom: var(--aspect);
    }
  }
  .placeholder {
    z-index: 2;
  }
  .image,
  .placeholder {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .image {
    img {
      height: 100%;
    }
  }
</style>
