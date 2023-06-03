import React, { useRef, useEffect } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"

import { authenticationRequest } from "../../../store/actions/auth"

export default function Login(props: any) {
    const dispatch = useDispatch()
    const router = useRouter()
    const formRef: any = useRef({})

    const { loadingAuthentication } = useSelector((state: any) => state.auth)

    async function onSubmit(data: any) {
        try {
            const schema = Yup.object().shape({
                user: Yup.string().required('Campo obrigatório!'),
                password: Yup.string().min(6, "Mínimo 6 caracteres").required('Campo obrigatório!'),
            })

            await schema.validate(data, { abortEarly: false })

            formRef.current.setErrors({})

            const body: any = {
                user: data.user,
                password: data.password,
            }

            dispatch(authenticationRequest(body))
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {}

                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message
                })

                formRef.current.setErrors(errorMessages)
            }
        }
    }

    return (
        <Container>
            <div>
                <Logo color="var(--input-border)" />
                <div className="content">
                    <div className="content-title">Fazer login</div>
                    <Form
                        formRef={formRef}
                        onSubmit={onSubmit}
                        inputs={[
                            { label: "E-mail ou telefone", name: "user" },
                            { label: "Senha", name: "password", type: "password" },
                        ]}
                        buttons={[{
                            label: "entrar",
                            loading: loadingAuthentication,
                            onClick: () => formRef.current.submitForm()
                        }]}
                    />
                    <div className="content-register">
                        Não possui conta ainda?
                        <span onClick={() => router.push("/auth/register")}>cadastre-se</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}