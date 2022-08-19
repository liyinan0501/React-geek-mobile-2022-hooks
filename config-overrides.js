const path = require('path')
const { addWebpackAlias, override } = require('customize-cra')

const alias = addWebpackAlias({
  '@': path.join(__dirname, 'src'),
  '@scss': path.join(__dirname, 'src/assets/styles'),
})

module.exports = override(alias)
