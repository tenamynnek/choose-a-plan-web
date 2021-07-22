import { RequestHandler } from 'express'

export const redirectHome = (app): RequestHandler => async (req, res, next) => {
  if (req.originalUrl === '/home') {
    next()
  } else {
    res.redirect(302, 'home')
  }
}

export default redirectHome
