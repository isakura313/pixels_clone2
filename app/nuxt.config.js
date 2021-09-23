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
      {
        hid: 'description',
        name: 'description',
        content: 'галерея, фотография, API, pexels',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/video.js'],

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
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy'
  ],
  router: {
    // middleware: ['auth'],
  },
  auth: {
    strategies: {
      local: {
        token: {
          required: false,
          type: false,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          signup: { url: '/user/signup', method: 'post' },
          login: { url: 'http://192.168.1.65:3000/user/login', method: 'post', headers:{
            'Content-Type': 'application/json',
          }},
          user: { url: 'http://192.168.1.65:3000/user/me', method: 'get', headers:{
            'Content-Type': 'application/json',
          }},
        },
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true
  },
  proxy: {
    '/user/': { target: 'http://localhost:4000/user/', pathRewrite: {'^/user/': ''}, changeOrigin: false }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
