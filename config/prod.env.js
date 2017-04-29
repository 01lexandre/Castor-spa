var merge = require('webpack-merge')
var apiroutesEnv = require('./api_routes.env')

module.exports = merge(apiroutesEnv,{
  NODE_ENV: '"production"',
  APP_NAME: '"Nawe.by"',
  API_URL: '"nawe.by/api/v1"'
})