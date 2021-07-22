import { all, takeLatest } from 'redux-saga/effects'

import { fetchAllPlansWorker } from './fetchAllPlansWorker'
import { PlansActionTypes } from '..'

export function* plansSaga() {
  try {
    yield all([
      takeLatest(PlansActionTypes.FETCH_ALL_PLANS, fetchAllPlansWorker)
    ])
  } catch (e) {
    console.log(e)
  }
}
