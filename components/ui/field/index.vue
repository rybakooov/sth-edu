<template>
  <div :class="classes">
    <div :class="$style.label" v-if="label">
      <span :class="$style.text">{{ label }}</span>
    </div>
    <div :class="$style.subTitle" v-if="subTitle">
      <span :class="$style.text">{{ subTitle }}</span>
    </div>
    <label :class="$style.value">
      <ui-input
        ref="input"
        :class="$style.input"
        :value="value"
        :multiline="multiline"
        :placeholder="placeholder"
        :debounce="debounce"
        :required="required"
        :mask="mask"
        :mask-uppercase="maskUppercase"
        :readonly="readonly"
        @submit="onSubmit"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
    </label>
    <div :class="$style.description" v-if="$slots.description">
      <span :class="$style.text"><slot name="description"/></span>
    </div>
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
  import UiInput from './input'

  export default {
    name: 'UiField',
    components: {
      UiInput
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      subTitle: {
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
      required: {
        type: Boolean,
        default: false
      },
      rows: {
        type: Number,
        default: 1
      },
      mask: {
        type: [Boolean, Object, String, Number, RegExp],
        default: false
      },
      maskUppercase: {
        type: Boolean,
        default: false
      },
      errors: {
        type: Array,
        default: () => []
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
          { [this.$style.touched]: this.touched },
          { [this.$style.withValue]: this.value },
          { [this.$style.withPlaceholder]: this.placeholder }
        ]
      }
    },
    methods: {
      onInput (value) {
        this.touch()
        this.$emit('input', value)
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
        this.onInput('')
      },
      onSubmit () {
        this.touch()
        this.$emit('submit')
      },
      focus () {
        this.$refs.input.focus()
      }
    }
  }
</script>

<style lang="scss" module>
  .field {
    position: relative;
    padding-bottom: 3.5em;
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
  .input {
    font-size: 2.1em;
    line-height: 130%;
    color: #FFFFFF;
    background: none;
    border: 0 none;
    outline: none;
    width: 100%;
    &::placeholder {
      color: #313131;
    }
    @include down (xl) {
      line-height: 1.67;
    }
  }
  .label {
    color: var(--root-color-app-text);
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    margin-bottom: 1.2em;
    transform: translate(0, 200%);
    .text {
      font-size: 1.3em;
      line-height: 120%;
      font-weight: 500;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }
  .subTitle {
    margin-bottom: 3.2em;
    .text {
      font-size: 1.5em;
      line-height: 130%;
      color: var(--root-color-app-text);
    }
  }
  .value {
    display: block;
    border-bottom: 1px solid var(--root-color-app-input-border);
    padding-bottom: 1.4em;
    @include down (xl) {
      padding-bottom: 0.8em;
    }
  }
  .description {
    margin-top: 1em;
    color: var(--root-color-app-text);
    .text {
      font-size: 1.3em;
      line-height: 130%;
      a {
        color: #8AEEBE;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .focused .label,
  .filled .label,
  .withValue .label,
  .withPlaceholder .label {
     transform: translate(0, 0);
  }
  .errorContainer {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 3.5em;
    padding-top: 1.2em;
  }
  .error {
    color: #E53D01;
    text-align: left;
    .text {
      font-size: 1.3em;
    }
  }
</style>
