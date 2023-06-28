import styled from 'styled-components'

export const Container: any = styled.div`
    height: 100vh;
    width: 24rem;
    border-right: 2px solid var(--transparent-05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    white-space: nowrap;

    @media(max-width: 650px) {
        width: 5rem;
    }

    header {
        padding: 2rem 2rem 2rem 2.5rem;
        display: flex;
        align-items: center;
        color: var(--transparent-6);

        @media(max-width: 650px) {
            padding: 2rem .5rem 2rem 1.3rem;
        }

        label {
            @media(max-width: 650px) {
                display: none;
            }
        }
    }

    nav {
        ul {
            list-style: none outside none;
            margin: 0;
            padding: 0;

            .nav-item {
                margin: .5rem 1.5rem;
                padding: .3rem .8rem;
                color: var(--transparent-6);
                font-size: .9rem;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                transition: ease .3s;
                border-radius: 3px;
                border-left: 5px solid transparent;

                @media(max-width: 650px) {
                    margin: .5rem;
                }

                &.target {
                    color: var(--secondary);
                    border-left: 5px solid var(--secondary);
                }

                &:hover {
                    color: var(--transparent-8);

                    &.target {
                        border-left: 5px solid var(--secondary);
                        color: var(--secondary);
                    }
                }

                div:first-child {
                    flex: .15;

                    @media(max-width: 650px) {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 5px;
                    }
                }

                div:nth-child(2) {
                    flex: .70;

                    @media(max-width: 650px) {
                        display: none;
                    }
                }

                div:nth-child(3) {
                    flex: .15;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    @media(max-width: 650px) {
                        display: none;
                    }
                }
            }
        }
    }

    footer {
        padding: 1rem;

        .profile {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            border-radius: 10px;
            background: var(--transparent-05);
            color: var(--transparent-6);

            @media(max-width: 650px) {
                padding: .5rem;
                justify-content: center;
            }

            .profile-content {
                display: flex;
                align-items: center;
                gap: 1rem;

                @media(max-width: 650px) {
                    display: none;
                }

                i {
                    font-size: 2rem;
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    label {
                        width: 9rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        &:first-child {
                            font-size: .8rem;
                            font-weight: 600;
                        }

                        &:last-child {
                            font-size: .6rem;
                        }
                    }
                }
            }

            i:last-child {
                cursor: pointer;
            }
        }
    }
`;