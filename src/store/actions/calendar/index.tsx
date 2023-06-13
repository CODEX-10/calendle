import { createSlice } from "@reduxjs/toolkit"

export const calendar = createSlice({
  name: "calendar",

  initialState: {
    calendar: { content: [] },
    loadingCalendar: true,

    loadingSaveCalendar: false,
  },

  reducers: {
    calendarRequest: (state, { payload }) => { },
    calendarSuccess: (state, { payload }) => { return { ...state, calendar: payload } },
    setLoadingCalendar: (state, { payload }) => { return { ...state, loadingCalendar: payload } },

    saveCalendarRequest: (state, { payload }) => { },
    setLoadingSaveCalendar: (state, { payload }) => { return { ...state, loadingSaveCalendar: payload } },
  },
})

export const {
  calendarRequest,
  calendarSuccess,
  setLoadingCalendar,

  saveCalendarRequest,
  setLoadingSaveCalendar,
} = calendar.actions

export default calendar.reducer
