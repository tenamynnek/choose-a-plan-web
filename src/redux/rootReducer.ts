import { HYDRATE } from 'next-redux-wrapper'
import { Reducer, combineReducers } from 'redux'

import { PlansActions, PlansState, plansReducer } from './plans'
import { ServicesActions, ServicesState, servicesReducer } from './services'

export interface ApplicationState {
  services: ServicesState
  plans: PlansState
}

export type ApplicationActions = ServicesActions | PlansActions

const combindedReducers = combineReducers<ApplicationState>({
  services: servicesReducer,
  plans: plansReducer
})

export const rootReducer: Reducer<ApplicationState, ApplicationActions> = (
  state: ApplicationState | undefined,
  action: ApplicationActions
) => {
  return combindedReducers(state, action)
}

export const hydrateReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    }
    // if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}
