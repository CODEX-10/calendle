import { call, put } from 'redux-saga/effects'
import { api } from '../../../services'
import _ from 'lodash'

import {
  setLoadingDeleteTemplate,
  setLoadingSaveTemplate,
  setLoadingTemplates,
  templatesRequest,
  templatesSuccess
} from '../../actions/template'

export function* templates({ payload: credentials }: any) {
  try {
    const { data } = yield call(api.get, 'template', { params: credentials })

    yield put(templatesSuccess(data))

    yield put(setLoadingTemplates(false))
  } catch (e) {
    yield put(setLoadingTemplates(false))
  }
}

export function* saveTemplate({ payload: body }: any) {
  try {
    yield put(setLoadingSaveTemplate(true))

    const body_template = { ...body }

    const { data } = yield call(api.post, 'template', _.omit(body_template, ['uuid', 'clear', 'file']), { params: { uuid: body.uuid } })

    if (body.type === 'IMAGE' && body.file && typeof body.file === 'object') {

      const file = new FormData()

      file.append('file', body.file)

      yield call(api.post, 'template/upload', file, {
        params: { uuid: data.uuid },
        headers: { 'Content-Type': 'multipart/form-data' }
      })
    }

    yield put(setLoadingSaveTemplate(false))

    body.clear()
  } catch (e) {
    yield put(setLoadingSaveTemplate(false))
  }
}

export function* deleteTemplate({ payload: uuid }: any) {
  try {
    yield put(setLoadingDeleteTemplate(true))

    yield call(api.delete, `template/${uuid}`)

    yield put(setLoadingDeleteTemplate(false))

    yield put(templatesRequest({
      offset: 0,
      order: { dhOperation: 'DESC' }
    }))
  } catch (e) {
    yield put(setLoadingDeleteTemplate(false))
  }
}
