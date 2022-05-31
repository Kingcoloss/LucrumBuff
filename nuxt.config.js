import envConfig from './configs/env'

const nodeEnv = process.env.NODE_ENV

let envFileName = ''

if (nodeEnv !== 'production') {
  envFileName = '.env'
} else {
  envFileName = '.env.production'
}

envConfig(envFileName)

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'LucrumBuff',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {},

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss'
  ],

  styleResources: {
    scss: './assets/scss/global.scss'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Pages'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-lazysizes',
    '@nuxtjs/composition-api/module',
    [
      '@nuxtjs/dotenv',
      {
        filename: envFileName
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/device',
    'nuxt-i18n',
    ['cookie-universal-nuxt', { alias: 'ucookies' }],
    'nuxt-ssr-cache'
  ],

  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: ['TablePlugin', 'PaginationPlugin', 'ToastPlugin', 'DropdownPlugin'],
    directivePlugins: []
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    debug: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    babel: {
      compact: true,
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    optimizeCSS: true,
    extractCSS: {
      ignoreOrder: true
    }
  }
}
