import React from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"

export default function Register(props: any) {
    const router = useRouter()

    return (
        <Container>
            <div className="content">
                <Logo color="var(--input-border)" />
                <div className="content-title">Fazer cadastro</div>
                <Form 
                    inputs={[
                        { label: "Nome completo", name: "name" },
                        { label: "E-mail", name: "email" },
                        { label: "Telefone", name: "phone" },
                        { label: "Senha", name: "password" },
                        { label: "Confirmar senha", name: "password_confirm" },
                    ]}
                    buttons={[
                        { label: "cadastrar" },
                        { 
                            label: "cancelar", 
                            transparent: true,
                            onClick: () => router.push("/auth/login")
                        },
                    ]}
                />
            </div>
        </Container>
    )
}