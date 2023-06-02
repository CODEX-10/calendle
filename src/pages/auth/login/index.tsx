import React from "react"
import { Container } from "./styles"
import { Form, Logo } from "../../../components"
import { useRouter } from "next/router"

export default function Login(props: any) {
    const router = useRouter()

    return (
        <Container>
            <div className="content">
                <Logo color="var(--input-border)" />
                <div className="content-title">Fazer login</div>
                <Form 
                    inputs={[
                        { label: "E-mail ou telefone", name: "user" },
                        { label: "Senha", name: "password" },
                    ]}
                    buttons={[{
                        label: "entrar"
                    }]}
                />
                <div className="content-register">
                    Não possui conta ainda? 
                    <span onClick={() => router.push("/auth/register")}>cadastre-se</span>
                </div>
            </div>
        </Container>
    )
}