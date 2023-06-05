import React, { createContext, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { authenticationSuccess } from '../store/actions/auth'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()

    const { token } = useSelector((state: any) => state.auth)

    useEffect(() => {
        const tokenStorage = localStorage.getItem("@Calendle:token")

        if (!tokenStorage) {
            router.push("/auth/login")
            return
        }

        if (!token) dispatch(authenticationSuccess(tokenStorage))

        router.push("/home")
    }, [token])

    const logout = () => {
        localStorage.removeItem("@Calendle:token")
        dispatch(authenticationSuccess(""))
        router.push("/auth/login")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, token, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)