// https://i18n.nuxtjs.org/setup
export default {
  strategy: 'prefix_except_default',
  locales: [
    // {
    //   code: 'en',
    //   name: 'English',
    //   key: 'en',
    // },
    {
      code: 'ru',
      name: 'Русский',
      key: 'ru',
    }
  ],
  defaultLocale: 'ru',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'lang',
    alwaysRedirect: true,
    onlyOnRoot: true // recommended
  },
  vueI18n: {
    fallbackLocale: 'ru',
    silentTranslationWarn: true,
    messages:{
      // en: require('../assets/translates/en'),
      ru: require('../assets/translates/ru')
    }
  }
}
