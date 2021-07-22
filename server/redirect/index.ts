import express, { RequestHandler } from 'express'
import Server from 'next/dist/next-server/server/next-server'

import { ROUTE, routeMap } from '../../routes'
import homeHandler from './homeHandler'

const routeMapWithKey = Object.entries(routeMap).map(([key, value]) => ({
  page: key,
  ...value
}))

const handlerMap = {
  [ROUTE.HOME]: homeHandler
}

const getRouter = (app: Server) => {
  const router = express.Router()

  routeMapWithKey.forEach((item) => {
    let redirectHandler = undefined

    if (handlerMap[item.page]) {
      redirectHandler = handlerMap[item.page]
    }

    item.routes.forEach((pattern) => {
      if (redirectHandler) {
        router.get(pattern, redirectHandler(app, item))
      }
    })
  })

  return router
}

export default getRouter
