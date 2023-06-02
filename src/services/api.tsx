import axios from "axios"

export const api = axios.create({
    baseURL: process.env.API_HOST || "http://localhost:3010/v1/api"
})
