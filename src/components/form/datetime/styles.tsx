import styled from "styled-components"

export const Container: any = styled.div`
    width: 100%;
    padding-top: .3rem;

    .input-content {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid ${(props: any) => props.error ? 'var(--negative)' : 'var(--transparent-2)'};
        border-radius: 10px;
        overflow: hidden;

        input {
            border: 0;
            padding: .5rem 1rem;
            width: 100%;
            font-size: .8rem;
            background-color: var(--input-background);
            color: var(--transparent-6);
            color-scheme: ${(props: any) => props.theme || "light"};

            &:disabled {
                background-color: var(--transparent-2);
                color: var(--transparent-6);
                opacity: .7;
            }

            &:focus-visible {
                outline: none;
            }
        }
    }

    .input-error {
        color: var(--negative);
        font-size: .7rem;
    }
`;