import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'

import {
  sessionSuccess,
  setLoadingSession,
  setLoadingRetrieveSession,
  setLoadingInitializeSession,
  setLoadingDisconnectSession,
} from '../../actions/session'

export function* session({ payload: credentials }: any) {
  try {
    yield put(setLoadingSession(true))

    const { data } = yield call(api.get, 'session', { params: credentials })

    yield put(sessionSuccess(data))

    yield put(setLoadingSession(false))
  } catch (e) {
    yield put(setLoadingSession(false))
  }
}

export function* retrieveSession({ payload: credentials }: any) {
  try {
    yield put(setLoadingRetrieveSession(true))

    const { data } = yield call(api.get, 'session/retrieve', { params: credentials })

    yield put(sessionSuccess(data))

    yield put(setLoadingRetrieveSession(false))
  } catch (e) {
    yield put(setLoadingRetrieveSession(false))
  }
}

export function* initializeSession({ payload: body }: any) {
  try {
    yield put(setLoadingInitializeSession(true))

    yield call(api.post, 'session', body)
  } catch (e) {
    yield put(setLoadingInitializeSession(false))
  }
}

export function* disconnectSession({ payload: body }: any) {
  try {
    yield put(setLoadingDisconnectSession(true))

    yield call(api.post, 'session/disconnect', body)
  } catch (e) {
    yield put(setLoadingDisconnectSession(false))
  }
}
