import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - NUXT-BLOG-note',
    title: 'NUXT-BLOG-note',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'descriptionが入ります！descriptionが入ります！descriptionが入ります！descriptionが入ります！'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ページタイトル'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'blog'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://サイトのURL'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'couragenki'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'デフォルトのディスクリプションを設定するよ'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://サイトのUR/og.jpg'
      },
      {
        hid: 'twitter:card',
        neme: 'twitter:card',
        content: "summary_large_image"
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  target: 'static',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
