import { createSlice } from "@reduxjs/toolkit"

export const session = createSlice({
  name: "session",

  initialState: {
    session: {},
    sessionQrCode: '',
    loadingSession: false,

    loadingRetrieveSession: true,

    loadingInitializeSession: false,

    loadingDisconnectSession: false,
  },

  reducers: {
    sessionRequest: (state) => { },
    sessionSuccess: (state, { payload }) => { return { ...state, session: payload } },
    setSessionQrCode: (state, { payload }) => { return { ...state, sessionQrCode: payload } },
    setLoadingSession: (state, { payload }) => { return { ...state, loadingSession: payload } },

    retrieveSessionRequest: (state) => { },
    setLoadingRetrieveSession: (state, { payload }) => { return { ...state, loadingRetrieveSession: payload } },

    initializeSessionRequest: (state) => { },
    setLoadingInitializeSession: (state, { payload }) => { return { ...state, loadingInitializeSession: payload } },

    disconnectSessionRequest: (state) => { },
    setLoadingDisconnectSession: (state, { payload }) => { return { ...state, loadingDisconnectSession: payload } },
  },
})

export const {
  sessionRequest,
  sessionSuccess,
  setSessionQrCode,
  setLoadingSession,

  retrieveSessionRequest,
  setLoadingRetrieveSession,

  initializeSessionRequest,
  setLoadingInitializeSession,

  disconnectSessionRequest,
  setLoadingDisconnectSession,
} = session.actions

export default session.reducer
