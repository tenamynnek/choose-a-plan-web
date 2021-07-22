import { createSelector } from 'reselect'

export const plansSelector = (state) => state.plans

export const getAllPlans = createSelector(plansSelector, (state) => state.plans)

export const getPlansIsFetching = createSelector(
  plansSelector,
  (state) => state.isFetching
)
