import React from "react"
import { Container } from "./styles"

export function Badge(props: any) {

  const status: any = {
    ENVIADO: 'var(--positive)',
    ENTREGUE: 'var(--positive)',
    ABERTO: 'var(--positive)',
    FALHA: 'var(--negative)',
  }

  return (
    <Container color={status[props.value]}>
      <div>{props.value}</div>
    </Container>
  )
}