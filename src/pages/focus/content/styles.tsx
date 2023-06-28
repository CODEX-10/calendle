import styled from "styled-components"

export const Container: any = styled.div`
    width: 100%;
    min-height: ${(props: any) => props.first ? `calc(3rem + ${props.headerSize}px + ${props.contentSize}px)` : `calc(1.9rem + ${props.headerSize}px)`};
    max-height: ${(props: any) => props.first ? `calc(3rem + ${props.headerSize}px + ${props.contentSize}px)` : `calc(1.9rem + ${props.headerSize}px)`};
    padding: 1rem;
    background: var(--transparent-05);
    border-radius: 10px;
    transition: ease .3s;
    margin-bottom: .5rem;
    color: var(--transparent-6);
    overflow: hidden;

    &:hover {
        min-height: ${(props: any) => `calc(3rem + ${props.headerSize}px + ${props.contentSize}px)`};
        max-height: ${(props: any) => `calc(3rem + ${props.headerSize}px + ${props.contentSize}px)`};
    }

    .scheduling-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;

        div {
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                font-size: 1.8rem;
                margin-right: 1rem;
            }

            label {
                font-weight: 600;
                font-size: .9rem;
                white-space: nowrap;
                overflow: hidden;

                @media(max-width: 650px) {
                    white-space: normal;
                }
            }
        }

        span {
            font-size: .75rem;
            background: var(--transparent-05);
            border-radius: 10px;
            padding: .5rem 1rem;

            @media(max-width: 650px) {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .scheduling-content {
        margin-top: 1rem;
        color: var(--transparent-6);
        background: var(--transparent-05);
        border-radius: 10px; 
        word-break: break-word;
        padding: .5rem 1rem;
        font-size: .9rem;

        span {
            font-weight: 600;
        }
    }
`;