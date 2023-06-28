import React from 'react'
import { Container } from './styles'
import { useRouter } from 'next/router'
import { Logo } from '../logo'
import Link from 'next/link'
import _ from 'lodash'

export function Menu(props: any) {

    const { route } = useRouter()

    const navigation = [
        { icon: 'fa-solid fa-bullseye', label: 'Foco', route: '/focus' },
        { icon: 'fa-solid fa-calendar-week', label: 'Agendamentos', route: '/calendar' },
        { icon: 'fa-solid fa-users', label: 'Meus clientes', route: '/customer' },
    ]

    return (
        <Container>
            <div>
                <header>
                    <Logo size="2rem" />
                </header>
                <nav>
                    <ul>
                        {_.map(navigation, (data, index) =>
                            <li key={index}>
                                <Link href={data.route}>
                                    <div className={`nav-item ${_.includes(route, data.route) ? 'target' : ''}`}>
                                        <div>
                                            <i className={data.icon} />
                                        </div>
                                        <div>
                                            {data.label}
                                        </div>
                                        {_.includes(route, data.route) &&
                                            <div>
                                                <i className="fa-solid fa-angle-right" />
                                            </div>}
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <footer>
                <div className='profile'>
                    <i className='fa-solid fa-circle-user' />
                    <div>

                    </div>
                </div>
            </footer>
        </Container>
    )
}