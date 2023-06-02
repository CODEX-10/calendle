import React from "react"
import { Container } from "./styles"

export function Logo(props: any) {
  return (
    <Container { ...props }>
      <i className="fa-regular fa-calendar" />Calendle
    </Container>
  )
}