<template>
  <a :class="classes" href="javascript:void(0);" @click="onClick" @transitionend="ontransitionend">
    <span :class="$style.line"></span>
    <span :class="$style.line"></span>
    <span :class="$style.line"></span>
  </a>
</template>

<script>
  export default {
    name: 'UiBurger',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        changeState: false
      }
    },
    computed: {
      classes () {
        return [
          this.$style.burger,
          { [this.$style.change]: this.changeState },
          { [this.$style.open]: this.value }
        ]
      }
    },
    methods: {
      ontransitionend () {
        this.changeState = false
      },
      onClick(event) {
        this.$emit('click', event)
        this.toggle()
      },
      toggle() {
        this.$emit('input', !this.value)
      }
    },
    watch: {
      value () {
        this.changeState = true
      }
    }
  }
</script>

<style lang="scss" module>
  .burger {
    display: flex;
    flex-direction: column;
    width: 3.6em;
    height: 3.6em;
    justify-content: space-around;
    padding: 0.3em 0;
    &.change,
    &:not(.open):hover {
      .line:nth-child(1) {
        margin-left: 1.2em;
      }
      .line:nth-child(3) {
        margin-left: 0;
      }
    }
    @include down (md) {
      width: 2.4em;
      height: 2.7em;
    }
  }
  .line {
    position: relative;
    height: 2px;
    flex-shrink: 0;
    display: block;
    background-color: var(--root-color-bg-invert);
    transition: transform 0.2s ease-in-out, margin-left 0.2s ease, top 0.2s ease;
    transform-origin: 50% 50%;
    top: 0;
    &:nth-child(3) {
      margin-left: 1.2em;
    }
    @include down (md) {
      height: 1px;
    }
  }
  .open:not(.change) {
    .line:nth-child(1) {
      transform: rotate(45deg);
      margin-left: 0;
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      transform: rotate(-45deg) ;
      margin-left: 0;
    }
  }

  .change,
  .open {
    .line:nth-child(1) {
      top: 1rem;
      @include down (md) {
        top: 0.7rem
      }
    }
    .line:nth-child(3) {
      top: -1rem;
      @include down (md) {
        top: -0.7rem
      }
    }
  }
  .change:not(.open) {
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(1),
    .line:nth-child(3) {
      margin-left: 0;
    }
  }
</style>
