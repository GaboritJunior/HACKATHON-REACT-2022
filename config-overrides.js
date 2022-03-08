const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@pages': 'src/pages',
    '@parts': 'src/parts'
  })(config)

  return config
}