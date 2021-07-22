import { Reducer, handleActions } from 'redux-actions'

import { storeOptions } from './actions'
import {
  FetchAllPlansFailPayload,
  FetchAllPlansPayload,
  FetchAllPlansSuccessPayload,
  PlansActionTypes,
  PlansPayloads,
  PlansState
} from './types'

export const INITIAL_STATE: PlansState = {
  plans: null,
  isFetching: false,
  error: null
}

export const fetchAllPlans: Reducer<PlansState, FetchAllPlansPayload> = (
  state
) => ({
  ...state,
  isFetching: true
})

export const fetchAllPlansSuccess: Reducer<
  PlansState,
  FetchAllPlansSuccessPayload
> = (state, { payload: { plans } }) => ({
  ...state,
  plans,
  isFetching: false
})

export const fetchAllPlansFail: Reducer<
  PlansState,
  FetchAllPlansFailPayload
> = (state, { payload: { error } }) => ({
  ...state,
  error,
  isFetching: false
})

export const plansReducer = handleActions<PlansState, PlansPayloads>(
  {
    [PlansActionTypes.FETCH_ALL_PLANS]: fetchAllPlans,
    [PlansActionTypes.FETCH_ALL_PLANS_SUCCESS]: fetchAllPlansSuccess,
    [PlansActionTypes.FETCH_ALL_PLANS_FAIL]: fetchAllPlansFail
  },
  INITIAL_STATE,
  storeOptions
)
