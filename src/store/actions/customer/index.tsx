import { createSlice } from "@reduxjs/toolkit"

export const customer = createSlice({
  name: "customer",

  initialState: {
    customers: { content: [] },
    loadingCustomers: true,

    loadingSaveCustomer: false,
  },

  reducers: {
    customersRequest: (state, { payload }) => { },
    customersSuccess: (state, { payload }) => { return { ...state, customers: payload } },
    setLoadingCustomers: (state, { payload }) => { return { ...state, loadingCustomers: payload } },

    saveCustomerRequest: (state, { payload }) => { },
    setLoadingSaveCustomer: (state, { payload }) => { return { ...state, loadingSaveCustomer: payload } },
  },
})

export const {
  customersRequest,
  customersSuccess,
  setLoadingCustomers,

  saveCustomerRequest,
  setLoadingSaveCustomer,
} = customer.actions

export default customer.reducer
