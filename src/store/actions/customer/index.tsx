import { createSlice } from "@reduxjs/toolkit"

export const customer = createSlice({
  name: "customer",

  initialState: {
    customers: [],
    loadingCustomers: true,

    customer: {},
    loadingCustomer: true,

    loadingSaveCustomer: false,
  },

  reducers: {
    customersRequest: (state, { payload }) => { },
    customersSuccess: (state, { payload }) => { return { ...state, customers: payload } },
    setLoadingCustomers: (state, { payload }) => { return { ...state, loadingCustomers: payload } },

    customerRequest: (state, { payload }) => { },
    customerSuccess: (state, { payload }) => { return { ...state, customer: payload } },
    setLoadingCustomer: (state, { payload }) => { return { ...state, loadingCustomer: payload } },

    saveCustomerRequest: (state, { payload }) => { },
    setLoadingSaveCustomer: (state, { payload }) => { return { ...state, loadingSaveCustomer: payload } },
  },
})

export const {
  customersRequest,
  customersSuccess,
  setLoadingCustomers,

  customerRequest,
  customerSuccess,
  setLoadingCustomer,

  saveCustomerRequest,
  setLoadingSaveCustomer,
} = customer.actions

export default customer.reducer
