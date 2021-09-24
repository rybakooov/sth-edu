<template>
  <v-layout align-content-center justify-center align-center>
    <v-card class="py-8 px-4">
      <v-card-title :class="`text-sm-h3 text-h5 font-weight-medium ${$style.nobreak}`">
        Добро пожаловать!
      </v-card-title>
      <v-card-text>
        Дамы и господа, я сделал этот ресурс специально для вашего удобства.
        <br>
        Здесь вы с легкостью сможете найти все материалы курсы
      </v-card-text>
        <v-btn class="info" block outlined large nuxt to="/lessons">
          Перейти к материалам
          <v-icon small class="ml-2">mdi-bookshelf</v-icon>
        </v-btn>
        <v-btn class="primary mt-2" block outlined large href="https://t.me/joinchat/g0WOFhs13HkzMzEy">
          Перейти в Telegram
          <v-icon small class="ml-2">mdi-send</v-icon>
        </v-btn>
    </v-card>
  </v-layout>
</template>

<script>
  import page from '../mixins/page'

  export default {
    name: 'MainPage',
    mixins: [page()],
    computed: {
      title() {
        return 'Главная'
      }
    }
  }
</script>

<style module lang="scss">
  .nobreak {
    word-break: normal;
  }
</style>
