import { createWrapper } from 'next-redux-wrapper'
import { Store } from 'redux'
import { Task } from 'redux-saga'

import { getStore } from './store'

export * from './store'
export * from './rootReducer'
export * from './rootSaga'

export interface SagaStore extends Store {
  sagaTask: Task
}

export const wrapper = createWrapper(getStore, { debug: true })
