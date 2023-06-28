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

    const { data } = yield call(api.get, 'calendar', { params: credentials })

    yield put(calendarSuccess(_.map(data, (item) => ({ uuid: item._id, ...item }))))

    yield put(setLoadingCalendar(false))
  } catch (e) {
    yield put(setLoadingCalendar(false))
  }
}

export function* saveCalendar({ payload: body }: any) {
  try {
    yield put(setLoadingSaveCalendar(true))

    yield call(
      api[body.uuid ? "put" : "post"],
      body.uuid ? `calendar/${body.uuid}` : "calendar",
      _.omit(body, ['uuid', 'clear'])
    )

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
