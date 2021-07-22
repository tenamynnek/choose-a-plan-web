require('dotenv').config()

const mergeDeep = require('./utils/deepMerge')

const stageConfig = require('./config')

const envConfig = {
  server: {
    port: process.env.PORT,
    hostUrl: process.env.HOST_URL
  }
}

const config = mergeDeep(stageConfig, envConfig)

module.exports = config
