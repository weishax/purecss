module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'view/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
