var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"sandbox.nawe.by/api/staging"',
  APP_NAME: '"Castor-SPA"'
})
