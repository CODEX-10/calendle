import { takeEvery } from 'redux-saga/effects'

import { authentication } from './auth'

export default function* rootSaga() {
  yield takeEvery("auth/authenticationRequest", authentication)
}
