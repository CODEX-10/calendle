import styled from "styled-components"

export const Container: any = styled.div`
    padding: 0 2rem 1.5rem;

    .focus-title {
        color: var(--transparent-6);
        font-size: 1.3rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .focus-content {
        position: ${(props: any) => props.loading ? "fixed" : "relative"};
        opacity: ${(props: any) => props.loading ? "0" : "1"};
        z-index: ${(props: any) => props.loading ? "-999" : "0"};

        .focus-empty {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--transparent-6);
            background: var(--transparent-05);
            border-radius: 10px;
            padding: 4rem 2rem;

            @media(max-width: 650px) {
                padding: 2rem;
            }

            i {
                font-size: 4rem;

                @media(max-width: 650px) {
                    font-size: 2rem;
                }
            }

            label {
                font-weight: 600;
                text-align: center;
                margin-top: 1rem;

                @media(max-width: 650px) {
                    font-size: .9rem;
                }
            }
        }
    }
`;