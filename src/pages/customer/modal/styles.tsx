import styled from "styled-components"

export const Container = styled.div`
    min-width: 25rem;

    @media(max-width: 757px) {
        min-width: 100%;
    }

    .header {
        background: var(--tertiary);
        border-radius: 10px 10px 0 0;
        height: 5rem;
    }

    .body {
        padding: 1rem 2rem;
    }
`;