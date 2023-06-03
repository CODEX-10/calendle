import { createSlice } from "@reduxjs/toolkit"

export const auth = createSlice({
  name: "auth",

  initialState: {
    token: "",
    loadingAuthentication: false,
  },

  reducers: {
    authenticationRequest: (state, { payload }) => { },
    authenticationSuccess: (state, { payload }) => { return { ...state, token: payload } },
    setLoadingAuthentication: (state, { payload }) => { return { ...state, loadingAuthentication: payload } },
  },
})

export const {
  authenticationRequest,
  authenticationSuccess,
  setLoadingAuthentication,
} = auth.actions

export default auth.reducer
