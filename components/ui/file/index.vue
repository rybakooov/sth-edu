<template>
  <input :class="$style.input" @change="onChange" ref="file" type="file" :accept="accept">
</template>

<script>
  export default {
    name: 'UiFile',
    props: {
      accept: {
        type: String,
        default: 'image/jpeg, image/png, image/jpg'
      },
      size: {
        type: Number,
        default: 524288 // 512кб
      }
    },
    data () {
      return {}
    },
    methods: {
      clear () {
        this.$refs.file.value = null
      },
      onChange () {
        const file = this.$refs.file.files[0]
        if (file) {
          if (file.size > this.size) {
            this.$emit('error', [{ message: `Max size ${this.size / 1024}kb` }])
          } else {
            this.$emit('input', file)
          }
          setTimeout(() => this.clear(), 100)
        }
      },
      select () {
        this.$refs.file.click()
      }
    }
  }
</script>

<style lang="scss" module>
  .input {}
</style>
