<template>
  <textarea v-if="multiline" :readonly="readonly" :value="value" ref="input" :class="$style.textarea" :rows="1" @keyup.enter="onKeyEnter" @input="onInput" @focus="onFocus" @blur="onBlur"></textarea>
  <input v-else :value="value" :readonly="readonly" :placeholder="placeholder" ref="input" @keyup.enter="onSubmit" :class="$style.input" @input="onInput" @focus="onFocus" @blur="onBlur">
</template>

<script>
  import autosize from 'autosize'
  import { debounce } from 'lodash'
  import IMask from 'imask'

  export default {
    name: 'UiInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      multiline: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 1
      },
      mask: {
        type: [Boolean, Object, String, Number, RegExp],
        default: ''
      },
      maskUppercase: {
        type: Boolean,
        default: false
      },
      debounce: {
        type: Number,
        default: 0
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        inputmask: null,
        focused: false,
        touched: false,
        changeDebounce: () => {}
      }
    },
    methods: {
      checkAutosize () {
        if (this.multiline) {
          autosize(this.$refs.input)
        } else {
          autosize.destroy(this.$refs.input)
        }
      },
      onKeyEnter (event) {
        if (event.ctrlKey) {
          this.onSubmit()
        }
      },
      onInput () {
        this.changeDebounce()
      },
      onFocus () {
        this.$emit('focus')
      },
      onBlur () {
        this.$emit('blur')
      },
      clear () {
        this.changeDebounce('')
      },
      onSubmit () {
        this.$emit('submit', '')
      },
      focus () {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      },
      change () {
        this.$emit('input', this.$refs.input.value)
      },
      setMask () {
        // https://imask.js.org/
        // https://imask.js.org/guide.html
        let options
        if (typeof this.mask === 'object') {
          options = { ...this.mask }
        } else {
          options.mask = this.mask
        }
        if (this.maskUppercase) {
          options.prepare = str => str.toUpperCase()
        }
        this.inputmask = IMask(this.$refs.input, options)
      }
    },
    mounted () {
      this.checkAutosize()
      this.changeDebounce = debounce(this.change, this.debounce)
      if (this.mask) {
        this.setMask()
      }
    },
    beforeDestroy () {
      if (this.multiline) {
        autosize.destroy(this.$refs.input)
      }
      if (this.inputmask) {
        this.inputmask.destroy()
      }
    },
    watch: {
      multiline () {
        this.checkAutosize()
      }
    }
  }
</script>

<style lang="scss" module>
  .input,
  .textarea {
    resize: none;
    padding: 0;
    margin: 0;
    background: transparent;
    border: 0 none;
    outline: none;
    width: 100%;
    border-radius: 0;
    &::placeholder {
      opacity: 1;
    }
  }
</style>
