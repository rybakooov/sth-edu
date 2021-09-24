<template>
  <v-layout>
    <v-col>
      <v-card class="mb-4">
        <v-card-title :class="`text-h4 font-weight-medium ${$style.nobreak}`">Учебные материалы</v-card-title>
      </v-card>
      <v-row>
        <v-col
          v-for="card in list"
          :key="card._id"
          cols="12"
          sm="6"
          md="4"
          xl="3"
        >
          <v-card
            height="250"
            class="pa-4"
            :nuxt="!!card.link"
            :href="card.link ? card.link : null"
            :to="card.link ? null : '/lessons/' + card._id"
            :target="card.link ? '_blank' : null"
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
  import { mapState } from 'vuex'
  import page from '../../mixins/page'

  export default {
    name: 'LessonPage',
    mixins: [page()],
    computed: {
      ...mapState('content', ['list']),
      title() {
        return 'Учебные материалы'
      }
    }
  }
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
