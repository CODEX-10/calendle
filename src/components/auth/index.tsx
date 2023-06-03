import { useEffect } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

import { authenticationSuccess } from "../../store/actions/auth"

export function Auth() {
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

    return (<></>)
}