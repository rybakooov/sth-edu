<template>
  <core-portal>
    <transition :name="$style[transitionName]">
      <div :class="$style.container" v-if="popupShow">
        <div :class="$style.content">
          <slot />
        </div>
        <div :class="$style.overlay" @click="onClickOutside"></div>
      </div>
    </transition>
  </core-portal>
</template>

<script>
  import CorePortal from '../../core/portal/index'

  export default {
    name: 'UiPopup',
    components: {
      CorePortal
    },
    props: {
      eventName: {
        type: String,
        default: ''
      },
      closeOnEsc: {
        type: Boolean,
        default: true
      },
      clickOutsideToClose: {
        type: Boolean,
        default: true
      },
      transitionName: {
        type: String,
        default: 'fade'
      }
    },
    data() {
      return {
        popupShow: false
      }
    },
    methods: {
      onTogglePopup(state = true) {
        if (state) {
          this.openPopup()
        } else {
          this.closePopup()
        }
      },
      openPopup() {
        this.popupShow = true
        this.$scroll.lock(true, this.eventName)
      },
      closePopup() {
        this.popupShow = false
        this.$scroll.lock(false, this.eventName)
      },
      onCloseButtonClicked () {
        this.closePopup()
      },
      onClickOutside () {
        if (this.clickOutsideToClose) {
          this.closePopup()
        }
      }
    },
    mounted() {
      this.$root.$on(this.eventName, this.onTogglePopup)
      if (this.closeOnEsc) {
        this.onEscEvent = (e) => {
          if (e.keyCode === 27) {
            this.closePopup()
          }
        }
        window.addEventListener('keyup', this.onEscEvent)
      }
    },
    beforeDestroy() {
      this.$root.$off(this.eventName, this.onTogglePopup)
      window.removeEventListener('keyup', this.onEscEvent)
    }
  }
</script>

<style lang="scss" module>
  .container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: vh(100);
    z-index: 50;
  }
  .content {
    position: relative;
    z-index: 2;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--root-color-bg);
    z-index: 1;
  }

  .slide {
    &:global(-enter-active),
    &:global(-leave-active) {
      transition: transform 0.5s $transition-cubic-bezier;
    }

    &:global(-enter) {
      transform: translate(100%, 0);
    }
    &:global(-leave-to) {
      transform: translate(-100%, 0);
    }
  }
</style>
