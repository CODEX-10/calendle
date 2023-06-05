import React from "react"
import { Container } from "./styles"
import { useTheme } from "../../contexts/theme"

const ROUTE_BLOCK_HEADER = {}

export default function Header(props: any) {

  const { theme, setTheme } = useTheme()

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