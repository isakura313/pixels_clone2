export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  loading: true,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PIXELS CLONE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'галерея, фотография, API, pexels' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      facebook: {
        client_id: 'Enter your facebook clientid here',
        userinfo_endpoint: 'https://graph.facebook.com/me?fields=about,name,picture.typr(large){url},email,birthday',
        scope: ['public_profile', 'email', 'user_birthday']
      },
      google: {
        client_id: 'Enter your google clientid here'
      }
    },
    redirect: {
      login: '/registration',
      logout: '/registration',
      callback: '/registration',
      home: '/'
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}