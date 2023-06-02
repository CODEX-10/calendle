import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootActions from './actions'
import rootSaga from './sagas'

const saga = createSagaMiddleware()

export const store = configureStore({
  reducer: rootActions,
  middleware: [saga],
})

saga.run(rootSaga)
