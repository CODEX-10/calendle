import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

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

        .content-title {
            font-size: 1.1rem;
            font-weight: 500;
            margin: 1rem;
            color: var(--label-hover);
        }
    }
`;