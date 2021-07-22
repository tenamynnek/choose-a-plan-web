import { Action } from 'redux-actions'
import { call, put } from 'redux-saga/effects'

import { getAllServices } from '@service/api'

import { ERROR_CODE } from 'src/constant/errorCode'

import { FetchAllServicesPayload, servicesActionCreators } from '..'

export function* fetchAllServicesWorker(
  action: Action<FetchAllServicesPayload>
) {
  try {
    const response = yield call(getAllServices)

    if (response.status >= 400 && response.status <= 499) {
      const payload = {
        errorCode: response.data.code,
        status: response.status
      }
      yield put(servicesActionCreators.fetchAllServicesFail(payload))
    } else {
      yield put(servicesActionCreators.fetchAllServicesSuccess(response.data))
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
    yield put(servicesActionCreators.fetchAllServicesFail(payload))
  }
}
