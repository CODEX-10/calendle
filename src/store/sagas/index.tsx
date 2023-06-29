import { takeEvery } from 'redux-saga/effects'

import { authentication, register } from './auth'

import { customer, customers, saveCustomer } from './customer'

import { calendar, saveCalendar } from './calendar'

export default function* rootSaga() {
  yield takeEvery("auth/authenticationRequest", authentication)
  yield takeEvery("auth/registerRequest", register)

  yield takeEvery("customer/customersRequest", customers)
  yield takeEvery("customer/customerRequest", customer)
  yield takeEvery("customer/saveCustomerRequest", saveCustomer)

  yield takeEvery("calendar/calendarRequest", calendar)
  yield takeEvery("calendar/saveCalendarRequest", saveCalendar)
}
