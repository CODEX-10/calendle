import { takeEvery } from 'redux-saga/effects'

import { session, retrieveSession, initializeSession, disconnectSession } from './session'

import { customers, saveCustomer } from './customer'

import { templates, saveTemplate, deleteTemplate } from './template'

import { campainCustomers, campainStatistics, campains, sendCampain } from './campain'

export default function* rootSaga() {
  yield takeEvery("session/sessionRequest", session)
  yield takeEvery("session/retrieveSessionRequest", retrieveSession)
  yield takeEvery("session/initializeSessionRequest", initializeSession)
  yield takeEvery("session/disconnectSessionRequest", disconnectSession)

  yield takeEvery("customer/customersRequest", customers)
  yield takeEvery("customer/saveCustomerRequest", saveCustomer)

  yield takeEvery("template/templatesRequest", templates)
  yield takeEvery("template/saveTemplateRequest", saveTemplate)
  yield takeEvery("template/deleteTemplateRequest", deleteTemplate)

  yield takeEvery("campain/campainsRequest", campains)
  yield takeEvery("campain/campainCustomersRequest", campainCustomers)
  yield takeEvery("campain/campainStatisticsRequest", campainStatistics)
  yield takeEvery("campain/sendCampainRequest", sendCampain)
}
