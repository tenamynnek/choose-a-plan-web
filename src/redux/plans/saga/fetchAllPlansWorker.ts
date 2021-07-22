import { Action } from 'redux-actions'
import { call, put } from 'redux-saga/effects'

import { getAllPlans } from '@service/api'

import { ERROR_CODE } from 'src/constant/errorCode'

import { FetchAllPlansPayload, plansActionCreators } from '..'

export function* fetchAllPlansWorker(action: Action<FetchAllPlansPayload>) {
  try {
    const response = yield call(getAllPlans)
    if (response.status >= 400 && response.status <= 499) {
      const payload = {
        errorCode: response.data.code,
        status: response.status
      }
      yield put(plansActionCreators.fetchAllPlansFail(payload))
    } else {
      yield put(plansActionCreators.fetchAllPlansSuccess(response.data))
    }
  } catch (err) {
    let payload
    if (err.status >= 500 && err.status <= 599) {
      payload = {
        errorCode: err.data.code,
        status: err.status
      }
    } else {
      payload = {
        errorCode: ERROR_CODE.NETWORK_ERROR,
        name: err.name,
        message: err.message,
        code: err.code
      }
    }
    yield put(plansActionCreators.fetchAllPlansFail(payload))
  }
}
