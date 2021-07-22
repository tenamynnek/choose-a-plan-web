import { Store, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import logger from 'redux-logger'
import createSagaMiddleware, { Task } from 'redux-saga'

import { rootSaga } from './rootSaga'
import { ApplicationState, hydrateReducer } from '.'

export type NextStore = Store<ApplicationState> & {
  sagaTask?: Task
}

// Set the default InitialState as empty object for now
// InitialState would help injecting SSR actions to redux store
export const getStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    hydrateReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  )

  // 3: Run your sagas on server
  // @ts-ignore
  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  // 4: now return the store:
  return store
}
