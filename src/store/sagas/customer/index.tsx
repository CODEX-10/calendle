import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import _ from 'lodash'

import {
  customersRequest,
  customersSuccess,
  setLoadingCustomers,
  setLoadingSaveCustomer,
} from '../../actions/customer'

export function* customers({ payload: credentials }: any) {
  try {
    const { data } = yield call(api.get, 'customer', { params: credentials })

    yield put(customersSuccess(data))

    yield put(setLoadingCustomers(false))
  } catch (e) {
    yield put(setLoadingCustomers(false))
  }
}

export function* saveCustomer({ payload: body }: any) {
  try {
    yield put(setLoadingSaveCustomer(true))

    const body_customer = { ...body }

    yield call(api.post, 'customer', _.omit(body_customer, ['uuid', 'clear']), { params: { uuid: body.uuid } })

    yield put(setLoadingSaveCustomer(false))

    yield put(customersRequest({
      offset: 0,
      order: { name: 'ASC' }
    }))

    body.clear()
  } catch (e) {
    yield put(setLoadingSaveCustomer(false))
  }
}
