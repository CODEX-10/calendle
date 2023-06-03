import React from 'react'
import { Container } from './styles'
import { Menu } from '../components'
import dynamic from 'next/dynamic'

const Header = dynamic(() => { return import("../components/header") }, { ssr: false })

export default function MainContainer(props: any) {
    return (
        <Container>
            <Menu />
            <div className='main-container'>
                <Header />
                {props.children}
            </div>
        </Container>
    )
}