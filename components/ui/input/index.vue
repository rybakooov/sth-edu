<template>
  <div :class="classes">
    <div :class="$style.label" v-if="label">
      <span :class="$style.text">{{ label }}</span>
    </div>
    <div :class="$style.placeholder" v-else-if="placeholder && !value">
      <span :class="$style.text">{{ placeholder }}</span>
    </div>
    <label :class="$style.value">
      <textarea v-if="multiline" :value="value" ref="input" :class="$style.textarea" :rows="1" @keyup.enter="onKeyEnter" @input="onInput" @focus="onFocus" @blur="onBlur"></textarea>
      <input v-else :value="value" ref="input" @keyup.enter="onSubmit" :class="$style.input" @input="onInput" @focus="onFocus" @blur="onBlur">
    </label>
    <div :class="$style.errorContainer">
      <transition name="slideDown">
        <div :class="$style.error" v-if="errors && errors.length && touched">
          <span :class="$style.text">{{ errors[0] }}</span>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import autosize from 'autosize'

  export default {
    name: 'UiInput',
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      label: {
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
      errors: {
        type: Array,
        default: () => []
      }
    },
    data () {
      return {
        type: 'field',
        focused: false,
        touched: false
      }
    },
    computed: {
      classes () {
        return [
          this.$style.field,
          { [this.$style.filled]: !!this.value },
          { [this.$style.focused]: this.focused },
          { [this.$style.touched]: this.touched }
        ]
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
      onInput (event) {
        this.$emit('input', event.target.value)
      },
      onFocus () {
        this.focused = true
      },
      onBlur () {
        this.focused = false
        this.touch()
      },
      touch () {
        this.touched = true
      },
      clear () {
        this.touched = false
        this.$emit('input', '')
      },
      onSubmit () {
        this.touch()
        this.$emit('submit', '')
      },
      focus () {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },
    mounted () {
      this.checkAutosize()
    },
    beforeDestroy () {
      if (this.multiline) {
        autosize.destroy(this.$refs.input)
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
  .field {
    position: relative;
    padding-bottom: 3.5em;
    margin-top: 2em;
    @include down(xl) {
      margin-top: 0;
    }
    @include down(lg) {
      margin-bottom: 1.3em;
    }
    @include down(md) {
      margin-bottom: -0.3em;
    }
  }
  .input,
  .textarea {
    @include headline-size-text-1;
    background: none;
    border: 0 none;
    outline: none;
    width: 100%;
    @include down (xl) {
      line-height: 1.67;
    }
  }
  .input {}
  .textarea {
    resize: none;
    padding: 0;
    margin: 0;
  }
  .label,
  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    color: #E5E5E5;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    .text {
      @include headline-size-text-1;
    }
  }
  .value {
    display: block;
    border-bottom: 2px solid currentColor;
    padding-bottom: 1.6em;
    @include down (xl) {
      padding-bottom: 0.8em;
    }
  }
  .placeholder {
    opacity: 0.5;
  }
  .focused .label,
  .filled .label,
  .focused .placeholder {
    transform: scale(0.5) translate(0, -100%);
    opacity: 0.5;
  }
  .errorContainer {
    position: absolute;
    width: 100%;
    overflow: hidden;
    bottom: 0;
    left: 0;
    height: 3.5em;
    padding-top: 1.2em;
  }
  .error {
    color: var(--root-color-error);
    text-align: left;
    .text {
      font-size: 1.6em;
      text-transform: uppercase;
    }
  }
</style>
