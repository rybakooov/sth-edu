<template>
  <v-layout>
    <v-col>
      <v-card class="mb-4">
        <v-card-title :class="`text-h4 font-weight-medium ${$style.nobreak}`">Тесты</v-card-title>
      </v-card>

      <v-row>
        <v-col
          v-for="(card, index) in list"
          :key="index+ '_test'"
          cols="12"
          sm="6"
          md="4"
          xl="3"
        >
          <v-card
            nuxt
            :to="'/tests/' + card._id"
            height="250"
            class="pa-4"
          >
            <v-card-title :class="$style.nobreak">{{ card.title }}</v-card-title>

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
    name: 'TestsPage',
    mixins: [page()],
    computed: {
      ...mapState('tests', ['list']),
      title() {
        return 'Тесты'
      }
    }
  }
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
