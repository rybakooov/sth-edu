<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{ title }}</v-toolbar-title>

    </v-app-bar>
    <v-main>
      <v-container fluid :class="$style.bg" :style="style">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
      fixed
      :class="$style.footer"
    >
      <span>&copy; StartTheHistory {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import bg from '../assets/images/bg.jpg'

  export default {
    computed: {
      style() {
        return {
          backgroundImage: `url(${bg})`
        }
      }
    },
    data () {
      return {
        drawer: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Главная страница',
            to: '/'
          }, {
            icon: 'mdi-bookshelf',
            title: 'Учебные материалы',
            to: '/lessons'
          }, {
            icon: 'mdi-checkbox-marked-circle-outline',
            title: 'Тесты',
            to: '/tests'
          }
        ],
        title: 'StartTheHistory'
      }
    }
  }
</script>

<style lang="scss" module>
  .bg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }

  .footer {
    z-index: 5;
  }
</style>
