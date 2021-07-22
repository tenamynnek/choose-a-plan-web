import { createActions } from 'redux-actions'

import { PlansActionTypes, PlansPayloads } from './types'

export const storeOptions = {
  prefix: 'PLANS'
}

export const plansActionCreators = createActions<PlansPayloads>(
  {
    [PlansActionTypes.FETCH_ALL_PLANS]: () => ({}),
    [PlansActionTypes.FETCH_ALL_PLANS_SUCCESS]: (plans: any) => ({
      plans
    }),
    [PlansActionTypes.FETCH_ALL_PLANS_FAIL]: (error: any) => ({
      error
    })
  },
  storeOptions
)
