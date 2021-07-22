/* eslint-disable unicorn/no-process-exit */
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import next from 'next'

import redirect from './redirect'

const config = require('../config')

const stage = process.env.APP_ENV
const host = config.server.hostUrl
const port = config.server.port

if (process.env.APP_ENV === undefined) {
  console.warn('No APP_ENV found. Have you properly set up an .env file?')
}

const isDevMode = stage === 'local'
// const app = next({ dir: "./src", dev: isDevMode });
const app = next({ dev: isDevMode })

// const handler = routes.getRequestHandler(app);
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/', redirect(app))

  server.get('*', (_req: Request, res: Response) => {
    res.set('x-frame-options', 'SAMEORIGIN')
    return handler(_req, res)
  })

  server.use(helmet())

  server.listen(port, host, () => {
    // if (err) throw err

    console.log(`[MAIN SERVER] APP_ENV: ${stage}`)
    console.log(`[MAIN SERVER] Ready on http://${host}:${port}`)
    // logger.info(`[MAIN SERVER] APP_ENV: ${stage}`)
    // logger.info(`[MAIN SERVER] Ready on PORT: ${port}`)
  })
})

// logger.debug('SERVER SIDE CONFIG', config)
process.on('unhandledRejection', (error) => {
  // logger.error('unhandledRejection', error)
  console.log('unhandledRejection', error)
  process.exit(1)
})
