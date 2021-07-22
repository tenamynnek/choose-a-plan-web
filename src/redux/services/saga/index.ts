import { all, takeLatest } from 'redux-saga/effects'

import { fetchAllServicesWorker } from './fetchAllServicesWorker'
import { ServicesActionTypes } from '..'

export function* servicesSaga() {
  try {
    yield all([
      takeLatest(ServicesActionTypes.FETCH_ALL_SERVICES, fetchAllServicesWorker)
    ])
  } catch (e) {
    console.log(e)
  }
}
