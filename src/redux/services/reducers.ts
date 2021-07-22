import { Reducer, handleActions } from 'redux-actions'

import { storeOptions } from './actions'
import {
  FetchAllServicesFailPayload,
  FetchAllServicesPayload,
  FetchAllServicesSuccessPayload,
  ServicesActionTypes,
  ServicesPayloads,
  ServicesState
} from './types'

export const INITIAL_STATE: ServicesState = {
  services: null,
  isFetching: false,
  error: null
}

export const fetchAllServices: Reducer<
  ServicesState,
  FetchAllServicesPayload
> = (state) => ({
  ...state,
  isFetching: true
})

export const fetchAllServicesSuccess: Reducer<
  ServicesState,
  FetchAllServicesSuccessPayload
> = (state, { payload: { services } }) => ({
  ...state,
  services,
  isFetching: false
})

export const fetchAllServicesFail: Reducer<
  ServicesState,
  FetchAllServicesFailPayload
> = (state, { payload: { error } }) => ({
  ...state,
  error,
  isFetching: false
})

export const servicesReducer = handleActions<ServicesState, ServicesPayloads>(
  {
    [ServicesActionTypes.FETCH_ALL_SERVICES]: fetchAllServices,
    [ServicesActionTypes.FETCH_ALL_SERVICES_SUCCESS]: fetchAllServicesSuccess,
    [ServicesActionTypes.FETCH_ALL_SERVICES_FAIL]: fetchAllServicesFail
  },
  INITIAL_STATE,
  storeOptions
)
