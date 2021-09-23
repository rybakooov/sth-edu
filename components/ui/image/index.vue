<template>
  <picture>
    <source
      v-for="item in resources"
      :key="item.format"
      :srcset="item.srcset"
      :type="item.type"
    >
    <img
      ref="image"
      :class="$style.image"
      :src="fallback"
      :alt="alt"
      :loading="loading"
      :sizes="sizes.join(', ')"
      :decoding="decoding"
      @load="onLoad"
      @error="onError"
    >
  </picture>
</template>

<script>
  // Doc: https://medium.com/@woutervanderzee/responsive-images-with-srcset-and-sizes-fc434845e948
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
  import common from './_common'

  export default {
    name: 'UiImage',
    mixins: [common],
    computed: {
      resources () {
        if (this.isSrcObject) {
          return this.src.formats
        } else {
          const result = this.formats.map(format => ({
            srcset: this.getSrcset(format),
            type: `image/${format}`,
            format
          }))
          result.push({
            srcset: this.getSrcset()
          })
          return result
        }
      },
      fallback () {
        return this.isSrcObject ? this.src.original.path : this.src.toString()
      },
      currentSrc () {
        return this.$refs.image.currentSrc || this.$refs.image.src
      }
    },
    methods: {
      getSrcset (f = null) {
        return this.map.map(w => this.$imgine.format(this.src.toString(), { w, f }) + ` ${w}w`).join(', ')
      },
      onLoad () {
        this.$emit('load')
        this.$loader && this.$loader.setLoaded(this.currentSrc)
      },
      onError () {
        this.$emit('error')
        this.$loader && this.$loader.setLoaded(this.currentSrc)
      }
    },
    mounted () {
      this.$emit('preload', { type: 'image', src: this.currentSrc })
      if (this.$refs.image.complete) {
        this.onLoad()
      }
      this.$loader && this.$loader.addResource(this.currentSrc)
    }
  }
</script>

<style lang="scss" module>
  .image {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
</style>
