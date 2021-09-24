<template>
  <v-card class="px-4 py-8">
    <v-card-title :class="`text-h5 text-center d-flex align-center justify-center ${$style.nobreak}`">
      <template v-if="error.statusCode === 404">{{ pageNotFound }}</template>
      <template v-else>{{ otherError }}</template>
    </v-card-title>
    <v-btn block class="info mt-2" to="/">
      Home page
    </v-btn>
  </v-card>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 — Page Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
