import { Action } from 'redux-actions'

export interface PlansState {
  plans: any
  isFetching: boolean
  error: any
}

export enum PlansActionTypes {
  FETCH_ALL_PLANS = 'PLANS/FETCH_ALL_PLANS',
  FETCH_ALL_PLANS_SUCCESS = 'PLANS/FETCH_ALL_PLANS_SUCCESS',
  FETCH_ALL_PLANS_FAIL = 'PLANS/FETCH_ALL_PLANS_FAIL'
}

export interface FetchAllPlansPayload {}

export interface FetchAllPlansSuccessPayload {
  plans: any
}

export interface FetchAllPlansFailPayload {
  error: any
}

export type PlansPayloads =
  | FetchAllPlansPayload
  | FetchAllPlansSuccessPayload
  | FetchAllPlansFailPayload

export type PlansActions = Action<PlansPayloads>
