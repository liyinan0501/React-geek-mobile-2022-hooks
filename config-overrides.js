const {
  override,
  addPostcssPlugins,
  addWebpackAlias,
} = require('customize-cra')
const path = require('path')
const px2viewport = require('postcss-px-to-viewport')

const alias = addWebpackAlias({
  '@': path.join(__dirname, 'src'),
  '@scss': path.join(__dirname, 'src/assets/styles'),
})

const postcssPlugins = addPostcssPlugins([
  px2viewport({
    viewportWidth: 375,
  }),
])

module.exports = override(alias, postcssPlugins)
