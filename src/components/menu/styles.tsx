import styled from 'styled-components'

export const Container: any = styled.div`
    height: 100vh;
    width: 24rem;
    border-right: 2px solid var(--transparent);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;

    header {
        padding: 2rem 2rem 2rem 2.5rem;
        display: flex;
        align-items: center;
        color: var(--label);

        .logo {
            font-size: 2.3rem;
            flex: .2;
        }

        .logo-label {
            flex: .8;

            p {
                margin: 0;
            }

            p:first-child {
                font-size: .9rem;
                font-weight: 600;
            }

            p:last-child {
                font-size: .8rem;
                font-weight: 400;
            }
        }
    }

    nav {
        ul {
            list-style: none outside none;
            margin: 0;
            padding: 0;

            .nav-item {
                margin-right: 2rem;
                padding: .5rem 1rem .5rem 2.5rem;
                color: var(--label);
                font-size: .9rem;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                transition: ease .3s;
                border-radius: 0 2rem 2rem 0;

                &.target {
                    background: var(--tertiary);
                    color: var(--secondary);
                }

                &:hover {
                    color: var(--label-hover);

                    &.target {
                        background: var(--tertiary);
                        color: var(--secondary);
                    }
                }

                div:first-child {
                    flex: .15;
                }

                div:last-child {
                    flex: .85;
                }
            }
        }
    }
`;