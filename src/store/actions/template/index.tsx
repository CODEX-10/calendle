import { createSlice } from "@reduxjs/toolkit"

export const template = createSlice({
  name: "template",

  initialState: {
    templates: { content: [] },
    loadingTemplates: true,

    loadingSaveTemplate: false,

    loadingDeleteTemplate: false,

    template: {},
  },

  reducers: {
    templatesRequest: (state, { payload }) => { },
    templatesSuccess: (state, { payload }) => { return { ...state, templates: payload } },
    setLoadingTemplates: (state, { payload }) => { return { ...state, loadingTemplates: payload } },

    saveTemplateRequest: (state, { payload }) => { },
    setLoadingSaveTemplate: (state, { payload }) => { return { ...state, loadingSaveTemplate: payload } },

    deleteTemplateRequest: (state, { payload }) => { },
    setLoadingDeleteTemplate: (state, { payload }) => { return { ...state, loadingDeleteTemplate: payload } },

    setTemplate: (state, { payload }) => { return { ...state, template: payload } }
  },
})

export const {
  templatesRequest,
  templatesSuccess,
  setLoadingTemplates,

  saveTemplateRequest,
  setLoadingSaveTemplate,

  deleteTemplateRequest,
  setLoadingDeleteTemplate,

  setTemplate,
} = template.actions

export default template.reducer
