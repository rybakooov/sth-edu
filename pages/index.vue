<template>
  <main>
    <ui-image-container
      :aspect="3288/6096"
      :map="[600, 1920]"
      :src="require('@/assets/images/frame.jpg').toString()"
    />
    <ui-image-container
      :aspect="3288/6096"
      :src="require('@/assets/images/frame.jpg?{ sizes: [600, 1920] }')"
    />

    <img style="display: block; width: 100%" src="@/assets/images/frame.jpg">
  </main>
</template>

<script>
  import pageMixin from '../mixins/page'
  import UiImageContainer from '../components/ui/image/container'

  export default {
    components: {
      UiImageContainer
    },
    layout: 'page',
    name: 'MainPage',
    mixins: [
      pageMixin()
    ],
    async asyncData ({ app, error }) {
      await Promise.all([])
      // error({ statusCode: 404 })
    },
    mounted () {}
}
</script>
