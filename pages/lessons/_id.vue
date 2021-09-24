<template>
  <div>{{ lesson }}</div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LessonPage',
    computed: {
      ...mapGetters('content', ['getLesson']),
      id() {
        return 0
      },
      lesson() {
        return this.getLesson(this.id)
      }
    }
  }
</script>

<style module lang="scss">

</style>
