import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<any>({})

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("")

    const toggle = (theme: string) => {
        if (!theme) return

        const themeContent = {
            light: () => {
                document.body.style.setProperty("--primary", "#fff")
                document.body.style.setProperty("--secondary", "#5869da")
                document.body.style.setProperty("--tertiary", "rgb(98, 157, 253, 0.2)")
                document.body.style.setProperty("--transparent-6", "rgb(0, 0, 0, 0.6)")
                document.body.style.setProperty("--transparent-8", "rgb(0, 0, 0, 0.8)")
                document.body.style.setProperty("--transparent-05", "rgb(0, 0, 0, 0.05)")
                document.body.style.setProperty("--transparent-4-revert", "rgb(255, 255, 255, 0.4)")
                document.body.style.setProperty("--transparent-2", "rgb(0, 0, 0, 0.2)")
                document.body.style.setProperty("--input-background", "#fff")
                document.body.style.setProperty("--positive", "#65c965")
                document.body.style.setProperty("--negative", "#FF334E")
            },
            dark: () => {
                document.body.style.setProperty("--primary", "#333")
                document.body.style.setProperty("--secondary", "#5869da")
                document.body.style.setProperty("--tertiary", "rgb(98, 157, 253, 0.2)")
                document.body.style.setProperty("--transparent-6", "rgb(255, 255, 255, 0.6)")
                document.body.style.setProperty("--transparent-8", "rgb(255, 255, 255, 0.8)")
                document.body.style.setProperty("--transparent-05", "rgb(255, 255, 255, 0.05)")
                document.body.style.setProperty("--transparent-4-revert", "rgb(0, 0, 0, 0.2)")
                document.body.style.setProperty("--transparent-2", "rgb(255, 255, 255, 0.2)")
                document.body.style.setProperty("--input-background", "transparent")
                document.body.style.setProperty("--positive", "#65c965")
                document.body.style.setProperty("--negative", "#FF334E")
            }
        }

        return themeContent[theme]()
    }

    useEffect(() => {
        if (!theme) return setTheme(localStorage.getItem("@Calendle:theme"))

        toggle(theme)
        localStorage.setItem("@Calendle:theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)

export { ThemeProvider, useTheme }
