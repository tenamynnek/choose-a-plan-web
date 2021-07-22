import { createActions } from 'redux-actions'

import { ServicesActionTypes, ServicesPayloads } from './types'

export const storeOptions = {
  prefix: 'SERVICES'
}

export const servicesActionCreators = createActions<ServicesPayloads>(
  {
    [ServicesActionTypes.FETCH_ALL_SERVICES]: () => ({}),
    [ServicesActionTypes.FETCH_ALL_SERVICES_SUCCESS]: (services: any) => ({
      services
    }),
    [ServicesActionTypes.FETCH_ALL_SERVICES_FAIL]: (error: any) => ({
      error
    })
  },
  storeOptions
)
