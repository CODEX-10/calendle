import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import _ from 'lodash'

import {
  campainCustomersSuccess,
  campainStatisticsSuccess,
  campainsRequest,
  campainsSuccess,
  setLoadingCampainCustomers,
  setLoadingCampainStatistics,
  setLoadingCampains,
  setLoadingSendCampain
} from '../../actions/campain'

export function* campains({ payload: credentials }: any) {
  try {
    const { data } = yield call(api.get, 'campain', { params: credentials })

    yield put(campainsSuccess(data))

    yield put(setLoadingCampains(false))
  } catch (e) {
    yield put(setLoadingCampains(false))
  }
}

export function* campainCustomers({ payload: credentials }: any) {
  try {
    const { data } = yield call(api.get, 'campain/customer', { params: credentials })

    yield put(campainCustomersSuccess(data))

    yield put(setLoadingCampainCustomers(false))
  } catch (e) {
    yield put(setLoadingCampainCustomers(false))
  }
}

export function* campainStatistics({ payload: credentials }: any) {
  try {
    const { data } = yield call(api.get, 'campain/customer/statistics', { params: credentials })

    yield put(campainStatisticsSuccess(data))

    yield put(setLoadingCampainStatistics(false))
  } catch (e) {
    yield put(setLoadingCampainStatistics(false))
  }
}

export function* sendCampain({ payload: body }: any) {
  try {
    yield put(setLoadingSendCampain(true))

    const body_send = { ...body }

    yield call(api.post, 'message', _.omit(body_send, ['clear']))

    yield put(setLoadingSendCampain(false))

    yield put(campainsRequest({ offset: 0, order: { dhOperation: 'DESC' } }))

    body.clear()
  } catch (e) {
    yield put(setLoadingSendCampain(false))
  }
}
