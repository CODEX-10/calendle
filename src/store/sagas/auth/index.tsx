import {
  // call, 
  put
} from 'redux-saga/effects'
// import { api } from '../../../services'
import _ from 'lodash'

import {
  authenticationSuccess,
  setLoadingAuthentication,
} from '../../actions/auth'

export function* authentication({ payload: credentials }: any) {
  try {
    yield put(setLoadingAuthentication(true))

    const token = Buffer.from(JSON.stringify(credentials)).toString('base64')

    // const { data } = yield call(api.get, 'campain', { params: credentials })

    yield put(authenticationSuccess(token))

    localStorage.setItem("@Calendle:token", token)

    yield put(setLoadingAuthentication(false))
  } catch (e) {
    yield put(setLoadingAuthentication(false))
  }
}
