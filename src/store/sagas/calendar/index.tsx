import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import moment from 'moment'
import _ from 'lodash'

import {
  calendarRequest,
  calendarSuccess,
  setLoadingCalendar,
  setLoadingSaveCalendar,
} from '../../actions/calendar'
import { customerSuccess } from '../../actions/customer'

export function* calendar({ payload: credentials }: any) {
  try {
    yield put(setLoadingCalendar(true))

    const { data } = yield call(api.get, 'calendar', { params: credentials })

    let content = []

    for (const item of data || []) {
      if (!item.uuid_customer) continue

      const { data: { customer } } = yield call(api.get, `customer/${item.uuid_customer}`)

      if (!customer || !customer?.cpf) continue

      content.push({ uuid: item._id, customer: customer || {}, ...item })
    }

    if (credentials.today) content = _.orderBy(_.filter(content, (item) => moment(item.dt_end).diff(moment(), "minute") > 0), ["dt_start"], ["asc"])

    yield put(calendarSuccess(content))

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

    yield put(customerSuccess({}))
    yield put(calendarRequest({
      offset: 0,
      order: { name: 'ASC' }
    }))

    body.clear()
  } catch (e) {
    yield put(setLoadingSaveCalendar(false))
  }
}
