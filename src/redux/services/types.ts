import { Action } from 'redux-actions'

export interface ServicesState {
  services: any
  isFetching: boolean
  error: any
}

export enum ServicesActionTypes {
  FETCH_ALL_SERVICES = 'SERVICES/FETCH_ALL_SERVICES',
  FETCH_ALL_SERVICES_SUCCESS = 'SERVICES/FETCH_ALL_SERVICES_SUCCESS',
  FETCH_ALL_SERVICES_FAIL = 'SERVICES/FETCH_ALL_SERVICES_FAIL'
}

export interface FetchAllServicesPayload {}

export interface FetchAllServicesSuccessPayload {
  services: any
}

export interface FetchAllServicesFailPayload {
  error: any
}

export type ServicesPayloads =
  | FetchAllServicesPayload
  | FetchAllServicesSuccessPayload
  | FetchAllServicesFailPayload

export type ServicesActions = Action<ServicesPayloads>
