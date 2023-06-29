import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import _, { set } from 'lodash'

import {
  authenticationSuccess,
  setLoadingAuthentication,
  setLoadingRegister,
  setUser,
} from '../../actions/auth'

export function* authentication({ payload: credentials }: any) {
  try {
    yield put(setLoadingAuthentication(true))

    const token = Buffer.from(JSON.stringify(credentials)).toString('base64')

    const { data: { user, error } } = yield call(api.post, '/login', credentials)

    yield put(setLoadingAuthentication(false))

    if (error) return

    yield put(setUser(user))
    yield put(authenticationSuccess(token))

    localStorage.setItem("@Calendle:user", JSON.stringify(user))
    localStorage.setItem("@Calendle:token", token)
  } catch (e) {
    yield put(setLoadingAuthentication(false))
  }
}

export function* register({ payload: body }: any) {
  try {
    yield put(setLoadingRegister(true))

    yield call(api.post, '/login/register', _.omit(body, ["redirect"]))

    yield put(setLoadingRegister(false))

    body.redirect()
  } catch (e) {
    yield put(setLoadingRegister(false))
  }
}
