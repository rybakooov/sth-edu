<template>
  <v-layout>
    <v-row>
      <v-col
        v-for="card in list"
        :key="card._id"
        cols="4"
      >
        <v-card
          height="250"
          class="pa-4"
          :nuxt="!!card.link"
          :href="card.link ? card.link : null"
          :to="card.link ? null : '/lessons/' + card._id"
          :target="card.link ? '_blank' : null"
        >
          <v-card-title >
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
  </v-layout>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'LessonPage',
    computed: {
      ...mapState('content', ['list'])
    }
  }
</script>

<style module lang="scss">

</style>
