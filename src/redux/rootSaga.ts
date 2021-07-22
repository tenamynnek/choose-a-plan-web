import { all, fork } from 'redux-saga/effects'

import { plansSaga } from './plans/saga'
import { servicesSaga } from './services/saga'

const combineSagas = (sagas: any) =>
  function* rootSaga() {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.log(err)
    }
  }

export const rootSaga = combineSagas([servicesSaga, plansSaga])
