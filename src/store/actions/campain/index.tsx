import { createSlice } from "@reduxjs/toolkit"

export const campain = createSlice({
  name: "campain",

  initialState: {
    campains: { content: [] },
    loadingCampains: true,

    campainCustomers: { content: [] },
    loadingCampainCustomers: true,

    campainStatistics: { content: [] },
    loadingCampainStatistics: true,

    campainContent: {},

    loadingSendCampain: false,
    campainProcess: {},
  },

  reducers: {
    campainsRequest: (state, { payload }) => { },
    campainsSuccess: (state, { payload }) => { return { ...state, campains: payload } },
    setLoadingCampains: (state, { payload }) => { return { ...state, loadingCampains: payload } },

    campainCustomersRequest: (state, { payload }) => { },
    campainCustomersSuccess: (state, { payload }) => { return { ...state, campainCustomers: payload } },
    setLoadingCampainCustomers: (state, { payload }) => { return { ...state, loadingCampainCustomers: payload } },

    campainStatisticsRequest: (state, { payload }) => { },
    campainStatisticsSuccess: (state, { payload }) => { return { ...state, campainStatistics: payload } },
    setLoadingCampainStatistics: (state, { payload }) => { return { ...state, loadingCampainStatistics: payload } },

    setCampainContent: (state, { payload }) => { return { ...state, campainContent: payload } },

    sendCampainRequest: (state, { payload }) => { },
    setLoadingSendCampain: (state, { payload }) => { return { ...state, loadingSendCampain: payload } },
    setCampainProcess: (state, { payload }) => { return { ...state, campainProcess: payload } },
  },
})

export const {
  campainsRequest,
  campainsSuccess,
  setLoadingCampains,

  campainCustomersRequest,
  campainCustomersSuccess,
  setLoadingCampainCustomers,

  campainStatisticsRequest,
  campainStatisticsSuccess,
  setLoadingCampainStatistics,

  setCampainContent,

  sendCampainRequest,
  setLoadingSendCampain,
  setCampainProcess,
} = campain.actions

export default campain.reducer
