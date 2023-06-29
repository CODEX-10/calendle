import { createSlice } from "@reduxjs/toolkit"

export const auth = createSlice({
  name: "auth",

  initialState: {
    token: "",
    user: {},
    loadingAuthentication: false,

    loadingResgister: false,
  },

  reducers: {
    authenticationRequest: (state, { payload }) => { },
    authenticationSuccess: (state, { payload }) => { return { ...state, token: payload } },
    setUser: (state, { payload }) => { return { ...state, user: payload } },
    setLoadingAuthentication: (state, { payload }) => { return { ...state, loadingAuthentication: payload } },

    registerRequest: (state, { payload }) => { },
    setLoadingRegister: (state, { payload }) => { return { ...state, loadingResgister: payload } },
  },
})

export const {
  authenticationRequest,
  authenticationSuccess,
  setUser,
  setLoadingAuthentication,

  registerRequest,
  setLoadingRegister,
} = auth.actions

export default auth.reducer
