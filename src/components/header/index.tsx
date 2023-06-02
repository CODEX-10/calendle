import React, { useEffect, useState } from "react"
import { Container } from "./styles"
import Refactoring from "../../utils"

const ROUTE_BLOCK_HEADER = {}

export default function Header(props: any) {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    Refactoring.theme.toggle(theme)
  }, [theme])

  return !ROUTE_BLOCK_HEADER[window.location.pathname] && (
    <Container {...props} theme={theme}>
      <div
        className='theme-toggle'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <div className='toggle'>
          <div />
        </div>
      </div>
    </Container>
  )
}