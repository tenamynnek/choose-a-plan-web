interface Process {
  browser: boolean
}
declare var process: Process

export enum ROUTE {
  HOME = 'home'
}

const injectServerConfig = ({ routes }) => {
  return {
    ...(!process.browser && {
      routes
    })
  }
}

const routeMap = {
  [ROUTE.HOME]: {
    href: '/home',
    ...injectServerConfig({ routes: ['', '/', '/index', '/home'] })
  }
}

export default routeMap
