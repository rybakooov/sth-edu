<template>
  <v-layout>
    <v-col>
      <v-card class="mb-4">
        <v-card-title :class="`text-h4 font-weight-medium ${$style.nobreak}`">{{ lesson.title }}</v-card-title>
      </v-card>
      <v-row>
        <v-col
          v-for="card in lesson.items"
          :key="card.title"
          cols="12"
          sm="6"
          md="4"
          xl="3"
        >
          <v-card
            height="250"
            class="pa-4"
            :href="card.link ? card.link : null"
            target="_blank"
          >
            <v-card-title :class="$style.nobreak">
              {{ card.title }}
            </v-card-title>
            <v-card-actions>
              <v-btn fab absolute right bottom class="mb-11">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import page from '../../mixins/page'

  export default {
    name: 'LessonPage',
    mixins: [page()],
    computed: {
      ...mapGetters('content', ['getLesson']),
      id() {
        return +this.$route.params.id
      },
      lesson() {
        const lesson = this.getLesson(this.id)
        if (!lesson.items) {
          this.$nuxt.error({ statusCode: 404 })
        }
        return lesson
      },
      title() {
        return this.lesson.title
      }
    }
  }
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
