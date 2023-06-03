import React, { useRef } from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"
// import Refactoring from "../../../utils"
import * as Yup from "yup"

export default function Register(props: any) {
    const router = useRouter()
    const formRef: any = useRef({})

    // const phone = (value: string) => Refactoring.mask.phone(value)
    // const removePhone = (value: string) => Refactoring.removeMask.phone(value)

    async function onSubmit(data: any) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Campo obrigatório!'),
                email: Yup.string().email("E-mail inválido!").required('Campo obrigatório!'),
                phone: Yup.string().min(14, "Mínimo 10 dígitos").max(15, "Máximo 11 dígitos").required('Campo obrigatório!'),
                password: Yup.string().min(6, "Mínimo 6 caracteres").required('Campo obrigatório!'),
                password_confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Confirmação inválida!').required('Campo obrigatório!'),
            })

            await schema.validate(data, { abortEarly: false })

            formRef.current.setErrors({})

            // const body: any = {
            //     name: data.name,
            //     email: data.email,
            //     phone: removePhone(data.phone),
            //     password: data.password,
            // }

            router.push("/auth/login")
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
                    <div className="content-title">Fazer cadastro</div>
                    <Form
                        formRef={formRef}
                        onSubmit={onSubmit}
                        inputs={[
                            { label: "Nome completo", name: "name" },
                            { label: "E-mail", name: "email" },
                            { label: "Telefone", name: "phone" },
                            { label: "Senha", name: "password" },
                            { label: "Confirmar senha", name: "password_confirm" },
                        ]}
                        buttons={[
                            {
                                label: "cadastrar",
                                onClick: () => formRef.current.submitForm()
                            },
                            {
                                label: "cancelar",
                                transparent: true,
                                onClick: () => router.push("/auth/login")
                            },
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}