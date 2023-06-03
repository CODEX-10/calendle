import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;

    .content {
        border: 1px solid var(--transparent);
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 25rem;
        box-shadow: 0 0 20px -10px rgb(0, 0, 0, 0.3);
        margin-top: 2rem;

        .content-title {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 1rem;
            color: var(--label-hover);
        }

        .content-register {
            font-size: .8rem;
            color: var(--label);
            margin-top: 1.5rem;

            span {
                color: var(--secondary);
                font-weight: 500;
                margin-left: .3rem;
                cursor: pointer;
            }
        }
    }
`;