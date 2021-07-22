import { createSelector } from 'reselect'

export const servicesSelector = (state) => state.services

export const getAllServices = createSelector(
  servicesSelector,
  (state) => state.services
)
export const getServicesIsFetching = createSelector(
  servicesSelector,
  (state) => state.isFetching
)
