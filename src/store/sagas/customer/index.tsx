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
    yield put(setLoadingCustomers(true))

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

    yield call(
      api[body.uuid ? "put" : "post"],
      body.uuid ? `customer/${body.uuid}` : "customer",
      _.omit(body, ['uuid', 'clear'])
    )

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
