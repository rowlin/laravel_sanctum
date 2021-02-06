const serverUrl = 'http://pr2'
const serverToListenPush = "http://pr2"
const serverPort = '6001'

export default {
  target: 'server',
  loading: {
    color: '#26a647',
    failedColor: '#ff0000',
    height: '2px'
  },

  head: {
    title: 'Tift',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"},
      {rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"},
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;1,300&display=swap"
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/bootstrap-4_5_2.css', '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/laravel-echo',
  ],

  echo: {
    broadcaster: 'socket.io',
    authModule: true,
    //serveClient: false,
    connectOnLogin: true,
    disconnectOnLogout: false,
    transports: ['polling', 'flashsocket'],
    host: `${serverToListenPush}:${serverPort}`,
    plugins: [ '~/plugins/socket.client' ],
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'nuxt-i18n',
  ],

  axios: {
    baseUrl: serverUrl,
  },
  i18n: {
    locales: [
    {
      name: "ENG",
      code: 'en',
      file: 'en.json'
    },
    {
      name: "EST",
      code: 'ee',
      file: 'ee.json'
    },
    {
      name: "RUS",
      code: 'ru',
      file: 'ru.json'
    }
  ],
    defaultLocale: 'en',
    seo:true,
    strategy: 'prefix_except_default',
    lazy: true,
    fallbackLocale: 'ee',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: false
    },

  },


  auth: {
    redirect: {
      logout: '/login'
    },
    strategies: {
      local: {
        autoFetchUser: true,
        token: {
          property: 'token',
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        /*
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },

         */

        endpoints: {
          login: { url: `${serverUrl}/api/login`, method: 'post', propertyName: 'token' },
          logout: { url: `${serverUrl}/api/admin/logout`, method: 'post' },
          //refresh:{ url:  }
          user: { url: `${serverUrl}/api/admin/user`, method: 'get', propertyName: 'user' }
        },
        tokenRequired: true,
        tokenType: "Bearer"
      }
    },
    localStorage: false
  },
  toast: {
    position: 'top-right'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['@nuxtjs/auth']
  },
  env: {
    serverUrl: serverUrl,
    isDev: process.env.NODE_ENV !== 'production'
  }
}
