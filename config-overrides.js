const {
  addWebpackAlias,
  override,
  addPostcssPlugins,
} = require('customize-cra')
const px2viewport = require('postcss-px-to-viewport')
const path = require('path')

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
