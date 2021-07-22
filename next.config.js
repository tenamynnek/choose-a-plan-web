require('dotenv').config()

const path = require('path')
const webpack = require('webpack')

const config = require('./config')

const withTsconfigPathPlugin = (config, _options) => {
  const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
  if (config.resolve.plugins) {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
  } else {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
  }
  return config
}

module.exports = {
  poweredByHeader: false,
  serverRuntimeConfig: config.server, // refer to file in /config if need
  publicRuntimeConfig: config.client, // expose config in client,
  // transpileModules: ['query-string', 'strict-uri-encode'],
  webpack: (config, options) => {
    // plugins
    // config.plugins.push(dateFnsPlugin(config, options))
    withTsconfigPathPlugin(config)

    return config
  }
  // distDir: './dist'
}
