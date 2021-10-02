export default {
 // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
 ssr: false,
 loading: true,

 // Target (https://go.nuxtjs.dev/config-target)
 target: "static",

 // Global page headers (https://go.nuxtjs.dev/config-head)
 head: {
  title: "PIXELS CLONE",
  meta: [
   { charset: "utf-8" },
   { name: "viewport", content: "width=device-width, initial-scale=1" },
   {
    hid: "description",
    name: "description",
    content: "галерея, фотография, API, pexels",
   },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
 },

 css: [],

 // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
 plugins: ["~/plugins/video.js"],

 // Auto import components (https://go.nuxtjs.dev/config-components)
 components: true,

 // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
 buildModules: [],

 // Modules (https://go.nuxtjs.dev/config-modules)
 modules: [
  // https://go.nuxtjs.dev/buefy
  // https://go.nuxtjs.dev/axios
  "@nuxtjs/vuetify",
  "@nuxtjs/axios",
  "@nuxtjs/auth-next",
  "@nuxtjs/proxy",
 ],
 router: {
  // middleware: ['auth'],
 },
 auth: {
  strategies: {
   local: {
    token: {
     //  property: "token",
     //  global: true,
     property: "token",
     global: true,
     required: true,
     type: false,
     // required: true,
     // type: 'Bearer'
    },
    user: {
     property: "user",
     // autoFetch: true
    },
    endpoints: {
     //  signup: { url: "/user/signup", method: "post" },
     login: {
      url: "/user/login",
      method: "POST",
      //   propertyName: "data.token",
      //   headers: {
      //    "Content-Type": "application/json",
      //    //    token: this.$auth._token.local,
      //   },
     },
     logout: {
      url: "/user/logout",
      method: "post",
      headers: {
       "Content-Type": "application/json",
      },
     },
     user: {
      url: "/user/me",
      method: "GET",
      propertyName: false,
      headers: {
       "Content-Type": "application/json",
      },
     },
    },
   },
  },
 },

 // Axios module configuration (https://go.nuxtjs.dev/config-axios)
 axios: {
  proxy: true,
 },
 proxy: {
  "/user/": {
   target: "http://localhost:3081/user/",
   pathRewrite: { "^/user/": "" },
   changeOrigin: false,
  },
 },

 // Build Configuration (https://go.nuxtjs.dev/config-build)
 build: {},
};
