import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import _ from 'lodash'

import {
  calendarRequest,
  calendarSuccess,
  setLoadingCalendar,
  setLoadingSaveCalendar,
} from '../../actions/calendar'

export function* calendar({ payload: credentials }: any) {
  try {
    yield put(setLoadingCalendar(true))

    // const { data } = yield call(api.get, 'customer', { params: credentials })

    // yield put(calendarSuccess(data))

    yield put(setLoadingCalendar(false))
  } catch (e) {
    yield put(setLoadingCalendar(false))
  }
}

export function* saveCalendar({ payload: body }: any) {
  try {
    yield put(setLoadingSaveCalendar(true))

    const body_customer = { ...body }

    // yield call(api.post, 'customer', _.omit(body_customer, ['uuid', 'clear']), { params: { uuid: body.uuid } })

    yield put(setLoadingSaveCalendar(false))

    yield put(calendarRequest({
      offset: 0,
      order: { name: 'ASC' }
    }))

    body.clear()
  } catch (e) {
    yield put(setLoadingSaveCalendar(false))
  }
}
